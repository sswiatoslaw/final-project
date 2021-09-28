import React from 'react'
<<<<<<< HEAD
import Banner from '../../components/Banners/Banner'
import {bannerImagesDictionary, bannerTitleDictionary} from '../../dictionary/bannerDictionary'
||||||| 01e9988
import Baner from '../../components/Baners/Baner'
import {banerImagesDictionary, banerTitleDictionary} from '../../dictionary/banerDictionary'
=======
import Banner from '../../components/Banners/Banner'
import {bannerImagesDictionary, bannerTitleDictionary} from '../../dictionary/banerDictionary'
>>>>>>> 093e7e2629187c565eaacba5c5df474aa40bd5ca
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
