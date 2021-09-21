import React from 'react'
import Banner from '../../components/Banners/Banner'
import { bannerImagesDictionary, bannerTitleDictionary } from '../../dictionary/bannerDictionary';
import AboutContent from '../../containers/AboutContent/AboutContent'
import JoingMailing from '../../components/JoingMailing/JoingMailing'

const AboutPage = () => {
  return (
        <div>
            <Banner imgPath={bannerImagesDictionary.about} imgName='Baby boy' title={bannerTitleDictionary.aboutTitle}/>
            <AboutContent/>
            <JoingMailing/>
        </div>
  )
}

export default AboutPage
