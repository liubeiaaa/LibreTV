/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 关键：静态导出
  reactStrictMode: true,
  images: {
    unoptimized: true,       // 禁用图片优化，避免生成超大文件
  },
};

export default nextConfig;
