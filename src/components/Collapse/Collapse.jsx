import { Collapse } from 'antd';
import AdditionalInformation from './CollapseContent/AdditionalInformation';
import SizeChart from './CollapseContent/SizeChart';
import CareDetails from './CollapseContent/CareDetails';
import ReturnDetails from './CollapseContent/ReturnDetails';
import ShippingDetails from './CollapseContent/ShippingDetails';
import 'antd/dist/antd.css';
import './Collapse.scss';

const { Panel } = Collapse;

const Accordions = () => {
  const headingClassName = 'сollapse__item сollapse__heading';
  const textClassName = 'сollapse__text';

  return (
    <Collapse className='сollapse сollapse__list' expandIconPosition='right' ghost>
      <Panel className={headingClassName} header='ADDITIONAL INFORMATION' key='product-content-additional-information'>
        <AdditionalInformation textClassName={textClassName} />
      </Panel>
      <Panel className={headingClassName} header='LAYETTE SIZE CHART' key='product-content-layette-size-chart'>
        <SizeChart />
      </Panel>
      <Panel className={headingClassName} header='CARE DETAILS' key='product-content-care-details'>
        <CareDetails textClassName={textClassName} />
      </Panel>
      <Panel className={headingClassName} header='RETURN DETAILS' key='product-content-return-details'>
        <ReturnDetails textClassName={textClassName} />
      </Panel>
      <Panel className={headingClassName} header='SHIPPING DETAILS' key='product-content-shipping-details'>
        <ShippingDetails textClassName={textClassName} />
      </Panel>
    </Collapse>
  );
};

export default Accordions;
