import { Col } from 'antd';
import './Categories.scss';

const Categories = (props) => {
  const { text, url } = props;
  return (
    <Col span={8} style={{ backgroundImage: `url(${url})` }}>
      <span className='category__wrapper'> <span className='category__text'>{text}</span> </span>
    </Col>
  );
}

export default Categories;