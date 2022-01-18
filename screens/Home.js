import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
             <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground source={require('../assets_c/home_background.jfif')} style={styles.backgroundImage}>
                 <View style={styles.titleBar}>
                        <Text style={styles.titleText}>knowMore Covid</Text>
                    </View>
                  <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Prevent")
                    }>
                        <Text style={styles.routeText}>How to Prevent</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                          <Image source={require("../assets_c/prevent_img.jfif")} style={styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Test")
                    }>
                        <Text style={styles.routeText}>Self-Testing Kit</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                      <Image source={require("../assets_c/Mylab-Self-Test-Kit.jpg")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
 <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Variants")
                    }>
                        <Text style={styles.routeText}>VariantsInfo</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>3</Text>
                       <Image source={require("../assets_c/variants.jfif")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                  </ImageBackground>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.2,
        marginLeft: 30,
        marginRight: 40,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    },
    routeText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        marginTop: 55,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 50,
        //right: 20,
        //bottom: 1,
        zIndex: -1
    },
    iconImage: {
        //position: "absolute",
        height: 70,
        width: 70,
       // resizeMode: "contain",
        left: 150,
        top: -80
    }
});