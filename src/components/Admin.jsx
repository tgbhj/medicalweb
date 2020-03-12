import React from 'react'
import { Table } from 'antd'
import fly from 'flyio'

class Admin extends React.Component {
    state = {
        info: []
    }

    async componentDidMount() {
        await fly
            .get('/info')
            .then(res => {
                if (res.data.code === 20000) {
                    this.setState({ info: res.data.cb })
                } else {
                    notification.error({
                        message: 'Error',
                        description: '',
                        duration: 2
                    })
                }
            })
            .catch(err => {
                notification.error({
                    message: err,
                    description: '',
                    duration: 2
                })
            })
    }

    render() {
        return <Table dataSource={this.state.info} rowKey='_id' scroll={{ scrollToFirstRowOnChange: true }}
            pagination={{ simple: true, total: this.state.info.length, pageSize: 20 }}
            expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{`联系人留言：${record.msg}`}</p>
            }}>
            <Table.Column title='公司名称' dataIndex='company' key='company' />
            <Table.Column title='联系人姓名' dataIndex='name' key='name' />
            <Table.Column title='联系人电话' dataIndex='phone' key='phone' />
            <Table.Column title='联系人邮箱' dataIndex='email' key='email' />
            <Table.Column title='提交日期时间' dataIndex='date' key='date' />
        </Table>
    }
}

export default Admin