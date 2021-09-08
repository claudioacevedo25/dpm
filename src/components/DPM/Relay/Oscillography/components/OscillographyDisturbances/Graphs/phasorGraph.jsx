import React, { useRef, useEffect, useState } from 'react'
import './phasorGraph.css'
import { Button } from '@material-ui/core'
import * as d3 from 'd3'

const PhasorGraph = (props) => {
  const svgRef = useRef()
  const localSize = { width: props.width, height: props.width }
  const [zoomState, setzoomState] = useState({zoom:1, offset:{x:0,y:0}})
  const [filteredVectorData, setfilteredVectorData] = useState([{amp:48, angle:92, color:'cyan', id:'TestVector'}])

  //Render Funcition
  function renderSvg() {
    let svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()
    d3.select('body').selectAll('#tooltip').remove()
    //SVG properties declarations
    let margin = { top: 25 + zoomState.offset.y, bot: 25, left: 25 + zoomState.offset.x, right: 25 }
    let width = localSize.width
    let height = localSize.height
    let totalWidth = width - margin.left - margin.right + zoomState.offset.x
    let totalHeight = height - margin.top - margin.bot + zoomState.offset.y
    svg.attr('width', localSize.width).attr("height", localSize.height)



    //Tooltip declaration
    const tooltip = d3.select('body')
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0)
      .text("tooltip");
    //Tooltip methods declaration


    const mouseOver = (e, d) => {

      tooltip
        .style("opacity", 0.8)
        .style('background-color', 'gray')
        .style('position', 'absolute')
        .style('left', (e.screenX) + 'px')
        .style('top', (e.screenY - 60) + 'px')
        .style('border-radius', "3px")
        .attr("id", "tooltip")
        .html('<b>'+d.id+'</b><br>'+'Amplitud: ' + d.amp + " <br>" + 'Fase:   ' + d.angle + '°')
    }

    const mouseOut = () => {
      tooltip.style("opacity", 0)
      .style('left', 0 + 'px')
      .style('top', 0 + 'px')
    }
    //Scales
    let xAxisScale = d3.scaleLinear()
      .domain([180, 0])
      .range([0, totalWidth * zoomState.zoom])

    let yAxisScale = d3.scaleLinear()
      .domain([90, 270])
      .range([0, totalHeight * zoomState.zoom]);
    
    let max = d3.max(filteredVectorData, (d)=>{ return d.amp})
    if(!max){
      max = 20
    }
    let ampAxisScale = d3.scaleLinear()
      .domain([0, max])
      .range([0, (totalWidth / 2) * zoomState.zoom]);

    //Check if we Are recieving the data

    //Build the x-Axis
    const xAxis = d3.axisBottom()
      .scale(xAxisScale)
      .tickValues([180, 0])
      .tickFormat((d,i)=>{
        return d + "°"
      })
      
    //Append the x-Axis
    svg.append("g").attr("transform", `translate(${margin.left + (totalWidth/2 * ((zoomState.zoom - 1) * (-1)))},${totalHeight / 2 + margin.top})`)
      .attr("id", "x-axis")
      .call(xAxis)
    //Build the y-Axis
    const yAxis = d3.axisLeft()
      .scale(yAxisScale)
      .tickValues([90, 270])
      .tickFormat((d,i)=>{
        return d + "°"
      })
    //Append the y-Axis
    svg.append('g').attr('id', "y-axis")
      .attr("transform", "translate(" + ((margin.left + totalWidth / 2)) + ","+(margin.top + (totalHeight/2 * ((zoomState.zoom - 1) * (-1))))+")")
      .call(yAxis)

    //Build the amp-Axis
    const ampAxis = d3.axisBottom()
      .scale(ampAxisScale)
      .tickValues([0, Math.ceil(max/4), Math.ceil(max/2), Math.ceil((max*(3/4))), Math.ceil(max)]).tickPadding(5)
    //Append the amp-Axis
    svg.append('g').attr('id', "amp-axis")
      .attr("transform", `translate(${margin.left + totalWidth / 2} ${totalHeight / 2 + margin.top}) rotate(-45)`)
      .call(ampAxis)

    svg.append('circle')
      .attr('cx', margin.left + totalWidth / 2)
      .attr('cy', totalHeight / 2 + margin.top)
      .attr('r', ampAxisScale(max))
      .attr('stroke', 'white')
      .style('opacity', 0.4)
      .attr('fill', 'transparent');

    svg.append('circle')
      .attr('cx', (margin.left + totalWidth / 2))
      .attr('cy', totalHeight / 2 + margin.top)
      .attr('r', ampAxisScale(Math.ceil(max/2)))
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('opacity', 0.4)

    svg.append('circle')
      .attr('cx', margin.left + totalWidth / 2)
      .attr('cy', totalHeight / 2 + margin.top)
      .attr('r', ampAxisScale(Math.ceil(max/4)) )
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('opacity', 0.4)

    svg.append('circle')
      .attr('cx', margin.left + totalWidth / 2)
      .attr('cy', totalHeight / 2 + margin.top)
      .attr('r', ampAxisScale(Math.ceil((max*(3/4)))))
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('opacity', 0.4)


    //Se agregan los vectores
    svg.append("g").selectAll('line')
      .data(filteredVectorData)
      .enter()
      .append('line')
      .attr('class', 'vector__line')
      .attr('stroke', (d) => { return d.color })
      .attr("stroke-width", 2)
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 0)
      .attr('y2', (d) => ampAxisScale(d.amp))
      .attr('id', (d, i)=>{return 'vector-' + i})
      .attr("transform", (d) => `translate(${margin.left + totalWidth / 2} ${totalHeight / 2 + margin.top}) rotate(${-90 + (d.angle * (-1))})`)
      .on('mousemove', (e, d) => {
        mouseOver(e, d)
      }).on('mouseout', d => { mouseOut() })

  }
  useEffect(() => {
        renderSvg()
  }, [props, filteredVectorData, zoomState])
  return (
    <div className='phasor_graph_container'>
      <svg ref={svgRef} className='svg_graph'></svg>
      <div className='zoom_controls_container'>

      <Button className={'zoom_plus zoom_control'} onClick={()=>{setzoomState({...zoomState, zoom: zoomState.zoom + 0.5})}}>+</Button>
      <Button className={'zoom_minus zoom_control'} onClick={()=>{setzoomState({...zoomState, zoom: zoomState.zoom - 0.5})}}>-</Button>
      <Button className={'zoom_leftarr zoom_control'} onClick={()=>{setzoomState({...zoomState, offset:{...zoomState.offset, x: zoomState.offset.x + 15}})}}>{'\<'}</Button>
      <Button className={'zoom_rightarr zoom_control'} onClick={()=>{setzoomState({...zoomState, offset:{...zoomState.offset, x: zoomState.offset.x - 15}})}}>{'\>'}</Button>
      <Button className={'zoom_uparr zoom_control'} onClick={()=>{setzoomState({...zoomState, offset:{...zoomState.offset, y: zoomState.offset.y + 15}})}}>{'\<'}</Button>
      <Button className={'zoom_downarr zoom_control'} onClick={()=>{setzoomState({...zoomState, offset:{...zoomState.offset, y: zoomState.offset.y - 15}})}}>{'\>'}</Button>
      </div>
    </div>
  )
}

export default PhasorGraph

