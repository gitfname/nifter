import './globals.css'
import ChakraUiProvider from '@/providers/ChakraUiProvider'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ChakraUiProvider>
          {children}
        </ChakraUiProvider>
        <Footer />
      </body>
    </html>
  )
}
