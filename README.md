# Cloudflare Free Site：AI 免费建站 Skill（Cloudflare Workers + 免费域名）

[项目介绍页](https://huacao59109.github.io/cloudflare-free-site/) · [使用与部署指南](https://huacao59109.github.io/cloudflare-free-site/guide/)

**Cloudflare Free Site** 是一套面向 AI Agent 和 AI 编程助手的中文建站 Skill，帮助用户使用免费域名与 Cloudflare Workers 创建、部署和维护个人网站及轻量 Web 应用。

*An AI agent skill for building, deploying, and maintaining websites with Cloudflare Workers and free-domain options.*

它提供从需求梳理、页面开发、域名与 DNS 配置，到动态功能、部署验证和后续维护的工作流程。可按需组合静态页面、Worker API、D1 数据库、用户登录和管理后台，不依赖特定 AI 产品、编辑器或专用工具。

## 适用场景

- 个人网站、个人主页与作品集
- 产品介绍、项目展示与落地页
- 信息发布、内容展示与轻量博客
- 联系表单、数据提交和简单查询
- 需要少量动态功能或数据存储的轻量 Web 应用

本仓库提供可供 AI 助手读取和执行的建站流程与实践参考，**不是开箱即用的网站模板，也不是 VPS**。Cloudflare Workers 适合部署符合其运行环境的应用，不能直接安装任意传统服务器软件。

## 能做什么

- **需求与架构：** 梳理页面、内容和交互需求，优先选择满足目标的最小架构。
- **免费域名：** 评估免费名称的申请条件、续期、NS 委派及自定义域名绑定。
- **页面开发：** 创建响应式页面，适配桌面和手机。
- **动态功能：** 按需添加 Worker API、表单处理和动态内容。
- **数据存储：** 需要持久化时接入 Cloudflare D1。
- **账号与后台：** 按实际需求实现身份验证、权限控制和管理功能。
- **搜索收录：** 按需完善独立网址、可抓取内容、网站地图与站长平台提交，保留原有权限边界。
- **部署与维护：** 完成本地检查、发布、线上验证、版本更新和回滚。

## 推荐架构

从静态网站开始，只有在需求需要时才增加动态服务和数据库。

```text
已有域名 / 可委派 NS 的免费名称
              │ DNS / HTTPS / Custom Domain
              ▼
Cloudflare Workers Free
├── Static Assets：页面、样式、脚本、图片
├── Worker API：表单、动态内容、业务逻辑（可选）
└── D1：需要持久保存的数据（可选）

按需求增加：动态交互、用户登录、管理后台
```

纯展示网站通常只需要静态资源。需要数据提交或实时内容时再增加 API；需要持久化数据时再考虑 D1。已有网站优先复用原工程和数据。

## 快速开始

克隆仓库：

```bash
git clone https://github.com/huacao59109/cloudflare-free-site.git
```

支持 Skill 目录的工具，可按照对应工具的安装说明放置整个目录。其他 AI 助手可以直接读取 `SKILL.md`，再根据任务读取其中引用的资料。技能是否自动发现，取决于所使用的工具。

向 AI 助手提供任务示例：

```text
阅读 cloudflare-free-site/SKILL.md，帮我制作一个产品展示网站。
需要首页、产品介绍和联系方式，风格简洁，适配手机。
先完成本地版本，再按免费域名与 Cloudflare 方案部署。
```

也可以用于已有网站：

```text
按 cloudflare-free-site/SKILL.md，为现有网站增加内容管理功能。
需要登录后编辑和保存；保留原有数据与账号，继续使用免费方案。
```

没有终端或部署权限的 AI 助手仍可生成工程和操作步骤；实际发布需要具备相应工具及账号授权。

## 项目文件

| 文件 | 用途 |
| --- | --- |
| [SKILL.md](SKILL.md) | 技能入口、架构选择与建站工作流程 |
| [domain-and-free-plan.md](references/domain-and-free-plan.md) | 免费域名、DNS、HTTPS、Cloudflare 免费额度与国内访问 |
| [app-and-deployment.md](references/app-and-deployment.md) | 页面开发、动态功能、数据存储与部署 |
| [validation-and-maintenance.md](references/validation-and-maintenance.md) | 验收、维护、版本更新与回滚 |
| [search-and-discovery.md](references/search-and-discovery.md) | 可抓取页面、路由迁移、网站地图与 Google / 必应 / 百度提交 |

## 免费方案与使用边界

仓库记录了 DNSHE 的 `.us.ci` 免费名称与 Cloudflare 自定义域名路线的实际部署验证。免费资格、可申请后缀、续期规则和平台额度都可能变化，使用前应重新核对官方资料；详细来源和核对日期见 [域名与免费额度说明](references/domain-and-free-plan.md)。

满足免费条件且用量未超限时，域名与应用托管可以为 0 元。Cloudflare Workers Free、D1 等服务存在使用额度和平台限制；额外服务按实际需求另行核算，不默认开通。

国内访问情况需要使用实际宽带和手机网络验证。某一次部署成功不代表所有地区、运营商或未来时间都能稳定访问。

## English

Cloudflare Free Site is a Chinese-language AI agent skill for building and deploying personal websites and lightweight web applications. It guides an AI assistant through requirements, responsive front-end development, free-domain setup, Cloudflare Workers deployment, optional Worker APIs and D1 storage, validation, and maintenance. It is tool-agnostic and designed to add dynamic features only when needed.

## 贡献

欢迎通过 Issue 或 Pull Request 提交可复现的改进。涉及平台规则或额度变化时，请附官方链接和核对日期。请勿提交凭据、数据库备份或账号专属配置。

## 许可证

[MIT](LICENSE) © 2026 huacao59109

## 打赏支持

如果这个项目对你有帮助，欢迎自愿打赏。

| 微信 | 支付宝 |
| :---: | :---: |
| <img src="assets/donate/wechat.png" width="180" alt="微信打赏二维码"> | <img src="assets/donate/alipay.png" width="180" alt="支付宝打赏二维码"> |
