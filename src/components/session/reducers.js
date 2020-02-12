import { fromJS } from 'immutable';
import actionTypes from './action-types';

const initialState = {
  isLoged: false
};

const loged = state => {
  console.log(state);
  return fromJS(state).setIn (['isLoged'], true).toJS();
};
const logout = state => fromJS(state).setIn (['isLoged'], false).toJS();

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOGED:
      return loged(state);
    case actionTypes.LOGOUT:
      return logout(state);
    default:
      return state;
  }
}
