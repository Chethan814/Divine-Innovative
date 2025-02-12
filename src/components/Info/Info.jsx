// import { react } from "eslint-plugin-react";
import DV from "../../asstes/Project/DV/DV.png";

function Info() {
    let tagline = "what makes us";
    let heading = "DIFFERENT";
    let description = `we know how to represent your ideas, thoughts and vision in custom designs that can represent your business and can convert prospects into your clients. Our expert in-house team always does in-depth analysis to create designs that communicate the identity, mission and vision of your business.`;

    // sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-pink-400 2xl:bg-amber-400

    return (
        <div className="overflow-x-hidden  ">
            <section className="lg:translate-x-5 xl:translate-x-25 flex flex-col md:flex-row justify-center items-center mt-10 p-2 md:py-10 xl:w-full  ">
                <div className="w-[80vw] md:w-[45vw] lg:w-[50vw] lg:mr-10 ">
                    <img
                        src={DV}
                        alt=""
                        className=" w-[80vw] md:w-[45vw] lg:w-[50vw] h-50 sm:h-75 lg:h-100 object-contain sm:object-cover md:object-contain rounded-3xl "
                    />
                </div>
                <div className="w-[80vw] md:w-[45vw] md:p-4 font-gilroy">
                    <div>
                        <p className="mt-4 -mb-1 text-[0.9rem] sm:text-[1.1rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] ">
                            {tagline}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-5xl ">
                            {heading}
                        </h2>
                    </div>
                    <div>
                        <p className="mt-2 text-[0.9rem] text-justify sm:text-[1.1rem] md:text-[1rem] lg:text-[1.3rem]  md:max-w-[25rem] ">
                            {description}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Info;
