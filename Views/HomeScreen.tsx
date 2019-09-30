import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
let URL ='https://picsum.photos/200/300';


const styles = StyleSheet.create({
  text: {
    color: '#403D58',

  },
  title:{
    fontSize:20
  },
  container: {
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 30,
  }
});


export default class Home extends Component {

  state = {
    movies: [
      {
        num: 1,
        user: 'Julian Pavlovich ',
        text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
        url:'https://picsum.photos/200/300'
      },
      {
        num: 3,
        user: 'Andrea Correa',
        text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
        url:'https://picsum.photos/200/300'

      },
      {
        num: 4,
        user: 'Daniel Cornejo ',
        text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
        url:'https://picsum.photos/200/300'

      },

      {
        num: 10,
        user: 'Alejando Camacho ',
        text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
        url:'https://picsum.photos/200/300'

      },
    ]
  };



  render() {
    let cosas = this.state.movies.map((value, index) => {
      //console.log(value)
      return (
        <View>
          <View style={{marginTop:25}}key={value.num}>
            <Image source={{uri: URL}}   style={{ width: '15%', height: 60, borderRadius:90 }}   />
            <Text style={styles.title}>{value.user}</Text>
            <Text style={styles.text}>{value.text}</Text>
            <Button
          
              title="See Post"
              color="#FC7753"
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('Profile', {user:value.user, text: value.text, image:value.url })
              }}
            />
          </View>
        </View>
      )
    });
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            {cosas}
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }




}

