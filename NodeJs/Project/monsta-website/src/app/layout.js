import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./commanComponents/Header";
import Footer from "./commanComponents/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";



export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
