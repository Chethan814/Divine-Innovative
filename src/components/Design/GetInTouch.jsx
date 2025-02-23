// import React from 'react';
// import styled from 'styled-components';
import "../../styles/App.css";

const inputstyle = `p-2 lg:p-3 w-full ]`;

const Form = () => {
    return (
        <div className="signin-form-container font-gilroy xl:max-w-[30vw] ">
            <div className="container">
                <div className="heading">Enter your detail below</div>
                <form className="form" action>
                    <div className="input-field">
                        <input
                            required
                            autoComplete="off"
                            type="text"
                            name="text"
                            className={inputstyle}
                        />
                        <label htmlFor="username">Full Name</label>
                    </div>
                    <div className="input-field">
                        <input
                            required
                            autoComplete="off"
                            type="email"
                            name="email"
                            className={inputstyle}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input
                            required
                            autoComplete="off"
                            type="number"
                            className={inputstyle}
                        />
                        <label htmlFor="email">Contact No.</label>
                    </div>
                    <div className="input-field">
                        <input
                            required
                            autoComplete="off"
                            type="text"
                            name="text"
                            className="py-10 lg:py-10 w-full "
                        />
                        <label htmlFor="username">Your Project brief</label>
                    </div>
                    <div className="btn-">
                        <button className="font-poppins font-normal xl:text-[22px] my-6 xl:mt-8  xl:translate-x-0 py-2 px-4 rounded xl:w-[13vw] max-w-45 xl:h-[3.4rem] transition hover:scale-105 border-2 border-[#000000] sm:bg-linear-[to_right,#F8DCE0_0%,#F5DDE7_12%,#EFDEEF_24%,#ECDFF5_36%,#E6E0FE_48%,#E9DFFF_58%,#ECDCFD_69%,#EFDACF_80%,#F3D8FA_90%,#F5D6FA_100%]">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
