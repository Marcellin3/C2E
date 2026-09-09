"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 620);
    const hideTimer = window.setTimeout(() => setIsVisible(false), 1000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`site-loader${isLeaving ? " site-loader--leaving" : ""}`} role="status" aria-label="Chargement du site C2E">
      <div className="site-loader__glow" />
      <div className="site-loader__orb" aria-hidden="true">
        <span className="site-loader__orbit site-loader__orbit--fine" />
        <span className="site-loader__orbit site-loader__orbit--outer" />
        <span className="site-loader__orbit site-loader__orbit--inner" />
        <span className="site-loader__core"><img src="/photos/logo ok.png" alt="" width={112} height={112} /></span>
      </div>
    </div>
  );
}
