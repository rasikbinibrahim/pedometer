import React, {Component} from 'react';
import {startCounter, stopCounter} from 'react-native-accurate-step-counter';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      steps: 0,
      startConfig: true,
    };
  }
  // const [steps, setSteps] = useState(0);
  // const [startConfig, setStartConfig] = useState(true);

  // useEffect(() => {
  //   const config = {
  //     default_threshold: 15.0,
  //     default_delay: 150000000,
  //     cheatInterval: 3000,
  //     onStepCountChange: (stepCount) => { setSteps(stepCount) },
  //     onCheat: () => { console.log("User is Cheating") }
  //   }
  //   startCounter(config);
  //   return () => { stopCounter() }
  // }, []);

  config = {
    default_threshold: 15.0,
    default_delay: 150000000,
    cheatInterval: 3000,
    onStepCountChange: stepCount => {
      this.setState({steps: stepCount});
    },
    onCheat: () => {
      console.log('User is Cheating');
    },
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{flex: 1}}>
          <Image
            style={{
              width: 100,
              height: 100,
              marginTop: 20,
              alignSelf: 'flex-end',
              marginRight: 20,
            }}
            source={require('./assets/logo.jpg')}></Image>
        </View>

        <View style={styles.screen}>
          <Text style={styles.step}>{this.state.steps}</Text>
          {this.state.startConfig == true ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({startConfig: false});
                  startCounter(this.config);
                }}>
                <View
                  style={[
                    {
                      height: 50,
                      backgroundColor: '#4267B2',
                      margin: 30,
                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    },
                    styles.shadowProp,
                  ]}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 20,
                      marginTop: 10,
                      marginRight: 10,
                      marginLeft: 10,
                    }}>
                    Start Count
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({startConfig: true});
                  stopCounter();
                }}>
                <View
                  style={[
                    {
                      height: 50,
                      backgroundColor: '#bc2a8d',
                      margin: 30,
                      borderRadius: 10,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    },
                    styles.shadowProp,
                  ]}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 20,
                      marginTop: 10,
                      marginRight: 10,
                      marginLeft: 10,
                    }}>
                    Stop Count
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    fontSize: 36,
  },
});
