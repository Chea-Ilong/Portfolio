"use client";

import dynamic from "next/dynamic";

// Import App.js dynamically and disable SSR
const App = dynamic(() => import("../src/App"), { ssr: false });

export default function SyntheticV0PageForDeployment() {
  return <App />;
}
