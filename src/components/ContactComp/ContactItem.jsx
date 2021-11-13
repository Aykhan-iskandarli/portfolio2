import React from 'react'
import email from "../../image/emailme.svg"
import phone from "../../image/phone.svg"
import loc from "../../image/location.svg"
import ContactComp from './ContactComp'


const ContactItem = () => {
    return (
        <div className="contactPSection">
            <div className="d-flex">
            <div className="contactMap">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.43465759905!2d49.7849199826634!3d40.39470211181718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1634763745501!5m2!1sen!2s" width="600" height="450" style={{border:"0", height:"560px"}} className="googlemap" allowFullScreen="" title="myFrame" loading="lazy"></iframe>
                </div>
                <div className="contact_">
                    <ContactComp icon={phone} text1={'0554666566'} text2={'0503319291'} title={'Phone'} />
                    <ContactComp  icon={email} text1={'iskenderli-97@mail.ru'}  title={'Email'} />
                    <ContactComp icon={loc} text1={'Baku'} text2={'Suraxani'} title={'Address'} />
                </div>
            </div>
           
        </div>
    )
}

export default ContactItem
