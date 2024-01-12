/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { AboutUsData } from "../utils/data"

export function AboutUs() {
    return (
        <>
            <div className="max-w-screen-xl  bg-white mx-auto py-8 px-4 lg:py-16 lg:px-6 mt-[30px]" id="aboutus">
                <div className="text-center mb-4  p-4">
                    <h2 className="text-4xl tracking-tight font-bold text-primary-800 mt-8">About US</h2>
                    <section className="w-full p-4 flex justify-center">
                        <p className="w-full lg:w-2/3  mt-4 mb-8 font-style">Ikirenga Art and Culture Promotion (Ikirenga ACP) is a Rwandan non-government organization aimed at promoting artistic initiatives aimed at socio-economic and cultural development, promoting cross-cultural understanding and cooperation among countries, people and communities. Its vision is to establish arts, culture and tourism as tools for cultural exchange and socio-economic development in Rwanda. Its contributions to the cultural and arts industry have secured the organization a membership  in the UNESCO 2005 Convention on the Protection and Promotion of the Diversity of Cultural Expressions as an observer.</p>
                    </section>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* <!-- can help image --> */}

                    <div className="mr-0 md:mr-8 mb-6 md:mb-0 w-[300px] md-full flex justify-center">
                        <img className="object-contain w-full" src="https://res.cloudinary.com/amatunda/image/upload/v1696170257/ikirenga/ikirenga_bchuyr.png" alt="can_help_banner" />
                    </div>
                    {/* <!-- end can help image --> */}

                    <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2 mt-[50px]">
                        <div className="w-full sm:w-1/2 mb-4 px-2 ">
                            <div className="h-full py-4 px-6 border border-main-color border-t-0 border-l-0 rounded-br-xl">
                                <h3 className="text-2xl font-bold text-md mb-6 obj">Mission:</h3>
                                <p className="obj font-style">We are on the quest to promote artistic Initiatives aimed at socio-economic and cultural development, Promoting cross-cultural understanding and cooperation among countries, peoples and communities.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 mb-4 px-2 ">
                            <div className="h-full py-4 px-6 border border-main-color border-t-0 border-l-0 rounded-br-xl">
                                <h3 className="text-2xl font-bold text-md mb-6 obj">Vision</h3>
                                <p className=" obj font-style">To establish art, culture and tourism as tools for cultural exchange and social economic development in Rwanda.</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 mb-4 px-2 ">
                            <div className="h-full py-4 px-6 border border-main-color border-t-0 border-l-0 rounded-br-xl space-y-2">
                                <h3 className="text-2xl font-bold text-md mb-6 obj">Our Objectives</h3>
                                <p className=" obj font-style">1. Nurture Culture tourism and Rwandan language to boost devotion nationwide and worldwide through seminars, conferences, and festivals.</p>
                                <p className=" obj font-style">2. Improve access and participation of grassroots art practitioners in cultural industries and economic activities through a series of trainings, access to market opportunities, among others.</p>
                                <p className=" obj font-style">3. Our mission is to clilaborate with local and international organizations, cultural operators and other large corporations for a sustainable Creative industry.</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 mb-4 px-2 ">
                            <div className="h-full py-4 px-6 border border-main-color border-t-0 border-l-0 rounded-br-xl space-y-2">
                                <h3 className="text-2xl font-bold text-md mb-6 obj">Our Values</h3>
                                <p className=" obj font-style"><b>Innovative:</b> We adhere to providing an environment that promotes and encourages innovation and creativity</p>
                                <p className=" obj font-style"><b>Inclusiveness and Diversity:</b>We believe in a world where everyone is welcomed, respected and treated fairly and equally.</p>
                                <p className=" obj font-style"><b>Collaboration:</b>We widely open our doors to everyone who believes in our mission and is working towards our common objectives.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs