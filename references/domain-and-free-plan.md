# 免费域名、托管与国内访问

官方资料核对日期：2026-11-07。实施新任务时重新检查平台页面；以下数值和流程不是永久承诺。

## 免费域名的选择

本次跑通的是 DNSHE 的 `.us.ci` 名称，实际站点名称已省略。DNSHE 官网当次列出 `.us.ci`，说明支持修改 NS；免费名称默认有效期 1 年，到期前 180 天内可免费续期。实际域名状态和续期窗口以账号中的管理页为准，不把“免费”理解为“永不到期”。[DNSHE 官方说明](https://www.dnshe.com/)

选择名称时确认：

- 免费申请名额、目标名称可用，平台允许当前用途。
- 可将整个获分配名称委派给外部 NS，而不只是添加普通解析记录。
- Cloudflare 接受这个名称为可接管的 Zone，且可以选择 Free。不要假设任意免费子域都具备同样能力。
- 检查 NS 委派、DS/DNSSEC 和 HTTPS 签发。域名注册成功不等于网站已经可用。

若用户已有可用域名，直接复用；不为套用案例另行申请。若 `.us.ci` 不再可用，只选有当前官方依据和实际验证的替代方案，不把搜索结果中的推荐当成已跑通。

## 绑定顺序

1. 在用户自己的 Cloudflare 账号中查找或添加该 Zone，选择 Free；记录该 Zone **实际分配**的 NS。
2. 在 DNSHE 域名管理页，将名称服务器更新为这组 NS。已有域名先保留正在使用的记录，尤其是邮箱记录；空白新域名不用为了消除提示捏造 MX 或服务器 IP。
3. 检查父域委派和公共解析，等待 Cloudflare Zone 激活。预先部署好的 Worker 应在同一目标账号下。
4. 在 Worker 的 **Settings → Domains & Routes → Add → Custom Domain** 绑定主机名。Cloudflare 为 Custom Domain 创建对应 DNS 记录和证书；不需要另外买证书套餐。[官方 Custom Domains 文档](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
5. 如果主机名已有冲突 CNAME，先确定其用途再处理。不要把“手工 CNAME 到 workers.dev”当作已完成 Custom Domain 绑定。此场景没有传统源站 IP，不要随意填写 A 记录。
6. 在项目配置中同步 `routes`、`custom_domain: true` 及所需 Zone 信息，使用当前任务的实际值。确认有效 HTTPS 后启用 HTTP → HTTPS 跳转，并验证主域名。

不要复制案例的 NS、账号 ID、Zone ID、D1 ID 或已绑定域名到另一个项目。已有 Worker 增加域名时，保留原数据库和登录密钥。不同主机名的登录 Cookie 不会自动迁移，原账号可在新域名重新登录。

## DNS 与证书判断

分别核对四层，不用“能 ping 通”代替验收：

| 层 | 要确认的结果 |
| --- | --- |
| 委派 | 父域返回当前 Cloudflare NS |
| 验证解析 | 公共验证型解析器不因 DS/DNSSEC 返回 SERVFAIL |
| HTTPS | 正确主机名证书已签发且浏览器正常验证 |
| 应用 | 页面与已实现的接口命中正确的目标服务 |

对比至少两个公共解析器的 NS、DS、A/AAAA 结果；必要时用 DNS-over-HTTPS 避开本地缓存的干扰。没有 DS 记录本身可以是正常的未签名委派，重点是验证能否完成。

本次 `.de5.net` 名称曾因父域 DS 不存在性证明异常导致证书签发失败，随后 `.us.ci` 路线跑通。这是当时的具体故障，不据此宣称所有 `.de5.net` 域名长期不可用。遇同类问题时依据 DNSSEC 和证书错误定位父域/子域责任，不通过忽略证书错误或反复改动正确 NS 来“修复”。

检查到明确的上游故障后，记录阻塞原因和可行选项，停止无意义的重新注册或重新绑定；不要擅自消耗域名名额。需要更换名称或联系平台时沿用当前用户授权范围。

## 免费额度与成本口径

| 部分 | 2026-11-07 核对结果 | 使用边界 |
| --- | --- | --- |
| DNSHE 基础免费名称 | 注册免费，可按规则免费续期 | 需维护到期状态 |
| Workers Static Assets | 静态资产请求免费且不限次数 | 静态资产本身仍有平台文件限制 |
| Workers Free 动态请求 | 100,000 次/天，单次 CPU 标称 10 ms | 不是 100,000 个访客或页面浏览 |
| D1 Free | 每天 500 万行读、10 万行写，总存储 5 GB | 额度按账号汇总 |
| D1 单库 | 免费单库最大 500 MB | 不是每个免费库都能放 5 GB |

来源：[Workers 定价](https://developers.cloudflare.com/workers/platform/pricing/)、[Static Assets 计费](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)、[D1 定价](https://developers.cloudflare.com/d1/platform/pricing/)、[D1 限制](https://developers.cloudflare.com/d1/platform/limits/)。

让公开静态资源直接由 Assets 提供，只将必要请求交给 Worker。动态请求即使命中应用缓存，仍可能消耗 Worker 额度，不能直接归类为免费的静态资产请求。

成本表达用「在免费额度和域名有效期内，域名及应用托管可以为 0 元」，不要承诺永久无限。额外服务单独核对开通条件与费用，不为了套用架构增加产品。

## 国内可用性

本次用户反馈：原 `workers.dev` 入口关闭代理后无法打开，换为 `.us.ci` 自定义域名后可以打开。这只证明该用户当时的网络可用。

发布后让用户在关闭代理的真实国内宽带和手机流量环境测试页面、图片及已实现的交互；有账号功能时再测登录和会话。分别记录用户实测与当前工具环境测试，不混为一谈。第三方示例站可达也不能证明另一个域名可达；域名后缀不决定服务器地理位置。
