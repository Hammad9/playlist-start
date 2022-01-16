import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BasicLinking from './Components/BasicLinking';
import FlatAndSection from './Components/FlatAndSection';
import Flexed from './Components/Flexed';
import InputFile from './Components/InputFile';
import Input from './Components/InputFile';
import Scroll from './Components/Scroll';
import ButtonTouchPres from './Components/ButtonTouchPres'
import TouchAble from './Components/TouchAble';
export default function App() {
  return (
    <View style={styles.container} >
        {/* <BasicLinking /> */}
        {/* <Flexed /> */}
      {/* <Text>My name is Hmaaad</Text> */}
          {/* <Scroll /> */}
          {/* <FlatAndSection /> */}
          {/* <InputFile /> */}
          {/* <ButtonTouchPres /> */}
          <TouchAble />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
