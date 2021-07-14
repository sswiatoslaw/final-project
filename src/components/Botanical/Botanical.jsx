import React, { useState } from 'react';
import { Row, Col, Rate } from 'antd';
import bot from './botick.png';
import './Botanical.scss';
import heart from './heart.svg';

const arr = [
  {
    text: 'Printed romper in succulent',
    picture: bot,
    price: '$10.99',
    sold: false,
    stars: 5
  },
  {
    text: 'Printed Zippered Footie in Succulent',
    picture: bot,
    price: '$13.49',
    sold: true,
    stars: 3
  },
  {
    text: 'Оrganic Footed Pajamas Sunburst and Ivory',
    picture: bot,
    price: '$14.99',
    sold: false,
    stars: 4
  },
  {
    text: 'Pinted Zipperes Romper in Bluebonnet',
    picture: bot,
    price: '$13',
    sold: true,
    stars: 2
  },
];

const BotanicalComponent = () => {
  const Botanical = arr.map((item) => (
    <Col span={6} style={{ maxWidth: '280px', height: '585px' }}>
      <img src={item.picture} alt="picture" />
      {item.sold ? <span className="botanical__soldOut">Sold out</span> : ''}
      <img className="botanical__heart" src={heart} alt="" />
      <div className="items-container">
        <h3 className="botanical__text">{item.text}</h3>
        <div className="botanical__starsContainer">
            <Rate style={{color: '#36403D'}} defaultValue={item.stars} />
        </div>
        <button className="botanical__button">
          <span className="botanical__button__addToBag">Add to bag - </span>
          {item.price}
        </button>
      </div>
    </Col>
  ));
  return (
    <div className="botanical">
      <h2 className="botanical_h2">Botanical</h2>
      <Row>{Botanical}</Row>
      <button className="botanical__viewAll-btn">VIEW ALL</button>
    </div>
  );
};

export default BotanicalComponent;
