import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'zent';
import './SiderCustom.less';
import HelpCustom from '../common/HelpCustom';


let nav = [
    {
        name: "首页",
        to:'/app',
        icon:'summary-o',
        activeIcon:'summary',
        id:1,
        active:false,
        title:'首页管理'
    },
    {
        name: "商品",
        to:'/app/goodsSetting',
        icon:'goods-o',
        activeIcon:'goods',
        id:2,
        active:false,
        title:"商品管理",
        children:[
            {
                name:'商品设置',
                to:'/app/goodsSetting',
                id:2001,
                active:false,
                pid:2
            },
            {
                name:'商品列表',
                to:'/app/goodsList',
                id:2001,
                active:false,
                pid:2
            },
        ]
    },
    {
        name: "订单",
        to:'/app/order/dinghuo',
        icon:'order-o',
        activeIcon:'order',
        id:3,
        active:false,
        title:"订单管理",
        children:[
            {
                name:'订货订单',
                to:'/app/order/dinghuo',
                id:3001,
                active:false,
                pid:3
            },
            {
                name:'销售订单',
                to:'/app/order/xiaoshou',
                id:3002,
                active:false,
                pid:3
            },
            {
                name:'退货订单',
                to:'/app/order/tuihuo',
                id:3003,
                active:false,
                pid:3
            },
        ]
    },
    {
        name: "会员",
        to:'/app/users/list',
        icon:'customer-o',
        activeIcon:'customer',
        id:4,
        active:false,
        title:"会员管理",
        children:[
            {
                name:'会员列表',
                to:'/app/users/list',
                id:4001,
                active:false,
                pid:4
            },
        ]
    },
    {
        name: "资金",
        to:'/app/capital/money',
        icon:'capital-o',
        activeIcon:'capital',
        id:5,
        active:false,
        title:"资金管理",
        children:[
            {
                name:'账户资金',
                to:'/app/capital/money',
                id:5001,
                active:false,
                pid:5
            },
            {
                name:'收支明细',
                to:'/app/capital/account',
                id:5002,
                active:false,
                pid:5
            },
            {
                name:'结算订单',
                to:'/app/capital/payment',
                id:5003,
                active:false,
                pid:5
            },
        ]
    },
    {
        name: "统计",
        to:'/app/chart/echarts',
        icon:'chart-o',
        activeIcon:'chart',
        id:6,
        active:false,
        title:"统计管理",
        children:[
            {
                name:'销售统计',
                to:'/app/chart/echarts',
                id:6001,
                active:false,
                pid:6
            },
            {
                name:'利润统计',
                to:'/app/chart/echarts1',
                id:6002,
                active:false,
                pid:6
            },
            {
                name:'商品统计',
                to:'/app/chart/echarts2',
                id:6003,
                active:false,
                pid:6
            },
            {
                name:'会员统计',
                to:'/app/chart/echarts3',
                id:6004,
                active:false,
                pid:6
            },
        ]
    },
    {
        name: "信息",
        to:'/app/notice/priceNotice',
        icon:'error-circle-o',
        activeIcon:'error-circle',
        id:7,
        active:false,
        title:"信息管理",
        children:[
            {
                name:'调价通知',
                to:'/app/notice/priceNotice',
                id:7001,
                active:false,
                pid:7
            },
        ]
    },
    {
        name: "系统",
        to:'/app/system/companyInfo',
        icon:'settings-o',
        activeIcon:'settings',
        id:8,
        active:false,
        title:"系统管理",
        children:[
            {
                name:'企业信息',
                to:'/app/system/companyInfo',
                id:8001,
                active:false,
                pid:8
            },
            {
                name:'合同管理',
                to:'/app/system/contract',
                id:8002,
                active:false,
                pid:8
            },
            {
                name:'员工管理',
                to:'/app/system/staff',
                id:8003,
                active:false,
                pid:8
            },
            {
                name:'收货地址',
                to:'/app/system/userAddress',
                id:8004,
                active:false,
                pid:8
            },
        ]
    },
];



class SiderCustom extends Component {
    constructor(props) {
        super(props);
        this.navItemClick = this.navItemClick.bind(this);
        this.navChildItemClick = this.navChildItemClick.bind(this);
        this.state = {
            navChildren:null,
            letters: nav,
            navTitle:''
        };
    }
    componentDidMount() {
        this.setMenuOpen(this,this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.setMenuOpen(this,nextProps);
    }
    setMenuOpen = ($this,props) => {
        console.log(props);
        const {path} = props;
        let traget = $this.refs.secondSideber;
        let tragetBox = $this.refs.appSideber;
        let tragetContainer = document.getElementById('app-container');
        if(nav.length>0){
            nav.map(function(item,index) {
                item.active = false;
                let navIndex = index;
                let navChildList=nav[index].children?nav[index].children:[];
                if(navChildList.length>0) {

                    navChildList.map(function (item1, index1) {
                        item1.active=false;
                        if (item1.to === path) {
                            if(navChildList[index1].pid === nav[navIndex].id){
                                traget.style.display="";
                                tragetBox.style.width="200px";
                                tragetContainer.style.marginLeft="200px";
                                nav[navIndex].active=true;
                                $this.setState({navTitle:nav[index].title?nav[index].title:''});
                                navChildList[index1].active = true;
                                $this.setState({navChildren: navChildList ? navChildList : []});
                            }
                        }
                        return navChildList;
                    });
                }else{
                    if (item.to === path) {
                        nav[index].active=true;
                        traget.style.display="none";
                        tragetBox.style.width="90px";
                        tragetContainer.style.marginLeft="90px";
                        $this.setState({navTitle:nav[index].title?nav[index].title:''});
                        return nav;
                    }
                }

                return nav;
            });

        }

    };

    navItemClick (letter){
        console.log(letter);
        let letters = this.state.letters;
        letters.map(function(item,index) {
            item.active = false;
            return letters;
        });
        letter.active=true;
        let traget = this.refs.secondSideber;
        let tragetBox = this.refs.appSideber;
        let tragetContainer = document.getElementById('app-container');
        this.setState({navTitle:letter.title?letter.title:''});
        this.setState({navChildren:letter.children?letter.children:[]}, ()=>{
            let navChildren = this.state.navChildren;
            if(navChildren.length>0){
                navChildren[0].active=true;
                traget.style.display="";
                tragetBox.style.width="200px";
                tragetContainer.style.marginLeft="200px";
            }else{
                traget.style.display="none";
                tragetBox.style.width="90px";
                tragetContainer.style.marginLeft="90px";
            }
        });

    };
    navChildItemClick(letter) {
        let navChild = this.state.navChildren;
        navChild.map(function(item,index) {
            item.active = false;
            return navChild;
        });
        letter.active=true;
    }

    SubMenu(){
        let menu = this.state.letters.map( (item,index) =>
            <li key={index} onClick={()=>this.navItemClick(item)} className={item.active?'active':''}>
                <Link to={item.to}>
                    <Icon type={item.active?item.activeIcon:item.icon} className="sidebar-icon" />
                    {item.name}
                </Link>
            </li>
        );
        return menu;
    }
    MenuChild(){
        let menuchild = '';
        let navChildren = this.state.navChildren?this.state.navChildren:[];
        if (navChildren.length > 0) {
            menuchild = navChildren.map((item, index) =>
                <li key={index} className={item.active ? "active" : ''} onClick={()=>this.navChildItemClick(item)}>
                    <Link to={item.to}>
                        {item.name}
                    </Link>
                </li>
            );
        }
        return menuchild;
    }

    render() {
        return (
            <div>
                <aside id="app-sidebar" ref="appSideber">
                    <div id="team-logo-info">
                        <a className="team-logo-wrap" href="//www.youzan.com/v2/setting/store#index">
                            <div className="team-logo"></div>
                        </a>
                    </div>
                    <div id="app-first-sidebar">
                        <nav >
                            <ul>
                                {this.SubMenu()}
                            </ul>
                        </nav>
                    </div>
                    <div id="app-second-sidebar" ref="secondSideber">
                        <div className="second-sidebar-content">
                            <div className="second-sidebar-title">{this.state.navTitle}</div>
                            <nav >
                                <ul>
                                    {this.MenuChild()}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </aside>

                <HelpCustom />

            </div>

        );
    }
}

export default SiderCustom;
