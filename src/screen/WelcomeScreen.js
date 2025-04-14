import {
  Button,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../utils/fonts';

const {height, width} = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffba08'} />
      <LinearGradient
        colors={['#ffba08', '#d00000']}
        style={styles.linearGradient}>
        {/* contentContainer */}
        <View style={styles.contentContainer}>
          {/* welcome Container */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>
          {/* instruction container */}
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>
              1. Each question is designed to test your knowledge, so read it
              thoroughly before selecting an answer to avoid mistakes.
            </Text>
            <Text style={styles.instructions}>
              2. Every question offers multiple options, but only one is
              correct. Choose wisely, as incorrect answers won't earn you any
              points.
            </Text>
            <Text style={styles.instructions}>
              3. Once you submit an answer, you cannot return to change it. Make
              sure to select your response carefully before proceeding.
            </Text>
            <Text style={styles.instructions}>
              4. Each correct answer adds points to your total score. Aim for
              accuracy to achieve the highest possible score by the end of the
              quiz.
            </Text>
            <Text style={styles.instructions}>
              5. Every question has a limited time to answer. If the timer runs
              out, you will move to the next question without scoring for the
              missed one.
            </Text>
            <Text style={styles.instructions}>
              6. At the end of the quiz, you will see your total score along
              with feedback on your performance and areas to improve.
            </Text>
            <Text style={styles.instructions}>
              7. Play again to beat your previous high score and sharpen your
              skills. The more you practice, the better your results will be!
            </Text>
          </View>
        </View>

        {/* start button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Question')}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {
    alignSelf: 'flex-start',
    // paddingHorizontal: width * 0.05,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.05,
  },
  welcomeContainer: {
    marginBottom: width * 0.06,
  },
  welcomeText: {
    textAlign: 'left',
    fontSize: width * 0.08,
    fontFamily: fonts.Bold,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
    textShadowOffset: {width: 2, height: 2}, // Shadow offset
    textShadowRadius: 4, // Shadow blur radiu
  },
  instructionsContainer: {
    alignItems: 'flex-start',
  },
  instructions: {
    fontSize: width * 0.03,
    textAlign: 'left',
    marginBottom: 10,
    fontFamily: fonts.SemiBold,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.1)', // Shadow color
    textShadowOffset: {width: 2, height: 2}, // Shadow offset
    textShadowRadius: 4, // Shadow blur radiu
  },
  startButton: {
    position: 'absolute',
    bottom: width * 0.1,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: height * 0.015,
    width: width / 1.1,
    borderRadius: width * 0.03,
  },
  buttonText: {
    fontFamily: fonts.Bold,
  },
});
