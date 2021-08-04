import { collapseDictionary } from '../../../dictionary/collapseDictionary';

const ShippingDetails = ({ textClassName }) => {
  return (
    <>
      {collapseDictionary.shippingDetails.map((item, index) => <p className={textClassName} key={index}>{item}</p>)}
    </>
  );
};

export default ShippingDetails;
