import React, { useRef } from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image
} from 'react-native';

// npm install react-native-card-flip
import CardFlip from 'react-native-card-flip';

export default function FlipCard() {
  
  const flipcard = useRef();
  const flipcard2=useRef();
   const flipcard3=useRef();
   
  return (
    <View style={{flex:1,backgroundColor:"beige"}}>
    <ScrollView>
    <CardFlip ref={flipcard} style={{ width: 250, height: 300,marginLeft:50 }}>
      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'skyblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 20,
        }}
        onPress={() => flipcard.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: 'white', fontSize: 18 }}
        >
         1.Alpha (B.1.1.7)
        </Text>
        <Image source={require("../assets_c/prevent_img.jfif")} style={{width:50,height:50}}></Image>
        </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 20,
        }}
        onPress={() => flipcard.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: 'black', fontSize: 18 }}
        >
          <Text style={{ fontWeight: 'bold' }}> The variant first reported in the UK spreads more easily and can cause more severe illness than previous versions </Text> 
        </Text>
      </TouchableOpacity>

      
    </CardFlip>
    


  <CardFlip ref={flipcard2}style={{ width: 250, height: 300,marginLeft:50 }}>
      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'skyblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 20,
        }}
        onPress={() => flipcard2.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: 'white', fontSize: 18 }}
        >
         2.Beta (B.1.351)
        </Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 20,
        }}
        onPress={() => flipcard2.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: 'black', fontSize: 18 }}
        >
          <Text style={{ fontWeight: 'bold' }}>  the variant first reported in South Africa, spreads more easily than older strains and has numerous sublineages.  </Text> 
        </Text>
      </TouchableOpacity>

      
    </CardFlip>

 <CardFlip ref={flipcard3}style={{ width: 250, height: 300,marginLeft:50 }}>
      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'skyblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 20,
        }}
        onPress={() => flipcard3.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: 'white', fontSize: 18 }}
        >
         2.Gamma (P.1) 
        </Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 30,
          borderRadius: 20,
        }}
        onPress={() => flipcard3.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: 'black', fontSize: 18 }}
        >
          <Text style={{ fontWeight: 'bold' }}>  the variant first reported in Japan but later identified as originating in Brazil, which may be able to re-infect people who have had COVID-19  </Text> 
        </Text>
      </TouchableOpacity>

      
    </CardFlip>
    </ScrollView>
    </View>
  )
}


