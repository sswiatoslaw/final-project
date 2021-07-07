import { CollapseDictionary } from '../../dictionary/collapseDictionary';

const CareDetails = ({ textClassName }) => {
  return (
    <>
      {CollapseDictionary.careDetailsProposes.map(item => <p className={textClassName}>{item}</p>)}
      <ul className={textClassName}>
        {CollapseDictionary.careDetailsProposesInfo.map(item => <li>&#10004; {item}</li>)}
      </ul>
      {CollapseDictionary.careDetailsProposesRecommendations.map(item => <p className={textClassName}>{item}</p>)}
    </>
  );
};

export default CareDetails;
