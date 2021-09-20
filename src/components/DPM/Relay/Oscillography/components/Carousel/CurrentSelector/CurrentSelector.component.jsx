import React, { useEffect } from 'react'
import { Button, InputLabel, MenuItem, Select, Chip } from '@material-ui/core'
import './CurrentSelector.css'


const CurrentSelectorComponent = (props) => {
    

    useEffect(() => {
        
    }, [props])




    return (props.currentGraphData && <div className='current_selector_container'>
        <Select value={1} className='carousel_header_select' onChange={props.handleCurrentSelect}>
            <MenuItem value={1}>
                <em>Señales</em>
            </MenuItem>
            {
                props.createRenderArray()
            }
        </Select>
        <div className={props.hideDetails ? 'chip_scrollable_container_extended': 'chip_scrollable_container'}>
            {
                props.createChipsArray()
            }
        </div></div>
    )
}

export default CurrentSelectorComponent
