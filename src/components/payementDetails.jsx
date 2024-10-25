import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import sage from "../assets/sage.svg";
import visa from "../assets/visa.svg";
import RazorPay from "./RazorPay";
import Logo from '../assets/Logo.svg'
import toast from "react-hot-toast";
import { Copy } from "@phosphor-icons/react";
const payementDetails = () => {
  const navigate = useNavigate();

  const { currentPayementDetails } = useSelector(
    (state) => state.paymentDetails
  );

  console.log(currentPayementDetails);
  const price=currentPayementDetails.price
  const amount=price
  // const gst=amount * (18/100)
  // const total=amount + gst

console.log("price>>",price)
console.log("amount>",amount);
// console.log("gst>>",gst);
// console.log("total",total);

const updatedPaymentDetails = {
  ...currentPayementDetails,
  totalAmount: amount,
};

  const [copied, setCopied] = useState(false); // State to track if UPI ID is copied
  const upiId = "sumeet1014@okhdfcbank"; // Your UPI ID
const handleCopyUpiId = () => {
  navigator.clipboard
    .writeText(upiId)
    .then(() => {
      setCopied(true); // Set copied to true on success
      toast.success("UPI ID copied to clipboard!"); // Optional: Show success toast message
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    })
    .catch((err) => {
      toast.error("Failed to copy UPI ID"); // Optional: Show error toast message
      console.error("Failed to copy UPI ID: ", err);
    });
};
  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
      </div>
      <p className="font-sans font-bold text-4xl text-[#565857] block sm:hidden ml-4 mt-4">
              Check Out
      </p>
      <div className="h-screen bg-background2">
        <div className="flex justify-evenly sm:flex-row flex-col-reverse p-4 sm:p-16  bg-background2 w-full gap-4 ">
          <div className="w-[100%] sm:w-[35%] p-2 sm:p-8 flex flex-col justify-around">
            <p className="font-sans font-bold text-4xl text-[#565857] sm:block hidden">
              Check Out
            </p>
            <img className="h-[50px] w-[250px]" src={visa} alt="" />
            <p>
              By continuing to payment, I agree to the{" "}
              <a
                className="text-[#0056D2] underline"
                target="_blank"
                href="https://sageturtle.in/privacyPolicyPage"
              >
                 Refund Policy,
              </a>{" "}
              and{" "}
              <a
                className="text-[#0056D2] underline"
                target="_blank"
                href="https://sageturtle.in/privacyPolicyPage"
              >
                Privacy Policy.
              </a>
            </p>
            <div className="flex gap-2 items-center">
              <p>Copy UPI ID: {upiId}</p>
              <Copy
                size={24}
                className={`cursor-pointer ${
                  copied ? "text-green-500" : "text-black"
                }`}
                onClick={handleCopyUpiId}
              />
              {copied && <span className="text-green-500">Copied!</span>}
            </div>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="capitalize py-2.5 px-5 rounded-lg w-[150px] bg-white border border-border text-disable1"
              >
                Back
              </button>
             
              <RazorPay currentPayementDetails={updatedPaymentDetails}/>
            </div>
          </div>
          <div className="w-[100%] sm:w-[40%] p-8 bg-white border border-disable rounded-3xl flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <img className="w-1/2" src={Logo} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-sans text-[20px] text-primary">
                From Being to Becoming: Introduction to Psychology as a Practice
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <p className="font-sans text-[20px] font-semibold w-[70%]">
                {
                  currentPayementDetails.pack===1 ? "Individual": `Group of ${currentPayementDetails.members.length}`
                }
              
                </p>
                <p className="w-[30%]">₹{amount}</p>
              </div>
             
              {/* <div className="flex justify-between items-center w-full">
                <p className="font-sans text-[20px] font-semibold w-[70%]">GST (18%)</p>
                <p className="w-[30%]">₹{gst}/-</p>
              </div> */}
              <hr />
              <div className="flex justify-between items-center w-full">
                <p className="font-sans text-[20px] font-semibold w-[70%]">Total</p>
                <p className="w-[30%]">₹{amount}/-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default payementDetails;