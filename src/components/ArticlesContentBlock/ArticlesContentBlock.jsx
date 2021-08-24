import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const ArticlesContentBlock = ({ article }) => {
  return (
    <Typography>
      {article.img &&
      <div className='articles-content__img-container'><img className='articles-content__img about__img blog__img' src={article.img} alt={article.altText} />
      </div>}
      {article.desc && <p className='articles-content__img-desc'>{article.desc}</p>}
      {article.title && <Title level={2} className='articles-content__title'>{article.title}</Title>}
      {article.text.map((item, index) => <p className='articles-content__text' key={index}>{item}</p>)}
    </Typography>
  );
};

export default ArticlesContentBlock;

ArticlesContentBlock.propTypes = {
  article: PropTypes.object
};
