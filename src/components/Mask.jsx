import React, { useState } from 'react'
import { Row, Col, Button, Modal, Carousel } from 'antd'
import Info from './Info'
import KD from '../images/KD.jpg'

function Mask() {
    const importImgs = require.context('../images', false, /image/)
    const [visible, setVisible] = useState(false)
    const [imgs, setImgs] = useState(importImgs.keys().map(importImgs))

    return <Row style={{ paddingTop: 10 }} align='middle' justify='center'>
        <Row>
            <Col style={{ paddingBottom: 10 }}>
                <Button type='danger' size='large' onClick={() => setVisible(true)}>Please fill in your contact information</Button>
                <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
                    <Row type='flex' justify='center' align='middle'>
                        <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
                            <Info />
                        </Col>
                    </Row>
                </Modal>
            </Col>
        </Row>
        <Col span={22}>
            <Carousel autoplay>
                {
                    imgs.map(item => {
                        return <img src={item.default} width='100%' height='100%' key={item} />
                    })
                }
            </Carousel>
        </Col>
        <Col span={22}>
            <div style={{ textAlign: 'center', margin: 'auto' }}>
                <b style={{ fontSize: 32 }}>International Partners</b>
            </div>
        </Col>
        <Col>
            <img src={KD} width='100%' height='100%' />
        </Col>
    </Row>
}

export default Mask