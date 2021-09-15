import React from 'react';
import { connect } from 'react-redux';
import BlogCard from '../BlogCard/BlogCard';
import './BlogMain.scss'

const BlogMain = ({ allSlides}) => {
  const blogMainList = allSlides.slice(0, 3)
  return (
     <div className='wrapper'>
       <h2 className='blogmain__title'>BLOG</h2>
        <section className='blogmain__list'>
           <ul className='blogmain__item'>
            {blogMainList.map((slide) => {
              return (
               <BlogCard slide={slide} key={slide._id}/>
              )
            })};
           </ul>
        </section>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allSlides: state.allSlides
  };
};

export default connect(mapStateToProps)(BlogMain);