import React from 'react'
import Baner from '../../components/Baners/Baner'
import {banerImagesDictionary, banerTitleDictionary} from '../../dictionary/banerDictionary'
import AboutContent from '../../containers/AboutContent/AboutContent'
import JoingMailing from '../../components/JoingMailing/JoingMailing'

const AboutPage = () => {
  return (
        <div>
            <Baner imgPath={banerImagesDictionary.about} imgName='Baby boy' title={banerTitleDictionary.aboutTitle}/>
            <AboutContent/>
            <JoingMailing/>
        </div>
  )
}

export default AboutPage
