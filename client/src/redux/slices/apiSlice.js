// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // const API_URI = "http://localhost:8800/api";
// const API_URI = import.meta.env.VITE_APP_BASE_URL;

// const baseQuery = fetchBaseQuery({ baseUrl: API_URI + "/api" });

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: [],
//   endpoints: (builder) => ({}),
// });

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // const API_URL = import.meta.env.VITE_APP_BASE_URL + "/api";
// //const API_URL = "http://localhost:8800/api";
// const API_URL = "https://mern-tm-server.onrender.com/api";

// const baseQuery = fetchBaseQuery({ baseUrl: API_URL });

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: [],
//   endpoints: (builder) => ({}),
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use environment variables to switch between development and production URLs
const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8800/api"
    : "https://mern-tm-server.onrender.com/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include", // Important for cookies
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
