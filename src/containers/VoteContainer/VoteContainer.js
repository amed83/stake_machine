import React, { Component } from 'react'
import {Button } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {openVotePopup} from '../../actions/index'
import VotePopup from '../../components/VotePopup/VotePopup'

class VoteContainer extends Component {
    
      handlePopup(){
          this.props.openVotePopup()
      }
      render(){
        const child = this.props.votePopup ? <VotePopup /> : ""
          return(
                 <div>
                   <Button color='yellow'onClick={this.handlePopup.bind(this)}>Vote </Button>
                   {child}
               </div>
              )
      }
}


const mapStateToProps = state => ({
  votePopup:state.main.votePopup
})

const mapDispatchToProps = dispatch=> ({
    openVotePopup: ()=> dispatch(openVotePopup())
})

export default connect(mapStateToProps,mapDispatchToProps)(VoteContainer)