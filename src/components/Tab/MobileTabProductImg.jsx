import React from 'react'
import './TabProductImg.scss'
import { Tabs } from 'antd';
import { connect } from 'react-redux';
const { TabPane } = Tabs;
const MobileTabProductImg = ({imageUrlSelectedProduct}) => {
  return (
    <div className={'wrapper'}>
    <section className={'tabs tabs_mobile ant-tabs-bottom'}>
    <Tabs tabPosition='bottom'>
    {imageUrlSelectedProduct && imageUrlSelectedProduct.map((imageUrl, id) => {
      return (
        <TabPane tab={<img src={imageUrl} alt='ad' width='99px' height='116px' />} key={id}>
        <img src={imageUrl} alt='ad' width='345px' height='335px' />
        </TabPane>
      )
    }
    )}
  </Tabs>
  </section>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    imageUrlSelectedProduct: state.selectedProduct.imageUrls
  };
};

export default connect(mapStateToProps)(MobileTabProductImg)
