// ==============================
// 1) Header 滚动阴影
// ==============================
const siteHeader = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  if (siteHeader) {
    siteHeader.classList.toggle("scrolled", window.scrollY > 8);
  }
});

// ==============================
// 2) 移动端菜单
// ==============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// ==============================
// 3) 中英双语切换
// ==============================
const i18n = {
  en: {
    top_notice: "Join us to build trusted open innovation ecosystems.",
    top_action: "Get in Touch",
    brand: "OPEN Technology Hub",
    nav_home: "Home",
    nav_about: "About",
    nav_ecosystem: "Ecosystem",
    nav_join: "Join",
    contact_btn: "Contact",

    hero_badge: "Open • Innovation • Trust",
    hero_title: "Open Technology Hub",
    hero_subtitle_en: "Empowering Enterprise Innovation with Open Source",
    hero_subtitle_zh: "Open Technology Hub builds open-source and AI ecosystems to help enterprises deploy frontier technologies.",
    hero_tagline: "Open Innovation. Built for Trust.",
    hero_btn_1: "Explore Ecosystem",
    hero_btn_2: "Contact Us",
    hero_img_note: "Suggested style: global network, node graph, AI futurism (replaceable Unsplash image)",

    core_badge: "Core Capabilities",
    core_title: "Core Business & Technical Capabilities",
    card1_title: "AI & Foundation Model Applications",
    card1_desc: "Implement GenAI and large language models to build enterprise-grade intelligent applications.",
    card2_title: "Open Source Ecosystem",
    card2_desc: "Build open ecosystems that accelerate knowledge sharing and collaborative innovation.",
    card3_title: "Vertical Industry Solutions",
    card3_desc: "Deep expertise in finance, healthcare, and manufacturing to convert frontier tech into productivity.",
    card4_title: "Enterprise Technology Consulting",
    card4_desc: "End-to-end support from strategy planning to implementation and delivery.",

    partner_title: "Meet Our Partners & Members",
    partner_sub: "Partners & Members",

    start_badge: "Getting Started is Easy",
    start_title: "Getting Started is Easy — Launch Your Transformation",
    start_desc: "Whether you're a startup or an industry leader, we match your business with the right open technology ecosystem and enablement plan.",
    step1: "Talk with Experts",
    step2: "Tailored Solution",
    step3: "Production Enablement",
    start_btn: "Start Now",
    start_img_note: "Suggested style: collaboration, guidance, connected tech ecosystem (replaceable Unsplash image)",

    footer_desc: "Open technology ecosystem builder empowering enterprise innovation in the AI era.",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact",
    copyright: "Copyright © 2026 OPEN Technology Hub. All rights reserved."
  },
  zh: {
    top_notice: "与我们一起构建可信赖的开放创新生态。",
    top_action: "立即联系",
    brand: "OPEN Technology Hub",
    nav_home: "首页",
    nav_about: "关于我们",
    nav_ecosystem: "技术生态",
    nav_join: "加入我们",
    contact_btn: "立即咨询",

    hero_badge: "开放 • 创新 • 信任",
    hero_title: "Open Technology Hub",
    hero_subtitle_en: "Empowering Enterprise Innovation with Open Source",
    hero_subtitle_zh: "开放技术枢纽，做开源技术与AI生态的建设者，帮助企业实现前沿科技的落地应用。",
    hero_tagline: "Open Innovation. Built for Trust.",
    hero_btn_1: "探索技术生态",
    hero_btn_2: "联系我们",
    hero_img_note: "推荐图风：全球连接、节点网络、AI未来主义（Unsplash 可替换）",

    core_badge: "核心能力",
    core_title: "核心业务与技术能力",
    card1_title: "AI & 大模型应用",
    card1_desc: "帮助企业落地生成式AI、大语言模型等技术，构建智能应用。",
    card2_title: "开源技术生态",
    card2_desc: "构建开源生态体系，促进技术共享与协同创新。",
    card3_title: "垂直行业解决方案",
    card3_desc: "深耕金融、医疗、制造等行业，将前沿科技转化为行业生产力。",
    card4_title: "企业技术咨询",
    card4_desc: "专业技术团队为企业提供从战略规划到落地实施的全流程支持。",

    partner_title: "Meet Our Partners & Members",
    partner_sub: "合作伙伴与成员",

    start_badge: "轻松上手",
    start_title: "Getting Started is Easy — 轻松开启技术转型之旅",
    start_desc: "无论您是初创企业还是行业巨头，我们都能为您匹配合适的开源技术生态和赋能方案。",
    step1: "联系专家",
    step2: "方案定制",
    step3: "落地赋能",
    start_btn: "立即开始",
    start_img_note: "推荐图风：协同办公、连接引导、现代科技生态（Unsplash 可替换）",

    footer_desc: "开放技术枢纽——开源技术生态建设者，助力AI时代企业创新。",
    footer_links_title: "快速链接",
    footer_contact_title: "联系方式",
    copyright: "Copyright © 2026 OPEN Technology Hub. All rights reserved."
  }
};

const enBtn = document.getElementById("lang-en");
const zhBtn = document.getElementById("lang-zh");

function applyLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  if (enBtn && zhBtn) {
    enBtn.classList.toggle("active", lang === "en");
    zhBtn.classList.toggle("active", lang === "zh");
  }
}

if (enBtn) enBtn.addEventListener("click", () => applyLanguage("en"));
if (zhBtn) zhBtn.addEventListener("click", () => applyLanguage("zh"));
applyLanguage("zh"); // 默认中文，可改为 "en"

// ==============================
// 4) 合作伙伴轮播（自动 + 按钮 + 拖拽）
// ==============================
const carousel = document.getElementById("partnerCarousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (carousel) {
  // 复制一份内容形成循环滚动效果
  carousel.innerHTML += carousel.innerHTML;

  function scrollStep() {
    const card = carousel.querySelector(".member-card");
    return card ? card.getBoundingClientRect().width + 14 : 220;
  }

  function normalizeLoop() {
    const half = carousel.scrollWidth / 2;
    if (carousel.scrollLeft >= half) carousel.scrollLeft -= half;
    if (carousel.scrollLeft <= 0) carousel.scrollLeft += half;
  }

  let autoTimer = null;
  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      carousel.scrollBy({ left: scrollStep(), behavior: "smooth" });
      setTimeout(normalizeLoop, 420);
    }, 2500);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAuto();
      carousel.scrollBy({ left: scrollStep(), behavior: "smooth" });
      setTimeout(() => {
        normalizeLoop();
        startAuto();
      }, 500);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAuto();
      carousel.scrollBy({ left: -scrollStep(), behavior: "smooth" });
      setTimeout(() => {
        normalizeLoop();
        startAuto();
      }, 500);
    });
  }

  // 拖拽
  let isDown = false;
  let startX = 0;
  let startLeft = 0;

  carousel.addEventListener("pointerdown", (e) => {
    isDown = true;
    carousel.classList.add("dragging");
    startX = e.clientX;
    startLeft = carousel.scrollLeft;
    stopAuto();
  });

  window.addEventListener("pointerup", () => {
    if (!isDown) return;
    isDown = false;
    carousel.classList.remove("dragging");
    normalizeLoop();
    startAuto();
  });

  window.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    carousel.scrollLeft = startLeft - dx;
  });

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);

  // 初始定位到中间，避免向左滚动时突兀
  window.addEventListener("load", () => {
    carousel.scrollLeft = carousel.scrollWidth / 4;
    startAuto();
  });

  window.addEventListener("resize", normalizeLoop);
}
