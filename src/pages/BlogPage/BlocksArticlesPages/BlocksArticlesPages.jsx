import React from 'react'
import BlogContent from '../../../containers/BlogContent/BlogContent'
import Banner from '../../../components/Banners/Banner'
import {bannerImagesDictionary, bannerTitleDictionary, bannerTextDictionary} from '../../../dictionary/bannerDictionary'
import JoingMailing from '../../../components/JoingMailing/JoingMailing'
import FeedbackForm from '../../../components/FeedbackForm/FeedbackForm'
import Button from '../../../components/Button/Button'

const BlocksArticlesPages = () => {
  return (
        <div>
            <Banner imgPath={bannerImagesDictionary.newbornSleepSchedules} imgName='Baby boy' title={bannerTitleDictionary.newbornSleepSchedulesTitle} textTop={bannerTextDictionary.newbornSleepSchedulesTextTop} textBottom={bannerTextDictionary.newbornSleepSchedulesTextBottom}/>
            <BlogContent/>
            <FeedbackForm title='Leave a Comment' text='Please note, comments must be approved before they are published' button={<Button modifier='outlined' text='Post comment'
                                                                                                       width='280px'
                                                                                                       minWidth='335px'/>}/>
            <JoingMailing/>
        </div>
  )
}

export default BlocksArticlesPages
