import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Image source={{
            uri: 'https://3.bp.blogspot.com/-lfuJuZ4ex00/VxTxWdXNBgI/AAAAAAAAC7Q/OytAhcw5yrweTI8cDNNZ1gNrp6gaFsZTgCLcB/s776/Red_Charizard_PO.png',
          }}
          style={{
            width: 450, 
            height: 450, 
          }}
        />
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        color: '#000000',
        width: 450,
        height: 50,
        backgroundColor: '#CD0000'
      }}>
        Charizard
      </Text>
      <Text style={{
        fontSize: 20,
        textAlign: 'left',
        color: '#000000',
        width: 450,
        height: 40,
        backgroundColor: '#FFFFFF'
      }}>
        Power: 50
      </Text>
      <Image source={{
            uri: 'https://www.mobilegamer.com.br/wp-content/uploads/2016/07/Pokemon-Go-como-jogar-pokebolas-mobilegamer.jpg',
          }}
          style={{
            width: 450, 
            height: 130, 
          }}
        />
    </ScrollView>
  );
}

export default App;

