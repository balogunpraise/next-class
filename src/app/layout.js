import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>header</p>
        {children}
        <p>footer</p>
      </body>
    </html>
  );
}
