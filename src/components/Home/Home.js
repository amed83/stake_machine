import React , { Component } from 'react';
import { Container, Divider} from 'semantic-ui-react';
import CreateProposal from '../../components/CreateProposal/CreateProposal';
import ProposalListContainer from '../../containers/ProposalListContainer/ProposalListContainer';
import {connect } from 'react-redux';
import DetailsContainer from '../../containers/DetailsContainer'
import classes from './Home.css'

class Home extends Component {
      render(){

        let child =(this.props.addProposal) ? <CreateProposal />  : <ProposalListContainer />
        if(this.props.details){
          child = <DetailsContainer />
        }
        return(
              <div>
                  <h1 className={classes.TitleContainer}>  Stake Machine </h1>
                  <Divider />
                  <div className={classes.MainContainer} >
                      {child}
                 </div>
              </div>
         )
    }

}



const mapStateToProps = (state) => ({
    details:state.main.showDetails,
    addProposal:state.main.addProposal
})


export default connect(mapStateToProps)(Home)
