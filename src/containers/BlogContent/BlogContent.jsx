import { articles } from '../../dictionary/blogContentDictionary';
import ArticlesContentBlock from '../../components/ArticlesContentBlock';
import '../../components/ArticlesContentBlock/ArticlesContentBlock.scss';
import './BlogContent.scss';

const BlogContent = () => {
  return (
    <div className='wrapper'>
      <section className='blog articles-content'>
        {
          articles.map((article, index) => <ArticlesContentBlock article={article} key={index} />)
        }
      </section>
    </div>
  );
};

export default BlogContent;
