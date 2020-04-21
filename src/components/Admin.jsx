import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import fly from 'flyio'

function Admin() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fly
                .get('/info')
                .then(res => {
                    if (res.data.code === 20000) {
                        setInfo(res.data.cb)
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
        fetchData()
    }, [])

    return <Table dataSource={info} rowKey='id' scroll={{ scrollToFirstRowOnChange: true }}
        pagination={{ simple: true, total: info.length, pageSize: 20 }}
        expandable={{ expandedRowRender: record => <p style={{ margin: 0 }}>{`联系人留言：${record.msg}`}</p> }}>
        <Table.Column title='ID' dataIndex='id' />
        <Table.Column title='公司名称' dataIndex='company' />
        <Table.Column title='联系人姓名' dataIndex='name' />
        <Table.Column title='联系人电话' dataIndex='phone' />
        <Table.Column title='联系人邮箱' dataIndex='email' />
        <Table.Column title='提交日期时间' dataIndex='createdAt' />
    </Table>
}

export default Admin