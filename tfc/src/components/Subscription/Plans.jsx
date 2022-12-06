import React from 'react'
import './Plans.css'
import {plansTileData} from './plans-data/plan-tile-data'
// import pic from '../../photos/running.png'
// import tick from '../../photos/tick.png'
// import wtick from '../../photos/whiteTick.png'
import btick from './photos/whiteTick.png'



const Plans = () => {
  return (
    <div className='plans-overlay'>
        <div className='plan-header'>
            <span className='stroke-text'> START YOUR</span>
            <span > FITNESS JOURNEY WITH TFC </span>
            <span className='stroke-text'> STARTING NOW</span>
        </div>
        <div className='plan-tiles'>
            {plansTileData.map((plan, k) =>(
                <div className='plans' key={k}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.cost}</span>
                    
                    <div className='description'>
                        {plan.description.map((feature, i) => (
                            <div className='point'>
                                <img src={btick} alt=""/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                </div>
            
            ))}
        </div>
        <div className='btn-div'>
            <button className='join-button'>JOIN NOW</button>
        </div>
    </div>
  )
}

export default Plans