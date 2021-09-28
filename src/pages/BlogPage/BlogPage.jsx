import React from 'react'
import { bannerImagesDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
import Banner from '../../components/Banners/Banner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';
import BlogContainer from './../../containers/BlogContainer/index';
import './BlogPage.scss'

const BlogPage = () => {
  return (
        <div>
           <Banner imgPath={bannerImagesDictionary.blog} imgName='girls' title={bannerTitleDictionary.blogTitle}/>
           <BlogContainer/>
           <JoingMailing/>
        </div>
  )
}

export default BlogPage
