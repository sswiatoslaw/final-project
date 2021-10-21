import Banner from '../../components/Banners/Banner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import {
  bannerImagesDictionary,
  bannerTextDictionary,
  bannerTitleDictionary,
} from '../../dictionary/bannerDictionary';
import FilterResponsive from '../../components/Filter/FilterResponsive/FilterResponsive';
import Sort from '../../components/Sort/Sort';
import { Layout } from 'antd';
import useWindowSize from '../../сustomHooks/useWindowSize';
import ProductContent from './../../containers/ProductContent/ProductContent';
import './ShopPage.scss'
const ShopPage = () => {
  const size = useWindowSize();
  return (
    <div>
      <Banner
        imgPath={bannerImagesDictionary.shop}
        imgName="Baby girl shop"
        title={bannerTitleDictionary.shopTitle}
        textBottom={bannerTextDictionary.shopTextBottom}
      />
        <div class='shop-wrapper'>
          <div>
          {size.width >= 769 ? <Sort /> : ''}
          <FilterResponsive />
          </div>
          <div>
          <ProductContent />
          </div>
        </div>
      <JoingMailing />
    </div>
  );
};

export default ShopPage;
