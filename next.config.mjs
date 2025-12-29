/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages의 경우 리포지토리 이름을 basePath로 설정
  // 예: https://username.github.io/repo-name
  // username.github.io 리포지토리는 basePath 불필요
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
