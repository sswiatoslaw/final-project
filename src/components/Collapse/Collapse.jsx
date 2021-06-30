import { Collapse } from 'antd';
import imgSizeChart from './layette-size-chart.jpeg';
import 'antd/dist/antd.css';
import './Collapse.scss';

const { Panel } = Collapse;

const Accordions = () => {
  return (
    <Collapse className='сollapse сollapse__list' expandIconPosition='right' ghost>
      <Panel className='сollapse__item сollapse__heading' header='ADDITIONAL INFORMATION' key='product-content-additional-information'>
        <p className='сollapse__text'>Here is a couple things to note before your purchase:</p>
        <p className='сollapse__text'>&#45; As of Fall 2020 we began the process of transitioning our inventory from having tags at the neck to having that same
          information printed on the garment. We are unable to guarantee which version you receive as it depends on how quickly inventory sells through. As we
          want you to love every piece of Kyte BABY you receive please contact <b>IMAIL</b> for any questions or concerns once your order arrives.</p>
        <p className='сollapse__text'>&#45; Colors may vary from how they appear on computer/smartphone screen.</p>
      </Panel>
      <Panel className='сollapse__item сollapse__heading' header='LAYETTE SIZE CHART' key='product-content-layette-size-chart'>
      <div className='сollapse__img-container'>
        <img className='сollapse__img' src={imgSizeChart} alt='Layette size chart' />
      </div>
      </Panel>
      <Panel className='сollapse__item сollapse__heading' header='CARE DETAILS' key='product-content-care-details'>
        <div className='collapsible-content__inner rte'>
          <p className='сollapse__text'>To maintain the quality and feel of your bamboo clothing we recommend the following wash instructions:</p>
          <ul className='сollapse__text'>
            <li>&#10004; Cold water</li>
            <li>&#10004; Delicate cycle</li>
            <li>&#10004; Turn off agitator if that is an option</li>
            <li>&#10004; With like fabrics (bamboo only)</li>
            <li>&#10004; Layette should be washed inside out, zipped/buttoned up to decrease pilling</li>
            <li>&#10004; Sleep bags should NOT be washed inside out, but should be zipped up completely to protect the inner quilting</li>
          </ul>
          <p className='сollapse__text'>Kyte BABY does not recommend using the dryer. We recommend hanging or laying flat to dry. Open your sleep bags
            completely and point a fan towards
            them to help drying time indoors.</p>
          <p className='сollapse__text'>When washing any of your baby’s clothes, think less is more. We recommend avoiding care products that contain harsh
            chemicals, additives, optical
            brighteners, and bleach.</p>
        </div>
      </Panel>
      <Panel className='сollapse__item сollapse__heading' header='RETURN DETAILS' key='product-content-return-details'>
        <div className='collapsible-content__inner rte'>
          <p className='сollapse__text'><span>Items are eligible for a refund or exchange on regular priced items within 30 days of purchase. We ask that items be unworn, unwashed and in their original packaging, including tags. A fee of $7.50 is charged for returns if you chose to receive store credit this fee is waived. &nbsp;Items marked as final sale cannot be returned please contact customer service at <b>IMAIL</b> if you have any issues with a final sale item.&nbsp;</span>
          </p>
          <p className='сollapse__text'><span><strong className='сollapse__text--strong'>Damage/Defective:</strong>&nbsp;If your item arrived damaged or became defective due to a manufacturers defect within 6 months, we will gladly help you replace the item. You must email a picture of the defect and your order receipt to <b>IMAIL</b>.All claims for items that are damaged/defective upon arrival must be submitted within 7 days of the date the item is marked delivered by postal carrier. </span>
          </p>
        </div>
      </Panel>
      <Panel className='сollapse__item сollapse__heading' header='SHIPPING DETAILS' key='product-content-shipping-details'>
        <div className='collapsible-content__inner rte'>
          <p className='сollapse__text'><span>For <strong className='сollapse__text--strong'>REGULAR PRICED</strong> items we fulfill within 2-4 business days. Should there be any delay, you will be notified via email. Please choose “VIP Fulfillment” at check-out for faster fulfillment time.</span>
          </p>
          <p className='сollapse__text'><strong className='сollapse__text--strong'>Standard Shipping Rates:</strong></p>
          <p className='сollapse__text'><span>$7.50usd for US orders that are less than $85</span></p>
          <p className='сollapse__text'><span>$15usd for Canadian orders less than $135</span></p>
          <p className='сollapse__text'><span>$30usd for international orders under $300</span></p>
          <p className='сollapse__text'><span>For orders placed during CLEARANCE SALES (for <strong className='сollapse__text--strong'>SALE PRICED</strong> items) and for orders placed during LAUNCHES it may take 2-3 weeks for your order to be processed and packaged.</span>
          </p>
          <p className='сollapse__text'><span>Due to <strong className='сollapse__text--strong'>Covid-19</strong> some carriers are experiencing delays. If you have any issues you are welcome to reach out to our customer support team at <b>IMAIL</b> but please understand this is not something we can control.</span>
          </p>
        </div>
      </Panel>
    </Collapse>
  );
};

export default Accordions;