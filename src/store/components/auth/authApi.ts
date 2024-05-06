/* eslint-disable no-restricted-globals */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ACCESSTOKEN_STORAGE, API_LINK } from "../../../utils/constants";

export const authApi = createApi({
  reducerPath: "authApis",

  baseQuery: fetchBaseQuery({
    baseUrl: API_LINK,
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      // Get token from store (userSlice)
      // @ts-ignore
      //   const apiKey = process.env.REACT_APP_API_KEY;
      const accessToken = localStorage.getItem(ACCESSTOKEN_STORAGE);

      // Add token to headers
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      //   headers.set("x-api-key", `${apiKey}`);

      return headers;
    },
  }),
  tagTypes: ["getProfile__TAG", "getUserClients__TAG", "getAllMember__TAG"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `users/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `users/register`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getAllMember__TAG"],
    }),

    getProfile: builder.query({
      query: (data) => ({
        url: `/users/profile`,
        method: "GET",
      }),
      providesTags: ["getProfile__TAG"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/users/update-profile`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getProfile__TAG"],
    }),
    getAllMember: builder.query({
      query: (data) => ({
        url: `/users/all-admin`,
        method: "GET",
        params: data,
      }),
      providesTags: ["getAllMember__TAG"],
    }),
    clearCountChat: builder.mutation({
      query: (data) => ({
        url: `/users/clear-count-chat`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getUserClients__TAG"],
    }),
    getStory: builder.query({
      query: (data) => ({
        url: `/users/get-story`,
        method: "GET",
        params: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `/users/change-password`,
        method: "PUT",
        body: data,
      }),
    }),
    getUserClients: builder.query({
      query: (data) => ({
        url: `/users/clients`,
        method: "GET",
      }),
      providesTags: ["getUserClients__TAG"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetUserClientsQuery,
  useLoginMutation,
  useRegisterMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useClearCountChatMutation,
  useGetAllMemberQuery,
  useGetStoryQuery,
} = authApi;
