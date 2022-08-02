import { StyleSheet } from 'react-native';

export const acStyle =  StyleSheet.create({
    userPhotoContainer: {
        width: 120,
        height:120,
        borderRadius: 200,
        borderWidth: 4,
        borderColor: '#01F5E7',
        overflow: 'hidden',
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 11,
        marginLeft: 13
    },
    Separator: {
        position: 'relative',
        top: -60
    },
    userPhoto: {
        width: '100%',
        height: '100%',
    },
    userNameSt: {
        fontFamily: 'it-regular',
        color: '#FF0C0C',
        fontSize: 36,
        lineHeight: 44,
        position: 'relative',
        top: -100,
        left: 150

        
    },
    userSurnameSt: {
        fontFamily: 'it-regular',
        color: '#FF0C0C',
        fontSize: 24,
        lineHeight: 29,
        position: 'relative',
        top: -100,
        left: 150
    },
    accuntInfoContainer: {
        position: 'relative',
        top: -40,
        paddingLeft: 28,
        paddingRight: 28,
    },
    accuntInfoTitle: {
        fontSize: 30,
        lineHeight: 36,
        color: '#FF0C0C',        
    },
    accuntCounter:{
        marginTop: 19
    },
    accuntCounterItem:{
        fontSize: 24,
        lineHeight: 29,
        color: '#FF0C0C',
        marginBottom: 10,
    },
    FloatSettingsContainer: {
        position: 'absolute',
        top: '130%',
        left: '83%'
    },
    FloatSettings: {
        width: 50,
        height: 50,
        backgroundColor: '#01F5E7',
        borderRadius: 100,
        overflow: 'hidden',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FloatSettingsIcon: {
        width: 38,
        height: 38
    },
    userNameSt_set: {
        fontFamily: 'it-regular',
        color: '#FF0C0C',
        fontSize: 28,
        lineHeight: 34,
        position: 'relative',
        top: -100,
        left: 150,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#01F5E759' ,
        borderStyle: 'solid',
        borderRadius: 6,
        width: 166,
        height: 36,

        
    },
    userSurnameSt_set: {
        fontFamily: 'it-regular',
        color: '#FF0C0C',
        fontSize: 20,
        lineHeight: 29,
        position: 'relative',
        marginTop: 10,
        top: -100,
        left: 150,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 2,
        borderColor: '#01F5E759' ,
        borderStyle: 'solid',
        borderRadius: 6,
        width: 166,
        height: 36,
    },
    saveButtonContainer:{
        width: 226,
        position: 'relative',
        left: '25%',
        top: '70%'
    }
})