---
layout: page
title: 离谱的英语学习指南
---

<!-- Homepage styles: .vitepress/theme/homepage.css -->

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
          <blockquote class="hp-bg-card-quote">学而不思则罔，思而不学则殆。</blockquote>
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
