import { articles } from '../../dictionary/aboutContentDictionary';
import ArticlesContentBlock from '../../components/ArticlesContentBlock';
import '../../components/ArticlesContentBlock/ArticlesContentBlock.scss';
import './AboutContent.scss';

const AboutContent = () => {
  return (
    <div className='wrapper'>
      <section className='about articles-content'>
        {
          articles.map((article, index) => <ArticlesContentBlock article={article} key={index} />)
        }
      </section>
    </div>
  );
};

export default AboutContent;
