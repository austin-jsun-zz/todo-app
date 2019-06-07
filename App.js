/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AlertIOS, AppRegistry, TextInput, Alert, Button, SectionList, FlatList, Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
//let taskList = ;
export default class App extends Component<Props> {

	
	constructor() {
		super();
		this.state = {status: false, data: []}
	}


	editTaskList(text) {
		this.state.data.push(text);
		this.render();
	}
	
	

	_onPressButton() {
		//Alert.alert('You tapped button!')
		//this.setState({status: true});
		AlertIOS.prompt('Enter a task', null, (text) => this.editTaskList(text));
	}
	

  render() {
    return (
    	<View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}> 
	    	<View style={{flex: 0.3, alignItems: 'center', backgroundColor: 'blue'}}>
	    		<Text style={{fontSize: 50, top: 150}}>Reminders</Text> 
	    	</View>

	    	<View style={{flex:0.5, alignItems: 'center', backgroundColor: 'turquoise'}}>
	    		<FlatList
	    			data={this.state.data}
	    			renderItem = {({item}) => 
	    			<View style = {{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
	    				<View style={{height:25, width: 25, alignItems: 'center', backgroundColor: 'white'}}>
		    				<Button
		    					title = ""
		    					color = "black"
		    				/>
		    			</View>
	    				<Text style ={{fontSize: 25}}>{item}</Text>
	    			</View>}
	    		/>
	    	</View>
		    		

	    	<View style = {{flex: 0.1, margin: 20, alignItems: 'flex-end'}}>
		    	<View style={{height: 50, width: 50, alignItems: 'center', backgroundColor: 'red'}}>
		    		<Button
		    			onPress = {(item) => this._onPressButton(item)}
		    			title = "+"
		    			color = "black"
		    		/>
		    	</View>
		    </View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
