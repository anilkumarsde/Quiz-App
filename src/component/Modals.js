import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';

const Modals = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <ReactNativeModal>
        <Text>HI</Text>
        <Button title="press" onPress={() => setModalVisible(false)} />
      </ReactNativeModal>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({});
