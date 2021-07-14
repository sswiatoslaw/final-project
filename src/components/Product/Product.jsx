import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import './Product.scss';
import PropTypes from 'prop-types';

const { Meta } = Card;

const Product = ({allProducts}) => {
  const el = allProducts.map((item) => {
    return (
        <div className='card'>
          <li key={item._id}>
            <Card
                hoverable
                style={{ width: 280, textAlign: 'center', border: 'none', colorStyle: '#36403D', }}
                cover={<img src={item.url} alt={item.name}/>}
            >
                <div className='card__title'>
                    <Meta
                        title={item.name} />
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
                <Button className='card__button' >{item.currentPrice}</Button>
                                
            </Card>
          </li>
        </div>);
  })
  return (
      <div>
        { el }
      </div>
  );
};
    
const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(Product);

Product.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    url: PropTypes.string,
    itemNo: PropTypes.number,
  }).isRequired
}
