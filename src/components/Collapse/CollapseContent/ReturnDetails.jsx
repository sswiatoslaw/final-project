import { collapseDictionary } from '../../../dictionary/collapseDictionary';

const ReturnDetails = ({ textClassName }) => {
  return (
    <>
      {collapseDictionary.returnDetails.map((item, index) => <p className={textClassName} key={index}>{item}</p>)}
    </>
  );
};

export default ReturnDetails;
