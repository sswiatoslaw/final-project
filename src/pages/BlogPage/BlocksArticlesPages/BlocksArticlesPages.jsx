import React from 'react'
import BlogContent from '../../../containers/BlogContent/BlogContent'
import Baner from '../../../components/Baners/Baner'
import {banerImagesDictionary, banerTitleDictionary, banerTextDictionary} from '../../../dictionary/banerDictionary'
import JoingMailing from '../../../components/JoingMailing/JoingMailing'
import FeedbackForm from '../../../components/FeedbackForm/FeedbackForm'
import Button from '../../../components/Button/Button'

const BlocksArticlesPages = () => {
  return (
        <div>
            <Baner imgPath={banerImagesDictionary.newbornSleepSchedules} imgName='Baby boy' title={banerTitleDictionary.newbornSleepSchedulesTitle} textTop={banerTextDictionary.newbornSleepSchedulesTextTop} textBottom={banerTextDictionary.newbornSleepSchedulesTextBottom}/>
            <BlogContent/>
            <FeedbackForm title='Leave a Comment' text='Please note, comments must be approved before they are published' button={<Button modifier='outlined' text='Post comment'
                                                                                                       width='280px'
                                                                                                       minWidth='335px'/>}/>
            <JoingMailing/>
        </div>
  )
}

export default BlocksArticlesPages
