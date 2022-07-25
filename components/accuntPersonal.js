import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { gStyle } from '../styles/styles';
import { acStyle } from '../styles/accunt';

var UserName = 'Єгор'
var UserSurname = 'Ковальов'

export function AccuntPersonal() {
    return (
    <View style = {acStyle.AccuntPersonalContainer}>
        <View style = {acStyle.userPhotoContainer}>
            <Image source={require('../assets/defaultUserImage.jpg')} style = {acStyle.userPhoto}/>
        </View>
        <View>
            <Text style = {acStyle.userNameSt}>{UserName}</Text>
            <Text style = {acStyle.userSurnameSt}>{UserSurname}</Text>
        </View>
        <View style = {[gStyle.separator, acStyle.Separator]} ></View>
    </View>
    );
}

const styles = StyleSheet.create({
});
