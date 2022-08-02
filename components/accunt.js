import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { gStyle } from '../styles/styles';
import { ngStyles } from '../styles/navigateStyles';
import { acStyle } from '../styles/accunt';
import { AccuntPersonal } from './accuntPersonal'
import { AccuntInfo } from './accuntInfo'


export default function Accunt({ navigation }) {
    const loadScene = () => {
        navigation.navigate('Work')
    }
    const onSettings = () => {
      console.log('ckied on settings button')
      navigation.navigate('AccuntSettings')
    }
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
        <AccuntInfo />
        <View style = {acStyle.FloatSettingsContainer}>
        <TouchableWithoutFeedback onPress={onSettings}>
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
