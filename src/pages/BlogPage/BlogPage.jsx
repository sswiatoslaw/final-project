import React from 'react'
import { banerImagesDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary';
import Baner from '../../components/Baners/Baner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import BlogContainer from './../../containers/BlogContainer/index';
import './BlogPage.scss'

const BlogPage = () => {
  return (
    <div>
      <Baner imgPath={banerImagesDictionary.blog} imgName='girls' title={banerTitleDictionary.blogTitle}/>
      <BlogContainer/>
      <JoingMailing/>
    </div>
  )
}

export default BlogPage
