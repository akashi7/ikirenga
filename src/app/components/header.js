/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
  return (
    <div className="w-100 container-section">
      <section className='slide-container'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className="heading-container pl-8 flex flex-col justify-center">
              <h1 className=" font-style mb-4 w-full lg:w-1/2  text-sm lg:text-xl mt-[-50px] font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl text-white sh-one">
                It’s an honour and pleasure to welcome you all to <br />
                <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 text-xl lg:text-3xl">
                  Ikirenga Arts and Culture Promotion.
                </span>
              </h1>
              <p className="pl-8 w-full lg:w-1/2  font-style text-sm lg:text-lg mt-4  text-gray-500 lg:text-xl dark:text-gray-400">
                I welcome you all to Rwanda, a country of a thousand hills.
              </p>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="heading-container pl-8 flex flex-col justify-center items-center">
              <h1 className="mb-4 w-full font-style lg:w-1/2  text-sm lg:text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl text-white">
                On a journey to its reconstruction and rebirth from horrific events
                of the 1994 genocide against the Tutsi.
              </h1>
            </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="heading-container pl-8 flex flex-col justify-center items-center">
          <h1 className="mb-4 font-style w-full lg:w-1/2  text-sm lg:text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl text-white">
            Rwanda is a very beautiful country located in the heart of Africa in
            the East African region.
          </h1>
          <p className="pl-2  w-full lg:w-1/2  text-sm lg:text-lg mt-4  text-gray-500 lg:text-xl dark:text-gray-400">
            Very rich in culture and is an amazing destination for tourism and
            business.
          </p>
        </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="heading-container pl-8 flex flex-col justify-center items-center">
          <h1 className="mb-4 w-1/2 text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl text-white">
            At Ikirenga ACP,
          </h1>
          <p className="pl-2 font-style w-full lg:w-1/2  text-sm lg:text-lg mt-4 font-style text-white lg:text-xl">
            it is a privilege and a duty that we proudly take over to serve our
            country and contribute to its socio-economic development and we have
            made it a mission to promote artistic initiatives aimed at improving
            socio-economic and cultural development while also promoting
            cross-cultural understanding cooperation among countries/Nations,
            people and communities
          </p>
        </section>
          </SwiperSlide>
          <SwiperSlide>
          <section className="heading-container pl-8 flex flex-col justify-center items-center">
          <h1 className="mb-4 w-1/2 text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl text-white">
            At Ikirenga ACP,
          </h1>
          <p className="pl-2 w-full lg:w-1/2  text-sm lg:text-lg mt-4 font-style text-white lg:text-xl">
            We strongly believe that arts, culture, and tourism are very
            powerful tools for cultural exchange and socio-economic development.
            We, therefore, aim at improving access and participation of
            grassroots arts practitioners through a series of training, access
            to market opportunities, and collaboration with cultural operators
            worldwide. I, therefore, extend my invitation to anyone who wants to
            work with us.
          </p>
        </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};
export default Header;
