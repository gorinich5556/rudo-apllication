import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, Platform, FlatList } from 'react-native';
import { gStyle } from '../styles/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ngStyles } from '../styles/navigateStyles';
import React, { useState} from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function Work({navigation}) {
    const loadScene = () => {
        navigation.navigate('Accunt')
    }
    const [listOfItems, setListOfItems] = useState([
      {name: 'лічильник_1', type:'counter', value:4,  index: 1},
      {name: 'секундомір_1', type:'counter', value:'13:10',  index: 2},
      {name: 'лічильник_1', type:'counter', value:7,  index: 3},
      {name: 'таймер_1', type:'counter', value:'13:10',  index: 4},
    ])
  
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
          <FlatList data={listOfItems} renderItem={({item}) =>(
            <Text>{item.name}</Text>
          )} />
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});