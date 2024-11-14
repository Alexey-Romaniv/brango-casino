import "../../public/fonts/fonts.css";
import "../styles/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
    favicon: "/favicon.webp",
    manifest: "/manifest.json",
    title: "Brango Casino Canada: Top Games, Fast Payouts & Secure Play",
    description:
        "Brango Casino offers Canadian players fast payouts, top games, and secure transactions. Join today to explore exciting bonuses and experience premium online gaming!",
};

export default function RootLayout({children}) {
    return (
        <html lang="en-NZ">
        <head>
            <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96"/>
            <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2"
            ></meta>
            <meta name="theme-color" content="#ffffff"/>
            <meta name="language" content="English"/>
            <meta property="og:locale" content="en-NZ"/>

            <meta
                property="og:title"
                content="Brango Casino Canada: Top Games, Fast Payouts & Secure Play"
            />
            <meta
                property="og:description"
                content="Brango Casino offers Canadian players fast payouts, top games, and secure transactions. Join today to explore exciting bonuses and experience premium online gaming!"
            />
            <meta property="og:image" content="/icons/Rocket-Casino-baner.webp"/>
            <meta property="og:url" content="https://brango-casino-online.com"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:type" content="website"/>
            <meta
                name="twitter:title"
                content="Brango Casino Canada: Top Games, Fast Payouts & Secure Play"
            />
            <meta
                name="twitter:description"
                content="Brango Casino offers Canadian players fast payouts, top games, and secure transactions. Join today to explore exciting bonuses and experience premium online gaming!"
            />
            <meta name="twitter:image" content="/icons/Rocket-Casino-baner.webp"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="rocketcasino-australia.com"/>
            <meta name="twitter:url" content="https://brango-casino-online.com"/>
            <meta name="twitter:image:width" content="1200"/>
            <meta name="twitter:image:height" content="630"/>
            <meta name="next-size-adjust" content="auto"/>
            <link rel="preload" href="/images/hero-img.webp" as="image"/>
            <link rel="preload" href="/images/hero-mob.webp" as="image"/>
        </head>
        <body>
        <div className="body-wrapper">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
