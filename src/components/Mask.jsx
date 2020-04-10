import React, { useState } from 'react'
import { Row, Col, Button, Modal, Carousel } from 'antd'
import img_1 from '../images/image01.jpg'
import img_2 from '../images/image02.jpg'
import img_3 from '../images/image03.jpg'
import img_4 from '../images/image04.jpg'
import img_5 from '../images/image05.jpg'
import img_6 from '../images/image06.jpg'
import img_7 from '../images/image07.jpg'
import img_8 from '../images/image08.jpg'
import img_9 from '../images/image09.jpg'
import img_10 from '../images/image10.jpg'
import img_11 from '../images/image11.jpg'
import img_12 from '../images/image12.jpg'
import img_13 from '../images/image13.jpg'
import img_14 from '../images/image14.jpg'
import img_15 from '../images/image15.jpg'
import img_16 from '../images/image16.jpg'
import img_17 from '../images/image17.jpg'
import img_18 from '../images/image18.jpg'
import img_19 from '../images/image19.jpg'
import img_20 from '../images/image20.jpg'
import img_21 from '../images/image21.jpg'
import img_22 from '../images/image22.jpg'
import img_23 from '../images/image23.jpg'
import img_24 from '../images/image24.jpg'
import img_25 from '../images/image25.jpg'
import img_26 from '../images/image26.jpg'
import img_27 from '../images/image27.jpg'
import img_28 from '../images/image28.jpg'
import img_29 from '../images/image29.jpg'
import img_30 from '../images/image30.jpg'
import img_31 from '../images/image31.jpg'
import img_32 from '../images/image32.jpg'
import Info from './Info'
import KD from '../images/KD logo & ISO logo &JAS .jpg'

function Mask() {
    const [visible, setVisible] = useState(false)

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
                <img src={img_1} width='100%' height='100%' />
                <img src={img_2} width='100%' height='100%' />
                <img src={img_3} width='100%' height='100%' />
                <img src={img_4} width='100%' height='100%' />
                <img src={img_5} width='100%' height='100%' />
                <img src={img_6} width='100%' height='100%' />
                <img src={img_7} width='100%' height='100%' />
                <img src={img_8} width='100%' height='100%' />
                <img src={img_9} width='100%' height='100%' />
                <img src={img_10} width='100%' height='100%' />
                <img src={img_11} width='100%' height='100%' />
                <img src={img_12} width='100%' height='100%' />
                <img src={img_13} width='100%' height='100%' />
                <img src={img_14} width='100%' height='100%' />
                <img src={img_15} width='100%' height='100%' />
                <img src={img_16} width='100%' height='100%' />
                <img src={img_17} width='100%' height='100%' />
                <img src={img_18} width='100%' height='100%' />
                <img src={img_19} width='100%' height='100%' />
                <img src={img_20} width='100%' height='100%' />
                <img src={img_21} width='100%' height='100%' />
                <img src={img_22} width='100%' height='100%' />
                <img src={img_23} width='100%' height='100%' />
                <img src={img_24} width='100%' height='100%' />
                <img src={img_25} width='100%' height='100%' />
                <img src={img_26} width='100%' height='100%' />
                <img src={img_27} width='100%' height='100%' />
                <img src={img_28} width='100%' height='100%' />
                <img src={img_29} width='100%' height='100%' />
                <img src={img_30} width='100%' height='100%' />
                <img src={img_31} width='100%' height='100%' />
                <img src={img_32} width='100%' height='100%' />
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