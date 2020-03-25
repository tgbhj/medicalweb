import React from 'react'
import { Form, Button, Input, notification } from 'antd'
import fly from 'flyio'

function Info() {
    const onFinish = async values => {
        await fly
            .post('/info', {
                company: values.company,
                name: values.name,
                phone: values.phone,
                email: values.email,
                msg: values.msg
            })
            .then(res => {
                if (res.data.code === 20000) {
                    notification.success({
                        message: 'Success',
                        description: '',
                        duration: 2
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
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

    return <Form onFinish={onFinish}>
        <Form.Item name='company' rules={[{
            type: 'string', required: true, message: 'Please enter company name'
        }, {
            min: 1, max: 50, message: 'Company name is 1-50 characters long'
        }]}>
            <Input placeholder='Company name' allowClear />
        </Form.Item>
        <Form.Item name='name' rules={[{
            type: 'string', required: true, message: 'Please enter contact name'
        }, {
            min: 1, max: 30, message: 'Contact name is 1-30 characters long'
        }]}>
            <Input placeholder='Contact name' allowClear />
        </Form.Item>
        <Form.Item name='phone' rules={[{
            type: 'string', required: true, message: 'Please enter the contact number'
        }, {
            min: 1, max: 30, message: 'Contact phone length is 1-30 characters'
        }]}>
            <Input placeholder='Contact phone' allowClear />
        </Form.Item>
        <Form.Item name='email' rules={[{
            type: 'email', required: true, message: 'Please enter contact email'
        }]}>
            <Input placeholder='Contact email' allowClear />
        </Form.Item>
        <Form.Item name='msg' rules={[{
            type: 'string', required: true, message: 'Please leave a message'
        }, {
            min: 1, max: 200, message: 'Message length is 1-200 characters'
        }]}>
            <Input.TextArea placeholder='Leave a message' allowClear autoSize />
        </Form.Item>
        <Form.Item>
            <Button type='primary' block htmlType='submit'>Submission</Button>
        </Form.Item>
    </Form>
}

export default Info