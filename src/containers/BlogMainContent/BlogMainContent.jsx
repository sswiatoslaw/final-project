import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchSlides from '../../store/slides/actions';
import BlogMain from '../../components/BlogMain/BlogMain';
<<<<<<< HEAD
import './BlogMainContent.scss';
=======
>>>>>>> 112ce4acf7c65da4e4fb73080e5050861aeec590

function BlogMainContent ({ getAllSlides, allSlides }) {
  useEffect(() => {
    if (allSlides.length === 0) {
      getAllSlides();
    }
  }, [getAllSlides, allSlides]);

  return (
<<<<<<< HEAD
    <div className='wrapper'>
      <h2 className='blog__title'>BLOG</h2>
      <BlogMain />

    </div>
=======
    <>
     <BlogMain />
    </>
>>>>>>> 112ce4acf7c65da4e4fb73080e5050861aeec590
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