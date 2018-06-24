import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  // creates one reducer called libraries and it 
  // always returns an array no matter what
  // originally: libraries: () => []
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});



// so console.log(store.getState());
// will return:
// { libraries: [ { id: 1, title: 'sdf', desc: 'sfd' }]}
