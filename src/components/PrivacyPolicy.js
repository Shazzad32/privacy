// import React from "react";
// import { PrivacyPolicyData } from "../datas";

// const PrivacyPolicy = () => {
//   return (
//     <div
//       id="privacy"
//       style={{
//         height: "100%",
//         width: "100%",
//         overflowY: "scroll",
//       }}
//     >
//       <div
//         style={{
//           height: "10%",
//           width: "100%",
//           lineHeight: 0.5,
//           marginBottom: 20,
//         }}
//       >
//         <p style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}>
//           Privacy Policy
//         </p>
//         <div
//           style={{
//             height: 0.5,
//             width: "50%",
//             marginLeft: "25%",
//             marginTop: -7,
//           }}
//         ></div>
//       </div>
//       <div
//         style={{
//           height: "90%",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: 20,
//         }}
//       >
//         {PrivacyPolicyData.map((item, i) => {
//           return (
//             <div
//               key={i}
//               style={{
//                 width: "75%",
//                 boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//               }}
//             >
//               <p
//                 style={{
//                   textAlign: "justify",
//                   padding: 40,
//                   fontSize: 18,
//                   wordBreak: "break-word",
//                   color: "black",
//                   lineHeight: 1.5,
//                   fontFamily: "cursive",
//                 }}
//               >
//                 {item.description}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;
import React from "react";
import { PrivacyPolicyData } from "../datas";

const PrivacyPolicy = () => {
  return (
    <div
      id="privacy"
      style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          lineHeight: 0.5,
          marginBottom: 20,
        }}
      >
        <p
          style={{
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            padding: "20px",
          }}
        >
          Privacy Policy
        </p>
        <div
          style={{
            height: 1,
            width: "50%",
            margin: "0 auto",
            backgroundColor: "#000",
            marginTop: -7,
          }}
        ></div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {PrivacyPolicyData.filter((item) => item.description).map((item, i) => (
          <div
            key={i}
            style={{
              width: "75%",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "#fff",
              borderRadius: 8,
              padding: 20,
            }}
          >
            {item.title && (
              <h2
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                {item.title}
              </h2>
            )}
            <p
              style={{
                textAlign: "justify",
                fontSize: 16,
                wordBreak: "break-word",
                color: "black",
                lineHeight: 1.6,
                fontFamily: "sans-serif",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
