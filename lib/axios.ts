

import { BACKEND_URL } from "@/api/api";
import axios, { AxiosInstance } from "axios";

/**
 * Shared Axios client for browser and server calls.
 * - Sends cookies by default (needed for our admin session).
 * - Lets you inject a token provider for bearer auth when available.
 * - Normalizes error messages so consumers can surface friendly errors.
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});

// Optional token getter so apps can wire in their own auth storage (e.g. localStorage or cookies).
let accessTokenProvider: (() => string | null | undefined) | null = null;

export function setAccessTokenProvider(getToken: () => string | null | undefined) {
  accessTokenProvider = getToken;
}

// Attach token if available
apiClient.interceptors.request.use((config) => {
  const token = accessTokenProvider?.();

  const isPublic =
    config.url?.includes('/api/public/') ||
    config.url?.includes('/api/signup/') ||
    config.url?.includes('/api/signin/') ||
    config.headers?.skipAuth;

  if (token && !isPublic) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Handle FormData
  if (config.data instanceof FormData) {
    if (config.headers) {
      delete (config.headers as Record<string, unknown>)['Content-Type'];
    }
  }

  return config;
});

// Normalize API errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const data = error?.response?.data;
    let apiMessage = data?.error || data?.message || data?.detail;

    // Handle Django non_field_errors
    if (!apiMessage && data?.non_field_errors) {
      apiMessage = Array.isArray(data.non_field_errors)
        ? data.non_field_errors.join(", ")
        : data.non_field_errors;
    }

    // Extract dynamic field-specific validation errors (e.g. { title: ["This field is required."] })
    if (!apiMessage && typeof data === "object" && data !== null) {
      // Loop over object keys and try to parse out validation strings
      const fieldErrors = Object.entries(data)
        .filter(([key]) => key !== "status" && key !== "success") // ignore meta properties just in case
        .map(([field, msgs]) => {
          // Flatten array of errors or use the string directly
          const msgText = Array.isArray(msgs) ? msgs.join(", ") : String(msgs);
          // Capitalize field name for better readability
          const readableField = field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, " ");
          return `${readableField}: ${msgText}`;
        });

      if (fieldErrors.length > 0) {
        apiMessage = fieldErrors.join(" | ");
      }
    }

    // Fallbacks if we still don't have a readable message to avoid "Request failed with status code 400"
    if (!apiMessage) {
      const status = error?.response?.status;
      if (status === 400) apiMessage = "Invalid input. Please check the form data.";
      else if (status === 401) apiMessage = "Session expired. Please log in again.";
      else if (status === 403) apiMessage = "You don't have permission to perform this action.";
      else if (status === 404) apiMessage = "The requested record could not be found.";
      else if (status >= 500) apiMessage = "Warning: Server encountered an error. Please try again later.";
      else apiMessage = "An unexpected error occurred. Please try again.";
    }

    // Override the generic Axios Error message with our clean UI-friendly message
    if (apiMessage) {
      error.message = apiMessage;
      // Also attach the raw field error map so forms can display red inline validation text!
      if (typeof data === "object" && data !== null && !data.success) {
        (error as any).validationErrors = data;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;

