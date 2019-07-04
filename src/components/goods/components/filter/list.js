/**
 * 商品列表筛选区域
 */

import React, { Component } from 'react';
import { Input, Select, Button, DatePicker, DateRangeQuickPicker } from 'zent';
import Field from '../../../common/filter/Field';
import * as Helper from '../../helper/index';
import {
  orderLabelMap,
  typeMap,
  stateMap,
  buyWayMap,
  expressTypeMap
} from '../../constants/index';

export default class Filter extends Component {
  state = {
    order_label: 'order_no',
    order_label_value: '',
    start_time: '',
    end_time: '',
    choose_days: 0,
    type: 'all',
    state: 'all',
    express_type: 'all',
    feedback: 'all',
    buy_way: 'all',
    period_send_time: ''
  };

  handleChangeDate = (value, chooseDays) => {
    this.setState({
      start_time: value[0],
      end_time: value[1],
      choose_days: chooseDays
    });
  };

  hanleChangePeriodDate = periodTime => {
    this.setState({
      period_send_time: periodTime
    });
  };

  handleChange = e => {
    const target = e.target;
    this.setState({
      [target.name]: target.value
    });
  };

  // 筛选列表
  onSearch = () => {
    const { handleFilterChange } = this.props;
    handleFilterChange(this.state);
  };

  onExport = () => {};

  handleTabChange = tabId => {
    const { handleFilterChange } = this.props;
    this.setState({
      state: tabId
    });
    handleFilterChange(this.state);
  };

  render() {
    const {
      order_label: orderLabel,
      order_label_value: orderLabelValue,
      type,
      feedback,
      state,
      express_type: expressType,
      buy_way: buyWay,
      start_time: startTime,
      end_time: endTime,
      choose_days: chooseDays,
      period_send_time: periodSendTime
    } = this.state;

    const dateValue = [startTime, endTime];

    return (
      <div className="trade-order-list__filter-div" style={{marginBottom:'20px'}}>
        <div className="trade-order-list__filter">
          <div className="trade-order-list__filter-row">
            <Field
              label="商品名称"
              content={
                <Input
                    className="order-input"
                    name="order_label_value"
                    type="text"
                    value={orderLabelValue}
                    onChange={this.handleChange}
                />
                }
            />

            <Field
              label="商品分类"
              content={
                <Select
                  name="type"
                  value={type}
                  data={Helper.transformSelectData(typeMap)}
                  onChange={this.handleChange}
                />
              }
            />
            <Field
              label="商品品牌"
              className="feedback-change-line-style"
              content={
                <Select
                  name="feedback"
                  value={feedback}
                  data={Helper.transformSelectData(stateMap.feedback)}
                  onChange={this.handleChange}
                />
              }
            />
          </div>
          <div
            className="trade-order-list__filter-row"
            style={{ marginTop: '20px' }}
          >
            <Button
              className="trade-refundsManage__filter-btn"
              type="primary"
              onClick={this.onSearch}
            >
              搜索
            </Button>
            <a href="javascript:void(0)" style={{marginLeft: '10px'}}>清空筛选条件</a>
          </div>
        </div>
      </div>
    );
  }
}
