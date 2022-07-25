import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Platform } from 'react-native';
import { gStyle } from '../styles/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ngStyles } from '../styles/navigateStyles';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function Work({navigation}) {
    const loadScene = () => {
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
      }
    };
  
    return (
      <SafeAreaView style = {ngStyles.mt}>
        <View style = {ngStyles.navigateBar}>
          <TouchableWithoutFeedback style = {[ngStyles.navigateButton, {backgroundColor: '#01F5E7'}]}  onPress={loadScene} >
            <Image style = {ngStyles.navigateButtonAccuntIcon} source={require('../assets/accunt_icon.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style = {[ngStyles.navigateButton]} >
            <Text style = {ngStyles.navigateButtonWorktIcon}>+</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style = {gStyle.separator} ></View>
        <View>
          <Button style = {{color: 'black', marginTop: 100}} title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});