/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dpnldrnrjmmchtfzmznk.supabase.co", // Replace with your actual API domain
        
      },
    ],
  },
};

export default nextConfig;
