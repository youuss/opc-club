export interface Member {
  id: string;
  name: string;
  company: string;
  tagline: string;
  category: string;
  avatar: string;
  cover: string;
  bio: string;
  location: string;
  founded: string;
  website?: string;
  skills: string[];
  services: string[];
  achievements: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    wechat?: string;
  };
  revenue?: string;
  clients?: number;
}

export const categories = [
  "全部",
  "技术开发",
  "设计创意",
  "内容创作",
  "营销咨询",
  "教育培训",
  "摄影视频",
];

export const members: Member[] = [
  {
    id: "1",
    name: "李明远",
    company: "Codeforge Studio",
    tagline: "一个人，构建改变世界的 SaaS 产品",
    category: "技术开发",
    avatar: "https://images.unsplash.com/photo-1770392988936-dc3d8581e0c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTA2NzQyfDA&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1622579521534-8252f7da47fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwZGVza3xlbnwxfHx8fDE3NzI1MDY3NDB8MA&ixlib=rb-4.1.0&q=80&w=800",
    bio: "前阿里巴巴高级工程师，2021年辞职后独立开发了多款 SaaS 工具，专注于为中小企业提供效率提升解决方案。相信一个人也可以构建百万用户的产品。",
    location: "杭州",
    founded: "2021",
    website: "https://codeforge.studio",
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "产品设计"],
    services: ["SaaS 产品开发", "技术咨询", "MVP 快速开发"],
    achievements: ["独立产品月收入破 5 万", "Product Hunt 当日第一", "服务超过 200+ 企业客户"],
    social: { twitter: "@limingyuan", github: "limingyuan" },
    revenue: "¥5万+/月",
    clients: 200,
  },
  {
    id: "2",
    name: "王晓燕",
    company: "Studio Bloom",
    tagline: "用品牌设计让小企业发出大声音",
    category: "设计创意",
    avatar: "https://images.unsplash.com/photo-1770135157320-68ecfe9cd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjUwNjc0Mnww&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1761027204911-d8c4ebe2e64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZGVzaWduZXIlMjBzdHVkaW8lMjB3b3JrfGVufDF8fHx8MTc3MjUwNjc0NXww&ixlib=rb-4.1.0&q=80&w=800",
    bio: "毕业于中央美术学院，曾任职于国际4A广告公司。2020年创立 Studio Bloom，专注品牌视觉和用户体验设计，服务过超过 80 个品牌从零到一的视觉建设。",
    location: "上海",
    founded: "2020",
    website: "https://studiobloom.cn",
    skills: ["品牌设计", "UI/UX", "Figma", "插画", "动态设计"],
    services: ["品牌视觉系统", "Logo 设计", "包装设计", "UI 设计"],
    achievements: ["服务 80+ 品牌", "Red Dot 设计奖提名", "小红书粉丝 15 万"],
    social: { instagram: "@studiobloom", linkedin: "wangxiaoyan" },
    revenue: "¥3万+/月",
    clients: 80,
  },
  {
    id: "3",
    name: "张伟翔",
    company: "深度科技评论",
    tagline: "一个人的科技媒体，做有深度的内容",
    category: "内容创作",
    avatar: "https://images.unsplash.com/photo-1746114774895-133d5b677db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbWFuJTIwZnJlZWxhbmNlciUyMGxhcHRvcCUyMGNvZmZlZXxlbnwxfHx8fDE3NzI1MDY3NDJ8MA&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xvJTIwZW50cmVwcmVuZXVyJTIwd29ya3NwYWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyNTA2NzM5fDA&ixlib=rb-4.1.0&q=80&w=800",
    bio: "前虎嗅科技记者，深耕科技行业8年。2022年独立创办「深度科技评论」，专注 AI、新能源、硬科技领域的深度报道，付费订阅用户超 2 万人。",
    location: "北京",
    founded: "2022",
    website: "https://deeptech.review",
    skills: ["内容策划", "深度报道", "播客制作", "视频剪辑", "社群运营"],
    services: ["科技内容订阅", "品牌内容合作", "行业研究报告"],
    achievements: ["付费订阅用户 2 万+", "微信公众号 20 万粉丝", "年收入突破 100 万"],
    social: { twitter: "@zhangweixiang", wechat: "deeptech_review" },
    revenue: "¥8万+/月",
    clients: 20000,
  },
  {
    id: "4",
    name: "陈美玲",
    company: "Growth Lab",
    tagline: "帮助初创公司找到增长飞轮",
    category: "营销咨询",
    avatar: "https://images.unsplash.com/photo-1758691737587-7630b4d31d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzJTIwc21pbGUlMjBjb25maWRlbnR8ZW58MXx8fHwxNzcyNTA2NzQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1766066014773-0074bf4911de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMGRldmVsb3BlciUyMHByb2dyYW1tZXIlMjB0ZWNofGVufDF8fHx8MTc3MjUwNjc0NXww&ixlib=rb-4.1.0&q=80&w=800",
    bio: "前字节跳动增长团队负责人，服务过50+ 初创公司的用户增长战略。擅长数据驱动的增长方法论，帮助客户在6个月内实现用户翻倍。",
    location: "深圳",
    founded: "2022",
    website: "https://growthlab.co",
    skills: ["增长策略", "数据分析", "SEO/SEM", "用户研究", "A/B 测试"],
    services: ["增长咨询", "GTM 策略", "用户获取方案", "增长工作坊"],
    achievements: ["服务 50+ 初创公司", "平均帮客户增长 3x 用户", "LinkedIn 粉丝 5 万"],
    social: { linkedin: "chenmeiling", twitter: "@growthlab_cn" },
    revenue: "¥6万+/月",
    clients: 50,
  },
  {
    id: "5",
    name: "刘洋帆",
    company: "帆光影像",
    tagline: "用光影记录品牌最真实的灵魂",
    category: "摄影视频",
    avatar: "https://images.unsplash.com/photo-1770392988936-dc3d8581e0c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyNTA2NzQyfDA&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1622579521534-8252f7da47fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwZGVza3xlbnwxfHx8fDE3NzI1MDY3NDB8MA&ixlib=rb-4.1.0&q=80&w=800",
    bio: "商业摄影师&导演，专注品牌视觉和产品影像创作。曾与 NIKE、小米、完美日记等品牌合作，一人完成从拍摄到后期的全流程制作。",
    location: "广州",
    founded: "2019",
    website: "https://fanvision.cn",
    skills: ["商业摄影", "视频导演", "后期剪辑", "品牌策划", "调色"],
    services: ["品牌视觉拍摄", "产品视频制作", "品牌纪录片"],
    achievements: ["合作品牌 30+", "作品入选 Getty Images", "微博粉丝 8 万"],
    social: { instagram: "@fanvision", wechat: "fanvision_cn" },
    revenue: "¥4万+/月",
    clients: 30,
  },
  {
    id: "6",
    name: "赵思远",
    company: "PM Consulting",
    tagline: "从0到1，帮你把想法变成真正的产品",
    category: "营销咨询",
    avatar: "https://images.unsplash.com/photo-1766066014773-0074bf4911de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMGRldmVsb3BlciUyMHByb2dyYW1tZXIlMjB0ZWNofGVufDF8fHx8MTc3MjUwNjc0NXww&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1608999383953-d61f5d9c1ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xvJTIwZW50cmVwcmVuZXVyJTIwd29ya3NwYWNlJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyNTA2NzM5fDA&ixlib=rb-4.1.0&q=80&w=800",
    bio: "10年产品经理经验，曾主导过亿级用户产品的从0到1。现在作为独立产品顾问，专注帮助创始人梳理产品思路、制定路线图，让好想法真正落地。",
    location: "成都",
    founded: "2023",
    website: "https://pmconsulting.cn",
    skills: ["产品规划", "用户研究", "竞品分析", "原型设计", "敏捷开发"],
    services: ["产品策略咨询", "产品路线图", "用户体验审计"],
    achievements: ["服务 30+ 创业团队", "辅导项目累计融资 2 亿", "知识星球成员 8000+"],
    social: { linkedin: "zhaosiyuan", twitter: "@pm_siyuan" },
    revenue: "¥4万+/月",
    clients: 30,
  },
  {
    id: "7",
    name: "吴欣彤",
    company: "乐学在线",
    tagline: "让每个孩子都能获得优质的编程启蒙",
    category: "教育培训",
    avatar: "https://images.unsplash.com/photo-1770135157320-68ecfe9cd608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjUwNjc0Mnww&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1761027204911-d8c4ebe2e64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZGVzaWduZXIlMjBzdHVkaW8lMjB3b3JrfGVufDF8fHx8MTc3MjUwNjc0NXww&ixlib=rb-4.1.0&q=80&w=800",
    bio: "前腾讯工程师，教育学研究生。2021年创立「乐学在线」，独立制作少儿编程课程体系，目前在线学员超过 3000 人，课程好评率 98%。",
    location: "武汉",
    founded: "2021",
    website: "https://lexueonline.cn",
    skills: ["课程设计", "Scratch", "Python", "直播教学", "社群运营"],
    services: ["少儿编程课程", "一对一辅导", "学校合作课程"],
    achievements: ["在线学员 3000+", "课程好评率 98%", "合作学校 20+"],
    social: { wechat: "lexue_coding", instagram: "@lexue_online" },
    revenue: "¥2万+/月",
    clients: 3000,
  },
  {
    id: "8",
    name: "林俊杰",
    company: "字节设计所",
    tagline: "一个人的字体设计工作室",
    category: "设计创意",
    avatar: "https://images.unsplash.com/photo-1746114774895-133d5b677db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbWFuJTIwZnJlZWxhbmNlciUyMGxhcHRvcCUyMGNvZmZlZXxlbnwxfHx8fDE3NzI1MDY3NDJ8MA&ixlib=rb-4.1.0&q=80&w=400",
    cover: "https://images.unsplash.com/photo-1622579521534-8252f7da47fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwZGVza3xlbnwxfHx8fDE3NzI1MDY3NDB8MA&ixlib=rb-4.1.0&q=80&w=800",
    bio: "专注中文字体设计和排版艺术，独立设计并发布了4款商业字体，授权企业客户超过 500 家。每一个笔画都是一个决定。",
    location: "苏州",
    founded: "2020",
    website: "https://zijisheji.cn",
    skills: ["字体设计", "排版设计", "书法", "平面设计", "IP 创作"],
    services: ["定制字体设计", "品牌字体授权", "排版咨询"],
    achievements: ["发布 4 款商业字体", "授权企业 500+", "微博设计圈 KOL 12 万粉"],
    social: { instagram: "@zijisheji", twitter: "@linjunjie_type" },
    revenue: "¥3万+/月",
    clients: 500,
  },
];
