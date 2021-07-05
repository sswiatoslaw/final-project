import { CollapseDictionary } from '../../dictionary/collapseDictionary';

const ShippingDetails = ({ textClassName }) => {
  return (
    <>
      {CollapseDictionary.shippingDetails.map(item => <p className={textClassName}>{item}</p>)}
    </>
  );
};

export default ShippingDetails;
