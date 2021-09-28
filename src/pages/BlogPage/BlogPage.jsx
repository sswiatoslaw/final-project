import React from 'react'
<<<<<<< HEAD
import { bannerImagesDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
import Banner from '../../components/Banners/Banner';
||||||| 01e9988
import { banerImagesDictionary, banerTitleDictionary } from '../../dictionary/banerDictionary';
import Baner from '../../components/Baners/Baner';
=======
import { bannerImagesDictionary, bannerTitleDictionary } from '../../dictionary/banerDictionary';
import Banner from '../../components/Banners/Banner';
>>>>>>> 093e7e2629187c565eaacba5c5df474aa40bd5ca
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
