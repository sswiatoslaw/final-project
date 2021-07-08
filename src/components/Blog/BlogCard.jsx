import img1 from './image-blog-1.png';
import img2 from './image-blog-2.png';
import img3 from './image-blog-3.png';
import './BlogCard.scss'

const BlogCard = () => {
  return (
        <>
            <div className='section-name'>BLOG</div>
            <div className='wrapper'>
            <div className="blog">
                <img className='blog__image' src={img1} alt='card-blog'/>
                <div className='blog__date'>Mar 21, 2021</div>
                <div className='blog__title'>Newborn Development: The First 12 Weeks</div>
            </div>

            <div className="blog">
                <img className='blog__image' src={img2} alt='card-blog' />
                <div className='blog__date'>Mar 13, 2021</div>
                <div className='blog__title'>Newborn Sleep Schedules</div>
            </div>

            <div className="blog">
                <img className='blog__image' src={img3} alt='card-blog' />
                <div className='blog__date'>Mar 07, 2021</div>
                <div className='blog__title'>International Women's Day Q&A With Ying Liu</div>
            </div>
        </div>
        </>

  )
}

export default BlogCard;