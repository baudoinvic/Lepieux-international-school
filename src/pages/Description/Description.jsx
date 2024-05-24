// import React, { useState } from "react";
// import "./Description.css";
// import { Link } from "react-router-dom";

// const Description = () => {
//   const [filter, setFilter] = useState("all");

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   return (
//     <div className="description-page">
//       <header className="height-75">
//         <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
//           <h1>Our school programm</h1>
//           <p className="text-center w-75 mb-5">
//             Our school offers a diverse range of courses designed to meet the
//             educational needs of students Whether you're interested with our
//             Courses just read the instructions
//           </p>
//         </div>
//       </header>
//       <div className="container py-10 mt-10">
//         <div className="max-w-3xl">
//           <h2 className="text-3xl font-bold mb-6">Course of Study</h2>
//           <p className="text-lg text-gray-800 mb-6">
//             Our school offers a diverse range of courses designed to meet the
//             educational needs of students. Whether you're interested in STEM
//             fields, humanities, arts, or social sciences, we have a program
//             tailored for you. Our experienced faculty members ensure a
//             high-quality education that prepares students for their future
//             careers.
//           </p>

//           <h2 className="text-3xl font-bold mb-6 mt-10">
//             School Fees structure
//           </h2>

//           <p>
//             Thank you for reaching out to us. We appreciate your interest in Le
//             Pieux International University's undergraduate programs. We
//             understand the importance of transparency and clarity in financial
//             matters. Rest assured, we have prepared a comprehensive fees
//             structure and payment information document that outlines all the
//             necessary details for our undergraduate programs. Please find
//             attached the fees structure and payment information for your
//             reference. Should you have any questions or require further
//             clarification, feel free to contact our admissions
//             <p>just reach out to us for for more informations.</p>
//           </p>
//           <Link to="/contact">
//             <button
//               type="button"
//               className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 "
//             >
//               Contact us
//             </button>
//           </Link>
//         </div>

//         <h2 className="text-3xl font-bold mb-6 mt-10">our Libraries </h2>
//                   <div className="flex space-x-2">
//             <button
//               onClick={() => handleFilterChange("all")}
//               className={`px-4 py-2 rounded ${
//                 filter === "all"
//                   ? "bg-blue-700 text-white"
//                   : "bg-blue-500 text-white"
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => handleFilterChange("lab1")}
//               className={`px-4 py-2 rounded ${
//                 filter === "lab1"
//                   ? "bg-blue-700 text-white"
//                   : "bg-blue-500 text-white"
//               }`}
//             >
//               Library 1
//             </button>
//             <button
//               onClick={() => handleFilterChange("lab2")}
//               className={`px-4 py-2 rounded ${
//                 filter === "lab2"
//                   ? "bg-blue-700 text-white"
//                   : "bg-blue-500 text-white"
//               }`}
//             >
//               Library 2
//             </button>
//             <button
//               onClick={() => handleFilterChange("lab3")}
//               className={`px-4 py-2 rounded ${
//                 filter === "lab3"
//                   ? "bg-blue-700 text-white"
//                   : "bg-blue-500 text-white"
//               }`}
//             >
//               Library 3
//             </button>
//             <button
//               onClick={() => handleFilterChange("computer4")}
//               className={`px-4 py-2 rounded ${
//                 filter === "computer4"
//                   ? "bg-blue-700 text-white"
//                   : "bg-blue-500 text-white"
//               }`}
//             >
//               Computer Lab
//             </button>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           <img
//             src="https://auca.kg/uploads/00012021/177948667_10159035366570629_4164718236750303000_n.jpg"
//             alt="Library 1"
//             className={`cursor-pointer w-full ${
//               filter !== "all" && filter !== "lab1" ? "hidden" : ""
//             }`}
//           />
//           <img
//             src="https://media.istockphoto.com/id/824750478/photo/girl-reading-book-by-shelf-in-library.jpg?s=612x612&w=0&k=20&c=LvT9UoHUVvgbHxLDDW4V8Vy_duOGPLH5jjxn_XcQDt0="
//             alt="Library 2"
//             className={`cursor-pointer w-full ${
//               filter !== "all" && filter !== "lab2" ? "hidden" : ""
//             }`}
//           />
//           <img
//             src="https://media.istockphoto.com/id/1633844594/photo/young-boy-searching-through-bookshelves-in-library.jpg?s=612x612&w=0&k=20&c=YaGdWrpyvcdG14PMakyLj1-SX4CyeJEY6ohlXbcvQyQ="
//             alt="Library 3"
//             className={`cursor-pointer w-full ${
//               filter !== "all" && filter !== "lab3" ? "hidden" : ""
//             }`}
//           />
//           <img
//             src="https://media.istockphoto.com/id/1415740420/photo/computers-in-empty-classroom-on-high-school.jpg?s=612x612&w=0&k=20&c=8u7IcOi8c775BD4w1Ri6_7Vpm4TRRWVkN_D3aqFYzTU="
//             alt="Computer Lab"
//             className={`cursor-pointer w-full ${
//               filter !== "all" && filter !== "computer4" ? "hidden" : ""
//             }`}
//           />
//         </div>
//       </div>
 
//   );
// };

// export default Description;



import React, { useState } from "react";
import "./Description.css";
import { Link } from "react-router-dom";

const Description = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="description-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1>Our school programm</h1>
          <p className="text-center w-75 mb-5">
            Our school offers a diverse range of courses designed to meet the
            educational needs of students Whether you're interested with our
            Courses just read the instructions
          </p>
        </div>
      </header>
      <div className="container py-10 mt-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Course of Study</h2>
          <p className="text-lg text-gray-800 mb-6">
            Our school offers a diverse range of courses designed to meet the
            educational needs of students. Whether you're interested in STEM
            fields, humanities, arts, or social sciences, we have a program
            tailored for you. Our experienced faculty members ensure a
            high-quality education that prepares students for their future
            careers.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-10">
            School Fees structure
          </h2>

          <p>
            Thank you for reaching out to us. We appreciate your interest in Le
            Pieux International University's undergraduate programs. We
            understand the importance of transparency and clarity in financial
            matters. Rest assured, we have prepared a comprehensive fees
            structure and payment information document that outlines all the
            necessary details for our undergraduate programs. Please find
            attached the fees structure and payment information for your
            reference. Should you have any questions or require further
            clarification, feel free to contact our admissions
            <p>just reach out to us for for more informations.</p>
          </p>
          <Link to="/contact">
            <button
              type="button"
              className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 "
            >
              Contact us
            </button>
          </Link>
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-10">our Libraries </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded ${
              filter === "all"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("lab1")}
            className={`px-4 py-2 rounded ${
              filter === "lab1"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Library 1
          </button>
          <button
            onClick={() => handleFilterChange("lab2")}
            className={`px-4 py-2 rounded ${
              filter === "lab2"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Library 2
          </button>
          <button
            onClick={() => handleFilterChange("lab3")}
            className={`px-4 py-2 rounded ${
              filter === "lab3"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Library 3
          </button>
          <button
            onClick={() => handleFilterChange("computer4")}
            className={`px-4 py-2 rounded ${
              filter === "computer4"
                ? "bg-blue-700 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            Computer Lab
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          <img
            src="https://auca.kg/uploads/00012021/177948667_10159035366570629_4164718236750303000_n.jpg"
            alt="Library 1"
            className={`cursor-pointer w-full ${
              filter !== "all" && filter !== "lab1" ? "hidden" : ""
            }`}
          />
          <img
            src="https://media.istockphoto.com/id/824750478/photo/girl-reading-book-by-shelf-in-library.jpg?s=612x612&w=0&k=20&c=LvT9UoHUVvgbHxLDDW4V8Vy_duOGPLH5jjxn_XcQDt0="
            alt="Library 2"
            className={`cursor-pointer w-full ${
              filter !== "all" && filter !== "lab2" ? "hidden" : ""
            }`}
          />
          <img
            src="https://media.istockphoto.com/id/1633844594/photo/young-boy-searching-through-bookshelves-in-library.jpg?s=612x612&w=0&k=20&c=YaGdWrpyvcdG14PMakyLj1-SX4CyeJEY6ohlXbcvQyQ="
            alt="Library 3"
            className={`cursor-pointer w-full ${
              filter !== "all" && filter !== "lab3" ? "hidden" : ""
            }`}
          />
          <img
            src="https://media.istockphoto.com/id/1415740420/photo/computers-in-empty-classroom-on-high-school.jpg?s=612x612&w=0&k=20&c=8u7IcOi8c775BD4w1Ri6_7Vpm4TRRWVkN_D3aqFYzTU="
            alt="Computer Lab"
            className={`cursor-pointer w-full ${
              filter !== "all" && filter !== "computer4" ? "hidden" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
