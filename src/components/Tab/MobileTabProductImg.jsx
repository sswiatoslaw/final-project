import React from 'react'
import './TabProductImg.scss'
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const MobileTabProductImg = () => {
  return (
    <div className={'wrapper'}>
    <section className={'tabs tabs_mobile ant-tabs-bottom'}>
    <Tabs tabPosition = 'bottom'>
    <TabPane tab={<img src='https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg' alt='ad' width='99px' height='116px' />} key="1">
    <img src='https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg' alt='ad' width='345px' height='335px' />
    </TabPane>
    <TabPane tab={<img src='https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg' alt='ad' width='99px' height='116px' />} key="2">
    <img src='https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg' alt='ad' width='345px' height='335px' />
    </TabPane>
    <TabPane tab={<img src='https://vjoy.cc/wp-content/uploads/2020/09/bezymyannyjkvytstsk.jpg' alt='ad' width='99px' height='116px' />} key="3">
    <img src='https://vjoy.cc/wp-content/uploads/2020/09/bezymyannyjkvytstsk.jpg' alt='ad' width='345px' height='335px' />
    </TabPane>
  </Tabs>
  </section>
  </div>
  )
}

export default MobileTabProductImg
