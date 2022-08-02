import { StatusBar } from 'expo-status-bar';
import react, { useState} from 'react';
import { gStyle } from './styles/styles';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';
import 'react-native-gesture-handler';


export const fonts = () => Font.loadAsync({
  "it-medium": require('./assets/fonts/Inter-Medium.ttf'),
  "it-regular": require('./assets/fonts/Inter-Regular.ttf'),
  "jr": require('./assets/fonts/Jura-Regular.ttf'),
  "nn-italic": require('./assets/fonts/Nunito-Italic.ttf'),
  "nn-medium": require('./assets/fonts/Nunito-Medium.ttf'),
  "nn-medium-italic": require('./assets/fonts/Nunito-MediumItalic.ttf'),
  "nn-regular": require('./assets/fonts/Nunito-Regular.ttf')
})

export default function App() {
  const [font, setFont] = useState(false)
  if (font){
    return <MainStack />;
  } else {
    return (
        <AppLoading
        startAsync = {fonts}
        onFinish = {() => setFont(true)}
        onError = {console.warn()}
        />
      )
  };
}

