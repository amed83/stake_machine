import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeVotePopup, closeChallengePopup} from '../../actions/index'
import classes from './ClosePopupContainer.css'

class ClosePopupContainer extends Component {

    closePopup(){
      if(this.props.popup==="vote"){
        this.props.closeVotePopup()
      }
      this.props.closeChallengePopup()

    }
    render(){
      return(
          <Icon name ='close' onClick={this.closePopup.bind(this)} className={classes.Icon} />
       )
    }
}

const mapDispatchToProps = dispatch => ({
    closeVotePopup:()=> dispatch(closeVotePopup()),
    closeChallengePopup:()=> dispatch(closeChallengePopup())
})

export default connect(null,mapDispatchToProps)(ClosePopupContainer)
