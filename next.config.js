/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/avatar/**",
        // ** символ используется в контексте шаблонов маршрутов (routing) или правил маршрутизации, чтобы указать, что после данной части пути может идти любая подстрока или совпадение.
      },
    ],
  },
};

module.exports = nextConfig;
