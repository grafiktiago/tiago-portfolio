import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tiagodasilva.com"),

  alternates: {
    canonical: "https://www.tiagodasilva.com",
  },

  title: "Tiago da Silva | Digital Artist & Illustrator",

  description:
    "Official portfolio of Tiago da Silva (Grafik), Portuguese digital artist and illustrator known for fantasy art, comic covers, Harry Potter illustrations, videogames and collaborations with major publishers.",

  keywords: [
    "Tiago da Silva",
    "Grafik",
    "Digital Artist",
    "Illustrator",
    "Fantasy Art",
    "Comic Artist",
    "Harry Potter",
    "Marvel",
    "DC Comics",
    "Disney",
    "Comic Book Cover Artist",
    "Fantasy Illustrator",
    "Portuguese Artist",
    "Legend of Adora",
    "Cover Artist",
    "Digital Painting",
    "Concept Art",
    "Capcom",
  ],

  authors: [{ name: "Tiago da Silva" }],

  openGraph: {
    title: "Tiago da Silva | Digital Artist & Illustrator",

    description:
      "Fantasy art, comic covers, Harry Potter illustrations, videogames and original projects.",

    url: "https://www.tiagodasilva.com",

    siteName: "Tiago da Silva Portfolio",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tiago da Silva Portfolio",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tiago da Silva | Digital Artist & Illustrator",
    description:
      "Fantasy art, comic covers, Harry Potter illustrations, videogames and original projects.",
    images: ["/og-image.jpg"],
  },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Tiago da Silva",
  alternateName: "Grafik",

  url: "https://www.tiagodasilva.com",

  image: "https://www.tiagodasilva.com/profile.jpg",

  jobTitle: "Digital Artist & Illustrator",

  description:
    "Portuguese digital artist and illustrator known for fantasy art, comic book covers, Harry Potter illustrations, videogames and publishing work.",

  sameAs: [
    "https://www.instagram.com/grafiktiago/",
    "https://www.facebook.com/grafiktiago/",
    "https://x.com/grafik_tiago/",
    "https://www.artstation.com/tiagodasilva",
  ],

  nationality: "Portuguese",

  knowsAbout: [
    "Fantasy Art",
    "Digital Painting",
    "Comic Books",
    "Illustration",
    "Concept Art",
    "Character Design",
    "Cover Art",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
  {children}
</body>
    </html>
  );
}