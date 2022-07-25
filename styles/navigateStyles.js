import { StyleSheet } from 'react-native';

export const ngStyles =  StyleSheet.create({
    mt:{
        marginTop: 20,
    },
    navigateBar: {
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row'
      },
      navigateButton: {
        backgroundColor: '#00DED1',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: 69,
        width: 206,
      },
      navigateButtonAccuntIcon: {
        width: 54,
        height: 54
      },
      navigateButtonWorktIcon: {
         color: '#FF0C0C',
         fontSize: 84,
         position: 'absolute',
         top: -25
      }
})