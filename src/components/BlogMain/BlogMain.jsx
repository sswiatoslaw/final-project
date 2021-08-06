import React from 'react';
import { connect } from 'react-redux';
import BlogCard from '../BlogCard/BlogCard';
import './BlogMain.scss'

const BlogMain = ({ allSlides}) => {
  const blogMainList = allSlides.slice(0, 3)
  return (
    <>
       <section className='blog__list'>
           <ul className='blog__item'>
            {blogMainList.map((slide) => {
              return (
               <BlogCard slide={slide} key={slide._id} />
              )
            })};
           </ul>
        </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    allSlides: state.allSlides
  };
};

export default connect(mapStateToProps)(BlogMain);