import React, { Component } from 'react';
import { Text, Button, Container, Content, Label, Item, Input, Icon } from 'native-base';
import Navbar from './Navbar'
import { TouchableOpacity, StyleSheet, View} from 'react-native'

export default class RegisterLoginPage extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#e2e2e2'}}>
        <Navbar />
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{fontSize: 35, color: '#4d2e9b', fontFamily: 'kinkeefont'}}>Login</Text>
        </View>
        <Content style={styles.content}>
            <Item floatingLabel>
              <Label style={{color: "#4d2e9b"}}>Email</Label>
              <Input style={{color: "#4d2e9b"}}/>
            </Item>
            <View style={{height: 20}}></View>
            <Item floatingLabel>
              <Label style={{color: "#4d2e9b"}}>Password</Label>
              <Input style={{color: "#4d2e9b"}} secureTextEntry={true} />
            </Item>
        </Content>
          <TouchableOpacity style={styles.customButton}>
            <Text style={{alignItems: 'center', color: 'white'}}>Masuk</Text>
          </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginBottom: 30,
  },
  customButton: {
    backgroundColor: '#4d2e9b',
    marginLeft: 30,
    marginBottom: 220,
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
  }
})
