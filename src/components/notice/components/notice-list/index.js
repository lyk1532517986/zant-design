import React, {Component} from 'react';
import { Table  ,Notify } from 'zent';


const datasets = [
    {
        item_id: '5024217',
        bro_uvpv: '0/0',
        stock_num: '60',
        sold_num: 0,
    },
    {
        item_id: '5024277',
        bro_uvpv: '0/0',
        stock_num: 59,
        sold_num: 0,
    },
    {
        item_id: '13213123',
        bro_uvpv: '0/0',
        stock_num: 159,
        sold_num: 0,
    },
];
const datasets2 = [
    {
        item_id: '4217',
        bro_uvpv: '0/0',
        stock_num: '60',
        sold_num: 0,
    },
    {
        item_id: '50',
        bro_uvpv: '0/0',
        stock_num: 59,
        sold_num: 0,
    },
    {
        item_id: '13123',
        bro_uvpv: '0/0',
        stock_num: 159,
        sold_num: 0,
    },
];

const columns = [
    {
        title: '编号',
        width: 10,
        name:'bro_uvpv'
    },
    {
        title: '标题',
        width: 65,
        bodyRender: data => {
            return <div>{data.item_id}</div>;
        },
    },
    {
        title: '通知日期',
        name: 'stock_num',
        width: 15,
    },
    {
        title: '操作',
        name: 'sold_num',
        width: 10,
    },
];

class goodsSetting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: {
                pageSize: 3,
                current: 0,
                totalItem: 6,
            },
            datasets: datasets,
            selectedRowKeys: ['5024217', '5024277'],
        };
    }

    onSelect(selectedRowKeys, selectedRows, currentRow) {
        if (selectedRowKeys.length) {
            Notify.success(JSON.stringify(selectedRowKeys));
        }

        this.setState({
            selectedRowKeys,
        });
    }

    getRowConf(rowData, index) {
        return {
            canSelect: index % 2 === 0,
        };
    }

    onChange(conf) {
        this.setState({
            page: {
                pageSize: 3,
                current: conf.current,
                totalItem: 6,
            },
            datasets: conf.current === 1 ? datasets : datasets2,
        });
    }

    render() {
        let self = this;

        return (
            <Table
                columns={columns}
                datasets={this.state.datasets}
                rowKey="item_id"
                getRowConf={this.getRowConf}
                pageInfo={this.state.page}
                onChange={conf => {
                    this.onChange(conf);
                }}
                selection={{
                    selectedRowKeys: this.state.selectedRowKeys,
                    needCrossPage: true,
                    onSelect: (selectedRowKeys, selectedRows, currentRow) => {
                        self.onSelect(selectedRowKeys, selectedRows, currentRow);
                    },
                }}
            />
        );
    }
}

export default goodsSetting;
