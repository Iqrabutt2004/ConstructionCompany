import React from 'react'
import ProjectHeader from '../../components/projectHeader/projectHeader';
import About from '../../components/about/about';
import RelatedProject from '../../components/relatedProject/relatedProject';
import Footer from '../../components/footer/footer';
function Project() {
  return (
    <React.Fragment>
      <ProjectHeader/>
      <About/>
      <RelatedProject/>
      <Footer/>
    </React.Fragment>
  )
}

export default Project;
