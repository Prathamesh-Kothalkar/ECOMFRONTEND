import { ArrowRightAlt, ExpandMore } from "@mui/icons-material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [isCountryCodeOpen, setCountryCodeOpen] = useState(false);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setCountryCodeOpen(!isCountryCodeOpen);
    };

    return (
        <div className="w-full h-auto bg-customDark p-9 flex justify-center items-center">
            <div className="w-full max-w-md rounded-md bg-white p-3">
                <div className="mt-5 flex justify-center">
                    <img src="https://cdn.shopify.com/s/files/1/0745/0201/3236/files/simply-otp-login-banner.png?v=1680004048" 
                        alt="Login Banner" 
                        className="max-w-full h-auto" 
                    />
                </div>
                <div className="text-center text-lg mt-4 mb-6 text-black">
                    <span className="text-red-600">Login/Register </span>using Mobile
                </div>
                <div>
                    <div className="flex items-center border border-black rounded-lg">
                        <div className="relative">
                            <div
                                className="flex items-center cursor-pointer rounded-md p-2 text-black"
                                onClick={toggleDropdown}
                            >
                                <span>🇮🇳 <ExpandMore/></span>
                            </div>

                            {isCountryCodeOpen && (
                                <div className="absolute top-full mt-2 w-60 text-black rounded-md shadow-lg z-20 bg-gray-300">
                                    <div className="grid grid-cols-1 p-2 ">
                                        <ul>
                                            <li className="w-full p-2 cursor-pointer text-black" onClick={()=>{setCountryCodeOpen(!isCountryCodeOpen)}}>🇮🇳 +91</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="p-1  border-black border-l-2 focus:outline-none text-black "
                        />
                    </div>
                    <button 
                    onClick={()=>{navigate("/verify")}}
                    className="w-full p-2 mt-5 mb-3 bg-btnbg text-white flex items-center justify-center rounded-md">
                        REQUEST OTP <ArrowRightAlt className="ml-2 hover:translate-x-1 " />
                    </button>
                </div>
            </div>
        </div>
    );
}
