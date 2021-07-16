
import React from 'react'
import {banerImagesDictionary, banerTitleDictionary} from '../../dictionary/banerDictionary';
import Baner from '../../components/Baners/Baner';
import JoingMailing from '../../components/JoingMailing/JoingMailing';

const BlogPage = () => {
  return (
        <div>
           <Baner imgPath={banerImagesDictionary.blog} imgName='girls' title={banerTitleDictionary.blogTitle}/>
           <JoingMailing/>
        </div>
  )
}

export default BlogPage
