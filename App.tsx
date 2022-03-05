/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import MainHeader from './src/components/Main/MainHeader';

import {View, Text, Card} from 'react-native-ui-lib';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <MainHeader />

        <View
          flex
          padding-page
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text heading marginB-s4>
            Hello Daniel
          </Text>
          <Card
            style={{
              marginBottom: 10,
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}
            onPress={() => {}}>
            <Card.Section
              bg-white
              content={[
                {text: 'You’re Invited!', text70: true, grey10: true},
                {text: 'join now', text90: true, grey50: true},
              ]}
              style={{padding: 20}}
            />
            <Card.Section
              imageSource={{
                uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg?raw=true',
              }}
              imageStyle={{height: 120}}
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
