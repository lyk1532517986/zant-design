import React, {Component} from 'react';
import { Table  ,Notify } from 'zent';


const datasets = [
    {
        item_id: '5024217',
        bro_uvpv: '0/0',
        stock_num: '国标滑道',
        sold_num: 0,
        src:'https://img.yzcdn.cn/upload_files/2017/06/19/Fna08FxNZDN37i6oxWOCK9KnQ8IQ.png?imageView2/2/w/120/h/120/q/75/format/webp'
    },
    {
        item_id: '5024277',
        bro_uvpv: '0/0',
        stock_num: 59,
        sold_num: 0,
        src:'https://img.yzcdn.cn/upload_files/2017/06/19/Fna08FxNZDN37i6oxWOCK9KnQ8IQ.png?imageView2/2/w/120/h/120/q/75/format/webp'
    },
    {
        item_id: '13213123',
        bro_uvpv: '0/0',
        stock_num: 159,
        sold_num: 0,
        src:'https://img.yzcdn.cn/upload_files/2017/06/19/Fna08FxNZDN37i6oxWOCK9KnQ8IQ.png?imageView2/2/w/120/h/120/q/75/format/webp'
    },
];
const datasets2 = [
    {
        item_id: '4217',
        bro_uvpv: '0/0',
        stock_num: '60',
        sold_num: 0,
        src:'https://img.yzcdn.cn/upload_files/2017/06/19/Fna08FxNZDN37i6oxWOCK9KnQ8IQ.png?imageView2/2/w/120/h/120/q/75/format/webp'
    },
    {
        item_id: '50',
        bro_uvpv: '0/0',
        stock_num: 59,
        sold_num: 0,
        src:'https://img.yzcdn.cn/upload_files/2017/06/19/Fna08FxNZDN37i6oxWOCK9KnQ8IQ.png?imageView2/2/w/120/h/120/q/75/format/webp'
    },
    {
        item_id: '13123',
        bro_uvpv: '0/0',
        stock_num: 159,
        sold_num: 0,
        src:'https://img.yzcdn.cn/upload_files/2017/06/19/Fna08FxNZDN37i6oxWOCK9KnQ8IQ.png?imageView2/2/w/120/h/120/q/75/format/webp'
    },
];

const columns = [
    {
        title: '商品图片',
        name: 'bro_uvpv',
        width: 15,
        bodyRender: data => {
            return <img src={data.src} width={'60px'}/>;
        },
    },
    {
        title: '商品名称',
        name: 'stock_num',
        width: 15,
    },
    {
        title: '规格型号',
        name: 'sold_num',
        width: 15,
    },
    {
        title: '单位',
        name: 'sold_num',
        width: 15,
    },
    {
        title: '进货价',
        name: 'sold_num',
        width: 15,
    },
    {
        title: '采购数量',
        name: 'sold_num',
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

            />
        );
    }
}

export default goodsSetting;
