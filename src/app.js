import React from 'react';
import { View, Button, Left, Icon } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View style={{ flex: 1 }}>
				<Header headerText="Skate App 4 All"/>
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;
