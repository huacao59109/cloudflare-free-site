# Cloudflare 完全免费建站 Skill

一套面向 AI 助手的中文建站技能，覆盖需求整理、页面开发、动态功能、部署和维护。默认使用免费域名与 Cloudflare 托管，适合个人网站、产品展示、信息发布、表单和轻量应用。

不依赖特定 AI 产品、编辑器或专用工具。仓库提供建站流程和实践参考，不是开箱即用的网站模板。

## 按需组合

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

纯展示网站只需静态资源。需要动态功能时再增加接口和数据存储；已有站点优先复用原工程。Workers 是无服务器应用托管，不是可以直接安装任意服务器软件的 VPS。

## 包含内容

- 从页面、内容和交互需求开始，选择适当的技术方案。
- 免费域名申请条件、续期、NS 委派、HTTPS 与自定义域名绑定。
- 响应式界面、表单、数据持久化及按需添加的账号和后台。
- 项目更新、数据保留、版本发布与回滚。
- 免费额度、真实网络验证、回滚和后续维护。

## 使用方式

下载仓库，或在任意工作目录执行：

```sh
git clone https://github.com/huacao59109/cloudflare-free-site.git
```

支持 `SKILL.md` 技能目录的工具，可按该工具的安装说明放置整个目录；已有同名目录时先比较本地修改。其他 AI 助手可直接读取 `SKILL.md`，再按任务读取其引用文件。是否自动发现技能取决于使用的工具。

示例：

```text
阅读 cloudflare-free-site/SKILL.md，帮我制作一个产品展示网站。
需要首页、产品介绍和联系方式，风格简洁，适配手机。
先完成本地版本，再按免费域名与 Cloudflare 方案部署。
```

```text
按 cloudflare-free-site/SKILL.md，为现有网站增加内容管理功能。
需要登录后编辑和保存；保留原有数据与账号，继续使用免费方案。
```

没有终端或部署权限的助手仍可生成工程和操作步骤，实际发布需要具备相应工具及账号授权。

## 文件

| 文件 | 用途 |
| --- | --- |
| [SKILL.md](SKILL.md) | 技能入口、架构选择与工作流程 |
| [domain-and-free-plan.md](references/domain-and-free-plan.md) | 域名、DNS、HTTPS 与免费额度 |
| [app-and-deployment.md](references/app-and-deployment.md) | 页面、动态功能、存储与发布 |
| [validation-and-maintenance.md](references/validation-and-maintenance.md) | 验收、实践边界、维护与回滚 |

## 免费方案的边界

DNSHE 的 `.us.ci` 免费名称与 Cloudflare 自定义域名路线已有实际部署验证。免费资格、后缀、续期规则和平台额度会变化，使用前应重新核对官方资料；参考文件附有来源和核对日期。

满足免费条件且用量未超限时，域名与应用托管可以为 0 元。额外服务按实际需求另行核算，不默认开通。国内访问需要使用实际宽带和手机网络验证，一次成功不代表所有地区或未来时间都可用。

## 贡献

欢迎通过 Issue 或 Pull Request 补充可复现的改进。平台规则或额度变更请附官方链接和核对日期；不要提交凭据、数据库备份或账号专属配置。

## 许可证

[MIT](LICENSE) © 2026 huacao59109

## 打赏支持

如果这个项目对你有帮助，欢迎自愿打赏。

| 微信 | 支付宝 |
| :---: | :---: |
| <img src="assets/donate/wechat.png" width="180" alt="微信收款码"> | <img src="assets/donate/alipay.png" width="180" alt="支付宝收款码"> |
