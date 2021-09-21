import { Button } from '@material-ui/core'
import CurrentSelector from './CurrentSelector'
import Phasor from '../../../../../../reusable/Graphics/PhasorGraph'
import Chart from '../../../../../../reusable/Graphics/LineChart'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './Carousel.css'
import PlusSize from '../../../../../../assets/icons/plusSize.png'
const CarouselComponent = (props) => {


    return (<div className={props.hideDetails ? 'carousel_container_extended' : 'carousel_container'}>
        <div className='carousel_header'>
            <CurrentSelector
                graphsData={props.graphsData}
                currentGraphData={props.currentGraphData}
                currentGraphDataFiltered={props.currentGraphDataFiltered}
                setCurrentGraphDataFiltered={props.setCurrentGraphDataFiltered}
                indexToShow={props.indexToShow}
                hideDetails={props.hideDetails}
            />
            <Button className='plus_button' onClick={() => { props.setHideDetails() }}><img className='zoomIcon' src={PlusSize} /></Button>
        </div>
        <Carousel className={props.hideDetails ? 'carousel_container_extended-interior' : 'carousel_container-interior'} showThumbs={false} showIndicators={false} showStatus={false} onChange={(index, item) => { props.setIndexToShow(index) }}>
            {props.graphsData ?
                props.graphsData.map((graph, indexOfGraph) => {
                    switch (graph.type) {
                        case 'phasor':
                            if (indexOfGraph === props.indexToShow) {
                                return (
                                    <div className='carousel_body' key={'phasorG' + indexOfGraph}>
                                        <Phasor width={props.hideDetails ? 320 : 240} vectorData={props.currentGraphDataFiltered.vars} />
                                    </div>)
                            } else { return 'Cargando...' }
                            break
                        case 'line':
                            if (indexOfGraph === props.indexToShow) {
                                return (
                                    <div className='carousel_body' key={'lineG' + indexOfGraph}>
                                        <Chart
                                            type={'line'}
                                            xaxis={props.currentGraphDataFiltered.xaxis}
                                            yaxis={props.currentGraphDataFiltered.yaxis}
                                            id={'line-chart' + indexOfGraph}
                                            xaxis_name={props.currentGraphDataFiltered['xaxis_name']}
                                            yaxis_name={props.currentGraphDataFiltered['yaxis_name']}
                                            extended={props.hideDetails} />
                                    </div>)
                            } else { return 'Cargando...' }
                            break
                        case 'bar':
                            if (indexOfGraph === props.indexToShow) {
                                return (
                                    <div className='carousel_body' key={'barG' + indexOfGraph}>
                                        <Chart
                                            type={'bar'}
                                            xaxis={props.currentGraphDataFiltered.xaxis[0]}
                                            yaxis={props.currentGraphDataFiltered.yaxis}
                                            id={'bar-chart' + indexOfGraph}
                                            xaxis_name={props.currentGraphDataFiltered['xaxis_name']}
                                            yaxis_name={props.currentGraphDataFiltered['yaxis_name']}
                                            extended={props.hideDetails} />
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

        </Carousel>
    </div>
    )

}

export default CarouselComponent
