/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FestivalProject from "./FestivalProject";
export function Projects() {
  return (
    <>
      <section className="w-full min-h-[500px] mt-8" id="activities">
        <section className="pt-4 px-4 lg:px-0 flex flex-col justify-center items-center mb-4">
          <h1 className="mb-4 text-xl  font-extrabold leading-none tracking-tight md:text-5xl lg:text-3xl  sh-one">
            Our Projects <br />
          </h1>
          <p className="  text-lg mt-2  px-4 text-gray-500 lg:text-xl dark:text-gray-400">
            Learn more about our projects and activities.
          </p>
        </section>
        <serction className="mt-[50px] grid grid-cols-1 px-4">

          {/* festival section */}
          <section className="bg-gray-900 px-4">
            <div className="gap-16 px-4 items-center py-8  w-full lg:grid lg:grid-cols-2 lg:py-16">
              <div className="font-light text- sm:text-lg text-gray-500">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                  Ikirenga Cultural Tourism Festival
                </h2>
                <p className="mb-2 mt-4 font-style">
                  Ikirenga Culture Tourism Festival is an annual cultural event organized and implemented by Ikirenga Art and Culture Promotion that aims to celebrate Rwanda's rich cultural heritage while embracing its diverse artistic expressions, captivating language, and amazing natural beauty. The festival brings together artists, performers, and cultural enthusiasts from across the nation to celebrate and embrace Rwanda's culture, while embassies, international schools, and NGOs operating in Rwanda are given space to showcase their countries' cultures, fostering cross-cultural understanding and appreciation.
                </p>
                <section className="w-full py-4 px-2 h-[100px] flex items-end mt-4">
                  <a href={"/festival"}>
                  <button
                    type="button"
                    className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                  >Learn More</button>
                   </a>
                </section>
              </div>
              <div className="grid grid-cols-1 mt-8">
                <section className="w-full shadow-md bg-white rounded-lg h-[500px] festival">
                  <img
                    className=" w-full h-full object-cover rounded-lg"
                    src="https://res.cloudinary.com/amatunda/image/upload/v1700477663/banner_j5xl4q.jpg"
                    alt="office content 2"
                  />
                </section>
              </div>
            </div>
          </section>

          {/* Ikirenga Artistic Freedom Initiative */}
          <section className="mt-[100px] bg-white m-0 w-full px-4">
            <div className="gap-16 px-4 items-center py-8  w-full lg:grid lg:grid-cols-2 lg:py-16">
              <div className="font-light text- sm:text-lg text-gray-500 ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold left">
                  Ikirenga Artistic Freedom Initiative
                </h2>
                <p className="mb-4 font-style">
                  The Ikirenga Artistic Freedom Initiative is a project of Ikirenga Art and Culture Promotion, implemented in partnership with and on the full fund of UNESCO through its UNESCO-Aschberg Programme. The project aims to support and enhance initiatives that protect and promote artistic freedom across Rwanda. The project comprises three essential phases:
                </p>
                <p className="mb-4 font-style">
                  <b>1. Research: &nbsp;</b> Under research, we will conduct a study to comprehensively understand the challenges, gaps, and opportunities within the Rwandan artistic community.
                </p>
                <p className="mb-4 font-style">
                  <b>2. Capacity Building: &nbsp;</b>
                  Our "Capacity Building" initiative will offer targeted training programs to equip artists with the skills and knowledge needed to address the challenges identified during the research phase.
                </p>
                <p className="mb-4 font-style">
                  <b>3. Exhibition:&nbsp;</b>
                  As part of the project, the “Exhibition” phase will provide trained artists with a platform to showcase their creative talents. This exhibition will serve as an opportunity for artists to present their work to a wide audience, including investors, stakeholders, partners, and the general public.
                </p>
              </div>
              <div className="grid grid-cols-1">
                <section className="w-full shadow-md bg-white rounded-lg h-[500px] artistic">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src="https://res.cloudinary.com/amatunda/image/upload/v1702321400/53377782848_e2fe6555ab_o_jpatux.jpg"
                    alt="office content 2"
                  />
                </section>
              </div>
            </div>
          </section>

          <section className="mt-8 w-full">
            <div className="gap-16 items-center py-8  mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
              <div className="font-light p-4 text-sm:text-lg text-gray-500 bg-white">
                <h2 className="mb-4 text-2xl tracking-tight font-extrabold">
                  Ikirenga Artistic Empowerment Hub Project
                </h2>
                <p className="mb-4 ">
                  We are thrilled to have partnered with the Australian Government, the Department of Foreign Affairs and Trade, on the Ikirenga Artistic Empowerment Hub Project. This collaboration is an incredible milestone for us and a step towards empowering the Rwandan community. Within this partnership, our organization has received a grant to implement this project. We greatly thank the Australian Government for recognizing the significance of creative and artistic empowerment and funding the project for implementation. Ikirenga Art and Culture Promotion will continue to foster a thriving artistic community.
                </p>
              </div>
              <div className="font-light p-4 text-sm:text-lg text-gray-500 bg-white">
                <h2 className="mb-4 text-2xl tracking-tight font-extrabold">
                  Ubuhanzi Project
                </h2>
                <p className="mb-4 ">
                  It is a project  designed to uplift young individuals within the creative industry by offering them a space to exhibit their talents through diverse artistic initiatives. The project kicked off in Musanze district, where upcoming artists from various parts of the country showed their talents and creativity. The event featured diverse artists and a renowned band, Symphony Band. Additionally, we promoted various Fashion Agencies such as 100hills Fashion Agency and invited a senior modeling agency to inspire, educate, and share experiences with these emerging talents. These activities took place in Musanze district on May 15 2021.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 mt-8">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text- sm:text-lg text-gray-500">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">
                  Twigire Project
                </h2>
                <p className="mb-4 font-style">
                  TWIGIRE Project is a project by IKIRENGA Arts and Culture
                  Promotion that targets young people in creative industry with
                  different art skills. It has the main purpose of boosting
                  youth’s business and entrepreneurship skills so as to create
                  their own sustainable business from their talents and art
                  skills.
                </p>
                <p className="font-style">
                  This project will create a platform for collaboration among
                  the youth, promote self-employment, and boost their income
                  generation skills from the created jobs/enterprises. The
                  project is planned to reach unemployed youth in need of
                  creative, practical business skills, and who believe in
                  self-employment with an interest in joining the art industry.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <section className="w-full rounded-lg bg-white h-[400px] twigire">
                  <img
                    className=" w-full h-full object-cover  rounded-lg"
                    src="https://res.cloudinary.com/amatunda/image/upload/v1700389713/31_rqrmwr.jpg"
                    alt="office content 2"
                  />
                </section>
                <section className="w-full rounded-lg bg-white mt-4 h-[400px] twigire">
                  <img
                    className=" w-full h-full object-cover  rounded-lg"
                    src="https://res.cloudinary.com/amatunda/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1696181687/IMG_0867_jdl4ub.jpg"
                    alt="office content 2"
                  />
                </section>
              </div>
            </div>
          </section>

        </serction>
        {/* <FestivalProject /> */}
      </section>
    </>
  );
}
export default Projects;
