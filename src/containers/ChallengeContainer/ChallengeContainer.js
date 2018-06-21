import React, { Component } from 'react'
import {Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {openChallengePopup} from '../../actions/index'
import ChallengePopup from '../../components/ChallengePopup/ChallengePopup'

class ChallengeContainer extends Component {

  handlePopup(){
      this.props.onOpenPopup()
  }

  render(){

    const child = this.props.challengePopup? <ChallengePopup /> : ""
      return(
             <div>
               <Button color='orange'onClick={this.handlePopup.bind(this)}> Challenge  </Button>
               {child}
           </div>
          )
  }
}


const mapStateToProps = state => ({
  challengePopup:state.main.challengePopup
})

const mapDispatchToProps = dispatch=> ({
    onOpenPopup: ()=> dispatch(openChallengePopup())
})

export default connect(mapStateToProps,mapDispatchToProps)(ChallengeContainer)
