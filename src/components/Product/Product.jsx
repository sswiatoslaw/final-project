import { Card, Button } from 'antd';
import { StarFilled, StarOutlined, HeartOutlined } from '@ant-design/icons';
import './Product.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentProduct, changeModalState, setModalAddOrDelValue } from '../../store/modal/actions';
import { changeProductList } from '../../store/products/actions'
import { getProducts } from '../../store/products/selectors'

const { Meta } = Card;

const Product = ({product}) => {
  const products = useSelector(getProducts)
  const dispatch = useDispatch()

  const openModal = (addDelSwitcher = true) => {
    dispatch(changeCurrentProduct(product))
    dispatch(changeModalState(true))
    dispatch(setModalAddOrDelValue(addDelSwitcher ? 'add' : 'delete'))
  }

  const addToFavorites = () => {
    const newProducts = products.map(elem => {
      if (elem.itemNo === product.itemNo) {
        elem.isFavorite = !elem.isFavorite
      }
      return elem
    })
    dispatch(changeProductList(newProducts))

    let favor = JSON.parse(localStorage.getItem('favor')) || []
    favor = (favor.includes(product.itemNo) ? favor.filter(elem => elem !== product.itemNo) : favor.concat(product.itemNo))
    localStorage.setItem('favor', JSON.stringify(favor))
  }

  return (
        <div className='card'>
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
                <Button className='card__button' handleClick={openModal} >{product.currentPrice}</Button>
                <div div className='Product__favorites'>
                    <span className="favorites--title">Add to favorites</span>
                        <HeartOutlined
                            onClick={addToFavorites}
                            filled={product.isFavorite}
                            color="blue"
                            className="favorites--icon"
                        />
                </div>
                
            </Card>
        </div>
        
  );
}

export default Product;

Product.propTypes = {
  product: PropTypes.exact({
    title: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
    ItemNo: PropTypes.number,
    color: PropTypes.string,
    amountAtCart: PropTypes.number,
    isFavorite: PropTypes.bool
  }).isRequired
}
