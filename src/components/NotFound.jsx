import React from 'react'
import { Result, Button } from 'antd'

function NotFound() {
    return <Result status="404" title="404" subTitle="页面不存在" extra={<Button type="primary" href='/'>Back Home</Button>} />
}

export default NotFound