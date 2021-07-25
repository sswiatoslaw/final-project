import React from 'react';
import { connect } from 'react-redux';
import './BlogList.scss';
import BlogCard from '../BlogCard/BlogCard';

const BlogList = ({ allSlides}) => {
  return (
    <>
       <section className='blog__list'>
            <ul className='blog__item'>
            {allSlides.map((slide) => {
              return (
               <BlogCard slide={slide} key={slide._id} />
              )
            })};
           </ul>
        </section>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    allSlides: state.allSlides
  };
};

export default connect(mapStateToProps)(BlogList);