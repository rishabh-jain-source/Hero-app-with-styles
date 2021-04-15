import React from 'react'
import { addHero } from '../Actions/heroes'
import { ConnectedEdit } from './edit'
import { connect } from 'react-redux'
import AddHeroForm from './AddHeroForm'
import { v4 as uuid } from 'uuid'



console.log(uuid())

class AddHero extends React.Component{
    onSubmit = (hero) => {
         console.log(hero)
         this.props.addHero(hero);
         this.props.history.goBack();
    }
    render() {
        return (
        <div>
                
                <AddHeroForm onSubmit={this.onSubmit}/>
            {/* <ConnectedEdit onSubmit={this.onSubmit} /> */}
            </div>
        )
    }
}

const mapDispatchToState = (dispatch) => {
    
    return {
        addHero:(hero) => dispatch(addHero( hero ))
    }
}

export default connect(undefined,mapDispatchToState)(AddHero)