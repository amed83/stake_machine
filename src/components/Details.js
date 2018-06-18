import React, {Component} from 'react';
import {connect} from 'redux';




class Detail extends Component {

    render(){
        const child = this.propsshowDetails?
        return(

            <div>Hello Details</div>

        )


    }




}

const mapStateToProps = state => ({
    showDetails:main.state.showDetails
})
