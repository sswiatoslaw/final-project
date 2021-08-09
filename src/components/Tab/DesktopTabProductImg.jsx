import { Tabs } from 'antd';
const { TabPane } = Tabs;
const DesktopTabProductImg = () => {
  return (
    <div className={'wrapper'}>
    <section className={'tabs tabs_desktop'}>
<Tabs tabPosition = 'right'>
    <TabPane tab={<img src='https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg' alt='ad' width='140px' height='220px' />} key="1">
    <img src='https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg' alt='ad' width='500px' height='698px' />
    </TabPane>
    <TabPane tab={<img src='https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg' alt='ad' width='140px' height='220px' />} key="2">
    <img src='https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg' alt='ad' width='500px' height='698px' />
    </TabPane>
    <TabPane tab={<img src='https://vjoy.cc/wp-content/uploads/2020/09/bezymyannyjkvytstsk.jpg' alt='ad' width='140px' height='220px' />} key="3">
    <img src='https://vjoy.cc/wp-content/uploads/2020/09/bezymyannyjkvytstsk.jpg' alt='ad' width='500px' height='698px' />
    </TabPane>
  </Tabs>
  </section>
  </div>
  )
}

export default DesktopTabProductImg
