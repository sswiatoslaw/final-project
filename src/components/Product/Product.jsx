import { Button, Card } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { addItemToCartAction } from '../../store/cart/actions';
import './Product.scss';
import PropTypes from 'prop-types';
import Rater from './Rater';

const { Meta } = Card;

const Product = ({ product, addToCart, onToggleImportant, favorite }) => {
  const classNames = favorite.includes(product.itemNo) ? 'card important' : 'card';

  const addItemToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className={ classNames }>
      <li key={ product._id }>

        <Card
          hoverable
          style={ { width: '100%', textAlign: 'center', border: 'none', colorStyle: '#36403D' } }
          cover={ <img src={ product.imageUrls[0] } alt={ product.name }/> }
        >
          <HeartOutlined className='card__icon' onClick={ onToggleImportant }/>
          <div className='card__title'>
            <Meta
              title={ product.name }/>
          </div>
          <div>
            <span>
              <Rater/>
            </span>
          </div>
          <Button className='card__button' onClick={ () => addItemToCart(product) }>To bag - $ { product.currentPrice } </Button>

        </Card>
      </li>
    </div>);
};

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    favorite: state.favorite
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (itemNo) => dispatch(addItemToCartAction(itemNo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

Product.propTypes = {
  product: PropTypes.exact({
    enabled: PropTypes.bool,
    isFavorite: PropTypes.bool[Symbol.hasInstance],
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.array,
    itemNo: PropTypes.string,
    quantity: PropTypes.number,
    previousPrice: PropTypes.number,
    _id: PropTypes.string,
    categories: PropTypes.string,
    sizes: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    color: PropTypes.string,
    __v: PropTypes.number
  })
};