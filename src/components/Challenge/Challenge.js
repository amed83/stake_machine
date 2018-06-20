import React, { Component } from 'react'
import {Button } from 'semantic-ui-react';
import classes from './Challenge.css'
import {connect} from 'react-redux';
import {openPopup} from '../../actions/index'
import ChallengePopup from '../../containers/ChallengePopup/ChallengePopup'

class Challenge extends Component {

  handlePopup(){
      this.props.onOpenPopup()
  }

  render(){

    const child = this.props.popup ? <ChallengePopup /> : ""
      return(
             <div>
               <Button color='orange'onClick={this.handlePopup.bind(this)}> Challenge  </Button>
               {child}
           </div>
          )
  }
}


const mapStateToProps = state => ({
  popup:state.main.popup,
  popupContent:state.main.popupContent
})

const mapDispatchToProps = dispatch=> ({
    onOpenPopup: ()=> dispatch(openPopup())
})

export default connect(mapStateToProps,mapDispatchToProps)(Challenge)
