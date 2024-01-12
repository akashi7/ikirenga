/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import FestivalProject from '../components/FestivalProject'

export default function Festival() {
    return (
        <main className="w-full pb-4">
            <FestivalProject />

            <section className="w-full min-h-[500px] mt-[50px]" id="activities">
                <serction className="mt-[50px] grid grid-cols-1 px-4">
                    {/* festival section */}
                    <section className="px-4">
                        <div className="gap-16 px-4 items-center py-8  w-full lg:grid lg:grid-cols-2 lg:py-16">
                            <div className="font-light text- sm:text-lg text-gray-500">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                                    Ikirenga Cultural Tourism Festival
                                </h2>
                                <p className="mb-2 mt-4 font-style">
                                    Ikirenga Culture Tourism Festival is an annual cultural event organized and implemented by Ikirenga Art and Culture Promotion that aims to celebrate Rwanda's rich cultural heritage while embracing its diverse artistic expressions, captivating language, and amazing natural beauty. The festival brings together artists, performers, and cultural enthusiasts from across the nation to celebrate and embrace Rwanda's culture, while embassies, international schools, and NGOs operating in Rwanda are given space to showcase their countries' cultures, fostering cross-cultural understanding and appreciation.
                                </p>
                                <p className="mb-2 mt-4 font-style">
                                    Our previous two editions of the festival were hugely successful, each embodying the spirit of cultural exchange and artistic expression. These festivals became platforms that showcased the beauty of traditions, art, music, and stories from across Rwanda and beyond.
                                </p>
                            </div>
                            <div className="grid grid-cols-1">
                                <section className="w-full p-4 shadow-md bg-main-color min-h-[350px] rounded-lg h-full festival">
                                    <video controls className="w-full">
                                        <source style={{ width: '100%',height:'500px' }} src="https://res.cloudinary.com/amatunda/video/upload/v1700479120/Opening_Highlights_18_june_2022_1_t3cllc.mp4" />
                                    </video>
                                </section>
                            </div>
                        </div>
                    </section>
                </serction>
            </section>
            <section>
                <section className="bg-gray-900 mt-[100px]">
                    <section className="w-full p-8 flex flex-col justify-center items-center">
                        <h2 className="mb-4 text-4xl text-white tracking-tight font-extrabold pl-8 font-style">
                            Second Edition
                        </h2>
                        <h1 className="mb-4 w-full lg:w-[80%] bg-main-color   text-sm lg:text-xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl text-white">
                            <video controls className="w-full">
                                <source src="https://res.cloudinary.com/amatunda/video/upload/v1702400061/WhatsApp_Video_2023-12-08_at_1.13.46_PM_faawed.mp4" />
                            </video>
                        </h1>
                    </section>
                </section>
                <section className="mt-8 w-full mt-[100px]">
                    <div className="gap-16 items-center py-8  mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16">
                        <div className="font-light p-4 text-sm:text-lg text-gray-500  flex justify-center">
                            <h2 className="mb-4 text-2xl tracking-tight font-extrabold font-style">
                                Third Edition: Coming Soon!
                            </h2>
                            <p className="mb-4 ">
                        
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}
