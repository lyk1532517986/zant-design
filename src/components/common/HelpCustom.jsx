import React, {Component} from 'react';
import './HelpCustom.less';

class HelpCustom extends Component {
    constructor(props) {
        super(props);
        this.resizeBind = this.resize.bind(this);
        this.addClass.bind(this);
        this.removeClass.bind(this);
        this.HelpClose = this.HelpClose.bind(this);
    }
    componentDidMount() {
        this.screenChange();
        let _Body = document.querySelector('body');
        let appHelpContainer = document.getElementById('app-help-container');
        let offerWidth = _Body.offsetWidth;
        if(offerWidth<1200){
            this.removeClass(_Body,'show-help');
            this.addClass(_Body,'hide-help');
            this.removeClass(appHelpContainer,'show-help');
        }else{
            this.removeClass(_Body,'hide-help');
            this.addClass(_Body,'show-help');
            this.addClass(appHelpContainer,'show-help');
        }
    }
    HelpClose(){
        let _Body = document.querySelector('body');
        let appHelpContainer = document.getElementById('app-help-container');
        this.removeClass(_Body,'show-help');
        this.addClass(_Body,'hide-help');
        this.removeClass(appHelpContainer,'show-help');
    }
    screenChange() {
        window.addEventListener('resize', this.resizeBind);
    }
    componentWillUnmount() {
        window.removeEventListener('resize',this.resizeBind);
    }
    resize(){
        let _Body = document.querySelector('body');
        let appHelpContainer = document.getElementById('app-help-container');
        let offerWidth = _Body.offsetWidth;
        if(offerWidth<1200){
            this.removeClass(_Body,'show-help');
            this.addClass(_Body,'hide-help');
            this.removeClass(appHelpContainer,'show-help');
        }else{
            this.removeClass(_Body,'hide-help');
            this.addClass(_Body,'show-help');
            this.addClass(appHelpContainer,'show-help');
        }
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
            <div id="app-help-container-react">
                <div className="zent-portal">
                    <div id="app-help-container" className="react-page-help" >
                        <div className="help-container-head">
                            <i className="app-help-icon app-help-icon-help"></i>
                            <span>帮助和服务</span>
                            <i className="app-help-icon app-help-icon-close" onClick={this.HelpClose}></i>
                        </div>
                        <div className="help-container-body">
                            <div>
                                <div className="help-body-title" data-yz_ctn_module="helpcenter">
                                    帮助中心
                                    <a href="//help.youzan.com" target="_blank" rel="noopener noreferrer" className="pull-right">
                                        进入
                                        <i className="app-help-icon app-help-icon-more"></i></a>
                                </div>
                                <div className="help-body-content" data-yz_ctn_module="helpcenter">
                                    <p>
                                        <span >如何推广自己的店铺？</span>
                                        <br />
                                        <span >微信推广、微博推广、线下推广等方式引导买家进入店铺 。</span>
                                        <a href="https://help.youzan.com/qa#/menu/2212/detail/852?_k=ddusyg" target="_blank" rel="noopener noreferrer">
                                            详情<br />
                                        </a>
                                    </p>
                                    <hr />
                                    <p>
                                        <a href="https://help.youzan.com/qa#/menu/2211/detail/853?_k=bhw37j" target="_blank" rel="noopener noreferrer">
                                            如何将店铺或商品分享到朋友圈？<br />
                                        </a>
                                        <a href="https://help.youzan.com/qa?cat_sys=K#/menu/2211/detail/854?_k=ppl8av" target="_blank" rel="noopener noreferrer">
                                            买家怎么访问我的店铺？
                                        </a>
                                        <a href="https://help.youzan.com/qa#/menu/2211/detail/853?_k=bhw37j" target="_blank" rel="noopener noreferrer">
                                            <br />
                                        </a>
                                    </p>
                                    <p>&nbsp;</p>
                                </div>
                                <div>
                                    <div className="help-body-split-line"></div>
                                    <div className="help-body-title">有赞服务窗口</div>
                                    <div className="help-body-service">
                                        <a target="panama_customer" className="customer-contact-block" href="//www.youzan.com/v2/consultation/dashboard/index">
                                            <div className="panama-customer-block wsc-panama-customer-block">
                                            <span className="panama-customer-button">
                                                <span className="panama-customer-inner">在线客服</span>
                                            </span>
                                            </div>
                                            <div className="service-hotline wsc-service-hotline">电话客服：0571-89988848</div>
                                        </a></div>
                                </div>
                                <div className="help-body-split-line"></div>
                                <div className="help-body-title">
                                    找服务
                                    <a href="//fuwu.youzan.com/account/CustomerDemand/businessDemand" target="_blank" rel="noopener noreferrer" className="pull-right">
                                        发布服务需求
                                        <i className="app-help-icon app-help-icon-more"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HelpCustom;
