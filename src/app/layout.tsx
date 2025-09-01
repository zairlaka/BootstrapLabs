import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// import "@/app/globals.css";
import "../../public/assets/fonts/webfonts/inter/stylesheet.css";
import "../../public/assets/fonts/webfonts/syne/stylesheet.css";

import "../../public/assets/css/vendors/swiper-bundle.min.css";
import "../../public/assets/css/vendors/jos.css";
import "../../public/assets/css/vendors/menu.css";

import "../../public/assets/css/custom.css";
import "../../public/assets/css/style.css";

export const metadata: Metadata = {
  title: "Aximo - Creative Agency",
  description:
    "A creative design studio specializing in meeting the needs of the new generation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className="bg-colorIvory">
        <div className="page-wrapper">{children}</div>

        {/* Vendor js */}
        <Script src="assets/js/vendors/counterup.js" type="module" />
        <Script src="assets/js/vendors/swiper-bundle.min.js" />
        <Script src="assets/js/vendors/fslightbox.js" />
        <Script src="assets/js/vendors/jos.min.js" />
        <Script src="assets/js/vendors/menu.js" strategy="afterInteractive" />

        {/* Main js */}
        <Script src="assets/js/main.js" />
      </body>
    </html>
  );
}
