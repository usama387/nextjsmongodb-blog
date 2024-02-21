import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// # 1 Using my own font here and then adding it in the body to implement in the app
const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Blog App",
  description: "devoloped by Usama",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josef.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
