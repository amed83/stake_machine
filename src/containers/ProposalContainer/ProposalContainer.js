import React, { Component } from 'react';
import { List, Button, Divider } from 'semantic-ui-react';
import {showDetails } from '../../actions/index';
import { connect } from 'react-redux';

class ProposalContainer extends Component{
      handleShowDetails(){
        this.props.showDetails({...this.props})
      }
      render(){
        const {name, description, stakes} = this.props
         return(
           <div>
                 <List >
                     <List.Item><b>Name:</b> {name }   </List.Item>
                     <List.Item> <b>Description:</b> {description }  </List.Item>
                     <List.Item><b>Stakes:</b> { stakes}   </List.Item>
                     <Button color='grey' onClick={this.handleShowDetails.bind(this)}>Details </Button>
                       <Divider />
                 </List>

           </div>
          )
      }
}


const mapStateToProps = (state) =>({
    details:state.main.showDetails
})

const mapDispatchToProps = (dispatch,values) => ({
    showDetails: ()=>dispatch(showDetails(values))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProposalContainer)
