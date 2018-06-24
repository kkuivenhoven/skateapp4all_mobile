import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


// componentWillMount() is a life cycle method
class LibraryList extends Component {
  componentWillMount(){
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2
    }); 

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }


  renderRow(library) {
    return <ListItem library={library} />; 
  }


  render() {
    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />  
    );  
  }
}


// takes our global state object
// and map properties of state object and then
// provide them as props to our component of library list
const mapStateToProps = state => {
  return { libraries: state.libraries };  
};


export default connect(mapStateToProps)(LibraryList);
