/**
 * queryClient.ts - Enhanced TanStack Query setup
 * Global data-fetch layer with error handling and cache management
 */

import { QueryClient } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`HTTP ${res.status}: ${errorData || res.statusText}`);
  }
}

export async function apiRequest(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const url = endpoint.startsWith("http") ? endpoint : `/api${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(url, config);
  await throwIfResNotOk(response);
  return response;
}

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn = <T>(options: {
  endpoint: string;
  on401?: UnauthorizedBehavior;
}) => {
  return async (): Promise<T> => {
    try {
      const response = await apiRequest(options.endpoint);
      return await response.json();
    } catch (error: any) {
      if (error.message.includes("401") && options.on401 === "returnNull") {
        return null as T;
      }
      throw error;
    }
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx errors
        if (error?.message?.includes("4")) return false;
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
    mutations: {
      retry: 1,
    },
  },
});