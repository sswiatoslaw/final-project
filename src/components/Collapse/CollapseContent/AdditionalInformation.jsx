import { collapseDictionary } from '../../../dictionary/collapseDictionary';

const AdditionalInformation = ({ textClassName }) => {
  return (
    <>
      {collapseDictionary.additionalInformation.map((item, index) => <p className={textClassName} key={index}>{item}</p>)}
    </>
  );
};

export default AdditionalInformation;
