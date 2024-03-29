import React, { Component } from 'react';
import './chart.less';
import Bar3D from './Bar3D';
import LiquidFill from './LiquidFill';
import GlobelLayers from './GlobeLayers';
import WordCloud from './WordCloud';
import Dashboard from './Dashboard';
import { Radio } from 'zent';
import Breadcrumb from '../../common/Breadcrumb'

const RadioGroup = Radio.Group;
export default class Echarts extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 1,
        }
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    showEchart = (value) => {
        switch(value){
            case 1:
                return <Bar3D />;
            case 2:
                return <LiquidFill />;
            case 3:
                return <GlobelLayers />;
            case 4:
                return <WordCloud />;
            case 5:
                return <Dashboard />;
            default:
                return null;
        }
    };
    render(){
        const { value } = this.state;
        return(
            <div>
                <Breadcrumb paths={['统计']}/>
                <div className="app">
                    <div className="app-inner clearfix">
                        <div className="charts-container">
                            <div className="echarts">
                                <div className="radioGroup">
                                    <RadioGroup onChange={this.onChange} value={value}>
                                        <Radio value={1}>Bar3D</Radio>
                                        <Radio value={2}>LiquidFill</Radio>
                                        <Radio value={3}>GlobelLayers</Radio>
                                        <Radio value={4}>WordCloud</Radio>
                                        <Radio value={5}>Dashboard</Radio>
                                    </RadioGroup>
                                </div>
                                <div className="showEchart">
                                    {this.showEchart(value)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}