import React from 'react'
import ContactHeader from '../../components/ContactHeader/ContactHeader';
import ContactStart from '../../components/ContactStart/ContactStart'
import GetIn from '../../components/GetIn/GetIn'
import Map from "../../assets/images/Map.svg";
function Contact() {
  return (
    <div>
      <ContactHeader/>
      <ContactStart />
      <GetIn />
      <img className="img-fluid w-100 " src={Map} alt="" />
    </div>
  );
}

export default Contact
