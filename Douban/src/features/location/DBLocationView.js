import React, { Component } from 'react';
import { SearchBar, DatePickerView, PickerView, List, Picker } from 'antd-mobile-rn';
// 省市级别数据
import { district } from 'antd-mobile-demo-data';
import Api from '../../Services'
import {
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import axios from 'axios';
const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onClick}>
    <View
      style={{ height: 36, paddingLeft: 15, flexDirection: 'row', alignItems: 'center' }}
    >
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</Text>
    </View>
  </TouchableOpacity>
);
export default class DBLocationView extends Component {
  state = {
    hotWord: "我药神",
    regionPicker: {
      data: [],
      value: [],
      pickerValue: [],
    }
  }
  componentDidMount() {

    console.log(123)
  }
  dateChange = (item) => {

  }
  getData() {
    Api.login()
      .then(data => {
        console.log(data.data)
      })
  }
  render() {
    return (
      <View>
        <SearchBar defaultValue={this.state.hotWord} placeholder={this.state.hotWord} />
        <Button onPress={this.getData} title={'获取数据'}></Button>
        <List>
          <Picker
            title="选择地区"
            data={district}
            cols={2}
            value={this.state.regionPicker.pickerValue}
            onChange={(v: any) => this.setState({ pickerValue: v })}
            onOk={(v: any) => this.setState({ pickerValue: v })}
          >
            <CustomChildren>Customized children</CustomChildren>
          </Picker>
        </List>
      </View>
    );
  }
}
