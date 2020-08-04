import React ,{Component} from 'react';
import Aux from '../../hoc/AUX';
import Burger from '../../components/burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
class BurgerBuilding extends Component{
    state={
        ingrediants:{
            salad :0,
            bacon:0,
            cheese:0,
            meat:0
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingrediants={this.state.ingrediants}/>
                    <BuildControls/>
            </Aux>
        )
    }
}

export default BurgerBuilding