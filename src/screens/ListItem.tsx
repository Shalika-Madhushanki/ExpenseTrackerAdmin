import { Button, Col, Row } from "antd";
import React from "react";
import {
    EyeOutlined
  } from '@ant-design/icons';

const ListItem = () =>{
    const date = new Date();
    const formattedDate = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: undefined // Exclude seconds
    });

    return (
        <>
        <Row align="middle">
            <Col style={{ textAlign: 'center' }} xs={24} sm={12} md={8} lg={6} xl={4}>{formattedDate}</Col>
            <Col style={{ textAlign: 'center' }}xs={24} sm={12} md={8} lg={6} xl={4}>PUT</Col>
            <Col style={{ textAlign: 'center' }} xs={24} sm={12} md={8} lg={6} xl={4}>11</Col>
            <Col style={{ textAlign: 'center' }} xs={24} sm={12} md={8} lg={6} xl={4}>200</Col>
            <Col style={{ textAlign: 'center' }} xs={24} sm={12} md={8} lg={6} xl={5}>https:localhost:8080/expenses/update</Col>
            <Col style={{ textAlign: 'center' }} xs={24} sm={12} md={8} lg={6} xl={3}><Button><EyeOutlined /></Button></Col>
        </Row>
        </>
    );
}

export default ListItem;