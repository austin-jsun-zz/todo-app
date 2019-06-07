/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AlertIOS, AppRegistry, TouchableOpacity, TextInput, Alert, Button, SectionList, FlatList, Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

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
		AlertIOS.prompt('Add Reminder', null, (text) => this.editTaskList(text));
	}

	_onPressSmallButton() {

	}
	

  render() {
    return (
    	<View style = {{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}> 
	    	<View style={{flex: 0.3, backgroundColor: '#6495ED'}}>
	    		<Text style={{fontFamily: 'Avenir-Heavy', fontSize: 50, top: 110, margin: 35, color: 'white'}}>Reminders</Text> 
	    	</View>

	    	<View style={{flex:0.5, alignItems: 'center', backgroundColor: 'white'}}>
	    		<FlatList
	    			data={this.state.data}
	    			renderItem = {({item}) => 
	    			<View style = {{flex: 0.1, flexDirection: 'row', justifyContent: 'flex-start'}}>
	    				<View style={{height:25, width: 25, marginRight: 10, backgroundColor: '#778899'}}>
		    				<Button
		    					title = ""
		    					color = "black"
		    					onPress = {(item) => this._onPressSmallButton(item)}
		    				/>
		    			</View>
	    				<Text style ={{fontSize: 25, marginRight: 50, fontFamily:'Avenir-Heavy'}}>{item}</Text>
	    			</View>}
	    		/>
	    	</View>
		    		

	    	<View style = {{flex: 0.1, margin: 20, alignItems: 'flex-end'}}>
		    	<View style={{height: 50, width: 50, borderRadius: 25, alignItems: 'center', backgroundColor: '#6495ED'}}>
		    		<TouchableOpacity
		    			onPress = {(item) => this._onPressButton(item)}
		    			color = "white"
		    		>
		    			<Text style={{fontSize: 36, color: 'white'}}>+</Text>
		    		</TouchableOpacity>
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
