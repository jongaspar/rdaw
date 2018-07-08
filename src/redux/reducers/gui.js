// @flow
import initialState from '../initialState';

export default (state: Object = initialState.gui, action: Object): Object => {
  switch (action.type) {
    case 'DO_SOMETHING':
      return {
        ...state,
        key: action.value
      }

    default:
      return { ...state }
  }
}
