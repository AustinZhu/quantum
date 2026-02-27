import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quantum Terminal",
    short_name: "Quantum",
    description: "Quantitative trading terminal",
    start_url: "/",
    display: "standalone",
    background_color: "#18181b",
    theme_color: "#5b5bd6",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
