import { collapseDictionary } from '../../../dictionary/collapseDictionary';

const CareDetails = ({ textClassName }) => {
  return (
    <>
      {collapseDictionary.careDetailsProposes.map((item, index) => <p className={textClassName} key={index}>{item}</p>)}
      <ul className={textClassName}>
        {collapseDictionary.careDetailsProposesInfo.map((item, index) => <li key={index}>&#10004; {item}</li>)}
      </ul>
      {collapseDictionary.careDetailsProposesRecommendations.map((item, index) => <p className={textClassName} key={index}>{item}</p>)}
    </>
  );
};

export default CareDetails;
