/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

function LoginMomo({navigation}) {
  const [login, setLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.hiText}>Xin chào</Text>
        <Text style={styles.userText}>Phạm Phong Pôn</Text>
        <Text style={styles.userText}>0345953931</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputPassword}
          keyboardType="numeric"
          secureTextEntry={true}
          autoFocus={true}
          placeholder="nhập mật khẩu"
          placeholderTextColor="#929292"></TextInput>
        <TouchableOpacity
          style={styles.touchLogin}
          onPress={() => navigation.navigate('home')}>
          <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        {login ? (
          <Text style={styles.loginText}>ĐĂNG NHẬP thanh cong</Text>
        ) : (
          <Text style={styles.loginText}>ĐĂNG NHẬP that bai</Text>
        )}
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.touchAction}>
          <Text style={styles.actionText}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchAction}>
          <Text style={styles.actionText}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const TEXT = {
  color: '#fff',
  textAlign: 'center',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0006d',
  },
  content: {marginTop: 50},

  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  form: {
    // width: ,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: '#929292',
    backgroundColor: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '85%',
  },
  touchLogin: {
    height: 50,
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: '#8d015a',
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
  },
  loginText: {
    ...TEXT,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchAction: {
    marginLeft: 25,
    marginRight: 25,
  },
  actionText: {
    ...TEXT,
    fontSize: 16,
  },
});

export default LoginMomo;
