/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.cloudflare.steamstatic.com',
                port: '',
                pathname: '/apps/dota2/images/dota_react/**',
            },
        ],
    },
};

module.exports = nextConfig;
