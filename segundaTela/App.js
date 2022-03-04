import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://phandroid.com/wp-content/uploads/2016/07/Pokemon-GO-Screenshot_20160729-190858.png" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;