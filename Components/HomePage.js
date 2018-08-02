import React, {Component} from 'react'
import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import {Spinner} from 'native-base'
import ActualContent from './ActualContent'
import {SERVER_URL} from '../config'
import moment from 'moment'
import { Card, Icon } from 'react-native-elements'
import TimeAgo from 'react-native-timeago'

class HomePage extends Component{
  constructor(props){
    super(props)

    this.state = {
      status: false,
    }
  }

  tap(){
    this.setState(function(prevState){
      return {status: !prevState.status}
    })
  }

  render(){
    let data = this.props.data
    let path = SERVER_URL + 'images/'
    let preview = path + this.props.data.foto
    return(
      <ScrollView style={{backgroundColor: '#e2e2e2'}}>
        {
          this.props.data.length === 0
          ?
          <Spinner color='#4d2e9b' />
          :
          <View>

          </View>
        }
        <View style={{height: 15}}></View>
      </ScrollView>
    )
  }
}

function mapStateToProps(state){
  return{
    data: state.data,
    utility: state.utility,
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
