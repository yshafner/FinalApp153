import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckBox } from 'react-native-elements'
import {StyleSheet, Text, View, Image, Button, TextInput, ImageBackground, TouchableOpacity} from 'react-native';
import {useValue} from './ValueContext';



const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main">
            {props => <HomeScreen {...props}/>}
        </Stack.Screen>

        <Stack.Screen name="Profile">
            {() => <Profile/>}
        </Stack.Screen>

        <Stack.Screen name="Preferences">
            {() => <Preferences>
                <Text style={{fontSize: 32, textAlign: 'center', fontWeight: 'bold'}}>Preferences:</Text>
            </Preferences>}
        </Stack.Screen>

        <Stack.Screen name="HomeGallery">
          {() => <HomeGallery/>}
        </Stack.Screen>

        <Stack.Screen name="About">
           
            {() => <About>
                <Text style={{fontSize: 32, textAlign: 'center', fontWeight: 'normal'}}>Preferences..</Text>

                </About>}

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
    const {currentValue} = useValue()
    const image = { uri: "https://harbourhomes.com/revslider/media/12d6b-cypress-copper-rim_0018_DSC_3498.jpg" };

    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.mainPage}>
          <Text style={styles.mainText}>
              Welcome to {currentValue.isSelected && currentValue.name !== "" ? currentValue.name + "'s" : "My"} Home Portal!
          </Text>
          <View style={styles.mainViewer} >
              <TouchableOpacity
                  style={styles.navButton}
                  onPress={() =>
                      navigation.navigate('Profile')
                  }
              >
                  <Text style={{fontSize:25, color: 'white'}}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.navButton}
                  onPress={() =>
                      navigation.navigate('Preferences')
                  }
              >
                  <Text style={{fontSize:25, color: 'white'}}>Preferences</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.navButton}
                  onPress={() =>
                      navigation.navigate('HomeGallery')
                  }
              >
                  <Text style={{fontSize:25, color: 'white'}}>View Houses</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.navButton}
                  onPress={() =>
                      navigation.navigate('About')
                  }
              >
                  <Text style={{fontSize:25, color: 'white'}}>About</Text>
              </TouchableOpacity>
          </View>
    </View>
      </ImageBackground>
  );
};



const Profile = () => {
    const [editing,setEditing] = React.useState(false)

    const {currentValue, setCurrentValue} = useValue()

    let editView =
        <TextInput
            style={{fontSize:20}}
            placeholder="Enter your username:"
            onChangeText={text => {setCurrentValue({...currentValue, name: text})}}
        />

    return (
        <View style= {{flexDirection:'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{fontSize:48, marginBottom: 30}}>Username: {currentValue.name}</Text>
                {editing?editView:<Text></Text>}
                <Button title="Add Username" onPress={()=> setEditing(!editing)} />
            </View>
        </View>
    );
}

const Preferences = ({children}) => {
    const {currentValue, setCurrentValue} = useValue()
    return (
            <>
                <View style= {{ backgroundColor:'blue', flexDirection:'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {children}

    < Text style={{fontSize: 32, textAlign: 'center', marginTop: 20}}>Display Name on Home Screen{currentValue.isSelected ? "" : ""}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop: 20, marginBottom: 20 }}>
                        <CheckBox
                            checked={currentValue.isSelected}
                            onPress={() => {setCurrentValue({...currentValue, isSelected: !currentValue.isSelected})}}
                        />
                    </View>
                   
                </View>
                <View style= {{backgroundColor:'red', flexDirection:'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
             

    < Text style={{fontSize: 32, textAlign: 'center', marginTop: 20}}>Secure Your Username</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 20,
                    }}>
                        <CheckBox

                        />
                    </View>
                   
                </View>
            </>
);
}


const About = () => {
   
   
    return (
    <View style={{flexDirection: "coulom", height: 660, padding: 20}} >
     
      <View style={{ backgroundColor: `#00ffff`, flex: 10 }}  >
         <Text style={{ fontSize:22, marginBottom: 30, textAlign: 'center', fontWeight: 'normal'}}>Welcome to Home Portal! </Text>
           <Text style={{ fontSize:22, marginBottom: 30, textAlign: 'center', fontWeight: 'normal'}}>Home Portal is the best place to view houses that you're interested in. </Text>
           <Text style={{ fontSize:22, marginBottom: 30, textAlign: 'center', fontWeight: 'normal'}}>Home Portal shows users trending home styles in our Home Gallery.</Text>

      </View>
     
    </View>
         
    );
}





const HomeGallery = () => {
   
    const image1 = { uri: "https://ap.rdcpix.com/077fbec936f24770dc8f34daa08a0e66l-m901161287od-w480_h360.jpg'" };
    const image2 = { uri: "https://ap.rdcpix.com/c704ff54894c282a17802e94761acfeal-m2263634094od-w480_h360.jpg" };
    const image3 = { uri: "https://ap.rdcpix.com/40e091779681546b939ff0f1b64d25e3l-m4142906837od-w480_h360.jpg" };

   
  return (
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={image1}
          />
          <Image
            style={styles.logo}
            source={image2}
          />
          <Image
            style={styles.logo}
            source={image3}
          />
        </View>
       
       
      );
    }





const styles = StyleSheet.create({
    mainPage: {
        flexDirection: 'column',
        margin:25,
        padding:10,
        justifyContent: 'space-around',
    },
    mainText: {
        textAlign: 'center',
        fontSize: 50,
        marginBottom: 30,
        color: 'black',
        backgroundColor:'white',
   
       
    },
    mainViewer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        fontSize: 42,
    },
    navButton: {
        flexDirection: 'row',
        height:50,
        backgroundColor:"blue",
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        marginTop: 20,
        marginTop: 10,
    },
    imageSize: {
        width: '100%',
        resizeMode: 'contain',
        height: 120,
        marginBottom: 10,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    item: {
        flex:4,
        backgroundColor: 'lightgrey',
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 16,
        width: '75%',
    },
    title: {
        fontSize: 22,
    },
    container: {
        flex: 10,
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'top',
        justifyContent: 'center',
        paddingTop: 50,

      },
      logo: {
        margin:10,
        paddingTop: 10,
        width: 150,
        height: 150,
      },
   
});

export default MyStack;