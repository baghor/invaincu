<template>
  <div>
    <header class="header">
      <div class="container header__bar">
        <a href="#top" class="logo" aria-label="Invaincu Ltd, home" @click="menuOpen = false">
          <span class="logo__mark" aria-hidden="true"></span>
          <span class="logo__name">Invaincu</span>
        </a>

        <button
          type="button"
          class="menu-button"
          :aria-expanded="menuOpen"
          aria-controls="site-nav"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? 'Close' : 'Menu' }}
        </button>

        <nav id="site-nav" class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Main">
          <a v-for="link in links" :key="link.href" :href="link.href" class="nav__link" @click="menuOpen = false">
            {{ link.label }}
          </a>
          <a href="#contact" class="button button--small" @click="menuOpen = false">Start a project</a>
        </nav>
      </div>
    </header>

    <main id="top">
      <!-- Intro -->
      <section class="hero">
        <div class="container hero__grid">
          <div>
            <p class="eyebrow eyebrow--on-ink">Software company · Kigali, Rwanda</p>

            <h1 class="hero__title">Software that holds up when it matters.</h1>

            <p class="hero__lead">
              Invaincu means undefeated. We build fast, robust web platforms and mobile apps for organisations and
              growing businesses, and we stay responsible for them from the first plan to launch.
            </p>

            <div class="hero__actions">
              <a href="#contact" class="button">Start a project</a>
              <a href="#work" class="button button--ghost">See our work</a>
            </div>
          </div>

          <ul class="hero__facts">
            <li v-for="fact in facts" :key="fact.label" class="hero__fact">
              <span class="hero__fact-value">{{ fact.value }}</span>
              <span class="hero__fact-label">{{ fact.label }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Services -->
      <section id="services" class="section">
        <div class="container">
          <p class="eyebrow">What we do</p>
          <h2 class="section__title">One team, from the database to the app in your hand.</h2>

          <ul class="services">
            <li v-for="service in services" :key="service.title" class="service">
              <h3 class="service__title">{{ service.title }}</h3>
              <p class="service__text">{{ service.text }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- Work -->
      <section id="work" class="section section--surface">
        <div class="container">
          <p class="eyebrow">Our work</p>
          <h2 class="section__title">Products people use every day.</h2>

          <div class="work">
            <article v-for="project in projects" :key="project.name" class="project">
              <div class="project__top">
                <span class="project__sector">{{ project.sector }}</span>
                <span class="project__status">{{ project.status }}</span>
              </div>

              <h3 class="project__name">{{ project.name }}</h3>
              <p class="project__text">{{ project.text }}</p>

              <ul class="tags">
                <li v-for="item in project.stack" :key="item" class="tag">{{ item }}</li>
              </ul>

              <a :href="project.url" class="project__link" target="_blank" rel="noopener">
                Visit {{ project.name }} <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section id="process" class="section">
        <div class="container">
          <p class="eyebrow">How we work</p>
          <h2 class="section__title">Clear steps, and one team that owns the result.</h2>

          <ol class="steps">
            <li v-for="(step, index) in steps" :key="step.title" class="step">
              <span class="step__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <h3 class="step__title">{{ step.title }}</h3>
              <p class="step__text">{{ step.text }}</p>
            </li>
          </ol>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="section section--surface">
        <div class="container about">
          <div>
            <p class="eyebrow">About</p>
            <h2 class="section__title">Built on one promise: fast, robust software.</h2>
          </div>

          <div class="about__body">
            <p>
              Invaincu Ltd was founded in Kigali in July 2024 by Ineza Irene Baghor, a software engineer who has spent
              years building systems that cannot afford to fail, including the dispatch platform behind Rwanda’s 912
              emergency line.
            </p>
            <p>
              That experience shapes how we work today. We plan for real use, slow connections and busy days, and we
              treat speed and reliability as part of the product rather than something to fix later.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="contact">
        <div class="container contact__inner">
          <div>
            <p class="eyebrow eyebrow--on-ink">Contact</p>
            <h2 class="contact__title">Have a product to build or rebuild?</h2>
            <p class="contact__text">Tell us what you need and we’ll get back to you to talk it through.</p>
          </div>

          <a :href="`mailto:${contactEmail}`" class="button">{{ contactEmail }}</a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <span>© {{ year }} Invaincu Ltd</span>
        <span>Kigali, Rwanda</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const menuOpen = ref(false)
  const year = new Date().getFullYear()

  // Replace with the company address once it exists
  const contactEmail = 'inezairene30@gmail.com'

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
    { href: '#about', label: 'About' },
  ]

  const facts = [
    { value: '2024', label: 'Founded in Kigali' },
    { value: '3', label: 'Products in our portfolio' },
    { value: 'Web + mobile', label: 'Built end to end' },
  ]

  const services = [
    {
      title: 'Web platforms',
      text: 'Fast, dependable websites and web applications built with Next.js, React, Vue and Nuxt.',
    },
    {
      title: 'Mobile apps',
      text: 'One Flutter codebase for Android and iOS, connected to the same platform as your website.',
    },
    {
      title: 'APIs and backends',
      text: 'Laravel APIs and data models that stay organised as your product and your traffic grow.',
    },
    {
      title: 'Product revamps',
      text: 'Rebuilding existing products so they load faster and are easier for your team to run.',
    },
  ]

  const projects = [
    {
      name: 'Imvaho Nshya',
      sector: 'National newspaper',
      status: 'In progress',
      text: 'A full revamp of the digital product of one of Rwanda’s best-known newspapers, under a working contract with Rwanda Printing Company (RPC).',
      stack: ['Next.js', 'React', 'TypeScript', 'Laravel'],
      url: 'https://imvahonshya.co.rw/',
    },
    {
      name: 'La Nouvelle Relève',
      sector: 'National newspaper',
      status: 'In progress',
      text: 'A full revamp of the digital product of Rwanda’s French-language newspaper, under the same contract with RPC.',
      stack: ['Next.js', 'React', 'TypeScript', 'Laravel'],
      url: 'https://lanouvellereleve.co.rw/',
    },
    {
      name: 'BeautyHub',
      sector: 'Salon marketplace and management',
      status: 'Live on web and Android · iOS coming soon',
      text: 'Clients find a salon and book a real open time. Owners, from solo stylists to multi-branch chains, run bookings, staff, payments and more in one place.',
      stack: ['Next.js', 'React', 'Laravel', 'Flutter'],
      url: 'https://beautyhub.style/',
    },
  ]

  const steps = [
    {
      title: 'Understand',
      text: 'We learn your goals, your users and what the product has to get right.',
    },
    {
      title: 'Plan',
      text: 'We agree on scope, architecture and priorities before the build starts.',
    },
    {
      title: 'Build',
      text: 'We ship in steps, so you can see real progress and give feedback early.',
    },
    {
      title: 'Launch',
      text: 'We test it under real conditions, release it and make sure it runs well.',
    },
  ]
</script>

<style scoped>
  /* Header */
  .header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--ink);
    border-bottom: 1px solid var(--line-on-ink);
  }

  .header__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    min-height: 72px;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--on-ink);
    text-decoration: none;
  }

  .logo__mark {
    position: relative;
    width: 4px;
    height: 24px;
    margin: 0 6px 0 2px;
    border-radius: 4px;
    background: var(--on-ink);
  }

  .logo__mark::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 8px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #d98a4e;
  }

  .logo__name {
    font-family: var(--font-heading);
    font-size: 19px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .nav__link {
    color: var(--on-ink-soft);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .nav__link:hover {
    color: var(--on-ink);
  }

  .menu-button {
    display: none;
    padding: 8px 14px;
    border: 1px solid var(--line-on-ink);
    border-radius: 999px;
    background: transparent;
    color: var(--on-ink);
    font: inherit;
    font-size: 14px;
    cursor: pointer;
  }

  /* Buttons */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    border: 1px solid #d98a4e;
    border-radius: 999px;
    background: #d98a4e;
    color: var(--ink);
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    overflow-wrap: anywhere;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      transform 0.2s ease;
  }

  .button:hover {
    border-color: #e69c63;
    background: #e69c63;
    transform: translateY(-1px);
  }

  .button--small {
    padding: 9px 18px;
    font-size: 14px;
  }

  .button--ghost {
    border-color: var(--line-on-ink);
    background: transparent;
    color: var(--on-ink);
  }

  .button--ghost:hover {
    border-color: var(--on-ink-soft);
    background: transparent;
  }

  /* Shared */
  .eyebrow {
    margin-bottom: 14px;
    color: var(--accent);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .eyebrow--on-ink {
    color: #d98a4e;
  }

  .section {
    padding: 96px 0;
  }

  .section--surface {
    background: var(--surface);
  }

  .section__title {
    max-width: 680px;
    font-size: clamp(28px, 4vw, 40px);
  }

  /* Intro */
  .hero {
    padding: 96px 0;
    background: var(--ink);
    color: var(--on-ink);
  }

  .hero__grid {
    display: grid;
    grid-template-columns: 1.7fr 1fr;
    gap: 64px;
    align-items: end;
  }

  .hero__title {
    max-width: 720px;
    font-size: clamp(38px, 6.2vw, 68px);
    line-height: 1.06;
  }

  .hero__lead {
    max-width: 600px;
    margin-top: 24px;
    color: var(--on-ink-soft);
    font-size: 18px;
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 36px;
  }

  .hero__facts {
    display: grid;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .hero__fact {
    display: grid;
    gap: 2px;
    padding: 18px 0;
    border-top: 1px solid var(--line-on-ink);
  }

  .hero__fact-value {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 600;
  }

  .hero__fact-label {
    color: var(--on-ink-soft);
    font-size: 14px;
  }

  /* Services */
  .services {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 48px 0 0;
    padding: 0;
    border-top: 1px solid var(--line);
    list-style: none;
  }

  .service {
    padding: 32px 32px 32px 0;
    border-bottom: 1px solid var(--line);
  }

  .service:nth-child(even) {
    padding-left: 32px;
    padding-right: 0;
    border-left: 1px solid var(--line);
  }

  .service__title {
    font-size: 20px;
  }

  .service__text {
    margin-top: 10px;
    color: var(--ink-soft);
  }

  /* Work */
  .work {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-top: 48px;
  }

  .project {
    display: flex;
    flex-direction: column;
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--paper);
  }

  .project__top {
    display: grid;
    gap: 8px;
    justify-items: start;
    min-height: 74px;
    align-content: start;
  }

  .project__sector {
    color: var(--ink-soft);
    font-size: 13px;
  }

  .project__status {
    padding: 3px 10px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: #8a4417;
    font-size: 12px;
    font-weight: 500;
  }

  .project__name {
    margin-top: 16px;
    font-size: 23px;
  }

  .project__text {
    flex: 1;
    margin-top: 12px;
    color: var(--ink-soft);
    font-size: 15px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
  }

  .tag {
    padding: 3px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    font-size: 12px;
  }

  .project__link {
    margin-top: 22px;
    color: var(--accent);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }

  .project__link:hover {
    text-decoration: underline;
  }

  /* Process */
  .steps {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 32px;
    margin: 48px 0 0;
    padding: 0;
    list-style: none;
  }

  .step {
    padding-top: 18px;
    border-top: 2px solid var(--ink);
  }

  .step__number {
    color: var(--accent);
    font-family: var(--font-heading);
    font-size: 14px;
    font-weight: 600;
  }

  .step__title {
    margin-top: 12px;
    font-size: 20px;
  }

  .step__text {
    margin-top: 8px;
    color: var(--ink-soft);
    font-size: 15px;
  }

  /* About */
  .about {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 56px;
  }

  .about__body {
    display: grid;
    gap: 18px;
    align-content: start;
    color: var(--ink-soft);
    font-size: 17px;
  }

  /* Contact */
  .contact {
    padding: 88px 0;
    background: var(--ink);
    color: var(--on-ink);
  }

  .contact__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .contact__title {
    font-size: clamp(28px, 4vw, 42px);
  }

  .contact__text {
    margin-top: 12px;
    color: var(--on-ink-soft);
  }

  /* Footer */
  .footer {
    padding: 22px 0;
    background: var(--ink);
    border-top: 1px solid var(--line-on-ink);
    color: var(--on-ink-soft);
    font-size: 13px;
  }

  .footer__inner {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  @media (max-width: 960px) {
    .hero__grid,
    .about {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .work {
      grid-template-columns: 1fr;
    }

    .project__top {
      min-height: 0;
    }

    .steps {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 760px) {
    .menu-button {
      display: block;
    }

    .nav {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;
      padding: 22px var(--gutter) 26px;
      background: var(--ink);
      border-bottom: 1px solid var(--line-on-ink);
    }

    .nav--open {
      display: flex;
    }

    .section,
    .hero,
    .contact {
      padding: 64px 0;
    }

    .services {
      grid-template-columns: 1fr;
    }

    .service,
    .service:nth-child(even) {
      padding: 24px 0;
      border-left: 0;
    }

    .steps {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .contact__inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
