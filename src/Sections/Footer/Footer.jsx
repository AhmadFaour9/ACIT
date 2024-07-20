import React from 'react'
import './Footer.css'
import {TiSocialInstagram} from 'react-icons/ti'
import { FaFacebook, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { GrGithub } from 'react-icons/gr'
import { BsInstagram, BsLinkedin, BsSnapchat, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { GoX } from 'react-icons/go'
import { LiaLinkedin } from 'react-icons/lia'
import { CiLinkedin } from 'react-icons/ci'
const Footer = () => {
    return (
        <div className='footer container-fluid  p-0 m-0 mb-0 '>
            <div className='row col-12 p-0 m-0'>
                <div className='col-md-4 col-sm-12'>
                    <div className='row col-12'>
                        <img src={require('../../assets/images/logo-footer.png')} alt='logo' />

                    </div>
                    <div className='col-12 d-flex flex-row-reverse align-items-center justify-content-evenly'>
                            <BsTwitterX color='white' size={25}/>
                            <BsInstagram color='white' size={25}/>
                            <BsSnapchat color='white' size={25}/>
                            <FaLinkedinIn  color='white' size={25}/>
                            <BsYoutube color='white' size={25}/>
                            <FaFacebook color='white' size={25}/>
                            
                    </div>
                </div>
                <div className='col-md-2 col-sm-6'>
                <p className='para header'>روابط سريعة</p>
                <p className='para items'>الرئيسية</p>
                <p className='para items'> الكورسات</p>
                <p className='para items'> الإعتمادات والشركات</p>
                <p className='para items'> المقالات </p>
                <p className='para items'> اتصل بنا</p>
                </div>
                <div className='col-md-2 col-sm-6'>
                <p className='para header'>الشهادات والدورات</p>
                <p className='para items'>سيسكو (Cisco)</p>
                <p className='para items'> مايكروسوفت (microsoft)</p>
                <p className='para items'> اوراكل (oracle)</p>
                <p className='para items'> جونيبر (juniper) </p>
                <p className='para items'> اي سي كونسيل (Ec-councel)</p>
                <p className='para items'> عرض الكل {'>>'}</p>

                </div>
                <div className='col-md-4 col-sm-12'>
                <p className='para header'>ابق على اطلاع</p>
                <p className='para items'>اشترك في نشرتنا الإخبارية</p>
                <p className='para items'> </p>
                <p className='para items'> 00966549999999-999999999</p>
                <p className='para items'> info@aAcit.com</p>
              

                </div>
            </div>
        </div>
    )
}

export default Footer