import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Dashboard from './screens/Dashboard';
import HeaderContent from './screens/HeaderContent';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'DashBoard',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Users',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Settings',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <HeaderContent/>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            flex: 1,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Dashboard />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Expense Tracker ©{new Date().getFullYear()} Created Shalika
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
