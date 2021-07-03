import { CollapseDictionary } from '../../dictionary/collapseDictionary';

const AdditionalInformation = ({ textClassName }) => {
  return (
    <>
      {CollapseDictionary.additionalInformation.map(item => <p className={textClassName}>{item}</p>)}
    </>
  );
};

export default AdditionalInformation;
