/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so this can be hosted the same way as the previous
  // site (e.g. GitHub Pages). Remove this line if you deploy to Vercel
  // and want to use Next.js's server features instead.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
