import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { gStyle } from '../styles/styles';
import { ngStyles } from '../styles/navigateStyles';
import { acStyle } from '../styles/accunt';
import { AccuntPersonal } from './accuntPersonal'
import { AccuntInfo } from './accuntInfo'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function Accunt({ navigation }) {
    const loadScene = () => {
        navigation.navigate('Work')
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
      }
    };
    return (
      <SafeAreaView style = {ngStyles.mt}>
        <View style = {ngStyles.navigateBar}>
          <TouchableWithoutFeedback style = {ngStyles.navigateButton} >
            <Image style = {ngStyles.navigateButtonAccuntIcon} source={require('../assets/accunt_icon.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style = {[ngStyles.navigateButton, {backgroundColor: '#01F5E7'}]} onPress={loadScene} >
            <Text style = {ngStyles.navigateButtonWorktIcon}>+</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style = {gStyle.separator} ></View>
        <AccuntPersonal />
        <View style = {acStyle.FloatSettingsContainer}>
        <TouchableWithoutFeedback>
          <View style = {acStyle.FloatSettings}>
              <Image style = {acStyle.FloatSettingsIcon} source={require('../assets/settingsIcon.png')} />
          </View>
        </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});