import {
  Alert,
  Button,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import quizQuestions from '../utils/QuestionData';
import LinearGradient from 'react-native-linear-gradient';
import {fonts} from '../utils/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, handelSkipCount, increment} from '../redux/counterSlice';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');

const QuestionScreen = () => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedAns, setSelctedAns] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [timerCount, setTimerCount] = useState(15);
  const skipCount = useSelector(state => state.counter.skipCount);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //MoveNextQuestionHandler
  const moveNxtHandler = () => {
    setTimerCount(15);
    if (questionIdx !== quizQuestions.length - 1) {
      if (selectedAns === null) {
        dispatch(handelSkipCount(skipCount + 1));
      }
      setQuestionIdx(pre => pre + 1);
      setSelctedAns(null);
    } else {
      // Alert.alert('Ended');
      navigation.navigate('Result');
      if (selectedAns === null) {
        dispatch(handelSkipCount(skipCount + 1));
      }
    }
  };
  // console.log(skipCount, questionIdx, quizQuestions.length);
  //check Ans Handler

  const checkAnsHandler = id => {
    setSelctedAns(id);
    if (quizQuestions[questionIdx].correctAnswer === id) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (timerCount > 0 && !selectedAns) {
        setTimerCount(pre => pre - 1);
      }
      if (timerCount === 0) {
        Alert.alert('TimeOut');
      }
      return clearInterval(intervalId);
    }, 1000);
  }, [timerCount, selectedAns]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0b2545'} />
      <LinearGradient
        colors={['#0b2545', '#0b2545']}
        style={styles.LinearGradient}>
        <View style={styles.headerWrapper}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timerTxt}>
              {questionIdx + 1}/{quizQuestions.length}
            </Text>
          </View>
          {/* TimerWrapper */}
          <View style={styles.timerWrapper}>
            <Text style={styles.timerTxt}>0:{timerCount}</Text>
          </View>
        </View>
        {/* Question wrapper */}
        <View style={styles.questionWrapper}>
          <Text style={styles.questionTxt}>
            {quizQuestions[questionIdx].question}
          </Text>
        </View>

        {/* option Wrapper */}
        <View style={styles.optionWrapper}>
          {quizQuestions[questionIdx].options.map((item, idx) => (
            <View key={idx}>
              <TouchableOpacity
                style={[
                  styles.optionBtn,
                  {
                    backgroundColor:
                      selectedAns == idx
                        ? quizQuestions[questionIdx].correctAnswer ===
                          selectedAns
                          ? '#8ac926'
                          : 'red'
                        : 'white',
                  },
                ]}
                disabled={
                  timerCount != 0 ? (selectedAns != null ? true : false) : true
                }
                r
                onPress={() => checkAnsHandler(idx)}>
                <Text style={[styles.optionTxt]}>{item}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Next question btn */}
        <View style={styles.nextQBtnWrapper}>
          <TouchableOpacity style={styles.nextBtn} onPress={moveNxtHandler}>
            <Text style={styles.nextBtnTxt}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
  },
  questionWrapper: {
    marginHorizontal: width * 0.05,
    marginTop: height * 0.1,
    height: height * 0.1,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
  },
  questionTxt: {
    fontFamily: fonts.Bold,
    color: 'white',
    fontSize: width * 0.034,
    lineHeight: height * 0.025,
  },
  optionWrapper: {
    marginTop: height * 0.05,
    height: height * 0.3,
    // width: width / 2,
    marginHorizontal: width * 0.05,
  },
  optionBtn: {
    backgroundColor: '#ffffff',
    marginBottom: height * 0.02,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.06,
    borderRadius: width * 0.03,
  },
  optionTxt: {
    fontFamily: fonts.SemiBold,
    fontSize: width * 0.032,
    color: 'black',
    // textAlign: 'center',
    textAlign: 'left',
  },
  nextQBtnWrapper: {
    backgroundColor: '#ae2012',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.29,
    borderRadius: width * 0.04,
  },
  nextBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },
  nextBtnTxt: {
    fontFamily: fonts.Bold,
    color: '#ffffff',
  },
  timerWrapper: {
    backgroundColor: '#ede0d4',
    // position: 'absolute',
    // right: width * 0.1,
    // marginTop: height * 0.01,
    height: height * 0.04,
    width: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.02,
  },
  timerTxt: {
    fontFamily: fonts.SemiBold,
    fontSize: width * 0.035,
    color: 'black',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.02,
  },
});
