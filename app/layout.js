import { Instrument_Serif, Manrope } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const headingFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Ready PH | Household emergency guide",
  description:
    "Clear steps for Filipino households preparing for typhoons, earthquakes, floods, and power outages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
