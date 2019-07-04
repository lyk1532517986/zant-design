import React, {Component} from 'react';
import { Icon, Menu, Badge , Layout } from 'zent';
import { Link } from 'react-router-dom';
import history from './history';
import './Breadcrumb.less';
import zysoft from '../../style/img/avatar.jpg';


const { MenuItem , SubMenu } = Menu;
const { Row, Col } = Layout;





export default class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.addClass.bind(this);
        this.removeClass.bind(this);
        this.HelpShow = this.HelpShow.bind(this);
        this.state = {
            collapsed: props.collapsed,
        }
        this.logout = this.logout.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
        });
    };
    logout(){
        localStorage.removeItem("mspa_user");
        history.push('/login');
    }

    Breadcrumbs(){
        const { paths } = this.props;
        return (
            <span>{paths}</span>
        )
    }
    HelpShow(){
        let _Body = document.querySelector('body');
        let appHelpContainer = document.getElementById('app-help-container');
        this.removeClass(_Body,'hide-help');
        this.addClass(_Body,'show-help');
        this.addClass(appHelpContainer,'show-help');
    }
    addClass(ele, cls) {
        if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    }
    removeClass(ele, cls) {
        if (this.hasClass(ele, cls)) {
            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
    hasClass(ele, cls) {
        return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
    render() {
        return (
            <div id="app-third-sidebar" className="js-app-third-sidebar">
                <div className="zent-breadcrumb js-page-breadcrumb">
                    {this.Breadcrumbs()}
                </div>
                <div id="app-user-box">
                    <Row>
                        <Col span={18} offset={6}>
                            <ul className="clearfix">
                                <li>
                                    <Badge count={1200} maxCount={99}>
                                        <i className='my-icon my-cart-icon'></i>
                                        <span>购物车</span>
                                    </Badge>
                                </li>
                                <li>
                                    <Badge count={1200} maxCount={99}>
                                        <i className="my-icon my-announcement-icon"></i>
                                        <span>消息公告</span>
                                    </Badge>
                                </li>
                                <li>
                                    <Badge count={1200} maxCount={99}>
                                        <i className="my-icon my-message-icon"></i>
                                        <span>代办任务</span>
                                    </Badge>
                                </li>
                                <li>
                                    <div className="avatar">
                                        <img src={zysoft} alt="avatar"/>
                                    </div>
                                    <em>某某某五金店</em>
                                    <Icon type="right" className="my-down-icon"/>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
                <div id="app-help-button" className="js-app-help-button" onClick={this.HelpShow}>
                    <i className="app-help-icon app-help-icon-help"></i>
                    帮助和服务
                </div>
            </div>
        );
    }
}

