import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'Sakthi Ganga Tiles & Sanitary Wares - Your Home Renovation Partner',
  description: 'Discover a vast selection of high-quality tiles and sanitary wares for your home or business at Sakthi Ganga in Polur. Expert advice and installation services available.',
  keywords: ["tiles, sanitary wares, polur, floor tiles, wall tiles, bathroom fittings, kitchen tiles, home renovation, construction materials, tile shop"],
  openGraph: {
    "title": "Sakthi Ganga Tiles & Sanitary Wares",
    "description": "Your trusted source for premium tiles and sanitary wares in Polur. Explore our diverse collection and elevate your home or business.",
    "url": "https://www.sakthigangatiles.com",
    "siteName": "Sakthi Ganga Tiles",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/mirror-white-luxury-modern-real_1203-4046.jpg",
        "alt": "Sakthi Ganga Tiles Showroom"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Sakthi Ganga Tiles & Sanitary Wares",
    "description": "Your trusted source for premium tiles and sanitary wares in Polur. Explore our diverse collection and elevate your home or business.",
    "images": [
      "http://img.b2bpic.net/free-photo/mirror-white-luxury-modern-real_1203-4046.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const roboto = Roboto({
  variable: "--font-roboto",  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
