/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
                'res.cloudinary.com'
        ]
    },
    output: 'export',
    trailingSlash: true,
}

module.exports = nextConfig
