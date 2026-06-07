---
layout: page
title: 离谱的英语学习指南
---

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'

let scrollHandler = null

onMounted(() => {
  // IntersectionObserver for reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
  document.querySelectorAll('.img-reveal').forEach(el => observer.observe(el))
  document.querySelectorAll('.text-scrub').forEach(el => observer.observe(el))
  document.querySelectorAll('.card-stagger-item').forEach(el => observer.observe(el))
  document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el))

  // Parallax scroll effect on hero
  const heroVisual = document.querySelector('.hp-hero-visual')
  const heroGrain = document.querySelector('.hp-hero-grain')
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (heroVisual && !prefersReducedMotion) {
    scrollHandler = () => {
      const scrollY = window.scrollY
      const rate = scrollY * 0.15
      heroVisual.style.transform = `translateY(${rate}px)`
      if (heroGrain) heroGrain.style.opacity = Math.min(scrollY / 600, 0.6)
    }
    window.addEventListener('scroll', scrollHandler, { passive: true })
  }

  // Mouse-tracking glow on feature cards
  document.querySelectorAll('.hp-fc').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%')
      card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%')
    })
  })

  // Counter animation for hero stats
  if (!prefersReducedMotion) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseInt(el.dataset.target)
          const duration = 1800
          const start = performance.now()
          const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            el.textContent = Math.round(easeOutExpo(progress) * target)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
          counterObserver.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('.hp-counter').forEach(el => counterObserver.observe(el))
  }
})

onUnmounted(() => {
  if (scrollHandler) window.removeEventListener('scroll', scrollHandler)
})
</script>

<!-- HERO -->
<div class="hp-hero">
  <div class="hp-hero-grain"></div>
  <div class="hp-hero-grid">
    <div class="hp-hero-text">
      <div class="hp-hero-eyebrow section-reveal">An Advanced Guide &middot; Since 2017</div>
      <h1 class="hp-hero-title section-reveal">离谱的<span class="hp-hero-accent">英语学习指南</span></h1>
      <p class="hp-hero-sub section-reveal">不只是攻克英语的方法论，更是一场开启智慧之门的奇妙冒险。从认知到实践，从单词到 AI，系统化的进阶路径。</p>
      <div class="hp-hero-actions section-reveal">
        <a :href="withBase('/zh/understanding')" class="hp-btn hp-btn-primary">
          开始阅读
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a :href="withBase('/zh/introduction')" class="hp-btn hp-btn-ghost">项目介绍</a>
      </div>
    </div>
    <div class="hp-hero-visual">
      <div class="hp-hero-image-wrap img-reveal">
        <div class="hp-hero-glass">
          <div class="hp-hero-abstract">
            <span class="hp-hc hp-hc-float" style="--fi:0">A</span><span class="hp-hc hp-hc-float" style="--fi:1">B</span><span class="hp-hc hp-hc-float" style="--fi:2">C</span>
            <span class="hp-hd"></span>
            <span class="hp-hc hp-hc-float" style="--fi:3">读</span><span class="hp-hc hp-hc-float" style="--fi:4">写</span><span class="hp-hc hp-hc-float" style="--fi:5">听</span><span class="hp-hc hp-hc-float" style="--fi:6">说</span><span class="hp-hc hp-hc-float" style="--fi:7">思</span>
          </div>
          <div class="hp-hero-dims">
            <span class="hp-hd-tag">认知</span>
            <span class="hp-hd-tag">单词</span>
            <span class="hp-hd-tag">听力</span>
            <span class="hp-hd-tag">阅读</span>
            <span class="hp-hd-tag">口语</span>
            <span class="hp-hd-tag">写作</span>
            <span class="hp-hd-tag hp-hd-tag-accent">AI 2026</span>
          </div>
          <div class="hp-hero-dims-note">7 章节 · 从认知到实践的系统进阶路径</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- BACKGROUND -->
<div class="hp-section" id="background">
  <div class="hp-si">
    <div class="hp-bg-grid">
      <div class="hp-bg-text">
        <div class="hp-section-label section-reveal">Background &middot; 关于这份指南</div>
        <h2 class="hp-section-title section-reveal">从高考省第一到写给所有人的指南</h2>
        <p class="hp-bg-quote section-reveal">2017 年 7 月初，备考托福的 W. 问了我一个问题：如何高效学习英语？</p>
        <p class="hp-bg-desc section-reveal">在我思考如何回答时，回想起我在大四一学期一次性考过 26 门课的经历（其中重修 19 门），再加上本人英语和语文两门学科曾在高考时摘得省第一（江苏卷），或许我勉强有资格提供一些高效学习的小技巧。</p>
        <p class="hp-bg-desc section-reveal">与她交流了一番学习心得后，我发现了两件事：有些人对学习充满热情，但很多人在学习英语的过程中饱受低效方法、焦虑和内疚的折磨。这份指南是我整理所学、分享给更多人的尝试。</p>
      </div>
      <div class="hp-bg-visual img-reveal">
        <div class="hp-bg-card hp-glass">
          <div class="hp-bg-stat"><span class="hp-bg-sn">26</span><span class="hp-bg-sl">门课 &middot; 一学期通过</span></div>
          <div class="hp-bg-stat"><span class="hp-bg-sn">2</span><span class="hp-bg-sl">门省第一 &middot; 高考江苏卷</span></div>
          <div class="hp-bg-stat"><span class="hp-bg-sn">2017</span><span class="hp-bg-sl">年至今 &middot; 持续更新</span></div>
          <blockquote class="hp-bg-card-quote">我们每个人都生活在各自的过去中，人们会用一分钟的时间去认识一个人，再用一天的时间去爱上一个人，到最后呢，却要用一辈子的时间去忘记一个人。</blockquote>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- CHAPTERS -->
<div class="hp-section" id="chapters">
  <div class="hp-si">
    <div class="hp-section-label section-reveal">Part I &middot; 核心指南</div>
    <h2 class="hp-section-title section-reveal">七个维度，系统进阶</h2>
    <p class="hp-section-desc section-reveal">从认知转变到实践方法，从被动输入到主动输出，每一步都有具体可执行的建议。</p>
    <div class="hp-chapter-grid">
      <a :href="withBase('/zh/understanding')" class="hp-cc card-stagger-item"><span class="hp-cn">01</span><h3>认知篇</h3><p>想清楚为什么要学、怎么学，理解学习金字塔，给自己搭建沉浸式英语环境。</p><span class="hp-ca">&rarr;</span></a>
      <a :href="withBase('/zh/vocabulary')" class="hp-cc card-stagger-item"><span class="hp-cn">02</span><h3>单词篇</h3><p>告别死记硬背，用科学方法高效积累词汇，建立属于自己的单词体系。</p><span class="hp-ca">&rarr;</span></a>
      <a :href="withBase('/zh/listening')" class="hp-cc card-stagger-item"><span class="hp-cn">03</span><h3>听力篇</h3><p>从精听到泛听，选择合适材料，逐步提升听力理解能力和语感。</p><span class="hp-ca">&rarr;</span></a>
      <a :href="withBase('/zh/reading')" class="hp-cc card-stagger-item"><span class="hp-cn">04</span><h3>阅读篇</h3><p>分级阅读策略，从简单材料到原版书籍，培养英语阅读的习惯和速度。</p><span class="hp-ca">&rarr;</span></a>
      <a :href="withBase('/zh/speaking')" class="hp-cc card-stagger-item"><span class="hp-cn">05</span><h3>口语篇</h3><p>突破开口障碍，找到练习伙伴，从模仿到自由表达的进阶路径。</p><span class="hp-ca">&rarr;</span></a>
      <a :href="withBase('/zh/writing')" class="hp-cc card-stagger-item"><span class="hp-cn">06</span><h3>写作篇</h3><p>从句子到段落到文章，掌握英语写作的核心逻辑和常用表达模式。</p><span class="hp-ca">&rarr;</span></a>
      <a :href="withBase('/zh/ai')" class="hp-cc hp-cc-feat card-stagger-item"><span class="hp-cn">07</span><h3>利用 AI 学习 &middot; 2026 版</h3><p>Gemini、ChatGPT、Claude、Perplexity 分工协作，设计长期有效的听说读写训练回路。</p><span class="hp-ca">&rarr;</span></a>
    </div>
  </div>
</div>

<!-- MARQUEE -->
<div class="hp-marquee-section">
  <div class="hp-marquee-track">
    <div class="hp-marquee-inner">
      <span>沉浸式环境</span><span class="hp-md">&middot;</span>
      <span>科学记忆</span><span class="hp-md">&middot;</span>
      <span>精听泛听</span><span class="hp-md">&middot;</span>
      <span>分级阅读</span><span class="hp-md">&middot;</span>
      <span>开口突破</span><span class="hp-md">&middot;</span>
      <span>逻辑写作</span><span class="hp-md">&middot;</span>
      <span>AI 教练</span><span class="hp-md">&middot;</span>
      <span>学习金字塔</span><span class="hp-md">&middot;</span>
      <span>碎片化输入</span><span class="hp-md">&middot;</span>
      <span>系统化进阶</span><span class="hp-md">&middot;</span>
      <span>沉浸式环境</span><span class="hp-md">&middot;</span>
      <span>科学记忆</span><span class="hp-md">&middot;</span>
      <span>精听泛听</span><span class="hp-md">&middot;</span>
      <span>分级阅读</span><span class="hp-md">&middot;</span>
      <span>开口突破</span><span class="hp-md">&middot;</span>
      <span>逻辑写作</span><span class="hp-md">&middot;</span>
      <span>AI 教练</span><span class="hp-md">&middot;</span>
      <span>学习金字塔</span><span class="hp-md">&middot;</span>
      <span>碎片化输入</span><span class="hp-md">&middot;</span>
      <span>系统化进阶</span>
    </div>
  </div>
</div>

<!-- EXTENDED -->
<div class="hp-section" id="extended">
  <div class="hp-si">
    <div class="hp-section-label section-reveal">Part II &middot; 扩展内容</div>
    <h2 class="hp-section-title section-reveal">更多维度，深入探索</h2>
    <p class="hp-section-desc section-reveal">学习杂谈与各种心得。</p>
    <div class="hp-ext-grid">
      <a :href="withBase('/zh/misc')" class="hp-ec card-stagger-item">
        <div class="hp-ei"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
        <h3>杂谈篇</h3><p>各种技巧和心得，关于 IT 培训、碎片化学习、Kindle 与 iPad 的思考。</p>
      </a>
    </div>
  </div>
</div>

<!-- FEATURES -->
<div class="hp-section" id="features">
  <div class="hp-si">
    <div class="hp-section-label section-reveal">Features &middot; 项目特色</div>
    <h2 class="hp-section-title section-reveal">为什么选择这份指南</h2>
    <div class="hp-feat-grid">
      <div class="hp-fc card-stagger-item">
        <div class="hp-fi"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
        <h3>系统化路径</h3><p>从认知到实践，七个维度层层递进，不是碎片化技巧堆砌。</p>
      </div>
      <div class="hp-fc card-stagger-item">
        <div class="hp-fi"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
        <h3>实战经验</h3><p>来自高考省第一的真实学习经历，而非理论空谈。</p>
      </div>
      <div class="hp-fc card-stagger-item">
        <div class="hp-fi"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h3>持续更新</h3><p>2017 年至今不断迭代，2026 年新增 AI 学习方法。</p>
      </div>
      <div class="hp-fc card-stagger-item">
        <div class="hp-fi"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>开源社区</h3><p>GitHub 开源，CC BY-NC 4.0 协议，欢迎贡献。</p>
      </div>
    </div>
  </div>
</div>

<!-- PHILOSOPHY -->
<div class="hp-p" id="philosophy">
  <div class="hp-pi">
    <div class="hp-section-label" style="text-align:center;">Philosophy &middot; 学习理念</div>
    <blockquote class="text-scrub">The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.</blockquote>
    <cite class="text-scrub">&mdash; Steve Jobs</cite>
    <p class="hp-pn text-scrub">成就一番伟业的唯一途径就是热爱自己的事业。如果你还没能找到让自己热爱的事业，继续寻找，不要放弃。热爱之于学习，同样如此。</p>
  </div>
</div>

<!-- CTA -->
<div class="hp-cta" id="cta">
  <div class="hp-cta-box hp-glass img-reveal">
    <h2>准备好开始了吗？</h2>
    <p>英语学习不是苦行，而是一场值得享受的旅程。从你最需要的章节开始，按自己的节奏前进。</p>
    <a :href="withBase('/zh/understanding')" class="hp-btn hp-btn-primary" style="font-size:17px;padding:14px 36px;">从认知篇开始 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
  </div>
</div>

<!-- FOOTER -->
<div class="hp-footer">
  <div class="hp-footer-grid">
    <div class="hp-footer-col">
      <div class="hp-footer-brand">离谱的英语学习指南</div>
      <p class="hp-footer-desc">从认知到实践，从单词到 AI，系统化的英语进阶路径。</p>
    </div>
    <div class="hp-footer-col">
      <div class="hp-footer-heading">核心指南</div>
      <a :href="withBase('/zh/understanding')">认知篇</a>
      <a :href="withBase('/zh/vocabulary')">单词篇</a>
      <a :href="withBase('/zh/listening')">听力篇</a>
      <a :href="withBase('/zh/reading')">阅读篇</a>
      <a :href="withBase('/zh/speaking')">口语篇</a>
      <a :href="withBase('/zh/writing')">写作篇</a>
      <a :href="withBase('/zh/ai')">AI 篇</a>
    </div>
    <div class="hp-footer-col">
      <div class="hp-footer-heading">更多</div>
      <a :href="withBase('/zh/introduction')">项目介绍</a>
      <a :href="withBase('/zh/misc')">杂谈篇</a>
      <a :href="withBase('/en/')">English Version</a>
    </div>
    <div class="hp-footer-col">
      <div class="hp-footer-heading">外部资源</div>
      <a href="https://github.com/byoungd/English-level-up-tips" target="_blank" rel="noopener">GitHub 仓库</a>
      <a href="https://github.com/byoungd/English-level-up-tips/issues" target="_blank" rel="noopener">反馈建议</a>
      <a href="https://github.com/byoungd/English-level-up-tips/pulls" target="_blank" rel="noopener">参与贡献</a>
    </div>
  </div>
</div>

<style>
:root {
  --hpd: 'Georgia', 'Noto Serif SC', 'Noto Serif', 'Times New Roman', serif;
  --hpb: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  --hpm: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
  --hfg: #1a1a1a;
  --hfs: #4a4a4a;
  --hmu: #8a8a8a;
  --hbg: #fff;
  --hsu: #f8f8f8;
  --hbo: #e8e8e8;
  --hac: #c1663b;
  --hah: #a8553a;
  --hal: rgba(193,102,59,0.08);
  --hsg: #6b8f71;
  --hsl: rgba(107,143,113,0.08);
  --hrd: 8px;
  --hrl: 12px;
  --hrx: 20px;
  --hsh: 0 4px 12px rgba(0,0,0,0.08);
  --heo: cubic-bezier(0.16,1,0.3,1);
  /* Glassmorphism tokens */
  --glass-bg: rgba(255,255,255,0.55);
  --glass-border: rgba(255,255,255,0.35);
  --glass-inner: rgba(255,255,255,0.15);
  --glass-blur: 20px;
  --glass-shadow: 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 var(--glass-inner);
}
.dark {
  --hfg: #e8e8e8; --hfs: #b0b0b0; --hmu: #888; --hbg: #1a1a1a;
  --hsu: #242424; --hbo: #333; --hac: #d4845a; --hah: #e09570;
  --hal: rgba(212,132,90,0.12); --hsg: #8fb896; --hsl: rgba(143,184,150,0.12);
  --hsh: 0 4px 12px rgba(0,0,0,0.3);
  --glass-bg: rgba(30,30,30,0.6);
  --glass-border: rgba(255,255,255,0.08);
  --glass-inner: rgba(255,255,255,0.04);
  --glass-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 var(--glass-inner);
}

html .VPDoc .content { max-width: 100%; padding: 0; }
html .VPDoc .container { padding: 0; margin: 0; max-width: 100%; }
.VPFooter { display: none !important; }

.hp-section { padding: 80px 24px; }
.hp-si { max-width: 1040px; margin: 0 auto; }
@media (min-width: 1024px) { .hp-section { padding: 120px 24px; } }

.hp-section-label { font-family: var(--hpm); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--hsg); margin-bottom: 12px; }
.hp-section-title { font-family: var(--hpd); font-size: clamp(28px, 3.5vw, 40px); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; margin: 0 0 12px 0; color: var(--hfg); }
.hp-section-desc { font-size: 17px; color: var(--hfs); max-width: 540px; margin: 0 0 48px 0; line-height: 1.6; }

.hp-hero { padding: calc(var(--vp-nav-height) + 64px) 24px 80px; max-width: 1200px; margin: 0 auto; }
.hp-hero-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 64px; align-items: center; }
.hp-hero-eyebrow { font-family: var(--hpm); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--hsg); margin-bottom: 24px; }
.hp-hero-title { font-family: var(--hpd); font-size: clamp(40px, 5vw, 64px); font-weight: 700; line-height: 1.08; letter-spacing: -0.03em; color: var(--hfg); margin: 0 0 24px 0; max-width: 600px; }
.hp-hero-accent { color: var(--hac); font-style: normal; }
.hp-hero-sub { font-size: 18px; color: var(--hfs); max-width: 480px; margin: 0 0 36px 0; line-height: 1.7; }
.hp-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.hp-hero-visual { display: flex; align-items: center; justify-content: center; }
.hp-hero-image-wrap { width: 100%; max-width: 380px; }
.hp-hero-abstract { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 36px; }
.hp-hc { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: var(--hrd); background: var(--hal); color: var(--hac); font-family: var(--hpd); font-size: 20px; font-weight: 700; }
.hp-hd { width: 8px; height: 8px; border-radius: 50%; background: var(--hac); opacity: 0.5; }
.hp-hero-stats { display: flex; flex-direction: column; gap: 20px; }
.hp-hs { display: flex; align-items: baseline; gap: 12px; }
.hp-hsn { font-family: var(--hpd); font-size: 40px; font-weight: 700; color: var(--hac); line-height: 1; }
.hp-hsl { font-size: 14px; color: var(--hmu); }
.hp-hero-dims { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.hp-hd-tag { font-family: var(--hpb); font-size: 13px; font-weight: 600; padding: 5px 14px; border-radius: 100px; background: var(--hal); color: var(--hac); border: 1px solid transparent; transition: all 0.3s var(--heo); }
.hp-hd-tag:hover { border-color: var(--hac); background: transparent; }
.hp-hd-tag-accent { background: var(--hac); color: #fff; }
.hp-hd-tag-accent:hover { background: var(--hah); border-color: var(--hah); }
.hp-hero-dims-note { font-size: 13px; color: var(--hmu); font-family: var(--hpm); letter-spacing: 0.02em; }

.hp-btn { display: inline-flex; align-items: center; gap: 8px; font-family: var(--hpb); font-size: 16px; font-weight: 600; padding: 12px 28px; border-radius: 100px; cursor: pointer; border: none; transition: all 0.25s var(--heo); text-decoration: none; }
.hp-btn-primary { background: var(--hac); color: #fff; }
.hp-btn-primary:hover { background: var(--hah); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(193,102,59,0.25); text-decoration: none; color: #fff; }
.hp-btn-ghost { background: var(--hsu); color: var(--hfs); border: 1px solid var(--hbo); }
.hp-btn-ghost:hover { border-color: var(--hac); color: var(--hac); text-decoration: none; }

.hp-bg-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 56px; align-items: flex-start; }
.hp-bg-quote { font-size: 18px; font-style: italic; color: var(--hfs); line-height: 1.7; margin: 24px 0; padding-left: 16px; border-left: 3px solid var(--hac); }
.hp-bg-desc { font-size: 16px; color: var(--hfs); line-height: 1.8; margin-bottom: 16px; }
.hp-bg-visual { position: sticky; top: calc(var(--vp-nav-height) + 40px); }
.hp-bg-card { background: var(--hsu); border: 1px solid var(--hbo); border-radius: var(--hrx); padding: 36px 28px; box-shadow: var(--hsh); }
.hp-bg-stat { display: flex; align-items: baseline; gap: 12px; margin-bottom: 24px; }
.hp-bg-sn { font-family: var(--hpd); font-size: 48px; font-weight: 700; color: var(--hac); line-height: 1; }
.hp-bg-sl { font-size: 15px; color: var(--hmu); }
.hp-bg-card-quote { font-size: 15px; font-style: italic; color: var(--hmu); line-height: 1.7; margin: 0; padding: 16px 0 0 0; border-top: 1px solid var(--hbo); border-left: none; background: none; }

.hp-chapter-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; grid-auto-flow: dense; }
.hp-chapter-grid > *:first-child { grid-column: span 2; }
.hp-chapter-grid > *:nth-child(7) { grid-column: span 2; }
.hp-cc { background: var(--hsu); border: 1px solid var(--hbo); border-radius: var(--hrl); padding: 28px; transition: all 0.4s var(--heo); text-decoration: none; color: inherit; display: flex; flex-direction: column; position: relative; overflow: hidden; }
.hp-cc::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--hac), transparent); opacity: 0; transition: opacity 0.4s var(--heo); }
.hp-cc:hover { border-color: var(--hac); box-shadow: 0 8px 30px rgba(193,102,59,0.12), 0 2px 8px rgba(0,0,0,0.06); transform: translateY(-4px); text-decoration: none; }
.hp-cc:hover::before { opacity: 1; }
.hp-cn { font-family: var(--hpm); font-size: 13px; font-weight: 700; color: var(--hac); margin-bottom: 14px; display: block; }
.hp-cc h3 { font-family: var(--hpd); font-size: 21px; font-weight: 700; margin: 0 0 8px 0; letter-spacing: -0.01em; color: var(--hfg); }
.hp-cc p { font-size: 15px; color: var(--hfs); line-height: 1.6; margin: 0 0 20px 0; flex: 1; }
.hp-ca { font-size: 18px; color: var(--hac); opacity: 0; transform: translateX(-6px); transition: all 0.3s var(--heo); font-weight: 300; }
.hp-cc:hover .hp-ca { opacity: 1; transform: translateX(0); }
.hp-cc-feat { border-color: var(--hac); background: linear-gradient(135deg, var(--hsu), var(--hal)); }
.hp-cc-feat:hover { border-color: var(--hah); }

.hp-ext-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; grid-auto-flow: dense; }
.hp-ec { background: var(--hsu); border: 1px solid var(--hbo); border-radius: var(--hrl); padding: 32px 28px; transition: all 0.35s var(--heo); text-decoration: none; color: inherit; display: flex; flex-direction: column; }
.hp-ec:hover { border-color: var(--hac); box-shadow: var(--hsh); transform: translateY(-2px); text-decoration: none; }
.hp-ei { width: 40px; height: 40px; background: var(--hal); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: var(--hac); }
.hp-ec h3 { font-family: var(--hpd); font-size: 20px; font-weight: 700; margin: 0 0 8px 0; color: var(--hfg); }
.hp-ec p { font-size: 15px; color: var(--hfs); line-height: 1.6; margin: 0; }

.hp-feat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; grid-auto-flow: dense; }
.hp-fc { background: var(--hsu); border: 1px solid var(--hbo); border-radius: var(--hrl); padding: 28px 24px; transition: all 0.4s var(--heo); position: relative; overflow: hidden; }
.hp-fc::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), var(--hal), transparent 60%); opacity: 0; transition: opacity 0.4s; pointer-events: none; }
.hp-fc:hover { border-color: var(--hac); box-shadow: 0 6px 24px rgba(193,102,59,0.1); transform: translateY(-3px); }
.hp-fc:hover::after { opacity: 1; }
.hp-fi { width: 44px; height: 44px; background: var(--hal); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: var(--hac); }
.hp-fc h3 { font-family: var(--hpd); font-size: 18px; font-weight: 700; margin: 0 0 8px 0; color: var(--hfg); }
.hp-fc p { font-size: 14px; color: var(--hfs); line-height: 1.6; margin: 0; }

.hp-marquee-section { padding: 72px 0 64px 0; border-top: 1px solid var(--hbo); border-bottom: 1px solid var(--hbo); overflow: hidden; }
.hp-marquee-track { width: 100%; overflow: hidden; padding: 20px 0; }
.hp-marquee-inner { display: flex; gap: 24px; white-space: nowrap; animation: hpmq 40s linear infinite; font-family: var(--hpd); font-size: 28px; font-weight: 700; color: var(--hfs); letter-spacing: -0.01em; }
.hp-md { color: var(--hac); font-weight: 400; }
@keyframes hpmq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.hp-marquee-label { text-align: center; margin-top: 24px; }
.hp-ml { display: inline-flex; align-items: center; gap: 8px; font-family: var(--hpm); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--hsg); text-decoration: none; transition: color 0.2s; }
.hp-ml:hover { color: var(--hac); text-decoration: none; }

.hp-p { padding: 120px 24px; }
.hp-pi { max-width: 720px; margin: 0 auto; text-align: center; }
.hp-p blockquote { font-size: clamp(22px, 3vw, 30px); font-style: italic; line-height: 1.5; color: var(--hfg); margin: 20px 0; border-left: none; padding: 0; background: none; }
.hp-p cite { font-family: var(--hpb); font-style: normal; font-size: 14px; color: var(--hmu); }
.hp-pn { font-size: 15px; color: var(--hmu); max-width: 440px; margin: 24px auto 0; line-height: 1.7; }

.hp-cta { padding: 80px 24px 100px; text-align: center; }
.hp-cta-box { max-width: 560px; margin: 0 auto; background: var(--hsu); border: 1px solid var(--hbo); border-radius: var(--hrx); padding: 48px 40px; box-shadow: var(--hsh); }
.hp-cta-box h2 { font-family: var(--hpd); font-size: clamp(24px, 3vw, 34px); font-weight: 700; margin: 0 0 12px 0; border-bottom: none; padding-bottom: 0; color: var(--hfg); }
.hp-cta-box p { font-size: 16px; color: var(--hfs); margin-bottom: 28px; line-height: 1.6; }

.hp-footer { padding: 64px 24px 32px; border-top: 1px solid var(--hbo); background: var(--hsu); }
.hp-footer-grid { max-width: 1040px; margin: 0 auto; display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 40px; }
.hp-footer-brand { font-family: var(--hpd); font-size: 18px; font-weight: 700; color: var(--hfg); margin-bottom: 12px; }
.hp-footer-desc { font-size: 14px; color: var(--hfs); line-height: 1.6; margin: 0; max-width: 260px; }
.hp-footer-heading { font-family: var(--hpm); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--hmu); margin-bottom: 16px; }
.hp-footer-col { display: flex; flex-direction: column; gap: 10px; }
.hp-footer-col a { font-size: 14px; color: var(--hfs); text-decoration: none; transition: color 0.2s; }
.hp-footer-col a:hover { color: var(--hac); }
@media (max-width: 768px) {
  .hp-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .hp-footer-brand { font-size: 16px; }
}
@media (max-width: 480px) {
  .hp-footer-grid { grid-template-columns: 1fr; gap: 28px; }
}

.fade-in, .section-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.8s var(--heo), transform 0.8s var(--heo); }
.fade-in.visible, .section-reveal.visible { opacity: 1; transform: translateY(0); }
.img-reveal { opacity: 0; transform: scale(0.92) translateY(12px); transition: opacity 1s var(--heo), transform 1s var(--heo); }
.img-reveal.visible { opacity: 1; transform: scale(1) translateY(0); }
.text-scrub { opacity: 0.15; transition: opacity 0.8s var(--heo); }
.text-scrub.visible { opacity: 1; }
.card-stagger-item { opacity: 0; transform: translateY(32px) scale(0.97); transition: opacity 0.7s var(--heo), transform 0.7s var(--heo); }
.card-stagger-item.visible { opacity: 1; transform: translateY(0) scale(1); }
.card-stagger-item:nth-child(1) { transition-delay: 0s; }
.card-stagger-item:nth-child(2) { transition-delay: .08s; }
.card-stagger-item:nth-child(3) { transition-delay: .16s; }
.card-stagger-item:nth-child(4) { transition-delay: .24s; }
.card-stagger-item:nth-child(5) { transition-delay: .32s; }
.card-stagger-item:nth-child(6) { transition-delay: .40s; }
.card-stagger-item:nth-child(7) { transition-delay: .48s; }

/* ===== GLASSMORPHISM ===== */
.hp-glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur)) saturate(1.4);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(1.4);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
@media (prefers-reduced-transparency: reduce) {
  .hp-glass { background: var(--hsu); backdrop-filter: none; -webkit-backdrop-filter: none; }
}

/* ===== HERO GLASS CARD ===== */
.hp-hero-glass {
  background: var(--glass-bg);
  backdrop-filter: blur(24px) saturate(1.5);
  -webkit-backdrop-filter: blur(24px) saturate(1.5);
  border: 1px solid var(--glass-border);
  border-radius: var(--hrx);
  padding: 48px 36px;
  box-shadow: var(--glass-shadow), 0 0 80px rgba(193,102,59,0.06);
  position: relative;
  overflow: hidden;
}
.hp-hero-glass::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 10%, var(--glass-inner), transparent 90%);
}
.dark .hp-hero-glass { box-shadow: var(--glass-shadow), 0 0 80px rgba(212,132,90,0.08); }
@media (prefers-reduced-transparency: reduce) {
  .hp-hero-glass { background: var(--hsu); backdrop-filter: none; -webkit-backdrop-filter: none; }
}

/* ===== GRAIN OVERLAY ===== */
.hp-hero-grain {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none; z-index: 999; opacity: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-repeat: repeat; mix-blend-mode: overlay; transition: opacity 0.3s;
}

/* ===== FLOATING LETTERS ===== */
@keyframes hp-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.hp-hc-float {
  animation: hp-float 3.5s ease-in-out infinite;
  animation-delay: calc(var(--fi) * 0.35s);
}

/* ===== SHIMMER ON ACCENT ===== */
@keyframes hp-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.hp-hero-accent {
  background: linear-gradient(90deg, var(--hac), var(--hah), var(--hac), var(--hah), var(--hac));
  background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hp-shimmer 6s linear infinite;
}

/* ===== CTA GLOW PULSE ===== */
@keyframes hp-cta-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(193,102,59,0.08); }
  50% { box-shadow: 0 0 40px rgba(193,102,59,0.15); }
}
.hp-cta-box { animation: hp-cta-glow 4s ease-in-out infinite; }

/* ===== MARQUEE HOVER PAUSE ===== */
.hp-marquee-track:hover .hp-marquee-inner { animation-play-state: paused; }

/* ===== BTN RIPPLE ===== */
.hp-btn-primary { position: relative; overflow: hidden; }
.hp-btn-primary::after {
  content: ''; position: absolute; top: 50%; left: 50%;
  width: 0; height: 0; border-radius: 50%;
  background: rgba(255,255,255,0.2);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}
.hp-btn-primary:active::after { width: 300px; height: 300px; }

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  .hp-hc-float { animation: none; }
  .hp-hero-accent { animation: none; -webkit-text-fill-color: var(--hac); }
  .hp-cta-box { animation: none; }
  .fade-in, .section-reveal, .img-reveal, .text-scrub, .card-stagger-item {
    opacity: 1; transform: none; transition: none;
  }
  .hp-marquee-inner { animation: none; }
  .hp-hero-visual { transform: none !important; }
}

/* ===== 1024px: tablet ===== */
@media (max-width: 1024px) {
  .hp-chapter-grid { grid-template-columns: repeat(2, 1fr); }
  .hp-feat-grid { grid-template-columns: repeat(2, 1fr); }
  .hp-footer-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
}

/* ===== 768px: mobile landscape / small tablet ===== */
@media (max-width: 768px) {
  /* Hero */
  .hp-hero { padding: calc(var(--vp-nav-height) + 24px) 20px 40px; }
  .hp-hero-grid { grid-template-columns: 1fr; gap: 32px; }
  .hp-hero-title { font-size: clamp(28px, 8vw, 44px); max-width: 100%; }
  .hp-hero-sub { font-size: 16px; }
  .hp-hero-visual { order: -1; }
  .hp-hero-image-wrap { max-width: 100%; }
  .hp-hero-glass { padding: 32px 24px; }
  .hp-hero-actions { flex-direction: column; align-items: stretch; }
  .hp-btn { width: 100%; justify-content: center; }
  .hp-btn-ghost { width: 100%; }
  /* Hero dims tags */
  .hp-hero-dims { gap: 6px; }
  .hp-hd-tag { font-size: 12px; padding: 4px 12px; }
  /* Background */
  .hp-bg-grid { grid-template-columns: 1fr; gap: 28px; }
  .hp-bg-visual { position: static; }
  .hp-bg-card { padding: 28px 24px; }
  /* Chapter grid */
  .hp-chapter-grid, .hp-feat-grid, .hp-ext-grid { grid-template-columns: 1fr; }
  .hp-chapter-grid > *:first-child, .hp-chapter-grid > *:nth-child(7) { grid-column: span 1; }
  /* Cards */
  .hp-cc { padding: 22px 20px; }
  .hp-cc h3 { font-size: 19px; }
  .hp-fc { padding: 22px 20px; }
  .hp-ec { padding: 24px 20px; }
  /* Marquee */
  .hp-marquee-inner { font-size: 18px; gap: 14px; }
  .hp-marquee-section { padding: 48px 0 44px 0; }
  /* Sections */
  .hp-section { padding: 48px 20px; }
  .hp-section-desc { font-size: 15px; margin-bottom: 32px; }
  .hp-p { padding: 64px 20px; }
  .hp-p blockquote { font-size: clamp(18px, 3vw, 24px); }
  /* CTA */
  .hp-cta { padding: 48px 20px 64px; }
  .hp-cta-box { padding: 32px 24px; }
  .hp-cta-box h2 { font-size: clamp(20px, 3vw, 28px); }
  /* Footer */
  .hp-footer { padding: 40px 20px 24px; }
  .hp-footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
  .hp-footer-brand { font-size: 15px; }
  .hp-footer-desc { font-size: 13px; }
  .hp-footer-heading { font-size: 10px; margin-bottom: 12px; }
  .hp-footer-col { gap: 8px; }
  .hp-footer-col a { font-size: 13px; }
}

/* ===== 480px: small phones ===== */
@media (max-width: 480px) {
  .hp-hero { padding: calc(var(--vp-nav-height) + 16px) 16px 32px; }
  .hp-hero-eyebrow { font-size: 11px; }
  .hp-hero-title { font-size: clamp(24px, 7vw, 36px); }
  .hp-hero-sub { font-size: 15px; }
  .hp-hero-glass { padding: 24px 20px; }
  .hp-hc { width: 36px; height: 36px; font-size: 16px; }
  .hp-hero-dims { gap: 5px; }
  .hp-hd-tag { font-size: 11px; padding: 3px 10px; }
  .hp-hero-dims-note { font-size: 12px; }
  .hp-section-title { font-size: 22px; }
  .hp-section-desc { font-size: 14px; }
  .hp-bg-sn { font-size: 32px; }
  .hp-bg-quote { font-size: 15px; }
  .hp-bg-desc { font-size: 14px; }
  .hp-cc h3 { font-size: 17px; }
  .hp-cc p, .hp-fc p, .hp-ec p { font-size: 14px; }
  .hp-marquee-inner { font-size: 16px; gap: 12px; }
  .hp-p { padding: 48px 16px; }
  .hp-p blockquote { font-size: 17px; }
  .hp-pn { font-size: 14px; }
  .hp-cta-box { padding: 28px 20px; }
  .hp-cta-box p { font-size: 14px; }
  /* Footer: single column */
  .hp-footer { padding: 32px 16px 20px; }
  .hp-footer-grid { grid-template-columns: 1fr; gap: 24px; }
  .hp-footer-brand { font-size: 15px; }
  .hp-footer-col { gap: 7px; }
}
</style>
