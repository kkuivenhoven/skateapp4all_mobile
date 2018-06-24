import React, { Component } from 'react';
import { Text,
         TouchableWithoutFeedback,
         View,
         LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }


  renderDescription(){
    const { library, expanded } = this.props;

		console.log(this.props);
    if(expanded){
      return (
        <CardSection>
          <Text style={{ flex:1 }}>
							Type: {library.type}
							{"\n"}
							Material: {library.material}
							{"\n"}
							Address: {library.address}
							{"\n"}
							Avg Ratings: 
							{"\n	"} Security: {library.avgRating.security}
							{"\n	"} Ped Traffic: {library.avgRating.pedTraffic}
							{"\n	"} Difficulty: {library.avgRating.difficulty}
          </Text>
        </CardSection>
      );
    }
  }


  render() {

    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {this.props.library.name}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// ownProps == this.props
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};


// take these actions creaters and make sure the 
// actions go to right place and then pass these actions
// into props
export default connect(mapStateToProps, actions)(ListItem);
