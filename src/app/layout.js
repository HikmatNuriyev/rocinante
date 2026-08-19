import { Bodoni_Moda, Instrument_Sans } from "next/font/google";
import "@/styles/abstracts/globals.scss";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Rocinante",
  description: "Kəşf edilməmiş filmlər, seriallar və animelər",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az" className={`${bodoni.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}