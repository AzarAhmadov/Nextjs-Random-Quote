import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <title> Quote App </title>
      <body>{children}</body>
    </html>
  )
}
