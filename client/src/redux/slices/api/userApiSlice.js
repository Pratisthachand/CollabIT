// import { apiSlice } from "../apiSlice";

// const USER_URL = "/user";

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     updateUser: builder.mutation({
//       query: (data) => ({
//         url: `${USER_URL}/profile`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     register: builder.mutation({
//       query: (data) => ({
//         url: `${USER_URL}/register`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     logout: builder.mutation({
//       query: (data) => ({
//         url: `${USER_URL}/logout`,
//         method: "POST",
//         credentials: "include",
//       }),
//     }),
//   }),
// });

// export const { useUpdateProfileMutation } = userApiSlice;
