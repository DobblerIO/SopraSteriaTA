import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { FC, ReactNode } from "react"

const queryClient = new QueryClient()

interface TanstackQueryClientProviderProps {
    children: ReactNode;
}

export const TanstackQueryClientProvider:FC<TanstackQueryClientProviderProps> = props => {
    const {children} = props;

    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}