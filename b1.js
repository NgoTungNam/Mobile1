import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Đổi tên thành PhoneInputField để tránh xung đột
const PhoneInputField = ({ phoneNumber, setPhoneNumber }) => (
  <TextInput
    style={styles.input}
    placeholder="Nhập số điện thoại của bạn"
    value={phoneNumber}
    onChangeText={setPhoneNumber}
    keyboardType="phone-pad"
  />
);

const NumberPad = ({ onPress }) => (
  <View style={styles.numberPad}>
    {['1', '2 ABC', '3 DEF', '4 GHI', '5 JKL', '6 MNO', '7 PQRS', '8 TUV', '9 WXYZ', '*', '0', '#'].map((item) => (
      <TouchableOpacity key={item} style={styles.numberButton} onPress={() => onPress(item)}>
        <Text style={styles.numberText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleButtonPress = (value) => {
    if (!isNaN(value)) {
      setPhoneNumber((prev) => prev + value);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập Số Điện Thoại</Text>
      <PhoneInputField phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      <NumberPad onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'space-between',
  },
  numberButton: {
    width: '25%',
    height: 50,
    backgroundColor: '#f0f0f0',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  numberText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Xuất đúng component chính
export default PhoneInputScreen;