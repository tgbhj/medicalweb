import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import Nav from '../components/Nav'
import Admin from '../components/Admin'
import Mask from '../components/Mask'
import Back from '../components/Back'
import NotFound from '../components/NotFound'

const Routers = () => (
    <Router>
        <Layout style={{ width: '100%', height: '100%' }}>
            <Layout.Header style={{ background: 'black', margin: 0, padding: 0 }}>
                <Nav />
            </Layout.Header>
            <Layout.Content style={{ margin: 0, padding: 0, background: '#fff', height: '100%', width: '100%' }}>
                <Switch>
                    <Route exact path='/admin' component={Admin} />
                    <Route exact path='/' component={Mask} />
                    <Route component={NotFound} />
                </Switch>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                        <b>E-mail:</b><span>adinno@adinno.org</span>
                        <br/>
                        <b>Tel/Fax:</b><span>+86-21-55229560</span>
                        <br />
                        <b>Mobile/WhatsApp:</b><span>+86-13901631040</span>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                        <b>Twitter:</b><span>@GORDONGU3</span>
                        <br />
                        <b>Facebook:</b><span>Gordon.gu.96</span>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
                        <b>Address:</b><span>Room 13F No.578 Yingkou Road, Yangpu District, Shanghai,China</span>
                    </Col>
                </Row>
            </Layout.Footer>
            <Back />
        </Layout>
    </Router>
)

export default Routers