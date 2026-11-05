/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Stable first-party CV URL: /cv → Google Drive. Not permanent, so swapping the Drive file never gets stuck in browser caches.
      { source: '/cv', destination: 'https://drive.google.com/file/d/1mp4K7hO4RgEgGsbUtZmDmMH8xlmPSFfo/view', permanent: false },
      // The old projects archive now lives in the Work section of the home page.
      { source: '/projects', destination: '/#work', permanent: true },
    ];
  },
};

export default nextConfig;
