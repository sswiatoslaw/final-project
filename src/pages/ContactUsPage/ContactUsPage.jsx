import Button from '../../components/Button/Button'
import React from 'react'
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm'
import Banner from '../../components/Banners/Banner'
import { bannerImagesDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
const ContactUsPage = () => {
  return (
        <div>
            <Banner imgPath={bannerImagesDictionary.contactUs} imgName='boys' title={bannerTitleDictionary.contactUsTitle} />
            <FeedbackForm title={'Leave a Messave'} text={'If you have a question or a query no matter how big or small, feel free to get in touch with us here and we\'ll happily help you.'} button={<Button modifier='contained' text='Send'
                                                                                                       width='280px'
                                                                                                       minWidth='335px'/>}/>
        </div>
  )
}

export default ContactUsPage
