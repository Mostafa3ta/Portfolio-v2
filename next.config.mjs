/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Stable first-party CV URL: /cv → Google Drive
      { source: '/cv', destination: 'https://drive.google.com/file/d/1mp4K7hO4RgEgGsbUtZmDmMH8xlmPSFfo/view', permanent: true },
    ];
  },
};

export default nextConfig;
