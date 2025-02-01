import { createApi } from "@reduxjs/toolkit/query/react"
import baseQuery from "./baseQuery"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: builder => ({
    getEvents: builder.query({
      query: () => ({
        url: "/mng/news",
      }),
      providesTags: ["Event"],
    }),
    getLatestEvents: builder.query({
      query: () => ({
        url: "/platform/news/latest",
      }),
      providesTags: ["Event"],
    }),
    getEventById: builder.query({
      query: id => `/events/${id}`,
    }),
    createEvent: builder.mutation({
      query: event => ({
        url: "/mng/news",
        method: "POST",
        body: event,
      }),
      invalidatesTags: ["Event"],
    }),
    updateEventByID: builder.mutation({
      query: ({ event, id }) => ({
        url: `/mng/news/${id}`,
        method: "PATCH",
        body: event,
      }),
      invalidatesTags: ["Event"],
    }),
    deleteEventByID: builder.mutation({
      query: id => ({
        url: `/mng/news/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Event"],
    }),

    getMessages: builder.query({
      query: () => ({
        url: "/mng/contact",
      }),
      providesTags: ["Message"],
    }),
    createMessage: builder.mutation({
      query: message => ({
        url: `/platform/contact`,
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["Message"],
    }),

    getSections: builder.query({
      query: () => ({
        url: "/governance/section",
      }),
      providesTags: ["Section"],
    }),

    getSectionByID: builder.query({
      query: id => ({
        url: `/governance/section/${id}`,
      }),
      providesTags: ["Section"],
    }),

    createSection: builder.mutation({
      query: section => ({
        url: `/governance/section`,
        method: "POST",
        body: section,
      }),
      invalidatesTags: ["Section"],
    }),
    updateSectionByID: builder.mutation({
      query: ({ section, id }) => ({
        url: `/governance/section/${id}`,
        method: "PATCH",
        body: section,
      }),
      invalidatesTags: ["Section"],
    }),
    deleteSectionByID: builder.mutation({
      query: id => ({
        url: `/governance/section/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Section"],
    }),

    getSectionFiles: builder.query({
      query: sectionID => ({
        url: `/mng/governance/section/${sectionID}/file`,
      }),
      providesTags: ["File"],
    }),

    getSectionFilesForUser: builder.query({
      query: sectionID => ({
        url: `/platform/governance/section/${sectionID}/file`,
      }),
      providesTags: ["File"],
    }),

    getSectionFileByID: builder.query({
      query: ({ sectionID, fileID }) => ({
        url: `/mng/governance/section/${sectionID}/file/${fileID}`,
      }),
      providesTags: ["File"],
    }),

    createSectionFile: builder.mutation({
      query: ({ sectionID, file }) => ({
        url: `/mng/governance/section/${sectionID}/file`,
        method: "POST",
        body: file,
      }),
      invalidatesTags: ["File"],
    }),

    updateSectionFileByID: builder.mutation({
      query: ({ sectionID, file, fileID }) => ({
        url: `/mng/governance/section/${sectionID}/file/${fileID}`,
        method: "PATCH",
        body: file,
      }),
      invalidatesTags: ["File"],
    }),

    deleteSectionFileByID: builder.mutation({
      query: ({ sectionID, fileID }) => ({
        url: `/mng/governance/section/${sectionID}/file/${fileID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["File"],
    }),

    login: builder.mutation({
      query: body => ({
        url: `/auth/login`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["File", "Message", "Section"],
    }),
  }),
})

export const {
  useGetEventByIdQuery,
  useGetEventsQuery,
  useCreateEventMutation,
  useCreateMessageMutation,
  useCreateSectionFileMutation,
  useCreateSectionMutation,
  useDeleteEventByIDMutation,
  useDeleteSectionByIDMutation,
  useDeleteSectionFileByIDMutation,
  useGetMessagesQuery,
  useGetSectionByIDQuery,
  useGetSectionFileByIDQuery,
  useGetSectionFilesQuery,
  useGetSectionsQuery,
  useUpdateEventByIDMutation,
  useUpdateSectionByIDMutation,
  useUpdateSectionFileByIDMutation,
  useLoginMutation,
  useGetLatestEventsQuery,
  useGetSectionFilesForUserQuery,
} = apiSlice
