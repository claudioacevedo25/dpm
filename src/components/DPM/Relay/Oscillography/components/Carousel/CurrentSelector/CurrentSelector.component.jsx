import React from 'react'
import { Button, InputLabel, MenuItem, Select, Chip } from '@material-ui/core'
import './CurrentSelector.css'


const CurrentSelectorComponent = (props) => {

        const handleCurrentSelect = (e) => {
            let position = props.currentsDataFiltered.indexOf(e.target.value)
            if (position != -1) {
                const newFilteredArray = props.currentsDataFiltered.filter((current)=>{
                    return current.id != e.target.value.id
                })
                props.setCurrentsDataFiltered(newFilteredArray)
            }else{
                const newFilteredArray = [...props.currentsDataFiltered];
                newFilteredArray.push(e.target.value)
                props.setCurrentsDataFiltered(newFilteredArray)
            }
        }

        const filterCurrentSelect = (id) =>{
            const newFilteredArray = props.currentsDataFiltered.filter((current)=>{
                return current.id != id
            })
            props.setCurrentsDataFiltered(newFilteredArray)
        }
        
    
        return (props.currentsData && <div className='current_selector_container'>
                   <Select value={1} className='carousel_header_select' onChange={handleCurrentSelect}>
                        <MenuItem value={1}>
                            <em>Corrientes</em>
                        </MenuItem>
                        {
                            props.currentsData.vars.map((current)=>{
                               return <MenuItem value={current} key={'corriente-'+current.id}>
                                <em>{current.id}</em>
                                </MenuItem>
                            })
                        }
                    </Select>
                    <div className='chip_scrollable_container'>
                    {props.currentsDataFiltered.map((current)=>{
                    return<Chip
                        label={current.id}
                        key={'chip-'+current.id}
                        onClick={()=>filterCurrentSelect(current.id)}
                        onDelete={()=>filterCurrentSelect(current.id)}
                        variant="outlined"
                        color="secondary"
                    />
                    })}
                    </div></div>
    )
}

export default CurrentSelectorComponent
