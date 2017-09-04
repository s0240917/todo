import React,{Component} from 'react';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import {connect} from 'react-redux';


class App extends Component{
  signOut(){
    firebaseApp.auth().signOut();
  }
  render(){
    return(
      <div style={{margin: '5px'}}>
      <h3>Goal Coach</h3>
      <AddGoal />
      <hr />
      <h4>Goals</h4>
      <GoalList />
      <hr />
      <h4> Completed Goals</h4>
      <CompleteGoalList />
      <hr />
      <button
        className ="btn btn-danger"
        onClick={()=> this.signOut()}>
        Sign out</button>
      </div>
    )
  }
}
function mapStateToProps(state){
  //console.log('state',state);
  return {}
}
export default connect(mapStateToProps,null) (App);
