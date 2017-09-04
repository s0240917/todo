import{COMPLETED_GOALS} from '../constants';

export default(state=[],action)=>{
  switch (action.type) {
    case COMPLETED_GOALS:
      const {completeGoals}=action;
      return completeGoals;

    default:
      return state;

  }
}
