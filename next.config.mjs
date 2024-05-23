import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'strapi-aws-s3-images-bucket-pmot.s3.us-east-1.amazonaws.com',
            port: '',
          },
        ],
      },
};

export default withNextIntl(nextConfig);

