import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import quizQuestions from '../utils/QuestionData';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {handelSkipCount, reset} from '../redux/counterSlice';
const {height, width} = Dimensions.get('window');

const ResultScreen = () => {
  const count = useSelector(state => state.counter.value);
  const skipCount = useSelector(state => state.counter.skipCount);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const gobackhandler = () => {
    dispatch(reset());
    dispatch(handelSkipCount(0));
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <LinearGradient colors={['white', '#219ebc']} style={styles.container}>
        <View style={styles.mainContainer}>
          {/* headerWrapper */}
          <View style={styles.headerContainer}>
            <FontAwesome6
              name={'circle-check'}
              size={width * 0.15}
              color={'#588157'}
            />
            <Text style={styles.congratesText}>Congratulations</Text>
            <Text style={styles.scoreText}>Score Card</Text>
          </View>

          {/* mainWrapper */}
          <View style={styles.mainWrapper}>
            <View style={styles.commanWrapper}>
              <View
                style={[
                  styles.outerScoreWrapper,
                  {backgroundColor: '#cfe0c3'},
                ]}>
                <View
                  style={[
                    styles.InnerscoreWrapper,
                    {backgroundColor: '#80ed99'},
                  ]}>
                  <Text style={styles.txt}>{count}</Text>
                </View>
              </View>
              <Text style={styles.commanTxt}>Total Score</Text>
            </View>
            <View style={styles.commanWrapper}>
              <View
                style={[
                  styles.outerScoreWrapper,
                  {backgroundColor: '#adb5bd'},
                ]}>
                <View
                  style={[
                    styles.InnerscoreWrapper,
                    {backgroundColor: '#495057'},
                  ]}>
                  <Text style={styles.txt}>{quizQuestions.length}</Text>
                </View>
              </View>
              <Text style={styles.commanTxt}>Total Questions</Text>
            </View>
            <View style={styles.commanWrapper}>
              <View
                style={[
                  styles.outerScoreWrapper,
                  {backgroundColor: '#eed7c5'},
                ]}>
                <View
                  style={[
                    styles.InnerscoreWrapper,
                    {backgroundColor: '#b36a5e'},
                  ]}>
                  <Text style={styles.txt}>{skipCount}</Text>
                </View>
              </View>
              <Text style={styles.commanTxt}>Skip Questions</Text>
            </View>
          </View>
        </View>
        {/* FooterWrapper */}
        <View style={styles.footerBtnWrapper}>
          <TouchableOpacity style={styles.goBtn} onPress={gobackhandler}>
            <Text style={styles.btnTxt}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    marginVertical: height * 0.05,
    marginHorizontal: width * 0.04,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratesText: {
    fontFamily: fonts.Bold,
    color: '#386641',
    marginVertical: height * 0.015,
    fontSize: width * 0.07,
  },
  scoreText: {
    fontFamily: fonts.SemiBold,
    fontSize: width * 0.05,
  },
  mainWrapper: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: height * 0.15,
  },
  outerScoreWrapper: {
    height: height * 0.1,
    width: width * 0.2,

    borderRadius: width / 2,
    elevation: 0.8,
  },
  InnerscoreWrapper: {
    height: height * 0.08,
    width: width * 0.16,
    borderRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.5,
  },
  txt: {
    fontFamily: fonts.SemiBold,
    color: 'white',
    fontSize: width * 0.05,
  },
  commanWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  commanTxt: {
    fontFamily: fonts.Medium,
    fontSize: width * 0.035,
    marginTop: height * 0.005,
  },
  footerBtnWrapper: {
    position: 'absolute',
    bottom: height * 0.05,
    width: width,
  },
  goBtn: {
    backgroundColor: '#c89f9c',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
  },
  btnTxt: {
    color: 'black',
    fontFamily: fonts.Bold,
    fontSize: width * 0.035,
  },
});
