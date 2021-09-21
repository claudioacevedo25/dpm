import React, { useRef, useEffect, useState } from 'react'
import './phasorGraph.css'
import { Button } from '@material-ui/core'
import * as d3 from 'd3'

const PhasorGraph = (props) => {
  const svgRef = useRef()
  const localSize = { width: props.width, height: props.width }
  const [zoomState, setzoomState] = useState({ zoom: 1, offset: { x: 0, y: 0 } })

  //Render Funcition
  function renderSvg() {
    let svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()
    d3.select('body').selectAll('#tooltip').remove()
    //SVG properties declarations
    let margin = { top: 33 + zoomState.offset.y, bot: 33, left: 33 + zoomState.offset.x, right: 33 }
    let width = localSize.width
    let height = localSize.height
    let totalWidth = width - margin.left - margin.right + zoomState.offset.x
    let totalHeight = height - margin.top - margin.bot + zoomState.offset.y
    let expanded = props.width !== 320 ? true : false
    svg.attr('width', localSize.width).attr("height", localSize.height)



    //Tooltip declaration
    const tooltip = d3.select('body')
      .append("div")
      .attr("id", "tooltip")
      .style("opacity", 0)
      .text("tooltip");
      
    tooltip.style('left', 0 + 'px')
    .style('top', 0 + 'px').style('position', 'absolute')   //Tooltip methods declaration


    const mouseOver = (e, d) => {

      tooltip
        .style("opacity", 0.8)
        .style('background-color', 'gray')
        .style('position', 'absolute')
        .style('left', (e.screenX) + 'px')
        .style('top', (e.screenY - 60) + 'px')
        .style('border-radius', "3px")
        .attr("id", "tooltip")
        .html('<b>' + d.id + '</b><br>' + 'Amplitud: ' + d.amp + " <br>" + 'Fase:   ' + d.angle + '°')
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
    let xAxisScale2 = d3.scaleLinear()
      .domain([180, 0])
      .range([-15, (totalWidth * zoomState.zoom) + 15])

    let yAxisScale = d3.scaleLinear()
      .domain([90, 270])
      .range([0, totalHeight * zoomState.zoom]);

    let yAxisScale2 = d3.scaleLinear()
      .domain([90, 270])
      .range([-10, (totalHeight * zoomState.zoom) + 10]);

    let diagYAxisScale = d3.scaleLinear()
      .domain([135, 315])
      .range([0, totalWidth * zoomState.zoom]);

    let diagYAxisScale2 = d3.scaleLinear()
      .domain([135, 315])
      .range([-15, totalWidth * zoomState.zoom + 15]);

    let diagXAxisScale = d3.scaleLinear()
      .domain([225, 45])
      .range([!expanded ? (-1- zoomState.zoom ) : 0, totalWidth * zoomState.zoom +(!expanded ? (-1- zoomState.zoom ): 0)]);

    let diagXAxisScale2 = d3.scaleLinear()
      .domain([225, 45])
      .range([-15, totalWidth * zoomState.zoom + 15]);


    let max = d3.max(props.vectorData, (d) => { return d.amp })
    if (!max) {
      max = 20
    }
    let ampAxisScale = d3.scaleLinear()
      .domain([0, max])
      .range([0, (totalWidth / 2) * zoomState.zoom]);

    //Check if we Are recieving the data

    //Build the x-Axis
    const xAxis = d3.axisBottom()
      .scale(xAxisScale)
      .tickValues([])
      .tickFormat((d, i) => {
        return d + "°"
      })

    const xAxis2 = d3.axisBottom()
      .scale(xAxisScale2)
      .tickValues([0, 180])
      .tickFormat((d, i) => {
        return d + "°"
      })


    //Append the x-Axis
    const xAxisGroup = svg.append("g").attr("transform", `translate(${margin.left + (totalWidth / 2 * ((zoomState.zoom - 1) * (-1)))},${totalHeight / 2 + margin.top})`)
      .attr("id", "x-axis")
      .call(xAxis)
    xAxisGroup.select('.tick').select('text').attr('text-anchor', 'start')
    xAxisGroup.selectAll('path').style('opacity', 0.7)

    const xAxis2Group = svg.append("g").attr("transform", `translate(${margin.left + (totalWidth / 2 * ((zoomState.zoom - 1) * (-1)))},${totalHeight / 2 + margin.top})`)
      .attr("id", "x-axis")
      .call(xAxis2)
    xAxis2Group.selectAll('line').remove()
    xAxis2Group.select('path').remove()



    //Build the y-Axis
    const yAxis = d3.axisLeft()
      .scale(yAxisScale)
      .tickValues([90, 270])
      .tickFormat((d, i) => {
        return d + "°"
      })
    //Append the y-Axis
    const yAxisGroup = svg.append('g').attr('id', "y-axis")
      .attr("transform", "translate(" + ((margin.left + totalWidth / 2)) + "," + (margin.top + (totalHeight / 2 * ((zoomState.zoom - 1) * (-1)))) + ")")
      .call(yAxis)
    yAxisGroup.selectAll('.tick').remove()
    yAxisGroup.selectAll('path').style('opacity', 0.7)


    //Build the y-Axis2
    const yAxis2 = d3.axisLeft()
      .scale(yAxisScale2)
      .tickValues([90, 270])
      .tickFormat((d, i) => {
        return d + "°"
      })
    //Append the y-Axis2
    const yAxis2Group = svg.append('g').attr('id', "y-axis")
      .attr("transform", "translate(" + ((margin.left + totalWidth / 2)) + "," + (margin.top + (totalHeight / 2 * ((zoomState.zoom - 1) * (-1)))) + ")")
      .call(yAxis2)
    yAxis2Group.selectAll('line').remove()
    yAxis2Group.select('path').remove()


    //Build the amp-Axis
    const ampAxis = d3.axisBottom()
      .scale(ampAxisScale)
      .tickValues([0, Math.ceil(max / 4), Math.ceil(max / 2), Math.ceil((max * (3 / 4))), Math.ceil(max)]).tickPadding(5)


    //Append the amp-Axis
    const ampAxisGroup = svg.append('g').attr('id', "amp-axis")
      .attr("transform", `translate(${margin.left + totalWidth / 2} ${totalHeight / 2 + margin.top}) rotate(-45)`)
      .call(ampAxis)

    ampAxisGroup.select('path').remove()

    const diagpointX1 = ((margin.left + totalWidth / 2) - ampAxisScale(max * (3 / 4)) + 4.5 * zoomState.zoom)
    const diagpointX2 = ((margin.left + totalWidth / 2) - ampAxisScale(max * (3 / 4)) + (expanded ? 3 : 7) * zoomState.zoom)
    const diagpointY1 = ((margin.top + totalHeight / 2) - ampAxisScale(max * (3 / 4)) + 4.5 * zoomState.zoom)
    const diagpointY2 = (totalHeight / 2 + margin.top + Math.sqrt((Math.pow(ampAxisScale(max), 2) - Math.pow(ampAxisScale(max * (3 / 4)), 2))) + 4.5 * zoomState.zoom)

    const yDiagAxis = d3.axisBottom()
      .scale(diagYAxisScale)
      .tickValues([135, 315])
      .tickFormat((d, i) => {
        return d + "°"
      })

    //Append the y-diagAxis
    const yDiagAxisGroup = svg.append("g")
      .attr("transform", "translate(" + diagpointX1 + "," + diagpointY1 + ") rotate(45)")
      .attr("id", "xDiag-axis")
      .call(yDiagAxis)

    yDiagAxisGroup.selectAll('.tick').remove()
    yDiagAxisGroup.selectAll('path').style('opacity', 0.7)
    //build the yDiagAxis2
    const yDiagAxis2 = d3.axisBottom()
      .scale(diagYAxisScale2)
      .tickValues([135, 315])
      .tickFormat((d, i) => {
        return d + "°"
      })

    //Append the y-diagAxis2
    const yDiagAxisGroup2 = svg.append("g")
      .attr("transform", "translate(" + diagpointX1 + "," + (diagpointY1 - 10) + ") rotate(45)")
      .attr("id", "xDiag-axis")
      .call(yDiagAxis2)

    yDiagAxisGroup2.selectAll('path').remove()
    yDiagAxisGroup2.selectAll('text').attr('transform', 'rotate(-45)')
    yDiagAxisGroup2.selectAll('line').remove()

    //Build the x-diagAxis
    const xDiagAxis = d3.axisBottom()
      .scale(diagXAxisScale)
      .tickValues([225, 45])
      .tickFormat((d, i) => {
        return d + "°"
      })


    //Append the x-diagAxis
    const xDiagAxisGroup = svg.append("g")
      .attr("transform", "translate(" + diagpointX2 + "," + diagpointY2 + ") rotate(-45)")
      .attr("id", "xDiag-axis")
      .call(xDiagAxis)

    xDiagAxisGroup.selectAll('.tick').remove()
    xDiagAxisGroup.selectAll('path').style('opacity', 0.7)
    //Build the x-diagAxis2
    const xDiagAxis2 = d3.axisBottom()
      .scale(diagXAxisScale2)
      .tickValues([225, 45])
      .tickFormat((d, i) => {
        return d + "°"
      })

    //Append the x-diagAxis2
    const xDiagAxisGroup2 = svg.append("g")
      .attr("transform", "translate(" + diagpointX2 + "," + (diagpointY2 - 10) + ") rotate(-45)")
      .attr("id", "xDiag-axis")
      .call(xDiagAxis2)

    xDiagAxisGroup2.selectAll('path').remove()
    xDiagAxisGroup2.selectAll('text').attr('transform', 'rotate(45)')
    xDiagAxisGroup2.selectAll('line').remove()


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
      .attr('r', ampAxisScale(Math.ceil(max / 2)))
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('opacity', 0.4)

    svg.append('circle')
      .attr('cx', margin.left + totalWidth / 2)
      .attr('cy', totalHeight / 2 + margin.top)
      .attr('r', ampAxisScale(Math.ceil(max / 4)))
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('opacity', 0.4)

    svg.append('circle')
      .attr('cx', margin.left + totalWidth / 2)
      .attr('cy', totalHeight / 2 + margin.top)
      .attr('r', ampAxisScale(Math.ceil((max * (3 / 4)))))
      .attr('stroke', 'white')
      .attr('fill', 'transparent')
      .style('opacity', 0.4)


    //Se agregan los vectores
    svg.append("g").selectAll('line')
      .data(props.vectorData)
      .enter()
      .append('line')
      .attr('class', 'vector__line')
      .attr('stroke', (d) => { return d.color })
      .attr("stroke-width", 2)
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 0)
      .attr('y2', (d) => ampAxisScale(d.amp))
      .attr('id', (d, i) => { return 'vector-' + i })
      .attr("transform", (d) => `translate(${margin.left + totalWidth / 2} ${totalHeight / 2 + margin.top}) rotate(${-90 + (d.angle * (-1))})`)
      .on('mousemove', (e, d) => {
        mouseOver(e, d)
      }).on('mouseout', d => { mouseOut() })

  }
  useEffect(() => {

    renderSvg()
  }, [props, zoomState])
  return (
    <div className='phasor_graph_container'>
      <svg ref={svgRef} className='svg_graph'></svg>
      <div className='zoom_controls_container'>
      <div className='zoom_controls_group_one'>
      <Button className={'zoom_plus zoom_control'} onClick={() => { setzoomState({ ...zoomState, zoom: zoomState.zoom + 0.5 }) }}>+</Button>
      <Button className={'zoom_minus zoom_control'} onClick={() => { setzoomState({ ...zoomState, zoom: zoomState.zoom - 0.5 }) }}>-</Button>
      </div>
      <div className={'zoom_controls_group_two'}>
      <Button className={'zoom_leftarr zoom_control'} onClick={() => { setzoomState({ ...zoomState, offset: { ...zoomState.offset, x: zoomState.offset.x + 15 } }) }}>{'\<'}</Button>
      <div className={'zoom_controls_up_down'}>
      <Button className={'zoom_uparr zoom_control'} onClick={() => { setzoomState({ ...zoomState, offset: { ...zoomState.offset, y: zoomState.offset.y + 15 } }) }}>{'\<'}</Button>
      <Button className={'zoom_downarr zoom_control'} onClick={() => { setzoomState({ ...zoomState, offset: { ...zoomState.offset, y: zoomState.offset.y - 15 } }) }}>{'\>'}</Button>
      </div>
      <Button className={'zoom_rightarr zoom_control'} onClick={() => { setzoomState({ ...zoomState, offset: { ...zoomState.offset, x: zoomState.offset.x - 15 } }) }}>{'\>'}</Button>

      </div>
      </div>

    </div>
  )
}

export default PhasorGraph

