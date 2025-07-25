import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "ReachioMail - Mail Merge with Google Sheets, Powered by AI",
  description: "You searched for Mail Merge with Google Sheets — ReachioMail lets you do exactly that, with AI and no add-ons. Upload a CSV, let AI craft the perfect intro, and hit send — straight from your Gmail.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Analytics */}

      </head>
      <body
        className={`${quicksand.variable} font-quicksand antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
