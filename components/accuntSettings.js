import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TextInput, Alert} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { gStyle } from '../styles/styles';
import { ngStyles } from '../styles/navigateStyles';
import { acStyle } from '../styles/accunt';
import { AccuntPersonal } from './accuntPersonal'
import { AccuntInfo } from './accuntInfo'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Accunt({ navigation }) {
    const loadScene = () => {
        navigation.navigate('Work')
    }

    const inStoregName = async (text) => {
      try{
        const jsonValue = JSON.stringify(text)
        await AsyncStorage.setItem('@name', jsonValue)
      } catch(e){
        console.log(e)
      }
    }
    const inStoregSurName = async (text) => {
      try{
        await AsyncStorage.setItem('@surname', text)
      } catch(e){
        console.log(e)
      }
    }
    const [text, setValue] = useState('')

    const changeName = (text) => {
        setValue(text)
        console.log(text)
        inStoregName(text)
          
    }
    const UserName = async () => {
      try {
        const value = await AsyncStorage.getItem('@name')
        if(value !== null) {
          console.log(value)
          return value
        }
      } catch(e) {
        // error reading value
      }
    }
    const changeSurname = (text) => {
        setValue(text)
        console.log(text)
        inStoregSurName(text)

    }
    const onSaveData = async () =>{
        console.log('on save')
        await Alert.alert('підказка', 'Перезапустіть для того щоб побачити результат')
        await navigation.navigate('Accunt')
    }
    const loadScene_ac = () => {
        navigation.navigate('Accunt')
    }
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
        try{
          await AsyncStorage.setItem('@userimage', result.uri)
        } catch(e){
          console.log(e)
        }

      }
    };
    return (
      <SafeAreaView style = {ngStyles.mt}>
        <View style = {ngStyles.navigateBar}>
          <TouchableWithoutFeedback style = {ngStyles.navigateButton} onPress={loadScene_ac} >
            <Image style = {ngStyles.navigateButtonAccuntIcon} source={require('../assets/accunt_icon.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style = {[ngStyles.navigateButton, {backgroundColor: '#01F5E7'}]} onPress={loadScene} >
            <Text style = {ngStyles.navigateButtonWorktIcon}>+</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style = {gStyle.separator} ></View>
        <View style = {acStyle.AccuntPersonalContainer}>
            <TouchableWithoutFeedback onPress={pickImage} style = {acStyle.userPhotoContainer}>
            {image && <Image source={{ uri: image }} style={acStyle.userPhoto} />}
            </TouchableWithoutFeedback>
            <View>
                <TextInput style = {acStyle.userNameSt_set} onChangeText={changeName} placeholder = "ім'я" placeholderTextColor="#EC8F8F" />
                <TextInput style = {acStyle.userSurnameSt_set} onChangeText={changeSurname} placeholder = "прізвище" placeholderTextColor="#EC8F8F"/>
            </View>
            <View style = {[gStyle.separator, acStyle.Separator]} ></View>
        </View>
        <View style = {acStyle.saveButtonContainer}>
            <TouchableWithoutFeedback onPress={onSaveData}>
                <View style = {gStyle.dfButton}>
                    <Text style = {gStyle.dfButtonText}>зберегти</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});