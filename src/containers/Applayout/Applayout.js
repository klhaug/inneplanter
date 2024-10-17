import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import FooterBottom from "../../components/footerbottom.js/FooterBottom";
import { Outlet, useRevalidator } from "react-router-dom";
import { useState } from "react";
import { DatabaseSearchProvider } from "../../components/Database/DatabaseSearchProvider";
import { RevalidationContext } from "../Revalidate/Revalidate";
import ScrollToTop from "../Revalidate/ScrollToTop";

export default function Applayout () {
    const {revalidate} = useRevalidator();

    return (
        <>
            <RevalidationContext.Provider value={revalidate}>
                <ScrollToTop />
                <header>
                    <Navbar />
                </header>
                <main>
                    <DatabaseSearchProvider>
                        <Outlet />    
                    </DatabaseSearchProvider>
                </main>
                <footer>
                    <Footer/>
                    <FooterBottom/>
                </footer>
            </RevalidationContext.Provider>
        </> 
    )
}