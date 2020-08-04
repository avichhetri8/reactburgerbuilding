import React from 'react'
import './Burger.css'
import BurgerIngrediant from '../BurgerIngrediant/BurgerIngrediant'

const Burger = (props) =>{
    let transformedIngrediant = Object.keys(props.ingrediants)
        .map(igKey=>{
            return [...Array(props.ingrediants[igKey])].map((_,i) => {
                return <BurgerIngrediant type={igKey} key={igKey+i} />;
            
             }
            )
        .reduce((arr,el)=>
        {
            return arr.concat(el)
        },[])
        });
        if(transformedIngrediant.length === 0){
            transformedIngrediant = <p>Please Start Adding ingrediants</p>
            console.log("Dada")
        }else{
            console.log("da",transformedIngrediant.length)
        }
    return (
        <div className="Burger">
            <BurgerIngrediant type="bread-top"/>
                {transformedIngrediant}
            <BurgerIngrediant type="bread-bottom"/>
        </div>
    )
}

export default Burger