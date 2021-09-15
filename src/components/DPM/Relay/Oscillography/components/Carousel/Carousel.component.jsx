import { Button } from '@material-ui/core'
import CurrentSelector from './CurrentSelector'
import Phasor from '../../../../../../reusable/Graphics/PhasorGraph'
import Chart from '../../../../../../reusable/Graphics/LineChart'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Carousel.css'

const CarouselComponent = (props) => {
    /*<div className='carousel_body'>
                <div className='carousel_header'>
                    <CurrentSelector 
                    currentsData={props.phasorGraphData} 
                    currentsDataFiltered={props.phasorGraphDataFiltered}
                    setCurrentsDataFiltered={props.setPhasorGraphDataFiltered}/>
                    <Button className='plus_button' onClick={()=>{props.setHideDetails()}}>+</Button>
                </div>
                {props.phasorGraphDataFiltered &&<Phasor width={250} vectorData={props.phasorGraphDataFiltered} />}
            </div>*/

    return (
        <Carousel className='carousel_container' showThumbs={false} showIndicators={false} showStatus={false} onChange={(index, item) => { props.setIndexToShow(index) }}>
            {props.graphsData ?
                props.graphsData.map((graph, indexOfGraph) => {
                    switch (graph.type) {
                        case 'phasor':
                            if (indexOfGraph === props.indexToShow) {
                                return (
                                    <div className='carousel_body' key={'phasorG' +indexOfGraph}>
                                        <div className='carousel_header'>
                                            <CurrentSelector
                                                graphsData={props.graphsData}
                                                currentGraphData={props.currentGraphData}
                                                currentGraphDataFiltered={props.currentGraphDataFiltered}
                                                setCurrentGraphDataFiltered={props.setCurrentGraphDataFiltered}
                                                indexToShow={props.indexToShow}
                                            />
                                            <Button className='plus_button' onClick={() => { props.setHideDetails() }}>+</Button>
                                        </div>
                                        <Phasor width={250} vectorData={props.currentGraphDataFiltered.vars} />
                                    </div>)
                            } else { return 'Cargando...' }
                            break
                        case 'line':
                            if (indexOfGraph === props.indexToShow) {
                                return (
                                    <div className='carousel_body' key={'lineG' +indexOfGraph}>
                                        <div className='carousel_header'>
                                            <CurrentSelector
                                                graphsData={props.graphsData}
                                                currentGraphData={props.currentGraphData}
                                                currentGraphDataFiltered={props.currentGraphDataFiltered}
                                                setCurrentGraphDataFiltered={props.setCurrentGraphDataFiltered}
                                                indexToShow={props.indexToShow}
                                            />
                                            <Button className='plus_button' onClick={() => { props.setHideDetails() }}>+</Button>
                                        </div>
                                        <Chart 
                                        type={'line'}
                                        xaxis={props.currentGraphDataFiltered.xaxis}
                                        yaxis={props.currentGraphDataFiltered.yaxis}
                                        id={'line-chart' + indexOfGraph}
                                        xaxis_name={props.currentGraphDataFiltered['xaxis_name']}
                                        yaxis_name={props.currentGraphDataFiltered['yaxis_name']}/>
                                    </div>)
                            } else { return 'Cargando...' }
                            break
                            case 'bar':
                            if (indexOfGraph === props.indexToShow) {
                                return (
                                    <div className='carousel_body' key={'barG' +indexOfGraph}>
                                        <div className='carousel_header'>
                                            <CurrentSelector
                                                graphsData={props.graphsData}
                                                currentGraphData={props.currentGraphData}
                                                currentGraphDataFiltered={props.currentGraphDataFiltered}
                                                setCurrentGraphDataFiltered={props.setCurrentGraphDataFiltered}
                                                indexToShow={props.indexToShow}
                                            />
                                            <Button className='plus_button' onClick={() => { props.setHideDetails() }}>+</Button>
                                        </div>
                                        <Chart 
                                        type={'bar'}
                                        xaxis={props.currentGraphDataFiltered.xaxis}
                                        yaxis={props.currentGraphDataFiltered.yaxis}
                                        id={'bar-chart' + indexOfGraph}
                                        xaxis_name={props.currentGraphDataFiltered['xaxis_name']}
                                        yaxis_name={props.currentGraphDataFiltered['yaxis_name']}/>
                                    </div>)
                            } else { return 'Cargando...' }
                            break
                        default:
                            return null
                            break
                    }
                })
                :
                <div>Cargando...</div>}

        </Carousel>)

}

export default CarouselComponent
