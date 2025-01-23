import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const SocialSignInButton = ({ provider, onClick, logoSrc, label }) => (
  <button
    onClick={onClick}
    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none"
    aria-label={`Sign in with ${provider}`}
  >
    <img className="h-5 w-5 mr-2" src={logoSrc} alt={`${provider} logo`} />
    {label}
  </button>
);

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleGetOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() === "") {
      alert("Please enter a phone number");
      return;
    }

    setIsLoading(true);
    setOtpSent(false);
    console.log("Sending OTP to:", countryCode + phoneNumber);

    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked");
    // Add your Google authentication logic here
  };

  const handleFacebookSignIn = () => {
    console.log("Facebook Sign In clicked");
    // Add your Facebook authentication logic here
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center mt-[-5rem] bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              LOGIN/SIGN UP
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleGetOTP}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="flex">
                <select
                  className="appearance-none rounded-l-md relative block w-24 px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  aria-label="Select country code"
                >
                  <option value="+91">+91</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  required
                  className="appearance-none rounded-r-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  aria-label="Enter phone number"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {isLoading ? "Sending..." : "Get OTP"}
              </button>
              {otpSent && !isLoading && (
                <p className="text-center text-green-600 mt-2">
                  OTP sent successfully!
                </p>
              )}
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <SocialSignInButton
                provider="Google"
                onClick={handleGoogleSignIn}
                logoSrc="/google.png"
                label="Sign in with Google"
              />
              <SocialSignInButton
                provider="Facebook"
                onClick={handleFacebookSignIn}
                logoSrc="/facebook.png"
                label="Sign in with Facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
