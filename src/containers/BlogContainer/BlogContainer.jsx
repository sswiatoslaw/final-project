import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchSlides from '../../store/slides/actions';
import BlogList from '../../components/BlogList/BlogList';

function BlogContainer ({ getAllSlides, allSlides }) {
  useEffect(() => {
    if (allSlides.length === 0) {
      getAllSlides();
    }
  }, [getAllSlides, allSlides]);

  return (
    <div className='wrapper'>
      <BlogList/>

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

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);