import {connect } from 'react-redux';
import Home from '../components/Home';
import {FormContainer} from './FormContainer'


const mapStateToProps = (state) => ({
    addProposal:state.main.addProposal
})


export default connect(mapStateToProps)(Home)
