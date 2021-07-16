import { Card, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import './Product.scss';
import PropTypes from 'prop-types';
import Rater from './Rater';

const { Meta } = Card;

const Product = ({product}) => {
  return (
        <div className='card'>
          <li key={product._id}>
            
            <Card
                hoverable
                style={{width: '100%', textAlign: 'center', border: 'none', colorStyle: '#36403D', }}
                cover={<img src={product.imageUrls[0]} alt={product.name} />}
            >
              <HeartOutlined className='card__icon'/>
              <div className='card__title'>
                    <Meta
                        title={product.name} />
                </div>
                <div>
                    <span >
                        <Rater/>
                    </span>

                </div>
                <Button className='card__button' >To bag - $ {product.currentPrice} </Button>
                                
            </Card>
          </li>
        </div>);
};
    
const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(Product);

Product.propTypes = {
  product: PropTypes.exact({
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.string,
    itemNo: PropTypes.number,
  }).isRequired
}