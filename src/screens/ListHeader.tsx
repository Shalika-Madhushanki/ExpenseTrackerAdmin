import { Col, Row } from "antd";
import React from "react";
const ListHeader = () => {
    return (
        <>
        <Row>
            <Col style={{ textAlign: 'center'  }} xs={24} sm={12} md={8} lg={6} xl={4}><b>Time Stamp</b></Col>
            <Col style={{ textAlign: 'center'  }} xs={24} sm={12} md={8} lg={6} xl={4}><b>Method</b></Col>
            <Col style={{ textAlign: 'center'  }} xs={24} sm={12} md={8} lg={6} xl={4}><b>Time Taken(ms)</b></Col>
            <Col style={{ textAlign: 'center'  }} xs={24} sm={12} md={8} lg={6} xl={4}><b>Status</b></Col>
            <Col style={{ textAlign: 'center'  }} xs={24} sm={12} md={8} lg={6} xl={4}><b>URI</b></Col>
            <Col style={{ textAlign: 'center'  }} xs={24} sm={12} md={8} lg={6} xl={4}><b>View</b></Col>
        </Row>
        </>
    );
}

export default ListHeader;