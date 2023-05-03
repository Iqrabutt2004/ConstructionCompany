import React from 'react'
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactStart from '../../components/ContactStart/ContactStart'
import GetIn from '../../components/GetIn/GetIn'

function Contact() {
  return (
    <React.Fragment>
      <ContactHeader/>
      <ContactStart />
      <GetIn />
    </React.Fragment>
  );
}

export default Contact
