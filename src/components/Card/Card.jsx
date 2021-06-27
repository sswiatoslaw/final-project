import { Card, Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const { Meta } = Card;

const cardStyle = {
  border: 'none',
  fontFamily: 'Spartan',
  height: 70,

};

const starStyle = {
  width: 25,
  height: 24.07,
  top: 0.47,
}

const CardItem = () => {
  return (
        <Card
            hoverable
            style={{ width: 280, textAlign: 'center', border: 'none', colorStyle: '#36403D', }}
            cover={<img alt="example" src="https://s3-alpha-sig.figma.com/img/a80b/e8c6/ffd313a46cbf3f57b9afc18c3f98633d?Expires=1624838400&Signature=AF~2ZxMBVxcXmmACPi3Q8of-O4pm6RlOU1XbcXTrM-q~EUvin-Kcxkr-lKM4syDWAHTcFW3hQ0qvWVR4RJTjZ-5KxlzG9OZHIpMf~nzRgHYNgKRib8Yar-BZm49-IpvmaC~sEtPDDlYRiNZeVdPsssQ8~6mUfuTWd8okidhjsTZxwoo4YjLQ3MED0SVEKsdhKKCGvvoEJCTyFSo0AP9aIQD67Ml6ZDiVW-1mpn41Bowi~J4OJfCjWCjBXKTBWGCMKwSib2FLZ4d2yQx0C5BOMaJcX4pVkCJ9whDKTG-tQPGW6jc5jXsCMGTU-g-BtT2jJ7OAAS0ODxPRAMc5kCoTXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />}
        >
            <Meta
                title="Оrganic Footed Pajamas
                " description="Sunburst and Ivory " style={cardStyle} />
            <div>
                <StarFilled style={starStyle} />
                <StarFilled style={starStyle} />
                <StarFilled style={starStyle} />
                <StarFilled style={starStyle} />
                <StarOutlined style={starStyle} />
            </div>
            <Button style={{ width: 240, marginLeft: 0, }}>$14.52</Button>

        </Card>

  )
}

export default CardItem;