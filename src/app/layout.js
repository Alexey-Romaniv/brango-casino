import "../../public/fonts/fonts.css";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  favicon: "/favicon.webp",
  manifest: "/manifest.json",
  title: "Rocket Casino Australia: Exciting Online Casino Detailed Review",
  description:
    "Rocket Casino Australia: everything you need to know about the popular gambling service. Generous bonuses, exciting games, a profitable loyalty program and a lot of other useful information.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/icons/favicon.ico"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.webp" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-touch-icon-57x57.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-touch-icon-60x60.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-touch-icon-72x72.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-touch-icon-76x76.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-touch-icon-114x114.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-touch-icon-120x120.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-touch-icon-144x144.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-touch-icon-152x152.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon-180x180.webp"
        />
        <link
          rel="icon"
          href="/icons/android-launchericon-192-192.webp"
          type="image/webp"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/icons/android-launchericon-16-16.webp"
          type="image/webp"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/icons/android-launchericon-32-32.webp"
          type="image/webp"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/icons/android-launchericon-96-96.webp"
          type="image/webp"
          sizes="96x96"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"
        ></meta>
        <meta name="theme-color" content="#ffffff" />
        <meta name="language" content="English" />
        <meta property="og:locale" content="en-AU" />

        <meta
          property="og:title"
          content="Rocket Casino Australia: Exciting Online Casino Detailed Review"
        />
        <meta
          property="og:description"
          content="Rocket Casino Australia: everything you need to know about the popular gambling service. Generous bonuses, exciting games, a profitable loyalty program and a lot of other useful information."
        />
        <meta property="og:image" content="/icons/Rocket-Casino-baner.webp" />
        <meta property="og:url" content="https://rocketcasino-australia.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Rocket Casino Australia: Exciting Online Casino Detailed Review"
        />
        <meta
          name="twitter:description"
          content="Rocket Casino Australia: everything you need to know about the popular gambling service. Generous bonuses, exciting games, a profitable loyalty program and a lot of other useful information."
        />
        <meta name="twitter:image" content="/icons/Rocket-Casino-baner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="rocketcasino-australia.com" />
        <meta name="twitter:url" content="https://rocketcasino-australia.com" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="next-size-adjust" content="auto" />
        <link rel="preload" href="/images/hero-img.webp" as="image" />
        <link rel="preload" href="/images/hero-mob.webp" as="image" />
      </head>
      <body>
        <div className="body-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
