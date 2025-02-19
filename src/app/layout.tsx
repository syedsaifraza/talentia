"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import {store} from "@/store/index"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
   
   

   

  return (

    <html lang="en" data-theme="light"  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
      <body className="bg-blue-50 w-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
         
        <div style={{width:'100%'}}>
          <Provider store={store}>
          {children}
          </Provider>
        
        </div>
        <Toaster />  
      </body>
      
    </html>
  );
}
