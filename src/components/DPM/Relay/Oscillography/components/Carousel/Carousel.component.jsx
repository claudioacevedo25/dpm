import { Button } from '@material-ui/core'
import CurrentSelector from './CurrentSelector'
import Phasor from '../../../../../../reusable/Graphics/PhasorGraph'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Carousel.css'

const CarouselComponent = (props) => {


    return (
        <Carousel className='carousel_container' showThumbs={false} showIndicators={false} showStatus={false}>
            {props.graphData ?
            
            <div className='carousel_body'>
                <div className='carousel_header'>
                    <CurrentSelector 
                    currentsData={props.phasorGraphData} 
                    currentsDataFiltered={props.phasorGraphDataFiltered}
                    setCurrentsDataFiltered={props.setPhasorGraphDataFiltered}/>
                    <Button className='plus_button' onClick={()=>{props.setHideDetails()}}>+</Button>
                </div>
                {props.phasorGraphDataFiltered &&<Phasor width={250} vectorData={props.phasorGraphDataFiltered} />}
            </div>
             :
            <div>Cargando...</div>}
            
        </Carousel>)

}

export default CarouselComponent
