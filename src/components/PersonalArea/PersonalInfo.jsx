import React from 'react';
import { Layout, Menu, Card } from 'antd';
import './personalArea.scss';

const PersonalInfo = () => {
  const { Content } = Layout;

  return (
    <Content style={{ margin: '24px 16px 0' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ maxWidth: 1000 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ maxWidth: 1000 }}>
          <p>DUS</p>
        </Card>
      </div>
    </Content>
  );
};

export default PersonalInfo;
