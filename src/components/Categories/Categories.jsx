import { Col } from 'antd';
import './Categories.scss';

const categoriesArr = [
  {
    text: 'one',
    url: 'https://savvy-tots.s3.eu-west-3.amazonaws.com/categories/category-001.png',
  },
  {
    text: 'two',
    url: 'https://savvy-tots.s3.eu-west-3.amazonaws.com/categories/category-002.png',
  },
  {
    text: 'three',
    url: 'https://savvy-tots.s3.eu-west-3.amazonaws.com/categories/category-003.png',
  },
];

const Categories = () => {
  return categoriesArr.map((category) => (
    <Col span={8} style={{ backgroundImage: `url(${category.url})`, backgroundSize: 'cover' }}>
      <span className="category__wrapper">
        {' '}
        <span className="category__text">{category.text}</span>{' '}
      </span>
    </Col>
  ));
};

export default Categories;
