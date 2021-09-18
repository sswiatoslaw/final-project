import React from 'react';
import './KnittingCollection.scss';

const KnittingCollection = () => {
  return (
    <>
      <div className='wrapper'>
       <section>
         <article className='knitting__article'>
          <img className='knitting__image' src='https://savvy-tots.s3.eu-west-3.amazonaws.com/carusel/slide-001.jpeg' alt='knitting-collection'/>
          <h1>KNITTING COLLECTION COMING SOON!</h1>
          <h2>BABY AND KIDS CLOTHES MADE OF NATURAL FIBERS</h2>
          <p>In winter, keep your little one warm with our signature wool baby clothes made from 100% merino wool, sourced from anti-mulesing farms in Mongolia. These handmade knitted baby clothes are porous, keeping moisture away from your baby’s skin so they stay dry and warm in the cooler months. You can also choose from our ultra-soft organic baby clothes cashmere range, made from 100% cashmere sourced in Nepal. Its crease-free design combined with its natural dirt repellant lightens the load for busy parents. We have a number of stylish choices to suit all tastes. From bonnets and mittens to cardigans and jumpers, our pieces will provide warmth and comfort during the cooler times of year.</p>
          <p> We all want to give our children the best start in life. Our hand-knitted baby clothes wrap your little one up in warmth, love, and protection. Made from natural fibres, they are perfectly gentle for sensitive baby skin, with a long lifespan so they can be passed down from one child to another through generations. We understand the importance of designing clothes that last and can be enjoyed for years to come, which are not only good for your baby, but also great for the environment.</p>
         </article>
        </section>
      </div>
    </>
  )
};

export default KnittingCollection;
