import { PartnersData } from "../utils/data";
const Partners = () => {
    return (
        <section className="w-full px-4 mt-8 min-h-[300px]">

            <section className="flex  items-center">
                <h1 className="font-bold text-xl mt-4">Our Partners</h1>
            </section>
            <section className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-10 pt-4 mb-4">
                {PartnersData?.map((item, index) => (
                    <section className="card  p-4 grid grid-cols-1 " key={index}>
                        <section className="w-full">
                            <img src={item.logo} alt={item.description} width={200} height={200} />
                        </section>
                        {/* <section className="mt-4 text-sm font-style">{item.description}</section> */}
                    </section>
                ))}
            </section>

        </section>
    );
}
export default Partners;