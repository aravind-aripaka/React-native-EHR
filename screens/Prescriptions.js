import { View, Text,Image,StyleSheet,TextInput,Button } from 'react-native'
import React from 'react'
import LinearGradient from 'expo-linear-gradient';
import { TouchableOpacity,ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useState,useEffect} from 'react';

const Prescriptions = () => {

    const [hasGalleryPermission,setHasGalleryPermission] = useState(null);
    const [ image, setImage ] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => { 
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaType: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    if(hasGalleryPermission === false){
        return <Text> no access </Text>
    }

  return (
    <View>
        <View style={styles.container}>
            <TouchableOpacity>
            <Image 
                style={styles.logo} 
                source={require('../assets/logo.png')}  
            />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                <Image 
                    source={require('../assets/user.png')}
                    style={styles.icon} 
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    source={require('../assets/home.png')}
                    style={styles.icon} 
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image 
                    source={require('../assets/add.png')}
                    style={styles.icon} 
                />
                </TouchableOpacity>
            </View>
        </View> 
        <View style={{backgroundColor: '#FFA4A4',paddingVertical: 10}}>
            <Text style={{fontSize: 19,padding: 5,paddingVertical:10,fontWeight: 'bold'}}> Upload the patient's consultation details </Text>
        </View>
        <ScrollView>
            <TextInput 
            style={styles.input}
            placeholder={'Patient Id*'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'  
            />
            <TextInput 
            style={styles.input}
            placeholder={'Start Time of consultation*'}
            keyboardType = 'numeric'
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'  
            />
            <TextInput 
            style={styles.input}
            placeholder={'End Time of consultation*'}
            keyboardType = 'numeric'
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'  
            />
            <TextInput 
            style={styles.input}
            placeholder={'Compounder id*'}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'  
            />
            <TextInput 
            style={styles.input}
            placeholder={'Doctor Fee*'}
            keyboardType = 'numeric'
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'  
            />
            <View style={{margin : 30}}>
                <Button
                    title="add prescription (in jpeg format)"
                    color="green"
                    onPress={() => pickImage()}
                />
                <View style={{marginBottom : 45}}>
                    {image && <Image source={{uri: image}} style={{flex:1/2}} />}
                </View>
                <Button
                    title="submit"
                    color="blue"
                />
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',   
        //marginHorizontal: 5,
        //marginVertical: 6
        backgroundColor: '#7EFF87',
    },
    iconsContainer : {
        flexDirection: 'row',
        marginRight : 5,
    },  
    logo : {
        width:200,
        height:100, 
        resizeMode: 'contain',
    },

    icon : {
        width: 30,
        height: 30,
        margin: 10,
        marginLeft : 15,
        resizeMode: 'contain',
    },
    input : {
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: '#B3B3B3',
        color: 'white',
        marginHorizontal:25,
        marginVertical: 25,
      },
})


export default Prescriptions