import React from 'react';
import { Layout, Card } from 'antd';
import './personalArea.scss';

const Orders = () => {
  const { Content } = Layout;
  return (
   <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Card
                title="Default size card"
                extra={<a href="#">More</a>}
                style={{ maxWidth: 1000 }}>
                <p>Card YAS@ @!@ </p>
                <p>Card content</p>
              </Card>
            </div>
          </Content>
  );
};

export default Orders;
