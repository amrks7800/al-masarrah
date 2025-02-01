import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQueryFn = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: headers => {
    const accessToken = JSON.parse(sessionStorage.getItem("access_token"))

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`)
    }

    return headers
  },
})

// Handle 401 Unauthorized responses
const baseQuery = async (args, api, extraOptions) => {
  const result = await baseQueryFn(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    // Redirect to login page
    window.location.href = "/login"
  }

  return result
}

export default baseQuery
