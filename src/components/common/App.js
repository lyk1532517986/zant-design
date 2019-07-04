import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { Layout } from 'zent';
import './App.less';
import SiderCustom from './SiderCustom';
import FooterCustom from './FooterCustom';
import MIndex from '../index/index';
import Echarts from '../chart/echarts/Echarts';
import GoodsSettingList from '../goods/list/index';
import GoodsList from '../goods/list/list';
import SelfOrder from '../order/list/index';
import SalesOrder from '../order/list/salesOrder';
import BackOrder from '../order/list/backOrder';
import UsersList from '../users/list/index';
import MoneyList from '../capital/list/index';
import AccountList from '../capital/list/account';
import PaymentList from '../capital/list/payment';
import PriceNotice from '../notice/list/index';
import CompanyInfo from '../system/form/index';
import Contract from '../system/list/index';
import Staff from '../system/list/staff';
import UserAddress from '../system/list/userAddress';


const { Row, Col } = Layout;
class App extends Component {
  render() {
      const {location} = this.props;

      return (

      <div className="layout-basic">
        <Row>
            <Col span={24}>
                <SiderCustom path={location.pathname} />
                <div id="app-container" className="container" ref="appContainer">
                    <Switch>
                        <Route exact path={'/app'} component={MIndex} />
                        <Route exact path={'/app/chart/echarts'} component={Echarts} />
                        <Route exact path={"/app/goodsSetting"} component={GoodsSettingList} />
                        <Route exact path={"/app/goodsList"} component={GoodsList} />
                        <Route exact path={"/app/order/dinghuo"} component={SelfOrder} />
                        <Route exact path={"/app/order/xiaoshou"} component={SalesOrder} />
                        <Route exact path={"/app/order/tuihuo"} component={BackOrder} />
                        <Route exact path={"/app/users/list"} component={UsersList} />
                        <Route exact path={"/app/capital/money"} component={MoneyList} />
                        <Route exact path={"/app/capital/account"} component={AccountList} />
                        <Route exact path={"/app/capital/payment"} component={PaymentList} />
                        <Route exact path={"/app/notice/priceNotice"} component={PriceNotice} />
                        <Route exact path={"/app/system/companyInfo"} component={CompanyInfo} />
                        <Route exact path={"/app/system/contract"} component={Contract} />
                        <Route exact path={"/app/system/staff"} component={Staff} />
                        <Route exact path={"/app/system/userAddress"} component={UserAddress} />
                    </Switch>

                    <FooterCustom />
                </div>
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;
