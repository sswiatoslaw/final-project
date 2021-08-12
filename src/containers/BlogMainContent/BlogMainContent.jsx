import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchSlides from '../../store/slides/actions';
import BlogMain from '../../components/BlogMain/BlogMain';
import './BlogMainContent.scss';

function BlogMainContent ({ getAllSlides, allSlides }) {
  useEffect(() => {
    if (allSlides.length === 0) {
      getAllSlides();
    }
  }, [getAllSlides, allSlides]);

  return (
    <div className='wrapper'>
      <h2 className='blog__title'>BLOG</h2>
      <BlogMain />

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allSlides: state.allSlides
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllSlides: () => dispatch(fetchSlides())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogMainContent);