
"use client"

import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraUiProvider({children}) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}