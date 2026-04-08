import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";

// ===== Font =====
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ===== Viewport =====
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A0A0A",
};

// ===== Metadata =====
export const metadata: Metadata = {
  metadataBase: new URL("https://insaflimited.com"),
  title: {
    default:
      "INSAF Building Design & Consultant Ltd - RAJUK Approved Architects",
    template: "%s | INSAF Architects",
  },
  description:
    "Leading architectural firm in Bangladesh. RAJUK approved panel architects specializing in residential, commercial and industrial design.",
  alternates: {
    canonical: "https://insaflimited.com",
  },
  openGraph: {
    type: "website",
    url: "https://insaflimited.com",
    title: "INSAF Building Design & Consultant Ltd",
    description:
      "RAJUK Panel Listed Architects - 530+ projects delivered across Bangladesh.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ===== Root Layout =====
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ===== Scroll Progress Bar ===== */}
        <div
          id="scroll-progress"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "3px",
            width: "0%",
            background:
              "linear-gradient(90deg,#FFD700,#FFA500,#FF6B6B)",
            zIndex: 9999,
            transition: "width 0.1s ease-out",
          }}
        />

        <Header />

        <main>{children}</main>

        <Footer />

        {/* ===== Floating WhatsApp Button ===== */}
        <a
          href="https://wa.me/8801958140774"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "25px",
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "#fff",
            textDecoration: "none",
            zIndex: 999,
          }}
        >
          💬
        </a>

        {/* ===== Safe Scroll Script ===== */}
        <Script
          id="scroll-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll', function() {
                const progress = document.getElementById('scroll-progress');
                if (!progress) return;

                const winScroll = document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

                if (height > 0) {
                  const scrolled = (winScroll / height) * 100;
                  progress.style.width = scrolled + '%';
                }
              });
            `,
          }}
        />

        {/* ===== Google Analytics (Optional) ===== */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* ===== Facebook Pixel (Optional) ===== */}
        {process.env.NEXT_PUBLIC_FB_PIXEL && (
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
