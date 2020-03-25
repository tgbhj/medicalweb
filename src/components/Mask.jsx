import React, { useState } from 'react'
import { Row, Col, Button, Modal, Carousel } from 'antd'
import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpg'
import img_3 from '../images/img_3.jpg'
import img_4 from '../images/img_4.jpg'
import img_5 from '../images/img_5.jpg'
import img_6 from '../images/img_6.jpg'
import img_7 from '../images/img_7.jpg'
import img_8 from '../images/img_8.jpeg'
import img_9 from '../images/img_9.jpg'
import img_10 from '../images/img_10.jpg'
import img_11 from '../images/img_11.jpg'
import img_12 from '../images/img_12.jpg'
import img_13 from '../images/img_13.jpg'
import img_14 from '../images/img_14.jpg'
import img_15 from '../images/img_15.jpg'
import img_16 from '../images/img_16.jpg'
import img_17 from '../images/img_17.jpg'
import img_18 from '../images/img_18.jpg'
import img_19 from '../images/img_19.jpg'
import img_20 from '../images/img_20.jpg'
import Info from './Info'

function Mask() {
    const [visible, setVisible] = useState(false)
    return < Row style={{ paddingTop: 10 }} align='middle' justify='center' >
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
                <div>
                    <img src={img_1} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_2} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_3} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_4} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_5} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_6} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_7} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_8} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_9} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_10} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_11} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_12} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_13} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_14} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_15} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_16} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_17} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_18} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_19} width='100%' height='100%' />
                </div>
                <div>
                    <img src={img_20} width='100%' height='100%' />
                </div>
            </Carousel>
        </Col>
    </Row >
}

export default Mask