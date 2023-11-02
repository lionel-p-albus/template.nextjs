/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true
    },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/models',
    //             basePath: false,
    //             permanent: false
    //         }
    //     ];
    // }
    // async rewrites() {
    //     return [
    //         {
    //             source: '/public-api/:path*',
    //             destination: `${process.env.NEXT_PUBLIC_PUBLIC_API}/:path*`,
    //         },
    //     ]
    // },
}

module.exports = nextConfig
