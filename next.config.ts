// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for catching bugs
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"], // Add allowed external image sources
  },
};

export default nextConfig;
