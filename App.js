import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import {Constants} from 'expo'
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types'
import SectionListContacts from './SectionListContacts'
import FlatListNews from './FlatListNews'
import Row from './Row.js'
import {fetchUsers} from './api'



export default class App extends React.Component
  {
   state =
   {
     loading: true,
     news : null
   }
   
   componentDidMount() {
     console.log("getUsers")
     this.getUsers()
  }
  

  getUsers = async () => {
    const results = await fetchUsers()
    console.log('final results', results)
    this.setState({news: results, loading:false})
  }
   
    render() 
  {
    return (
      console.log("loading",this.state.loading),
      console.log('news', this.state.news),
      <View>
      {this.state.loading || this.state.news == null ? (<Text>...loading</Text>) :
      (    
        console.log(',final', this.state.news),
      <View style={styles.container}>
        {<FlatListNews
            news={this.state.news}
          />
        }
      </View>)}
      </View>
    )
    }
  }
  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#F6F6EF',
    },
  });
  

  