import './globals.css'

export const metadata = {
  title: 'IMDb Clone',
  description: 'IMDb Clone created using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}