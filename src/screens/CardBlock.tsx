import React from "react"; 
import ResponseDetails from "./ResponseDetails";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  BugOutlined
} from '@ant-design/icons';
import { Col, Row } from 'antd';

const style: React.CSSProperties = { padding: '8px 8px' };


const CardBlock = ()=>{
    return (
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col style={style} xs={24} sm={24} md={12} lg={8} xl={6} ><ResponseDetails icon={<CheckCircleOutlined />} code={200} responseCount={40} color='#42ad62' /></Col>
        <Col style={style} xs={24} sm={24} md={12} lg={8} xl={6} ><ResponseDetails icon={<ExclamationCircleOutlined />} code={400} responseCount={4} color='#ce9f31' /></Col>
        <Col style={style} xs={24} sm={24} md={12} lg={8} xl={6} ><ResponseDetails icon={<BugOutlined />} code={500} responseCount={0} color='#dc5050' /></Col>
        <Col style={style} xs={24} sm={24} md={12} lg={8} xl={6} ><ResponseDetails icon={<StopOutlined />} code={404} responseCount={3} color='#0092ff' /></Col>
      </Row>
    );
}
export default CardBlock;