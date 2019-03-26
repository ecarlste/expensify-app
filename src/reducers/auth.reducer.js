import actionTypes from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return { ...state, uid: action.uid };

    case actionTypes.logout:
      return { ...state, uid: undefined };

    default:
      return state;
  }
};
