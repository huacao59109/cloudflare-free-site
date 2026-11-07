# Cloudflare 免费建站 Skill

面向 Codex 的中文技能：把免费域名、Cloudflare Workers、D1 和网盘组合成轻量网站，支持按需实现本站注册登录、登录后查看下载链接和管理后台。

方案来自一次实际部署，包含操作流程、实现取舍和验证结果。公开版本已移除个人本机路径、实际站点域名及账号专属信息。

## 方案

```text
DNSHE 免费域名（已验证 .us.ci 路线）
                 │ NS 委派 / HTTPS / Custom Domain
                 ▼
Cloudflare Workers Free
├── Static Assets：公开页面、登录页、后台界面
├── /api/*：本站认证、下载权限、内容管理
└── D1：用户、会话、作品资料、私有链接、压缩封面

漫画整本等大文件 → 用户选择的网盘
```

按任务选用组件：纯静态展示站不必创建账号库或后台。Workers 是无服务器应用托管，不是可直接安装 WordPress 的 VPS。

## 包含内容

- 免费域名的申请条件、续期、NS 委派、证书与 Custom Domain 绑定。
- Workers / D1 免费额度，以及国内网络访问的验证方法。
- 账号和管理权限、保护网盘链接、保存后生效的数据设计。
- 浏览器端封面压缩、小图片存 D1、数据迁移与部署打包。
- 已验证案例及其适用边界。

## 安装

将仓库放到 Codex 的 `skills/cloudflare-free-site` 目录。目标目录已有同名技能时，先比较版本，不要直接覆盖本地修改。

macOS / Linux：

```sh
git clone https://github.com/huacao59109/cloudflare-free-site.git "${CODEX_HOME:-$HOME/.codex}/skills/cloudflare-free-site"
```

Windows PowerShell：

```powershell
$skillRoot = if ($env:CODEX_HOME) {
    Join-Path $env:CODEX_HOME 'skills'
} else {
    Join-Path $env:USERPROFILE '.codex\skills'
}
New-Item -ItemType Directory -Force -Path $skillRoot | Out-Null
git clone https://github.com/huacao59109/cloudflare-free-site.git (Join-Path $skillRoot 'cloudflare-free-site')
```

安装后在新对话中调用：

```text
使用 $cloudflare-free-site，按免费域名与 Cloudflare 方案搭建作品展示站。
需要网站自己的注册登录，登录后才能查看网盘下载链接。
```

也可以用于已有网站的维护：

```text
使用 $cloudflare-free-site，为现有网站增加内容管理后台。
保留原账号、数据库和登录密钥，继续使用免费方案。
```

## 文件

| 文件 | 用途 |
| --- | --- |
| [SKILL.md](SKILL.md) | 技能入口与工作流程 |
| [agents/openai.yaml](agents/openai.yaml) | Codex 展示信息与调用提示 |
| [domain-and-free-plan.md](references/domain-and-free-plan.md) | 域名、DNS、HTTPS 与免费额度 |
| [app-and-deployment.md](references/app-and-deployment.md) | 应用、权限、后台、存储与发布 |
| [verified-case.md](references/verified-case.md) | 已验证案例与实测边界 |

## 使用条件

免费资格、域名续期和平台额度会变化。参考资料标注了核对日期及官方来源，实际部署前应重新核对。域名和托管在满足免费条件时可以零成本，网盘容量或会员费用另计。

国内访问需要在实际宽带、手机流量环境下验证；一次成功不代表所有地区或未来时间都可用。技能不会自动开通付费套餐，部署时使用你自己的账号和授权。

## 贡献

欢迎通过 Issue 或 Pull Request 补充官方规则变化与可复现的验证结果。涉及额度或域名规则时，请附官方链接和核对日期；不要提交令牌、数据库备份、账号凭据或个人本机路径。

## 许可证

[MIT](LICENSE) © 2026 huacao59109
