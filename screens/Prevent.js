import React, { Component } from 'react';
import { Text, View,StyleSheet ,Platform,ScrollView,SafeAreaView,FlatList,Image,ImageBackground,TouchableOpacity,StatusBar} from 'react-native';

export default class PreventScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
 <SafeAreaView style={styles.droidSafeArea} />
 
 <View style={styles.titleBar}>
                <Text style={styles.titleText}>How to Prevent from COVID</Text>
                </View>
                
             <ScrollView >

<Text style={styles.infoText}> 1. Wear a face mask</Text>
<Image source={require("../assets_c/facemask.jpg")}style={styles.image}></Image>
<Text style={styles.infoText}>2. Maintain at least six feet of distance between yourself and others.</Text>
<Image source={require("../assets_c/keepdistance.jpg")} style={styles.image}></Image>
<Text style={styles.infoText}>3. Avoid large gatherings</Text>
<Image source={require("../assets_c/avoidgathering.jpg")} style={styles.image}></Image>
<Text style={styles.infoText}>4. Get vaccinated</Text>
<Image source={require("../assets_c/vaccine.jpg")} style={styles.image}></Image>
<Text style={styles.infoText}>5. Wash your hands frequently </Text>
<Image  source={require("../assets_c/washhands.jfif")} style={styles.image}></Image>
<Text style={styles.infoText}>6. Clean and disinfect places </Text>
<Image></Image>
 </ScrollView>



             
   <TouchableOpacity style={styles.button} onPress={() =>
                        this.props.navigation.navigate("Home")
                    }>
                    <Text style={styles.buttonText}> Go Back</Text>

                    </TouchableOpacity>
                   
          </View>  
        )
    }
}
const styles=StyleSheet.create({

 container: {
       flex:1, 
        backgroundColor:"lightblue"

    },
    
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        //flex: 10,
        width:400,
        height:100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"teal"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
infoText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        marginTop: 5,
        paddingLeft: 30,
        backgroundColor:"teal"
    },
    image:{
      height:100,
      width:120,
    marginLeft:80
    },
    button:{
      height:50,
      width:80,
      backgroundColor:"green",
      borderRadius:15,
     marginLeft:100


    },
    buttonText:{
      fontsize:15,
      color:"DarkGreen",
      alignItems:"center",
      alignContent:"center",
      color:"Black",
       fontWeight: "bold",
       alignSelf:"center"

    }



})