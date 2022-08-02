import react, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { gStyle } from '../styles/styles';
import { acStyle } from '../styles/accunt';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function AccuntPersonal() {
    const [value, setvalue] = useState('')
    var [valuesur, setvaluesur] = useState('')
    const [image, setImage] = useState(undefined);
    const test = () => {
        console.log('gg');
        
    }
    const UserName = () => {
        AsyncStorage.getItem('@name')
        .then((value) => {
            value = value.replace('"', '')
            value = value.replace('"', '')
            setvalue(value)
        })
    }
    const UserSurName = () => {
        AsyncStorage.getItem('@surname')
        .then((value) => {
            var valuesur = value
            valuesur = valuesur.replace('"', '')
            valuesur = valuesur.replace('"', '')
            console.log(typeof valuesur)
            if(valuesur === false || valuesur === ''|| valuesur === undefined || valuesur === null ){
                valuesur = 'прізвище'
            } else{
                setvaluesur(valuesur)
            }
        })
    }
    const UserImage = () => {
        AsyncStorage.getItem('@userimage')
        .then((value) => {
            var image = value
            console.log(image)
            setImage(image)
        })
    }
    UserImage()
    UserName()
    UserSurName()
    test()
    return (
    <View style = {acStyle.AccuntPersonalContainer}>
        <View style = {acStyle.userPhotoContainer}>
            {image && <Image source={{ uri: image }} style={acStyle.userPhoto} />}
        </View>
        <View>
            <Text style = {acStyle.userNameSt}>{value}</Text>
            <Text style = {acStyle.userSurnameSt}>{valuesur}</Text>
        </View>
        <View style = {[gStyle.separator, acStyle.Separator]} ></View>
    </View>
    );
}

const styles = StyleSheet.create({
});
