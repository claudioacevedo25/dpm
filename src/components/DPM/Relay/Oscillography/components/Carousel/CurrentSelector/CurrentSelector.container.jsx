import { Chip, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CurrentSelectorComponent from "./CurrentSelector.component";

const CurrentSelector = (props)=> {
  
  useEffect(() => {
    
  }, [])

  const handleCurrentSelect = (e) => {
    let found = false
    let newFilteredArray = [] 
    switch (props.currentGraphData.type) {
        case 'bar':
            const varYToAdd = props.currentGraphData.yaxis.find(element => element.name == e.target.value)
            const varXoAdd = props.currentGraphData.xaxis[props.currentGraphData.yaxis.indexOf(varYToAdd)]
                props.setCurrentGraphDataFiltered(
                  {...props.currentGraphData, xaxis:[varXoAdd], yaxis:[varYToAdd]}
                )
         break
        case 'line':
            newFilteredArray = []
            if (props.currentGraphDataFiltered.yaxis.length) {
                found = props.currentGraphDataFiltered.yaxis.find(element => element.name == e.target.value)
            } else { found = false }
            if (found) {
                newFilteredArray = props.currentGraphDataFiltered.yaxis.filter((current) => {
                    return current.name != e.target.value
                })
                const newFilteredObject = { ...props.graphsData[props.indexToShow], yaxis: newFilteredArray }
                props.setCurrentGraphDataFiltered(newFilteredObject)
            } else {
                if (props.currentGraphDataFiltered.yaxis.length) {
                    newFilteredArray = [...props.currentGraphDataFiltered.yaxis]
                }
                const varToAdd = props.currentGraphData.yaxis.find(element => element.name == e.target.value)
                newFilteredArray.push(varToAdd)
                const newFilteredObject = { ...props.graphsData[props.indexToShow], yaxis: newFilteredArray }
                props.setCurrentGraphDataFiltered(newFilteredObject)
            }
            break;
        case 'phasor':
            found = false
            newFilteredArray = []
            if (props.currentGraphDataFiltered.vars.length) {
                found = props.currentGraphDataFiltered.vars.find(element => element.id == e.target.value)
            } else { found = false }
            if (found) {
                newFilteredArray = props.currentGraphDataFiltered.vars.filter((current) => {
                    return current.id != e.target.value
                })
                const newFilteredObject = { ...props.graphsData[props.indexToShow], vars: newFilteredArray }
                props.setCurrentGraphDataFiltered(newFilteredObject)
            } else {
                if (props.currentGraphDataFiltered.vars.length) {
                    newFilteredArray = [...props.currentGraphDataFiltered.vars]
                }
                const varToAdd = props.currentGraphData.vars.find(element => element.id == e.target.value)
                newFilteredArray.push(varToAdd)
                const newFilteredObject = { ...props.graphsData[props.indexToShow], vars: newFilteredArray }
                props.setCurrentGraphDataFiltered(newFilteredObject)
            }
            break;

        default:
            break;
    }
}

const filterCurrentSelect = (id) => {
  let newFilteredArray = []
  let newFilteredObject
  switch (props.currentGraphData.type) {
      case 'bar':
          newFilteredObject = { ...props.graphsData[props.indexToShow], yaxis: [], xaxis:[] }
          props.setCurrentGraphDataFiltered(newFilteredObject)
          break
      case 'line':
          newFilteredArray = props.currentGraphDataFiltered.yaxis.filter((current) => {
              return current.name != id
          })
          newFilteredObject = { ...props.graphsData[props.indexToShow], yaxis: newFilteredArray }
          props.setCurrentGraphDataFiltered(newFilteredObject)
          break;
      case 'phasor':
          newFilteredArray = props.currentGraphDataFiltered.vars.filter((current) => {
              return current.id != id
          })
          newFilteredObject = { ...props.graphsData[props.indexToShow], vars: newFilteredArray }
          props.setCurrentGraphDataFiltered(newFilteredObject)
          break;
      default:
          break;
  }
}

const createRenderArray = () => {
  const variableCollection = []
  if (props.currentGraphData) {
      switch (props.currentGraphData.type) {
          case 'phasor':
              props.currentGraphData.vars.map((v) => {
                  variableCollection.push(<MenuItem key={v.id + '-option'} value={v.id}>{v.id}</MenuItem>)
              })
              return variableCollection
              break
          case 'line':
              props.currentGraphData.yaxis.map((v) => {
                  variableCollection.push(<MenuItem key={v.name + '-option'} value={v.name}>{v.name}</MenuItem>)
              })
              return variableCollection
              break
          case 'bar':
              props.currentGraphData.yaxis.map((v) => {
                  variableCollection.push(<MenuItem key={v.name + '-option'} value={v.name}>{v.name}</MenuItem>)
              })
              return variableCollection
          default:
              return '';
      }
  }
}

const createChipsArray = () => {
  const variableCollection = []
  if (props.currentGraphDataFiltered) {
      switch (props.currentGraphDataFiltered.type) {
          case 'phasor':
              props.currentGraphDataFiltered.vars.map((v) => {
                  variableCollection.push(<Chip
                      label={v.id}
                      key={'chip-phasor' + v.id}
                      onClick={() => filterCurrentSelect(v.id)}
                      onDelete={() => filterCurrentSelect(v.id)}
                  />)
              })
              return variableCollection
              break
          case 'line':
              props.currentGraphDataFiltered.yaxis.map((v) => {
                  variableCollection.push(<Chip
                      className='current_selector_chip'
                      label={v.name}
                      key={'chip-line' + v.name}
                      onClick={() => filterCurrentSelect(v.name)}
                      onDelete={() => filterCurrentSelect(v.name)}
                  />)
              })
              return variableCollection
              break
              case 'bar':
                  props.currentGraphDataFiltered.yaxis.map((v) => {
                      variableCollection.push(<Chip
                          label={v.name}
                          key={'chip-line' + v.name}
                          onClick={() => filterCurrentSelect(v.name)}
                          onDelete={() => filterCurrentSelect(v.name)}
                      />)
                  })
                  return variableCollection
                  break
          default:
              return 'foo';
      }
  }
}

    
  return (
     
    <CurrentSelectorComponent
      currentGraphData={props.currentGraphData}
      currentGraphDataFiltered={props.currentGraphDataFiltered}
      setCurrentGraphDataFiltered={props.setCurrentGraphDataFiltered}
      graphsData={props.graphsData}
      indexToShow={props.indexToShow}
      handleCurrentSelect={handleCurrentSelect}
      createChipsArray = {createChipsArray}
      createRenderArray = {createRenderArray}
      hideDetails = {props.hideDetails}
    />
  );
};

export default CurrentSelector;
