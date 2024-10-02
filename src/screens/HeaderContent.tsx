import { Button, Col, Row } from "antd";
import { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';

const HeaderContent = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
        <Row>
            <Col span={8} style={{ textAlign: 'left' }}><Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />          System Monitoring Dashboard
            </Col>
            <Col span={12} style={{ textAlign: 'center' }}>
                <Row>
                    <Col flex={0.25}>System : UP</Col>
                    <Col flex={0.25}>DB : MySQL - UP</Col>
                    <Col flex={0.25}>Disk Space :8.47 GB</Col>
                    <Col flex={0.25}>Processors : 4</Col>
                </Row>
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}><Button >Refresh data </Button></Col>
        </Row>
    );
}
export default HeaderContent;