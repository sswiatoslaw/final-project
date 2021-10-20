import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { article } from '../../dictionary/productDictionary';

const ProductContentBlock = () => {
  return (
    <Typography>
     {article.text && <p className='articles-content__text'>key={article.text}</p>}
    </Typography>
  );
};

export default ProductContentBlock;

ProductContentBlock.propTypes = {
  article: PropTypes.object
};