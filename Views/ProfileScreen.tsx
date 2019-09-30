import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class Profile extends Component {



  render() {
    const styles = StyleSheet.create({

      title: {
        fontSize: 30
      },
      text: {
        fontSize: 20,
   
      }
    });
    const { navigation } = this.props;
    return (
      <View 
      style={{

        paddingHorizontal: 30,

      }}>
        <View style={{
        flexDirection: 'row',
        marginTop:25,
        alignItems: 'stretch',
      }}>
          <View style={{ width: 100, height: "auto", }} >
            <Image source={{ uri: navigation.getParam('image', 'NO-ID') }} style={{ borderRadius: 90, width: 100, height: 100 }} />
          </View>
          <View style={{ marginTop:25, height: 50 }} >
            <Text style={styles.title} >
              {navigation.getParam('user', 'NO-ID')}
            </Text>
          </View>
        </View>


        <View style={{ height: 100 }} >
          <Text style={styles.text} >
            {navigation.getParam('text', 'NO-ID')}
          </Text>
        </View>
      </View>

    );
  }
}