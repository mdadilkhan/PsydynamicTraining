import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import LEftArrow from "../assets/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import { paymentDetails } from "../store/slices/paymentSlice";
import axios from "axios";
import toast from "react-hot-toast";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentRegistrationDetails } = useSelector(
    (state) => state.registrationDetails
  );
  const { price, student } = currentRegistrationDetails;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    coleg: "",
    number: "",
    teach: "",
    expectations: "",
    association: "",
    pack: student.max,
    price: price,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://62px42synl.execute-api.ap-south-1.amazonaws.com/dev/registration",
        formData
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch(paymentDetails(formData));
          navigate("/payment");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits
    const isNumber = /^\d*$/.test(value);

    // Set maximum length based on the input name
    const maxLength = name === "number" ? 10 : 4;

    if (isNumber && value.length <= maxLength) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  console.log("pack", student.max, price);
  console.log(formData);

  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
      </div>
      <div className="flex flex-col justify-start px-2 pt-1 sm:px-44 sm:pt-16 mt-3 bg-background2 w-full h-full pb-16">
        <div className=" flex flex-col gap-4 border bg-white rounded-xl p-6">
          <div className="flex justify-start items-center gap-6">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={LEftArrow} alt="" />
            </div>
            <div className="font-sans font-bold text-[40px]">
              <p>Register Form</p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end"></div>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center ">
                  <div className="w-full flex sm:flex-row flex-col gap-2 sm:gap-[70px]">
                    <div className="flex flex-col w-full sm:w-[50%]">
                      <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                        Name*
                        {/* {index + 1} */}
                      </h6>
                      <input
                        type="text"
                        className="w-full h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                        placeholder="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full sm:w-[50%]">
                      <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px]">
                        Email*
                      </h6>
                      <input
                        type="email"
                        className="w-full h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  University Name
                </h6>
                <input
                  name="coleg"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="School Name"
                  value={formData.coleg}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Contact Number (WhatsApp enabled)*
                </h6>
                <input
                  name="number"
                  type="tel"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="0000000000"
                  pattern="\d{10}"
                  value={formData.number}
                  onChange={handleNumberChange}
                  required
                />
              </div>

              {/* <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px] not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Preferred Centre
                </h6>
                <select
                  name="centers"
                  className="w-full h-[48px] p-2 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  value={formData.centers}
                  onChange={handleInputChange} // You can use handleInputChange here instead of handleNumberChange
                  required
                >
                  <option value="⁠Noida">⁠Noida</option>
                  <option value="⁠Rohini, Sector-13">⁠Rohini, Sector-13</option>
                  <option value="GTB Nagar">GTB Nagar</option>
                  <option value="Shivalik, Malviya Nagar">
                    Shivalik, Malviya Nagar
                  </option>
                </select>
              </div> */}
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  What according to you is the key thing which your module
                  should teach you?
                </h6>
                <input
                  name="teach"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.teach}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  What are your expectations from the Training program with
                  Daffodils?
                </h6>
                <input
                  name="expectations"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.expectations}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Have you ever interned or associated with Daffodils before?
                  Describe the association and your experience.
                </h6>
                <input
                  name="association"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.association}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex sm:justify-end justify-center">
              <button
                type="submit"
                className="capitalize py-2.5 px-5 rounded-lg bg-[#614298] text-white w-[250px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
