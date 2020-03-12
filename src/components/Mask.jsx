import React from 'react'
import { Row, Col, Button, Modal, Carousel } from 'antd'
import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpg'
import img_3 from '../images/img_3.jpg'
import img_4 from '../images/img_4.jpg'
import img_5 from '../images/img_5.jpg'
import img_6 from '../images/img_6.jpg'
import img_7 from '../images/img_7.jpg'
import img_8 from '../images/img_8.jpg'
import img_9 from '../images/img_9.jpg'
import img_10 from '../images/img_10.jpg'
import Info from './Info'

class Mask extends React.Component {
    state = {
        visible: false
    }

    render() {
        return <Row style={{ paddingTop: 10 }} align='middle' justify='center'>
            <Col style={{ paddingBottom: 10 }}>
                <Button type='danger' size='large' onClick={() => this.setState({ visible: true })}>Please fill in your contact information</Button>
                <Modal visible={this.state.visible} footer={null} onCancel={() => this.setState({ visible: false })}>
                    <Row type='flex' justify='center' align='middle'>
                        <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
                            <Info />
                        </Col>
                    </Row>
                </Modal>
            </Col>
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
                </Carousel>
            </Col>
        </Row>
    }
}

export default Mask