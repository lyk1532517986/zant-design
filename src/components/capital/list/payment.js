import React, {Component} from 'react';
import { Notify } from 'zent';
import * as Actions from '../../../api/users';

import Breadcrumb from '../../common/Breadcrumb';
import Filter from '../components/filter/index1';
import PaymentList from '../components/capital-list/payment';
import * as Helper from '../helper/index';

import './style.less';

class usersList extends Component {
    state = {
        filter_info: {
            start_time: '',
            end_time: '',
            type: 'all',
            state: 'all',
            usersby: 'book_time',
            users_es_tag: '',
            tuanId: '',
            users: 'desc',
            disable_express_type: '',
            users_label: 'users_no',
            feedback: 'all',
            buy_way: 'all',
            express_type: 'all',
            choose_days: 0,
            period_send_time: '',
            delivery_start_time: '',
            delivery_end_time: ''
        },
        page_info: {
            page: 1,
            count: 20,
            total: 0
        },
        list: [],
        loading: false
    };

    componentDidMount() {
        // const { location } = this.props;

        this.fetchList();
    }

    fetchList = options => {
        const param = Helper.serializeAjaxData(options, this.state);
        this.setState({
            loading: true
        });
        Actions.fetchUsersList(param)
            .then(({ list, page_info }) => {
                this.setState({
                    list,
                    page_info,
                    loading: false
                });
            })
            .catch(msg => {
                Notify.error(msg);
                this.setState({
                    loading: false
                });
            });
    };

    handlePageChange = current => {
        if (current) {
            this.fetchList({ page: current });
        }
    };

    render() {
        let self = this;
        const {
            filter_info: filterInfo,
            list,
            page_info: pageInfo,
            loading
        } = this.state;

        return (
            <div>
                <Breadcrumb paths={['结算订单']}/>
                <div className="app">
                    <div className="app-inner clearfix">
                        <div className='usersList'>
                            <Filter {...filterInfo} handleFilterChange={this.fetchList} />
                            <PaymentList
                                list={list}
                                pageInfo={pageInfo}
                                loading={loading}
                                onChange={this.handlePageChange}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default usersList;
