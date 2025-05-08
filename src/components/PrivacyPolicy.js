import React from "react";
import { PrivacyPolicyData } from "../datas";
const PrivacyPolicyPage = () => {
  const highlightKeywords = (text) => {
    if (!text) return null;

    const keywords = [
      "Messages Permission",
      "Location Permission",
      "Camera Permission",
      "Phone Call Permission",
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
      <p className="h-[2px] w-[50%] bg-black"></p>

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
          <p className="text-black mb-4">
            {highlightKeywords(item.description_5)}
          </p>
          <p className="text-black">{highlightKeywords(item.description_6)}</p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicyPage;
