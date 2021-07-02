import { Collapse } from 'antd';
import { CollapseDictionary } from '../../dictionary/collapseDictionary';
import imgSizeChart from './layette-size-chart.jpeg';
import 'antd/dist/antd.css';
import './Collapse.scss';

const { Panel } = Collapse;

const Accordions = () => {
  const headingClassName = 'сollapse__item сollapse__heading';
  const textClassName = 'сollapse__text';

  return (
    <Collapse className='сollapse сollapse__list' expandIconPosition='right' ghost>
      <Panel className={headingClassName} header='ADDITIONAL INFORMATION' key='product-content-additional-information'>
        {CollapseDictionary.additionalInformation.map(item => <p className={textClassName}>{item}</p>)}
      </Panel>
      <Panel className={headingClassName} header='LAYETTE SIZE CHART' key='product-content-layette-size-chart'>
        <div className='сollapse__img-container'>
          <img className='сollapse__img' src={imgSizeChart} alt='Layette size chart' />
        </div>
      </Panel>
      <Panel className={headingClassName} header='CARE DETAILS' key='product-content-care-details'>
        {CollapseDictionary.careDetailsProposes.map(item => <p className={textClassName}>{item}</p>)}
        <ul className={textClassName}>
          {CollapseDictionary.careDetailsProposesInfo.map(item => <li>&#10004; {item}</li>)}
        </ul>
        {CollapseDictionary.careDetailsProposesRecommendations.map(item => <p className={textClassName}>{item}</p>)}
      </Panel>
      <Panel className={headingClassName} header='RETURN DETAILS' key='product-content-return-details'>
        {CollapseDictionary.returnDetails.map(item => <p className={textClassName}>{item}</p>)}
      </Panel>
      <Panel className={headingClassName} header='SHIPPING DETAILS' key='product-content-shipping-details'>
        {CollapseDictionary.shippingDetails.map(item => <p className={textClassName}>{item}</p>)}
      </Panel>
    </Collapse>
  );
};

export default Accordions;