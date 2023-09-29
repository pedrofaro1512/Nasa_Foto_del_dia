import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text style={styles.title}>Explore</Text>
        </View>
        <View style={styles.rightContainer}>
            <Image style={styles.image}source={require("../../assets/LogoNasa.png")}/>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
    },
    leftContainer: {
        flex: 1,
        alignItems: "flex-start",
    },
    rightContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    title: {
        color: "#FFF",
        fontSize: 20,
    },
    image: {
        width: 60,
        height: 60,
    },
})

export default Header;