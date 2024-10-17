import React from "react";
import Hero from "../../components/Hero/Hero";
import Section2 from "../../components/Section2/Section2";
import Section3 from "../../components/Section3/Section3";
import { useState } from "react";

import { Outlet, useLoaderData } from "react-router-dom";

export default function Home () {
    const plantData = useLoaderData();
    return (
        <div>
            <Hero plantData={plantData} />
            <Section2 />
            <Section3 plantData={plantData} />
        </div>
    )
}