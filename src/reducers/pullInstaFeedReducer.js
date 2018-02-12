import {
  FETCH_INSTAS
} from '../actions/types';

const INITIAL_STATE = {
  data: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INSTAS:
      return { ...state, data: action.payload };
      default:
        return state;
  }
}
