import type { Metadata } from "next";
import {Inter, Vazirmatn,} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
const Vazir= Vazirmatn({
  variable: "--font-Vazirmatn",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "همه کالا",
    template: "%s | همه کالا",
    absolute: "همه کالا"
  }
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookiesInfo = await cookies();;
  const locale = cookiesInfo.get("locale")?.value || "fa" ;
  const isRTL = locale === "fa" || locale === "pa" ;
  return (
    <html
      lang={locale}
      dir={locale === "en" ? 'ltr' : 'rtl'}
      suppressHydrationWarning
      className= {` h-full antialiased font-sans  ${isRTL ? Vazir.className : inter.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>
             {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}
