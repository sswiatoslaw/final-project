import { Card, Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import './Card.scss';

// const { Meta } = Card;

const CardItem = () => {
  return (
        <div className='card'>
            <Card
                hoverable
                style={{ width: 280, textAlign: 'center', border: 'none', colorStyle: '#36403D', }}
                // cover={<img src={card.url} alt={card.title}/>}
            >
                <div className='card__title'>
                    {/* <Meta
                        title={card.title} /> */}
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
                <Button className='card__button'>$14.52</Button>

            </Card>
        </div>
  )
}

export default CardItem;