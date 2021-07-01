import { Row, Col } from 'antd';
import img from './guide-to-favorite-looks.png';

const GuideToFavoriteLooksDesc = () => {
  return (
    <div className='wrapper'>
      <Row className='guide'>
        <Col className='guide__container guide__container--img' flex='1 1 0px'>
          <img className='guide__img' src={img} alt='Baby boy' width='800' height='480'/>
        </Col>
        <Col className='guide__container' flex='0 1 30%'>
            <h2 className='guide__heading'>Drop 1 style guide</h2>
            <p className='guide__text'>We put together some of our favorite looks from our ss21 drop 1 collection</p>
            <a href='#void'>BUTTON</a>
        </Col>
      </Row>
    </div>
  );
};

export default GuideToFavoriteLooksDesc;