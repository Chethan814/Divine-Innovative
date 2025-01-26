import React from 'react';

const GradientButton = () => {
  const buttonStyle = {
    background: 'linear-gradient(to right, #F8DCE0 0%, #F5DDE7 12%, #EFDEEF 24%, #ECDFF5 36%, #E6E0FE 48%, #E9DFFF 58%, #ECDCFD 69%, #EFDACF 80%, #F3D8FA 90%, #F5D6FA 100%)',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button className='text-black font-poppins-semibold text-[22px] mt-8' style={buttonStyle}>
      Get in Touch
    </button>
  );
};

export default GradientButton;
