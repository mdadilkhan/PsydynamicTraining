import React from "react";

const Dialogbox = ({ isOpen, onClose, title, children }) => {

  console.log(children);


  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl shadow-lg w-[90%] h-[90%] p-6 sm:max-w-[90%] sm:h-auto sm:mx-auto overflow-scroll">
        <div className="flex justify-start items-center">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold text-2xl"

          >
            &#10005;
          </button>
        </div>
        <div className="flex justify-center items-center w-full mb-10 ">
            <h3 className="font-semibold text-price text-center text-[24px] sm:text-4xl">{title}</h3>
          </div>
        <div className="mb-4 flex sm:justify-center justify-center items-center flex-wrap sm:gap-10 gap-10">{children}</div>
       
      </div>
    </div>
  );
};

export default Dialogbox;
