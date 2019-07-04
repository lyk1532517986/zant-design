import React, {Component} from 'react';
import { Card,Layout , Icon } from 'zent';
import './index.less'
import CountUp from 'react-countup';
import ReactEcharts from 'echarts-for-react';
import Breadcrumb from '../common/Breadcrumb';


const { Row, Col } = Layout;

console.log(window._global);


class MIndex extends Component {


    CountUp(){
        let imgName = ["今日销售额","今日订单数","待处理订单"];
        let cardDackground = ["#4A90E2","#FE6767","#6EE1C7"];
        let count = ["1379","768","192"];
        let cu = imgName.map(function(item,index){
            return(
                <Col span={8} key={item}>
                    <Card style={{ cursor:'pointer', marginBottom:16,backgroundColor:cardDackground[index]}}
                          actions={<Icon type="plus-circle-o" />}
                          className="my-chart-card"
                    >

                        <div className="card-meta" style={{fontSize:22}}>
                            <div className="card-meta-avatar">
                                <img src={require('../../style/img/chart-backgournd.png')} alt="" />
                            </div>
                            <div className="card-meta-detail">
                                <div className="card-meta-description">
                                    <span>
                                        {<CountUp start={0} end={count[index]} duration={2.75} />}
                                    </span>
                                </div>
                                <div className="card-meta-title">{item}</div>
                            </div>
                        </div>
                    </Card>
                </Col>
            )
        });
        return cu;
    }
    getOption(){
        let option = {
            backgroundColor: "#fff",
            color: ['rgb(216, 151, 235)', 'rgb(246, 152, 153)', 'rgb(100, 234, 145)'],
            title: [{
                text: '账单/亿',
                left: '2%',
                top: '6%',
                textStyle: {
                    fontWeight:'normal',
                },
            }],
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                left:'6%',
                width:'90%',
            },
            legend: {
                //x: 300,
                top: '7%',
                right: '3%',
                textStyle: {
                    color: 'gray',
                },
                data: ['网购', '线下', '其他']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine:{
                    lineStyle:{
                        color:'lightgray',
                    },
                },
                axisLabel:{
                    color:'gray'
                },
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            yAxis: {
                min: 0,
                max: 100,
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'lightgray',
                    },
                },
                axisLabel:{
                    color:'gray'
                },
            },
            series: [{
                name: '网购',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [10, 40, 32, 20, 80, 90, 97]
            }, {
                name: '线下',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [70, 50, 50, 87, 90, 80, 70]
            },{
                name: '其他',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [30, 40, 10, 20, 33, 66, 54]
            }]
        };
        return option;
    }
    getOption1() {
        let option = {
            backgroundColor: "#fff",
            color: ['rgb(216, 151, 235)', 'rgb(246, 152, 153)', 'rgb(100, 234, 145)'],
            title: [{
                text: '账单/亿',
                left: '2%',
                top: '6%',
                textStyle: {
                    fontWeight: 'normal',
                },
            }],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '6%',
                width: '90%',
            },
            legend: {
                //x: 300,
                top: '7%',
                right: '3%',
                textStyle: {
                    color: 'gray',
                },
                data: ['网购', '线下', '其他']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: 'lightgray',
                    },
                },
                axisLabel: {
                    color: 'gray'
                },
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            yAxis: {
                min: 0,
                max: 100,
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: 'lightgray',
                    },
                },
                axisLabel: {
                    color: 'gray'
                },
            },
            series: [{
                name: '网购',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [10, 40, 32, 20, 80, 90, 97]
            }, {
                name: '线下',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [70, 50, 50, 87, 90, 80, 70]
            }, {
                name: '其他',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [30, 40, 10, 20, 33, 66, 54]
            }]
        };
        return option;
    }

    state = {
        activeKey: '1',
        timelineSize:122
    };
    handleChange(activeKey) {
        this.setState({
            activeKey
        });
    }
    render() {
        return (
            <div>
                <Breadcrumb paths={['店铺概况']}/>
                <div className="app">
                    <div className="app-inner clearfix">
                        <div className='mindex'>
                            <Row >
                                {this.CountUp()}
                            </Row>
                            <Row >
                                <Col span={24}>
                                    <Card
                                        style={{paddingBottom:15}}
                                        bodyStyle={{padding: 0,height:'277px',overflow:'hidden'}}>
                                        <ReactEcharts
                                            option={this.getOption()}
                                        />
                                    </Card>
                                </Col>
                            </Row>
                            <Row >
                                <Col span={24}>
                                    <Card
                                        style={{paddingBottom:15}}
                                        bodyStyle={{padding: 0,height:'277px',overflow:'hidden'}}>
                                        <ReactEcharts
                                            option={this.getOption1()}
                                        />
                                    </Card>
                                </Col>
                            </Row>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MIndex;
