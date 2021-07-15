import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import './Product.scss';
import PropTypes from 'prop-types';

const { Meta } = Card;

const Product = ({product}) => {
  return (
        <div className='card'>
          <li key={product._id}>
            <Card
                hoverable
                style={{ width: 280, textAlign: 'center', border: 'none', colorStyle: '#36403D', }}
                cover={<img src={product.url} alt={product.name}/>}
            >
                <div className='card__title'>
                    <Meta
                        title={product.name} />
                </div>
                <div>
                    <span >
                        <StarFilled className='card__stars'/>
                        <StarFilled className='card__stars'/>
                        <StarFilled className='card__stars'/>
                        <StarFilled className='card__stars'/>
                        <StarOutlined className='card__stars' />
                    </span>

                </div>
                <Button className='card__button' >{product.currentPrice}</Button>
                                
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
    url: PropTypes.string,
    itemNo: PropTypes.number,
  }).isRequired
}
