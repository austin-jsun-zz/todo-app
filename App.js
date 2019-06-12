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

	_onPressSmallButton(item) {
		if(item.color === "black") {
			item.color === "white"
		}
	}
	

  render() {
    return (
    	<View style = {styles.container}> 
	    	<View style={styles.titleBackground}>
	    		<Text style={styles.title}>Reminders</Text> 
	    	</View>

	    	<View style={styles.listBackground}>
	    		<FlatList
	    			data={this.state.data}
	    			renderItem = {({item}) => 
	    			<View style = {styles.listItem}>
	    				<View style={styles.listButton}>
		    				<Button
		    					title = "O"
		    					color = "black"
		    					onPress = {(item) => this._onPressSmallButton(item)}
		    				/>
		    			</View>
	    				<Text style ={styles.listItemText}>{item}</Text>
	    			</View>}
	    		/>
	    	</View>
		    		

	    	<View style = {styles.buttonView}>
		    	<View style={styles.buttonBackground}>
		    		<TouchableOpacity
		    			onPress = {(item) => this._onPressButton(item)}
		    			color = "white"
		    		>
		    			<Text style={styles.plusButton}>+</Text>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleBackground: {
    flex: 0.3, 
    backgroundColor: '#6495ED'
  },
  title: {
    fontFamily: 'Avenir-Heavy', 
    fontSize: 50, 
    top: 110, 
    margin: 35, 
    color: 'white'
  },
  listBackground: {
  	flex:0.5, 
  	alignItems: 'center', 
  	backgroundColor: 'white'
  },
  listItem: {
  	flex: 0.1, 
  	flexDirection: 'row', 
  	justifyContent: 'flex-start'
  },
  listButton: {
  	height:25, 
  	width: 25, 
  	marginRight: 10, 
  	backgroundColor: '#778899'
  },
  listItemText: {
  	fontSize: 25, 
  	marginRight: 50, 
  	fontFamily:'Avenir-Heavy'
  },
  buttonView: {
  	flex: 0.1, 
  	margin: 20, 
  	alignItems: 'flex-end'
  },
  buttonBackground: {
  	height: 50, 
  	width: 50, 
  	borderRadius: 25, 
  	alignItems: 'center', 
  	backgroundColor: '#6495ED'
  },
  plusButton: {
  	fontSize: 36, 
  	color: 'white'
  }
});
