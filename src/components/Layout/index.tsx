import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({children}:any) =>{
    return (
        <div className="min-h-100vh flex flex-col bg-primary text-white p-1">
            <Header/>
            <main className="flex flex-col pt-[92px]">{children}</main>
            <Footer/>
        </div>
    )
}
export default Layout;