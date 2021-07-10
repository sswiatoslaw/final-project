import { Typography } from 'antd';
const { Title } = Typography;

const ArticlesContentBlock = ({ article }) => {
  return (
    <Typography>
      {
        typeof article.img === 'undefined'
          ? ''
          : <div className='about__img-container'><img className='about__img' src={article.img} alt={article.altText} /></div>
      }
      {
        typeof article.desc == 'undefined' ? '' : <p className='about__img-desc'>{article.desc}</p>
      }
      {
        typeof article.title == 'undefined' ? '' : <Title level={2} className='about__title'>{article.title}</Title>
      }
      {article.text.map((item, index) => <p className='about__text' key={index}>{item}</p>)}
    </Typography>
  );
};

export default ArticlesContentBlock;