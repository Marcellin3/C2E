"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-7 py-3 bg-white shadow-md">
     <img src="/photos/logo ok.png"
        alt="Logo C2E"
        width={50}
        height={50}
        className="object-contain" />
      {/* <h1 className="text-2xl font-bold text-blue-600">C2E</h1> */}
      <div className="flex gap-8 font-bold ">
        <Link href="/accueil">About</Link>
        <Link href="/services">Nos Services</Link>
        <Link href="/realisation">Nos Réalisations</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </nav>
  );
}
