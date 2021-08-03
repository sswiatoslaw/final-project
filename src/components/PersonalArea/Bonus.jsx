import React from 'react';
import { Layout, Card } from 'antd';
import './personalArea.scss';

const Bonus = () => {
  const { Content } = Layout;
  return (
   <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Card
                title="Default size card"
                extra={<a href="#">More</a>}
                style={{ maxWidth: 1000 }}>
                <h1>BONUSSSSS</h1>
              </Card>
            </div>
          </Content>
  );
};

export default Bonus;
