import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./commanComponents/Header";
import Footer from "./commanComponents/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './Redux Store/store';

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <Provider store={store}> */}
        <ToastContainer />
        <Header />
        {children}
        <Footer />
      {/* </Provider> */}
      </body>
    </html>
  );
}
