import React from "react";
import { PrivacyPolicyData } from "../datas";
const PrivacyPolicyPage = () => {
  // const privacyData = [
  //   {
  //     title: "How We Collect and Use Information",
  //     description_1:
  //       "We collect the following types of information about you: Registration and Profile Information. When you create an account and during the use of the service, we may collect your personal information such as your username, first and last name, email address, mobile phone number. After you set up your account, we may ask for other profile and demographic information, such as your organization name and details, like address, phone number and city.",
  //     description_2:
  //       "Geolocation: The Geolocation data will be collected from physical IOT or physical devices bought by the customer of this Application. We will collect Geolocation from the App only for showing the current location of the user in the map to show distance from a specific vehicle using Finder Devices.",
  //     description_3:
  //       "Messages: Send Some Command from User Phone to Physical Devices.",
  //     description_4:
  //       "We use this information to operate, maintain, and provide the features and functionality of the Service and to communicate directly with the customer, such as to send the customer alerts on the movements of the (customer) user’s vehicles or assets which is only related to the concerned customer’s vehicles or assets. The customer or user can control the receipt of email and text alerts by visiting “Settings” within the mobile app or email. We may also send the Service-related emails (e.g., account verification, order confirmations, change or updates to features of the Service, technical and security notices) related to the Service the customer has opted for.",
  //   },
  // ];

  const highlightKeywords = (text) => {
    if (!text) return null;

    const keywords = [
      "Messages Permission",
      "Location Permission",
      "Camera Permission",
      "Storage Permission",
    ];

    const regex = new RegExp(`\\b(${keywords.join("|")})(:)?`, "gi");

    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (keywords.some((k) => k.toLowerCase() === part?.toLowerCase())) {
        return (
          <strong key={index} className="font-bold text-black">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="w-full h-full overflow-y-scroll py-5 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center text-black">
        Sultan Tracker Privacy Policy
      </h1>

      {PrivacyPolicyData.map((item, index) => (
        <div
          key={index}
          className="w-[75%] shadow-md rounded-xl p-5 text-justify"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-black ">
            {item.title}
          </h2>
          <p className="text-black mb-4">
            {highlightKeywords(item.description_1)}
          </p>
          <p className="text-black mb-4">
            {highlightKeywords(item.description_2)}
          </p>
          <p className="text-black mb-4">
            {highlightKeywords(item.description_3)}
          </p>
          <p className="text-black mb-4">
            {highlightKeywords(item.description_4)}
          </p>
          <p className="text-black">{highlightKeywords(item.description_5)}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicyPage;
