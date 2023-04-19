import React from 'react'
import ServiceHeader from '../../components/serviceHeader/serviceHeader'
import Video from '../../components/video/video'
import RelatedProject from '../../components/relatedProject/relatedProject'
import FAQ from '../../components/FAQ/faq'
import Footer from "../../components/footer/footer";
function Service() {
  return (
    <div className='servic-bgClr'>
      <ServiceHeader/>
      <Video/>
      <RelatedProject/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Service
