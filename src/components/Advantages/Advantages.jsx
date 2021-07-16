import React from 'react';
import './Advantages.scss';
import AdvantagesContent from './AdvantegesContent/AdvantagesContent';
import PetalsLogo from './AdvantegesContent/AdvantagesSvg/PetalsLogo';
import RabbitLogo from './AdvantegesContent/AdvantagesSvg/RabbitLogo';
import ChemisrtyLogo from './AdvantegesContent/AdvantagesSvg/ChemisrtyLogo';
import { Row } from 'antd';

const Advantages = () => {
  return (
    <Row className={'advantages-block'}>
      <h3 className={'advantages_text'}>Advantages</h3>
      <div className={'advantages-block-logo'}>
        <AdvantagesContent svg={<PetalsLogo />} title={'Eco Friendly'} text={'We put together some of our favorite looks from our ss21'} />
        <AdvantagesContent svg={<RabbitLogo />} title={'Comfort'} text={'Put together some of our favorite looks from our ss21'} />
        <AdvantagesContent svg={<ChemisrtyLogo />} title={'Non Toxic'} text={'Together some of our favorite looks from our ss21 '} />
      </div>
    </Row>
  );
};

export default Advantages;
