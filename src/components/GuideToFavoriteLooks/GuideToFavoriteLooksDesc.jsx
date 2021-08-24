import { Row, Col } from 'antd';
import Button from '../Button/Button';

const GuideToFavoriteLooksDesc = () => {
  return (
    <Row className='guide'>
      <div className='wrapper'>
        <Col className='guide__container'>
          <div className='guide__container--img'>
            <img className='guide__img' src='https://savvy-tots.s3.eu-west-3.amazonaws.com/guide-to-favorite-looks.png' alt='Baby boy' width='800px'
                 height='480px'/>
          </div>
          <Col className='guide__content'>
            <h2 className='guide__heading'>Drop 1 style guide</h2>
            <p className='guide__text'>We put together some of our favorite looks from our ss21 drop 1 collection</p>
            <Button modifier='contained' text='View more' width='280px'/>
          </Col>
        </Col>
      </div>
    </Row>

  );
};

export default GuideToFavoriteLooksDesc;
