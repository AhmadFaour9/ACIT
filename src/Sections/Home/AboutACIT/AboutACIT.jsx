import React from 'react'
import { CardAboutACIT, Title } from '../../../component'
import './AboutACIT.css'
import OurPartners from '../OurPartners/OurPartners'
const AboutACIT = () => {
  return (
    <div className='About-ACIT container-fluid p-0 m-sm-0 m-0'>
        <Title text={'عن ACIT'}/>
        <div className='row col-12 mt-5'>
        <div className='d-flex align-items-center justify-content-evenly flex-wrap mb-5'>
<CardAboutACIT  description={"تستهدف دوراتنا للمهتمين بتقنية المعلومــات بجميع مستوياتهم، من المبتدئ حتى المتقدم. تحتوي الدورات على تطبيقـات عمليــــة فـــي معامل جاهزة ومتكاملة والكثير من المميزات التي ســـــتجدوها فـــــي تفاصيــــل الـــدورات."} img={require('../../../assets/images/witness_2210266 1.png')} title={'الرؤية'}/>
   <CardAboutACIT description={"معهد شبكة اباد للتدريب من المعاهد الرائـدة في تقديــم دورات التطويـــر المتخصصــة في تكنولوجيا المعلومات مما يساهم في خدمـة ابناء هذا البلد الحبيب وتنمية قدراتهم العلمية والعملية وفـــق أحــــدث البرامــــج التدريبيـــة."} img={require('../../../assets/images/team_4262915 1.png')} title={'من نحن؟'}/>
     <CardAboutACIT description={"تستهدف دوراتنا للمهتمين بتقنية المعلومــات بجميع مستوياتهم، من المبتدئ حتى المتقدم. تحتوي الدورات على تطبيقـات عمليــــة فـــي معامل جاهزة ومتكاملة والكثير من المميزات التي ســـــتجدوها فـــــي تفاصيــــل الـــدورات."} img={require('../../../assets/images/bullseye_800634 1.png')} title={'الهدف'}/>
   </div>
  <div className='title-partner'>
     <Title  text={'شركائنا'}/>
  </div>
   <OurPartners number={'4'} />
        </div>
    </div>
  )
}

export default AboutACIT