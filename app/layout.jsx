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
        {/* GA4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
        
        {/* Plausible */}
        <script
          defer
          data-domain="mailmergegooglesheets.com"
          src="https://plausible.io/js/plausible.js"
        />
        
        {/* LogRocket */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_LOGROCKET_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body
        className={`${quicksand.variable} font-quicksand antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
