import { CollapseDictionary } from '../../dictionary/collapseDictionary';

const ReturnDetails = ({ textClassName }) => {
  return (
    <>
      {CollapseDictionary.returnDetails.map(item => <p className={textClassName}>{item}</p>)}
    </>
  );
};

export default ReturnDetails;
