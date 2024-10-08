// import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";
const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRate, setMovieRate] = useState(0);
//   return (
//     <div>
//       <StarRating color="black" maxRating={12} onSetRating={setMovieRate} />
//       <p>
//         <b>Movie rating is {movieRate} stars</b>
//       </p>
//     </div>
//   );
// }
root.render(
  <App />
  /* <StarRating
      maxRating={8}
      color="purple"
      defaultRating={2}
      message={["terrible", "bad", "Okay", "good", "amazing"]}
    />
    <StarRating
      maxRating={5}
      defaultRating={2}
      message={["terrible", "bad", "Okay", "good", "amazing"]}
    />
    <StarRating
      maxRating={10}
      color="red"
      defaultRating={2}
      size={30}
      className="test"
    />
    <Test /> */
);
