export const faqCategories = ['全部', '新手入门', '订阅客户端', '线路节点', '故障排查', '价格安全'] as const;

export type FaqCategory = Exclude<(typeof faqCategories)[number], '全部'>;

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  keywords: string[];
  article?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'what-is-airport',
    category: '新手入门',
    question: '机场是什么？和 VPN 有什么区别？',
    answer: '“机场”通常指提供订阅和节点的网络服务，用户再用 Clash、Shadowrocket、v2rayN 等客户端导入。商业 VPN 往往同时提供线路、协议和官方客户端。两者的责任边界、隐私承诺和支持方式不同，均应遵守所在地法律与组织政策。',
    keywords: ['机场', 'VPN', '区别', '新手'],
    article: '/articles/first-time-buyers-guide/'
  },
  {
    id: 'how-to-choose',
    category: '新手入门',
    question: '新手应该怎么选择机场？',
    answer: '先确定用途、设备、每月流量和预算，再检查客户端兼容、线路说明、节点倍率、设备数、退款和维护公告。第一次购买优先月付或试用，并在晚高峰完成真实任务。',
    keywords: ['怎么选', '小白', '推荐', '月付'],
    article: '/articles/first-time-buyers-guide/'
  },
  {
    id: 'recommended-airport',
    category: '新手入门',
    question: '有没有适合所有人的机场推荐？',
    answer: '没有永久适合所有人的第一名。游戏重视延迟和丢包，流媒体重视地区识别和持续吞吐，办公重视长连接与支持。应先按场景筛选，再用自己的网络复测。',
    keywords: ['机场推荐', '机场排行', '测评', '场景'],
    article: '/recommendations/'
  },
  {
    id: 'airport-vps',
    category: '新手入门',
    question: '买机场还是自己搭 VPS？',
    answer: '机场把线路和维护交给服务商，自建 VPS 则需要自己负责系统更新、密钥、端口、路由和故障排查。自建不自动更安全或更便宜，选择取决于运维能力和风险边界。',
    keywords: ['VPS', '自建', '机场和 VPS'],
    article: '/articles/first-time-buyers-guide/'
  },
  {
    id: 'subscription-link',
    category: '订阅客户端',
    question: '机场订阅链接是什么？可以分享吗？',
    answer: '订阅链接是客户端获取节点和规则的敏感凭证，通常包含用户标识或令牌。不要公开分享、上传到陌生转换网站或在截图中暴露完整地址。',
    keywords: ['订阅链接', '订阅地址', '分享', '安全'],
    article: '/articles/airport-subscription-link-node-import/'
  },
  {
    id: 'clash-import',
    category: '订阅客户端',
    question: 'Clash 怎么导入机场订阅？',
    answer: '从已登录的机场账户复制对应 Clash 格式的订阅地址，在配置或订阅管理中添加并更新。导入后先检查更新时间、策略组、节点和规则来源，再开启系统代理。',
    keywords: ['Clash', '导入', '配置', '订阅'],
    article: '/articles/airport-subscription-link-node-import/'
  },
  {
    id: 'shadowrocket-import',
    category: '订阅客户端',
    question: '小火箭 Shadowrocket 怎么添加订阅？',
    answer: '使用官网提供的一键导入或在 Shadowrocket 的订阅类型中手动粘贴地址。确认目标应用和链接域名，正常导入通常不需要安装陌生描述文件或企业证书。',
    keywords: ['小火箭', 'Shadowrocket', 'iOS', '订阅'],
    article: '/articles/xiaohuojian-airport-subscription-guide/'
  },
  {
    id: 'client-choice',
    category: '订阅客户端',
    question: 'Windows、Mac、Android、iOS 用什么客户端？',
    answer: 'Windows 和 Mac 可比较仍在维护的 Clash、v2rayN 或 sing-box 客户端；Android 常见 v2rayNG 和兼容客户端；iOS 常见 Shadowrocket、Quantumult X 和 Stash。优先从可信发布源安装。',
    keywords: ['Windows', 'Mac', 'Android', 'iOS', '客户端'],
    article: '/articles/airport-client-platform-matrix/'
  },
  {
    id: 'multi-device',
    category: '订阅客户端',
    question: '不限设备等于可以随便共享账号吗？',
    answer: '不等于。需要区分安装设备数、同时在线设备、IP 数和并发连接。公开共享可能违反套餐条款、触发封禁，还会让订阅凭证泄露。',
    keywords: ['不限设备', '多设备', '并发', '共享'],
    article: '/articles/airport-device-multiplier-audit-guide/'
  },
  {
    id: 'iplc-transit',
    category: '线路节点',
    question: 'IPLC 专线和中转机场有什么区别？',
    answer: '中转通常先连接较近入口再转发到出口；IPLC 或专线强调不同于普通公网的传输资源，但各商家定义并不统一。应核验入口、出口、覆盖范围、容量和备用线路。',
    keywords: ['IPLC', '专线', '中转', '线路'],
    article: '/articles/iplc-transit-bgp-direct-airport-guide/'
  },
  {
    id: 'node-multiplier',
    category: '线路节点',
    question: '节点倍率是什么意思？倍率越高越快吗？',
    answer: '倍率表示流量扣除倍数，2 倍率节点传输约 1 GB 数据通常扣除约 2 GB 套餐流量。高倍率可能对应高成本线路，但不自动代表更快，仍需实际测试。',
    keywords: ['节点倍率', '流量', '怎么算', '高倍率'],
    article: '/articles/airport-device-multiplier-audit-guide/'
  },
  {
    id: 'native-ip',
    category: '线路节点',
    question: '原生 IP、家宽 IP 和住宅 IP 有什么区别？',
    answer: '原生 IP 通常强调注册地址或平台识别地区一致；家宽、住宅 IP 强调消费者网络属性。名称没有统一定义，也不保证独享或永久解锁，需要核验出口、ASN、DNS 和平台实际识别。',
    keywords: ['原生 IP', '家宽 IP', '住宅 IP'],
    article: '/articles/native-residential-ip-airport-guide/'
  },
  {
    id: 'few-nodes',
    category: '线路节点',
    question: '节点数量越多越好吗？',
    answer: '不一定。大量重复节点可能共享相同入口和带宽。比数量更重要的是地区分布、用途标注、维护频率、高峰期表现和故障时是否有真正独立的备用线路。',
    keywords: ['节点数量', '节点少', '节点推荐'],
    article: '/articles/regional-airport-node-guide/'
  },
  {
    id: 'one-node-for-all-scenes',
    category: '线路节点',
    question: '流媒体、ChatGPT 和游戏可以一直使用同一个节点吗？',
    answer: '不建议把一个节点当作所有场景的固定答案。流媒体与 ChatGPT 更看重出口地区、IP 识别和会话稳定，游戏更看重延迟、抖动和丢包；办公还需要长连接稳定。可分别保存策略组，并按实际任务选择。',
    keywords: ['流媒体', 'ChatGPT', '游戏', '节点选择', '办公'],
    article: '/articles/streaming-vs-work/'
  },
  {
    id: 'connected-no-web',
    category: '故障排查',
    question: '机场显示已连接，为什么网页还是打不开？',
    answer: '已连接只代表本地代理启动。依次检查基础网络、系统代理、规则命中、DNS、节点状态和目标网站。关闭客户端后也无法访问时，应先修复本地网络。',
    keywords: ['连上打不开', '网页', 'DNS', '系统代理'],
    article: '/articles/troubleshooting-connection/'
  },
  {
    id: 'subscription-update-failed',
    category: '故障排查',
    question: '机场订阅或更新订阅失败怎么办？',
    answer: '确认套餐未过期、系统时间正确、链接完整且格式与客户端匹配。保留现有可用配置，在官网重新复制或生成链接，新建订阅项测试成功后再删除旧项。',
    keywords: ['订阅失败', '更新订阅失败', '导入失败'],
    article: '/articles/clash-shadowrocket-import-troubleshooting/'
  },
  {
    id: 'nodes-missing',
    category: '故障排查',
    question: '更新后节点变少或完全不显示怎么办？',
    answer: '可能是维护、套餐权限、客户端过滤、缓存或格式不兼容。先比较账户页面显示的节点数量，查看公告，再新建订阅项验证，不要立即删除旧配置。',
    keywords: ['节点少', '节点不显示', '更新'],
    article: '/articles/troubleshooting-connection/'
  },
  {
    id: 'slow-high-latency',
    category: '故障排查',
    question: '晚高峰速度慢、延迟高应该怎么排查？',
    answer: '先关闭客户端测试本地基线，再固定协议，只更换节点。分别记录普通时段和 20:00—23:00 的延迟、抖动、丢包和实际任务表现。',
    keywords: ['晚高峰', '速度慢', '延迟高', '丢包'],
    article: '/articles/speed-test-method/'
  },
  {
    id: 'all-nodes-failed',
    category: '故障排查',
    question: '所有节点都超时，是不是机场跑路了？',
    answer: '不一定，也可能是订阅过期、服务维护、域名故障、本地网络限制或客户端配置问题。需要交叉核对官网、备用网址、状态公告、不同网络和工单响应后再判断。',
    keywords: ['连接超时', '全部失效', '跑路', '维护'],
    article: '/alerts/'
  },
  {
    id: 'monthly-annual',
    category: '价格安全',
    question: '机场月付、季付和年付怎么选？',
    answer: '新服务优先月付，完成一个或多个周期验证后再考虑季付。年付虽然单月可能更低，但承担线路变化、服务停止和退款困难的更高风险。',
    keywords: ['月付', '季付', '年付', '套餐'],
    article: '/articles/subscription-renewal-cost/'
  },
  {
    id: 'free-trial',
    category: '价格安全',
    question: '机场免费试用能证明长期稳定吗？',
    answer: '不能。试用适合验证客户端兼容和基本连通，但试用节点、带宽和正式套餐可能不同。至少还应通过月付测试晚高峰、常用地区、设备限制和工单。',
    keywords: ['免费试用', '体验', '稳定'],
    article: '/articles/subscription-renewal-cost/'
  },
  {
    id: 'audit-logs',
    category: '价格安全',
    question: '无审计机场就等于不记录日志吗？',
    answer: '不等于。“无审计”不是统一标准，也不能替代隐私政策。应确认是否记录内容、DNS、连接时间、源 IP、节点、流量，以及数据保留多久。',
    keywords: ['无审计', '日志', '隐私', '审计'],
    article: '/articles/airport-device-multiplier-audit-guide/'
  },
  {
    id: 'runaway-signals',
    category: '价格安全',
    question: '机场跑路前常见哪些风险信号？',
    answer: '突然主推异常低价多年套餐、收款方式频繁变化、大面积失效却无公告、官网与备用网址同时不可用、工单和社群长期失联，都是需要提高警惕的组合信号。单个故障不能直接定性。',
    keywords: ['跑路', '风险', '失联', '预警'],
    article: '/alerts/'
  },
  {
    id: 'official-site',
    category: '价格安全',
    question: '怎么确认机场官网或备用网址不是仿冒？',
    answer: '从已保存订单、可信历史公告或已登录账户进入，核对域名、证书、套餐和账户信息。备用网址若突然要求重新付款、上传身份文件或安装未知程序，应立即停止。',
    keywords: ['机场官网', '备用网址', '仿冒', '入口'],
    article: '/articles/airport-directory-official-backup-entry/'
  }
];
