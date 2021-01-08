// import { createClient } from "contentful";

// export default createClient({
// space: "4kjyp0za8mhj",
// accessToken: "1lHSL88ioumulxz8el5TrKlPSbNsJygxYj1AR9lXtYI"
//   space: process.env.REACT_APP_API_SPACE,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN
// });


const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});