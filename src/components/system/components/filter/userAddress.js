/**
 * 商品设置筛选区域
 */

import React, { Component } from 'react';
import { Input, Select, Button, DatePicker, DateRangeQuickPicker } from 'zent';
import Field from '../../../common/filter/Field';
import * as Helper from '../../helper/index';
import {
  typeMap,
  stateMap
} from '../../constants/index';
import {orderLabelMap} from "../../../order/constants";

export default class Filter extends Component {
  state = {
    order_label: 'order_no',
    order_label_value: '',
    choose_days: 0,
    type: 'all',
    state: 'all',
    express_type: 'all',
    feedback: 'all',
    buy_way: 'all',
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


  render() {
    const {
      order_label: orderLabel,
      order_label_value: orderLabelValue,
      type,
      feedback,
      state,
      express_type: expressType,
      buy_way: buyWay,
      choose_days: chooseDays,
    } = this.state;


    return (
      <div className="trade-order-list__filter-div" style={{marginBottom: '20px'}}>
        <div className="trade-order-list__filter">
          <div className="trade-order-list__filter-row">
            <div className="trade-order-list__filter-order-search">
              <Input
                  className="order-input"
                  name="order_label_value"
                  type="text"
                  value={orderLabelValue}
                  onChange={this.handleChange}
              />
            </div>

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
