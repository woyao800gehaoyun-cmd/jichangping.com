export const SITE = {
  name: '燕子机场榜',
  title: '燕子机场榜｜2026 机场推荐、机场测评与节点订阅指南',
  description: '整理 2026 机场推荐、机场排行、节点线路、订阅客户端、地区节点、价格套餐与故障排查，帮助用户按稳定性和真实成本选择。',
  url: 'https://jichangping.com',
  author: '燕子测评组'
};

export const categories = [
  { name: '入门指南', slug: 'guides', description: '从概念到选择逻辑，先建立正确判断框架。', accent: '01' },
  { name: '工具评测', slug: 'reviews', description: '关注真实体验、限制与长期使用成本。', accent: '02' },
  { name: '横向对比', slug: 'comparisons', description: '在相同测试条件下，对照不同方案的差异。', accent: '03' },
  { name: '实用教程', slug: 'tutorials', description: '一步一步解决安装、连接、排错与安全设置。', accent: '04' },
  { name: '行业观察', slug: 'insights', description: '读懂协议演进、产品趋势与隐私议题。', accent: '05' }
] as const;

export const categoryByName = Object.fromEntries(categories.map((c) => [c.name, c]));
