import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import "./BuildControls.css"

const controls =[
    {label:'Salad' , type:'salad'},
    {label:'Meat', type:'meat'},
    {label:'Cheese', type:'cheese'},
    {label:'Bacon', type:'bacon'}
]
const BuildControls =(props)=>(
    <div className="BuildControls">
        {controls.map(ctrl=>
            (<BuildControl key={ctrl.label} label={ctrl.label} ></BuildControl>))}
    </div>
)

export default BuildControls