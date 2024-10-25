import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrationDetials } from "../store/slices/reegitrationSlices";
const Card = ({ title, price, discount,student }) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <div className="w-[256px] h-[256px] border border-border rounded-lg p-4 text-center flex flex-col justify-center items-center gap-6 relative">
      <p className="font-sans font-semibold text-2xl text-primary">{title}</p>
      <hr className="w-full" />
      <p className="font-sans text-2xl font-semibold text-center">₹{price}/-</p>
      <button className="w-[220px] h-[40px] rounded-[10px] bg-primary text-white" 
        onClick={()=>{
            dispatch(registrationDetials({price,student}))
            navigate('/registration')
        }}
      >
        select
      </button>

      {discount && (
        <div className="absolute top-[-30px] left-[210px] rounded-full bg-border w-[80px] h-[80px] flex flex-col items-center justify-center p-6">
          <p className="text-white font-sans text-center text-2xl font-bold">{discount}% </p>
             <span className="text-white font-sans text-center text-base font-bold"> OFF</span>
         
        </div>
      )}
    </div>
  );
};

export default Card;
