import react from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { gStyle } from '../styles/styles';
import { acStyle } from '../styles/accunt';

var counter = 0
var stopWach = 0
var timer = 0

export function AccuntInfo() {
    return (
    <View style = {acStyle.accuntInfoContainer}>
        <Text style = {acStyle.accuntInfoTitle}>створено лічильників:</Text>
        <View style = {acStyle.accuntCounter}>
            <Text style = {acStyle.accuntCounterItem}>лічильні: {counter}</Text>
            <Text style = {acStyle.accuntCounterItem}>секундоміри: {stopWach}</Text>
            <Text style = {acStyle.accuntCounterItem}>таймерів: {timer}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
});
