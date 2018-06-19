import React, {Component} from 'react';
import {connect} from 'react-redux';

import {hideDetails} from '../actions/index'
import Details from '../components/Details'

class DetailsContainer extends Component {
    render(){
        return(
              <Details {...this.props} />
        )

    }
}

const mapStateToProps = state => ({
    details:state.main.details
})

const mapDispatchToProps = dispatch => ({
     onHide: ()=>dispatch(hideDetails())
})


export default connect(mapStateToProps,mapDispatchToProps)(DetailsContainer)
