import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../../node_modules/swiper/swiper.min.css';
import 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Partner } from '../../../component';
import './OurPartners.css';
import { useMediaQuery } from 'react-responsive';


function OurPartners({ number }) {
    
    const isSmallScreen = useMediaQuery({ maxWidth: 400 });

    return (
        <>
            <div className='col-1 p-0 m-0'></div>
            <div className='swipers container-fluid row col-10 m-0 p-0 mb-0'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={1}
                    slidesPerView={isSmallScreen ? 1 : number}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <div className='partners d-flex justify-content-center align-items-center p-0 m-0'>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Partner img={require('../../../assets/images/1f8217996671e3f117dc56956b02a056.png')} />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <div className='col-1 p-0 m-0'></div>
        </>
    );
}

export default OurPartners;