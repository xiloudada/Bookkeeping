import { View, Button } from '@tarojs/components'
import React, { Component } from 'react'
import './index.scss'
import 'taro-ui/dist/style/components/tab-bar.scss'
import 'taro-ui/dist/style/components/badge.scss'
import 'taro-ui/dist/style/components/icon.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='content'>
        <View className='head'>
          <View>支出</View>
          <View>收入</View>
          <View>预算</View>
        </View>
        <View>
          <View>账单明细</View>
          <View>
            <View>时间</View>
            <View>icon</View>
            <View>类别</View>
            <View>备注</View>
            <View>金额</View>
          </View>
        </View>
        <Button className='btn'>记账</Button>
      </View>
    )
  }
}
