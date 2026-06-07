---
layout: page
title: 离谱的英语学习指南
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
})
</script>

<!-- ═══ Hero ═══ -->
<header class="hero fade-in">
  <div class="hero-eyebrow">An Advanced Guide · Since 2017</div>
  <h1 class="hero-title">离谱的<br><em>英语学习指南</em></h1>
  <p class="hero-sub">
    不只是攻克英语的方法论，更是一场开启智慧之门的奇妙冒险。<br>
    从认知到实践，从单词到 AI，系统化的进阶路径。
  </p>
  <div class="hero-actions">
    <a :href="withBase('/zh/understanding')" class="btn btn-primary">开始阅读</a>
    <a :href="withBase('/zh/introduction')" class="btn btn-ghost">项目介绍</a>
  </div>
</header>

<!-- ═══ 项目背景 ═══ -->
<section class="section" id="background">
  <div class="bg-grid">
    <div class="bg-text fade-in">
      <div class="section-label">Background · 关于这份指南</div>
      <h2 class="section-title">从高考省第一到写给所有人的指南</h2>
      <p class="bg-quote">
        2017 年 7 月初，备考托福的 W. 问了我一个问题：<strong>如何高效学习英语？</strong>
      </p>
      <p class="bg-desc">
        在我思考如何回答这个问题时，回想起我在大四一学期一次性考过 26 门课的经验（其中重修 19 门），再加上本人英语和语文两门学科曾<strong>侥幸</strong>在高考时摘得省第一（江苏卷），或许我勉强有资格提供一些高效学习的小技巧。
      </p>
      <p class="bg-desc">
        与她交流了一番学习心得后，我发现了两件事：有些人对学习充满热情，但很多人在学习英语的过程中饱受低效方法、焦虑和内疚的折磨。这份指南是我整理所学、分享给更多人的尝试。
      </p>
      <p class="bg-quote bg-quote-author">
        我们每个人都生活在各自的过去中，人们会用一分钟的时间去认识一个人，再用一天的时间去爱上一个人，到最后呢，却要用一辈子的时间去忘记一个人。
      </p>
      <p class="bg-desc">
        2017 年，为回答一个问题而写的随笔，最终变成了一份帮助无数人的英语学习指南。
      </p>
    </div>
    <div class="bg-visual fade-in">
      <div class="bg-visual-card">
        <div class="bg-stat">
          <span class="bg-stat-num">26</span>
          <span class="bg-stat-label">门课 · 一学期</span>
        </div>
        <div class="bg-stat">
          <span class="bg-stat-num">2</span>
          <span class="bg-stat-label">门省第一 · 高考</span>
        </div>
        <div class="bg-stat">
          <span class="bg-stat-num">2017</span>
          <span class="bg-stat-label">年 · 开始写作</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ 核心章节 ═══ -->
<section class="section" id="chapters">
  <div class="section-label fade-in">Part I · 核心指南</div>
  <h2 class="section-title fade-in">七个维度，系统进阶</h2>
  <p class="section-desc fade-in">从认知转变到实践方法，从被动输入到主动输出，每一步都有具体可执行的建议。</p>

  <div class="chapter-grid">
    <a :href="withBase('/zh/understanding')" class="chapter-card fade-in">
      <span class="card-num">01</span>
      <h3>认知篇</h3>
      <p>想清楚为什么要学、怎么学，理解学习金字塔，给自己搭建沉浸式英语环境。</p>
    </a>
    <a :href="withBase('/zh/vocabulary')" class="chapter-card fade-in">
      <span class="card-num">02</span>
      <h3>单词篇</h3>
      <p>告别死记硬背，用科学方法高效积累词汇，建立属于自己的单词体系。</p>
    </a>
    <a :href="withBase('/zh/listening')" class="chapter-card fade-in">
      <span class="card-num">03</span>
      <h3>听力篇</h3>
      <p>从精听到泛听，选择合适材料，逐步提升听力理解能力和语感。</p>
    </a>
    <a :href="withBase('/zh/reading')" class="chapter-card fade-in">
      <span class="card-num">04</span>
      <h3>阅读篇</h3>
      <p>分级阅读策略，从简单材料到原版书籍，培养英语阅读的习惯和速度。</p>
    </a>
    <a :href="withBase('/zh/speaking')" class="chapter-card fade-in">
      <span class="card-num">05</span>
      <h3>口语篇</h3>
      <p>突破开口障碍，找到练习伙伴，从模仿到自由表达的进阶路径。</p>
    </a>
    <a :href="withBase('/zh/writing')" class="chapter-card fade-in">
      <span class="card-num">06</span>
      <h3>写作篇</h3>
      <p>从句子到段落到文章，掌握英语写作的核心逻辑和常用表达模式。</p>
    </a>
    <a :href="withBase('/zh/ai')" class="chapter-card card-featured fade-in">
      <span class="card-num">07</span>
      <h3>利用 AI 学习 · 2026 版</h3>
      <p>Gemini 作为主引擎，ChatGPT / Claude / Perplexity 分工协作，设计长期有效的听说读写训练回路。</p>
    </a>
  </div>
</section>

<!-- ═══ 扩展内容 ═══ -->
<section class="section" id="extended">
  <div class="section-label fade-in">Part II · 扩展内容</div>
  <h2 class="section-title fade-in">更多维度，深入探索</h2>
  <p class="section-desc fade-in">技术词汇表与学习杂谈。</p>

  <div class="chapter-grid chapter-grid-3">
    <a :href="withBase('/zh/word-list')" class="chapter-card fade-in">
      <span class="card-num">附录</span>
      <h3>单词本</h3>
      <p>程序员技术词汇表，覆盖主流编程语言和技术方向的专业术语。</p>
    </a>
    <a :href="withBase('/zh/misc')" class="chapter-card fade-in">
      <span class="card-num">附录</span>
      <h3>杂谈篇</h3>
      <p>各种技巧和心得，关于 IT 培训、碎片化学习、Kindle 与 iPad 的思考。</p>
    </a>
  </div>
</section>

<!-- ═══ 特色 ═══ -->
<section class="features-section" id="features">
  <div class="section" style="padding-top:64px;padding-bottom:64px;">
    <div class="section-label fade-in">Features · 项目特色</div>
    <h2 class="section-title fade-in">为什么选择这份指南</h2>
    <div class="features-grid">
      <div class="feature-card fade-in">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <h3>系统化路径</h3>
        <p>从认知到实践，七个维度层层递进，不是碎片化技巧堆砌。</p>
      </div>
      <div class="feature-card fade-in">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <h3>实战经验</h3>
        <p>来自高考省第一的真实学习经历，而非理论空谈。</p>
      </div>
      <div class="feature-card fade-in">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <h3>持续更新</h3>
        <p>2017 年至今不断迭代，2026 年新增 AI 学习方法。</p>
      </div>
      <div class="feature-card fade-in">
        <div class="feature-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>开源社区</h3>
        <p>GitHub 开源，CC BY-NC 4.0 协议，欢迎贡献。</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══ 技术单词表 ═══ -->
<section class="wordlist-section" id="wordlists">
  <div class="section" style="padding-top:64px;padding-bottom:64px;">
    <div class="section-label fade-in">Word Lists · 技术单词表</div>
    <h2 class="section-title fade-in">按领域积累专业词汇</h2>
    <p class="section-desc fade-in">覆盖主流编程语言和技术方向，在学英语的同时巩固专业术语。</p>
    <div class="wordlist-grid">
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Common 通用</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">JavaScript</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Python</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Java</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Go</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Rust</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Swift</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">PHP</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Prompt 工程</a>
      <a :href="withBase('/zh/word-list')" class="wordlist-chip fade-in">Vibe Coding</a>
    </div>
  </div>
</section>

<!-- ═══ 学习理念 ═══ -->
<section class="philosophy fade-in" id="philosophy">
  <div class="section-label" style="text-align:center;">Philosophy · 学习理念</div>
  <blockquote>
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
  </blockquote>
  <cite>&mdash; Steve Jobs</cite>
  <p class="philosophy-note">
    成就一番伟业的唯一途径就是热爱自己的事业。<br>
    如果你还没能找到让自己热爱的事业，继续寻找，不要放弃。<br>
    热爱之于学习，同样如此。
  </p>
</section>

<!-- ═══ CTA ═══ -->
<section class="cta-section fade-in">
  <div class="cta-box">
    <h2>准备好开始了吗？</h2>
    <p>英语学习不是苦行，而是一场值得享受的旅程。从你最需要的章节开始，按自己的节奏前进。</p>
    <a :href="withBase('/zh/understanding')" class="btn btn-primary">从认知篇开始</a>
  </div>
</section>

<!-- ═══ 页脚信息 ═══ -->
<section class="footer-info fade-in">
  <div class="footer-links">
    <a href="https://github.com/byoungd/English-level-up-tips" target="_blank">GitHub</a>
    <span class="footer-sep">·</span>
    <span>CC BY-NC 4.0</span>
    <span class="footer-sep">·</span>
    <span>欢迎贡献</span>
  </div>
</section>

<style>
/* ── Design Tokens ── */
:root {
  --font-display: 'Georgia', 'Noto Serif SC', serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --fg: #1a1a1a;
  --fg-soft: #4a4a4a;
  --muted: #8a8a8a;
  --bg: #ffffff;
  --surface: #f8f8f8;
  --border: #e8e8e8;
  --accent: #c1663b;
  --accent-hover: #a8553a;
  --accent-light: rgba(193, 102, 59, 0.08);
  --sage: #6b8f71;
  --sage-light: rgba(107, 143, 113, 0.08);
  --radius-lg: 12px;
  --radius-xl: 20px;
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

.dark {
  --fg: #e8e8e8;
  --fg-soft: #b0b0b0;
  --muted: #888888;
  --bg: #1a1a1a;
  --surface: #242424;
  --border: #333333;
  --accent: #d4845a;
  --accent-hover: #e09570;
  --accent-light: rgba(212, 132, 90, 0.12);
  --sage: #8fb896;
  --sage-light: rgba(143, 184, 150, 0.12);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* ── Hero ── */
.hero {
  max-width: 880px;
  margin: 0 auto;
  padding: 72px 24px 48px;
  text-align: center;
}

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sage);
  margin-bottom: 24px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--fg);
  margin-bottom: 24px;
}

.hero-title em {
  font-style: normal;
  color: var(--accent);
  position: relative;
}

.hero-sub {
  font-size: 18px;
  color: var(--fg-soft);
  max-width: 560px;
  margin: 0 auto 36px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── 按钮 ── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  transition: all 0.25s var(--ease-out);
  text-decoration: none;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(193, 102, 59, 0.25);
  text-decoration: none;
  color: #fff;
}

.btn-ghost {
  background: var(--surface);
  color: var(--fg-soft);
  border: 1px solid var(--border);
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
  text-decoration: none;
}

/* ── Section ── */
.section {
  max-width: 1040px;
  margin: 0 auto;
  padding: 72px 24px;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--sage);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.section-desc {
  font-size: 17px;
  color: var(--fg-soft);
  max-width: 540px;
  margin-bottom: 48px;
  line-height: 1.6;
}

/* ── Background section ── */
.bg-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}

.bg-quote {
  font-size: 18px;
  font-style: italic;
  color: var(--fg-soft);
  line-height: 1.7;
  margin: 20px 0;
  padding-left: 16px;
  border-left: 3px solid var(--accent);
}

.bg-desc {
  font-size: 16px;
  color: var(--fg-soft);
  line-height: 1.8;
  margin-bottom: 16px;
}

.bg-visual-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.bg-stat {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.bg-stat-num {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}

.bg-stat-label {
  font-size: 15px;
  color: var(--muted);
}

/* ── Chapter grid ── */
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.chapter-grid-3 {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.chapter-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all 0.3s var(--ease-out);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;
}

.chapter-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
  text-decoration: none;
}

.card-num {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  display: block;
  margin-bottom: 14px;
}

.chapter-card h3 {
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}

.chapter-card p {
  font-size: 15px;
  color: var(--fg-soft);
  line-height: 1.6;
  margin-bottom: 0;
}

.chapter-card.card-featured {
  border-color: var(--accent);
  background: linear-gradient(135deg, var(--surface), var(--accent-light));
}

.chapter-card.card-featured:hover {
  border-color: var(--accent-hover);
}

/* ── Features section ── */
.features-section {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.feature-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  transition: all 0.3s var(--ease-out);
}

.feature-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 44px;
  height: 44px;
  background: var(--accent-light);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: var(--accent);
}

.feature-card h3 {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.feature-card p {
  font-size: 14px;
  color: var(--fg-soft);
  line-height: 1.6;
  margin: 0;
}

/* ── Word list section ── */
.wordlist-section {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.wordlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.wordlist-chip {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 16px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  color: var(--fg-soft);
  transition: all 0.2s var(--ease-out);
  cursor: pointer;
  text-decoration: none;
}

.wordlist-chip:hover {
  border-color: var(--accent);
  background: var(--accent-light);
  color: var(--accent);
  text-decoration: none;
}

/* ── Philosophy ── */
.philosophy {
  text-align: center;
  padding: 96px 24px;
  max-width: 720px;
  margin: 0 auto;
}

.philosophy blockquote {
  font-size: clamp(22px, 3vw, 30px);
  font-style: italic;
  line-height: 1.5;
  color: var(--fg);
  margin: 24px 0;
  border-left: none;
  padding: 0;
  background: none;
}

.philosophy cite {
  font-family: var(--font-body);
  font-style: normal;
  font-size: 14px;
  color: var(--muted);
}

.philosophy-note {
  font-size: 15px;
  color: var(--muted);
  max-width: 440px;
  margin: 24px auto 0;
  line-height: 1.7;
}

.bg-quote-author {
  font-size: 16px;
  border-left-color: var(--sage);
  margin-top: 24px;
}

/* ── CTA ── */
.cta-section {
  text-align: center;
  padding: 96px 24px;
}

.cta-box {
  max-width: 560px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 48px 40px;
  box-shadow: var(--shadow-md);
}

.cta-box h2 {
  font-family: var(--font-display);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 700;
  margin: 0 0 12px 0;
  border-bottom: none;
  padding-bottom: 0;
}

.cta-box p {
  font-size: 16px;
  color: var(--fg-soft);
  margin-bottom: 28px;
}

.cta-box .btn { font-size: 17px; padding: 14px 36px; }

/* ── Footer info ── */
.footer-info {
  text-align: center;
  padding: 32px 24px 48px;
  border-top: 1px solid var(--border);
}

.footer-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--muted);
}

.footer-links a {
  color: var(--fg-soft);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-sep {
  color: var(--border);
}

/* ── 响应式 ── */
@media (max-width: 768px) {
  .hero { padding: 48px 20px 36px; }
  .hero-title { font-size: clamp(32px, 8vw, 48px); }

  .bg-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .bg-visual-card {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .chapter-grid {
    grid-template-columns: 1fr;
  }

  .author-section {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .author-visual {
    max-width: 400px;
    margin: 0 auto;
  }

  .cta-box { padding: 36px 24px; }

  .wordlist-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .features-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}

@media (max-width: 480px) {
  .hero-actions { flex-direction: column; align-items: center; }
  .btn { width: 100%; max-width: 280px; justify-content: center; }
  .section { padding: 48px 16px; }
  .philosophy { padding: 64px 16px; }

  .bg-stat-num { font-size: 36px; }
  .bg-visual-card { flex-direction: column; }
}
</style>
