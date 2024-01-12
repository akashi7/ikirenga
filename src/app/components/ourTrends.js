'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TrendsData } from "../utils/data";
import Image from "next/image";
const OurTrends = () => {
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    const handleRedirect=(link)=>{
        window.open(link,'_blank');
    }

    return (
        <section className="w-full mt-8 h-[700px] bg-main-color  trends" id="trends">
            <section className="w-full  h-full flex items-center p-4" style={{ width: '100%', padding: '40px' }}>
                <Slider {...settings} className="w-[100%] space-x-4 " >
                    {TrendsData.reverse().map((item, index) => (
                        <div className="w-[200px] p-4 min-h-[500px] rounded-lg" key={index}>
                            <section className="w-full h-full bg-white p-2 rounded-lg">
                                <section className={`w-full h-[200px] border bg-white bg-trend`} style={{ backgroundImage: `url(${item.image})` }}>
                                </section>
                                <section className="w-1/2 mt-4 p-1 bg-black text-white text-center mx-auto mt-2 text-black border rounded">
                                    <p >{item.date}</p>
                                </section>
                                <p className="text-sm mt-8 px-4">{item.title}</p>
                                <section className="w-full p-4 h-[100px] flex items-end mt-4">
                                    {item.link && <button 
                                        onClick={()=>handleRedirect(item.link)}
                                        type="button"
                                        className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                    >Read More</button>}
                                </section>
                            </section>
                        </div>
                    ))}
                </Slider>
            </section>
        </section>
    );
}
export default OurTrends