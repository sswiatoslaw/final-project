import img1 from './blog-image-1.png';
import img2 from './blog-image-2.png';
import img3 from './blog-image-3.jpg';
import './BlogCard.scss'

const BlogCard = () => {
  return (
        <>
            <div className='wrapper'>

               <div className='section-name'>BLOG</div>
                <section className='blog'>
            
                    <div className='blog__card'>
                        <img className='blog__card--image' src={img1} alt='card-blog' width='380'/>
                        <div className='blog__card--date'>Mar 21, 2021</div>
                        <div className='blog__card--title'>Newborn Development: The First 12 Weeks</div>
                    </div>

                    <div className='blog__card'>
                        <img className='blog__card--image' src={img2} alt='card-blog' />
                        <div className='blog__card--date'>Mar 13, 2021</div>
                        <div className='blog__card--title'>Newborn Sleep Schedules</div>
                    </div>

                    <div className='blog__card'>
                        <img className='blog__card--image' src={img3} alt='card-blog' />
                        <div className='blog__card--date'>Mar 07, 2021</div>
                        <div className='blog__card--title'>International Women's Day Q&A With Ying Liu</div>
                    </div>
                </section>
            </div>
        </>

  )
}

export default BlogCard;