import React from "react";
import { PrivacyPolicyData } from "../datas";

const PrivacyPolicy = () => {
  return (
    <div id="privacy" className="w-full h-full overflow-y-scroll py-5">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold mb-1">Privacy Policy</h1>
        <div className="h-[1px] w-1/2 mx-auto bg-black"></div>
      </div>

      <div className="flex flex-col items-center gap-5">
        {PrivacyPolicyData.map((item, i) => {
          // Check if there's any description or title to display
          const hasContent =
            item.title ||
            item.description ||
            item.description_1 ||
            item.description_2 ||
            item.description_3 ||
            item.description_4;

          if (!hasContent) return null;

          return (
            <div
              key={i}
              className="w-11/12 md:w-3/4 bg-white shadow-md rounded-xl p-5"
            >
              {item.title && (
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
              )}
              {[
                item.description,
                item.description_1,
                item.description_2,
                item.description_3,
                item.description_4,
              ]
                .filter(Boolean)
                .map((desc, idx) => (
                  <p
                    key={idx}
                    className="text-base text-black text-justify mb-3 leading-relaxed"
                  >
                    {desc}
                  </p>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
