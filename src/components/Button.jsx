import React from 'react';

function Button(props) {
  const { bc, tc, bgc, children, className, onClick } = props; 
  return (
    <div onClick={onClick} className={`border-[4px] border-solid ${bc} ${tc} ${bgc} font-bold ${className} flex justify-center items-center text-center px-8 py-5 w-50 md:w-80 md:px-14 md:text-xl lg:w-96 lg:px-16`}>{children}</div>
  )
}

export default Button;
