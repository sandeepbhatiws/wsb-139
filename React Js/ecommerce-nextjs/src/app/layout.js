"use client"
import { Provider } from "react-redux";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import "./globals.css";
import { store } from "./Redux Toolkit/reduxstore";

// export const metadata = {
//   title: "Ecommerce Website",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header/>
          {children}
          <Footer/>
        </Provider>
        
      </body>
    </html>
  );
}
