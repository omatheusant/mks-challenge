"use client";

import '@/styles/globals.css'


import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  )
}