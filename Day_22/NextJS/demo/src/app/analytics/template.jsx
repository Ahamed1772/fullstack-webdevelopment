"use client";
import { useState } from "react";
import Link from "next/link";
import "../globals.css";

const Layout = () => {
    const [initial,setInitial] = useState("");
    return (
        <div className="m-24 bg-amber-300">
            <input className="border-red-400" type="text" value={initial} onChange={(e) => setInitial(e.target.value)} placeholder="enter something" />
            <br />
            <Link href="/analytics/revenue">Revenue</Link>
            <br />
            <Link href="/analytics/stats">Stats</Link>
        </div>
    )
}

export default Layout;