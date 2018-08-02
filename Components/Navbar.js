import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <View style={styles.customBold}></View>
        <Header style={{backgroundColor: '#4d2e9b'}}>
          <Body>
            <Title style={{fontFamily: 'kinkeefont', fontSize: 25}}>Supermia</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='md-home' />
            </Button>
            <Button transparent>
              <Icon name='md-person' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  customBold: {
    backgroundColor: '#523796',
    height: 20
  }
})
