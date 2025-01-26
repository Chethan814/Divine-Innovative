import React from 'react';

import "../../../styles/index.css"

const GradientButton = (props) => {
  const buttonStyle = {
    background: 'linear-gradient(to right, #F8DCE0 0%, #F5DDE7 12%, #EFDEEF 24%, #ECDFF5 36%, #E6E0FE 48%, #E9DFFF 58%, #ECDCFD 69%, #EFDACF 80%, #F3D8FA 90%, #F5D6FA 100%)',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button className='font-poppins font-normal text-[22px] mt-8 w-[13vw] h-[3.4rem] transition hover:scale-105 ' style={buttonStyle}>
      {props.GIT ? "Get in Touch" : "Learn more"}
    </button>
  );
};

export default GradientButton;
