// data will be an array of object where each object represents
// a single library (i.e. id, name, desc)
import data from './SkateSpotList.json';

// returns an empty array
//export default () => [];

// now LibraryReducer always returns our array of libraries
export default () => data;

// this reducer has NO actions so we will always have this
// static list of data coming back from this producer
