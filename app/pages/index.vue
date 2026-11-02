<template>
  <div>
    <header class="header" :class="{ 'header--scrolled': scrolled, 'header--open': menuOpen }">
      <div class="container header__bar">
        <a href="#top" class="logo" aria-label="Invaincu Ltd, home" @click="menuOpen = false">
          <svg class="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
            <defs>
              <linearGradient id="logo-sky" x1="21" y1="2" x2="6" y2="18" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#38bdf8" />
                <stop offset="1" stop-color="#0e7490" />
              </linearGradient>
            </defs>
            <path class="logo__sky" d="M21.5 1.5 4.5 18.6h8.6l1.9-5.2h2.9z" fill="url(#logo-sky)" />
            <path class="logo__ground" d="M10.5 30.5 27.5 13.4h-8.6L17 18.6h-2.9z" />
          </svg>
          <span class="logo__name">Invaincu</span>
        </a>

        <nav id="site-nav" class="nav" :class="{ 'nav--open': menuOpen }" aria-label="Main">
          <a
            v-for="(link, index) in links"
            :key="link.href"
            :href="link.href"
            class="nav__link"
            :class="{ 'nav__link--active': activeSection === link.href }"
            :style="{ '--i': index }"
            :aria-current="activeSection === link.href ? 'true' : undefined"
            @click="menuOpen = false"
          >
            <span class="nav__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path :d="link.icon" />
              </svg>
            </span>
            {{ link.label }}
            <svg class="nav__chevron" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </a>

          <!-- Only inside the small screen menu -->
          <div class="nav__foot">
            <a href="#contact" class="button" @click="menuOpen = false">Start a project</a>

            <div class="nav__contact">
              <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
              <span>Kigali, Rwanda</span>
            </div>
          </div>
        </nav>

        <div class="header__end">
          <!-- Sun that turns into a moon -->
          <button
            ref="themeButton"
            type="button"
            class="theme"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            :aria-pressed="theme === 'dark'"
            @click="toggle(themeButton)"
          >
            <svg class="theme__icon" viewBox="0 0 24 24" aria-hidden="true">
              <mask id="theme-moon">
                <rect width="24" height="24" fill="#fff" />
                <circle class="theme__cut" cx="24" cy="8" r="6" fill="#000" />
              </mask>
              <circle class="theme__core" cx="12" cy="12" r="5" fill="currentColor" mask="url(#theme-moon)" />
              <g class="theme__rays" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M12 1.5v2M12 20.5v2M1.5 12h2M20.5 12h2M4.6 4.6 6 6M18 18l1.4 1.4M4.6 19.4 6 18M18 6l1.4-1.4" />
              </g>
            </svg>
          </button>

          <a href="#contact" class="header__cta">
            Start a project
            <svg class="header__cta-arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            ref="menuButton"
            type="button"
            class="menu-button"
            :aria-expanded="menuOpen"
            aria-controls="site-nav"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            @click="menuOpen = !menuOpen"
          >
            <span class="menu-button__line"></span>
            <span class="menu-button__line"></span>
          </button>
        </div>
      </div>
    </header>

    <main id="top">
      <!-- Intro -->
      <section class="hero">
        <div class="hero__glow" aria-hidden="true"></div>

        <div class="container hero__grid">
          <div>
            <p v-reveal class="eyebrow">Software company · Kigali, Rwanda</p>

            <h1 v-reveal="70" class="hero__title">Software that holds up <span class="hero__accent">when it matters.</span></h1>

            <p v-reveal="140" class="hero__lead">
              <strong class="hero__name">Invaincu.</strong> We build fast, robust web platforms and mobile apps for
              organisations and growing businesses, and we stay responsible for them from the first plan to launch.
            </p>

            <div v-reveal="210" class="hero__actions">
              <a href="#contact" class="button">Start a project</a>
              <a href="#work" class="button button--ghost">See our work</a>
            </div>
          </div>

          <ul class="hero__facts">
            <li v-for="(fact, index) in facts" :key="fact.label" v-reveal="280 + index * 70" class="hero__fact">
              <span class="hero__fact-value">{{ fact.value }}</span>
              <span class="hero__fact-label">{{ fact.label }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Services -->
      <section id="services" class="section">
        <div class="container">
          <p v-reveal class="eyebrow">What we do</p>
          <h2 v-reveal="70" class="section__title">One team, from the database to the app in your hand.</h2>

          <ul class="services">
            <li v-for="(service, index) in services" :key="service.title" v-reveal="(index % 2) * 80" class="services__item">
              <article v-spotlight class="service spotlight">
                <span class="service__icon" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path :d="service.icon" />
                  </svg>
                </span>

                <div>
                  <h3 class="service__title">{{ service.title }}</h3>
                  <p class="service__text">{{ service.text }}</p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>

      <!-- Work -->
      <section id="work" class="section section--surface">
        <div class="container">
          <p v-reveal class="eyebrow">Our work</p>
          <h2 v-reveal="70" class="section__title">Products people use every day.</h2>

          <div class="work">
            <div v-for="(project, index) in projects" :key="project.name" v-reveal="index * 80" class="work__item">
              <article v-spotlight class="project spotlight">
                <div class="project__media">
                  <img
                    :src="project.image"
                    :alt="`${project.name} website`"
                    class="project__image"
                    width="1040"
                    height="585"
                    loading="lazy"
                  />
                </div>

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
                  <span class="project__link-text">Visit {{ project.name }}</span>

                  <!-- Two arrows: one flies out as the next one flies in -->
                  <span class="project__arrow" aria-hidden="true">
                    <svg v-for="arrow in 2" :key="arrow" class="project__arrow-icon" viewBox="0 0 24 24">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- Process -->
      <section id="process" class="section section--steps">
        <div class="container">
          <p v-reveal class="eyebrow">How we work</p>
          <h2 v-reveal="70" class="section__title">Clear steps, and one team that owns the result.</h2>

          <ol class="steps">
            <li v-for="(step, index) in steps" :key="step.title" v-reveal="index * 70" class="step">
              <span class="step__number">{{ String(index + 1).padStart(2, '0') }}</span>

              <div class="step__card">
                <h3 class="step__title">{{ step.title }}</h3>
                <p class="step__text">{{ step.text }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="section section--surface">
        <div class="container about">
          <div>
            <p v-reveal class="eyebrow">About</p>
            <h2 v-reveal="70" class="section__title">Built on one promise: fast, robust software.</h2>
          </div>

          <div class="about__body">
            <p v-reveal>
              Invaincu Ltd was founded in Kigali in July 2024 by Ineza Irene Baghor, a software engineer who has spent
              years building systems that cannot afford to fail, including the dispatch platform behind Rwanda’s 912
              emergency line.
            </p>
            <p v-reveal="80">
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
            <p v-reveal class="eyebrow">Contact</p>
            <h2 v-reveal="70" class="contact__title">Have a product to build or rebuild?</h2>
            <p v-reveal="130" class="contact__text">Tell us what you need and we’ll get back to you to talk it through.</p>
          </div>

          <div v-reveal="180" class="contact__reach">
            <a :href="`mailto:${contactEmail}`" class="button">{{ contactEmail }}</a>

            <ul class="contact__phones">
              <li v-for="phone in phones" :key="phone.tel" class="contact__phone">
                <a :href="`tel:${phone.tel}`" class="contact__link">
                  <svg class="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"
                    />
                  </svg>
                  {{ phone.label }}
                </a>

                <a
                  v-if="phone.whatsapp"
                  :href="`https://wa.me/${phone.whatsapp}`"
                  class="contact__link contact__link--whatsapp"
                  target="_blank"
                  rel="noopener"
                  :aria-label="`Message us on WhatsApp at ${phone.label}`"
                >
                  <svg class="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.7A8.4 8.4 0 1 1 21 11.5z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
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
  import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import beautyhubImage from '~/assets/images/beautyhub.webp'
  import imvahoImage from '~/assets/images/imvaho-nshya.webp'
  import releveImage from '~/assets/images/la-nouvelle-releve.webp'

  const menuOpen = ref(false)
  const menuButton = ref<HTMLElement | null>(null)
  const year = new Date().getFullYear()

  const { theme, sync, toggle, followSystem } = useTheme()
  const themeButton = ref<HTMLElement | null>(null)

  const scrolled = ref(false)
  const activeSection = ref('')

  let sectionObserver: IntersectionObserver | null = null

  // Highlights the navbar link of the section in the middle of the screen
  const watchSections = () => {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = `#${entry.target.id}`
          } else if (activeSection.value === `#${entry.target.id}`) {
            activeSection.value = ''
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    links.forEach((link) => {
      const section = document.querySelector(link.href)

      if (section) sectionObserver?.observe(section)
    })
  }

  const updateScrolled = () => {
    scrolled.value = scrollY > 8
  }

  // The page stays still behind the open menu
  watch(menuOpen, (open) => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
  })

  const closeMenuOnEscape = (event: KeyboardEvent) => {
    if (event.key !== 'Escape' || !menuOpen.value) return

    menuOpen.value = false
    menuButton.value?.focus()
  }

  // The menu only exists on small screens, so it closes when the window grows
  const closeMenuOnWideScreen = () => {
    if (innerWidth > 960) menuOpen.value = false
  }

  let stopFollowingSystem: (() => void) | undefined

  onMounted(() => {
    sync()
    stopFollowingSystem = followSystem()
    updateScrolled()
    watchSections()
    addEventListener('scroll', updateScrolled, { passive: true })
    addEventListener('resize', closeMenuOnWideScreen)
    addEventListener('keydown', closeMenuOnEscape)
  })

  onBeforeUnmount(() => {
    stopFollowingSystem?.()
    sectionObserver?.disconnect()
    document.documentElement.style.overflow = ''
    removeEventListener('scroll', updateScrolled)
    removeEventListener('resize', closeMenuOnWideScreen)
    removeEventListener('keydown', closeMenuOnEscape)
  })

  const contactEmail = 'invaincultd@gmail.com'

  const phones = [
    { label: '+250 782 626 834', tel: '+250782626834', whatsapp: '250782626834' },
    { label: '+250 790 444 533', tel: '+250790444533' },
  ]

  const links = [
    { href: '#services', label: 'Services', icon: 'M12 3 3 8l9 5 9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5' },
    { href: '#work', label: 'Work', icon: 'M3 8h18v12H3zM8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M3 13h18' },
    {
      href: '#process',
      label: 'Process',
      icon: 'M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM9 6h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6',
    },
    {
      href: '#about',
      label: 'About',
      icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    },
  ]

  const facts = [
    { value: '2024', label: 'Founded in Kigali' },
    { value: '3', label: 'Products in our portfolio' },
    { value: 'Web + mobile', label: 'Built end to end' },
  ]

  const services = [
    {
      title: 'Web platforms',
      icon: 'M3 5h18v14H3zM3 9h18M6.5 7h.01M9.5 7h.01',
      text: 'Fast, dependable websites and web applications built with Next.js, React, Vue and Nuxt.',
    },
    {
      title: 'Mobile apps',
      icon: 'M8 2.5h8A1.5 1.5 0 0 1 17.5 4v16a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20V4A1.5 1.5 0 0 1 8 2.5zM11 18.5h2',
      text: 'One Flutter codebase for Android and iOS, connected to the same platform as your website.',
    },
    {
      title: 'APIs and backends',
      icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
      text: 'Laravel APIs and data models that stay organised as your product and your traffic grow.',
    },
    {
      title: 'Product revamps',
      icon: 'M4 12a8 8 0 0 1 13.7-5.6L20 9M20 4v5h-5M20 12a8 8 0 0 1-13.7 5.6L4 15M4 20v-5h5',
      text: 'Rebuilding existing products so they load faster and are easier for your team to run.',
    },
  ]

  const projects = [
    {
      name: 'Imvaho Nshya',
      image: imvahoImage,
      sector: 'National newspaper',
      status: 'Live',
      text: 'The revamped home of one of Rwanda’s best-known Kinyarwanda newspapers, built under a working contract with Rwanda Printing Company (RPC). Readers follow the news by topic, watch video and open the e-paper, alongside public notices and auction listings.',
      stack: ['Next.js', 'React', 'TypeScript', 'Laravel'],
      url: 'https://imvahonshya.co.rw/',
    },
    {
      name: 'La Nouvelle Relève',
      image: releveImage,
      sector: 'National newspaper',
      status: 'New version launching soon',
      text: 'A revamp of Rwanda’s French-language newspaper under the same contract with RPC, covering news from Rwanda and the world. Readers move through featured stories, trending topics, search and a full archive of past articles.',
      stack: ['Next.js', 'React', 'TypeScript', 'Laravel'],
      url: 'https://lanouvellereleve.co.rw/',
    },
    {
      name: 'BeautyHub',
      image: beautyhubImage,
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
    border-bottom: 1px solid transparent;
  }

  /*
   * The frosted glass sits on its own layer: a blur on .header itself would stop
   * the capsule and the small screen menu inside it from blurring the page.
   */
  .header::before {
    content: '';
    position: absolute;
    inset: 0 0 -1px;
    z-index: -1;
    border-bottom: 1px solid var(--glass-line);
    background: var(--glass);
    -webkit-backdrop-filter: saturate(170%) blur(18px);
    backdrop-filter: saturate(170%) blur(18px);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .header--scrolled::before,
  .header--open::before {
    opacity: 1;
  }

  .header__bar {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 24px;
    min-height: var(--header-height);
  }

  .header__end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
  }

  .header__cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 38px;
    padding: 0 16px 0 18px;
    border-radius: 999px;
    background: var(--ink);
    color: var(--paper);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    transition: box-shadow 0.25s ease;
  }

  .header__cta:hover {
    box-shadow: 0 10px 22px -12px rgba(15, 36, 51, 0.6);
  }

  .header__cta-arrow {
    width: 15px;
    height: 15px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.25s var(--ease-out);
  }

  .header__cta:hover .header__cta-arrow {
    transform: translateX(3px);
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    justify-self: start;
    color: var(--ink);
    text-decoration: none;
  }

  .logo__mark {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }


  .logo__sky,
  .logo__ground {
    animation: bolt-meet 0.9s var(--ease-out) both 0.15s;
  }

  .logo__sky {
    --from: 3px, -5px;
  }

  .logo__ground {
    --from: -3px, 5px;
    fill: var(--ink);
  }

  @keyframes bolt-meet {
    from {
      opacity: 0;
      transform: translate(var(--from));
    }
  }

  .logo__name {
    font-family: var(--font-heading);
    font-size: 19px;
    font-weight: 600;
    letter-spacing: -0.025em;
  }

  /* The links sit together in one capsule, with the current section filled in */
  .nav {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--glass-line);
    border-radius: 999px;
    background: var(--glass);
    -webkit-backdrop-filter: saturate(170%) blur(18px);
    backdrop-filter: saturate(170%) blur(18px);
  }

  .nav__link {
    padding: 6px 15px;
    border-radius: 999px;
    color: var(--ink-soft);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  .nav__link:hover {
    background: color-mix(in srgb, var(--ink) 6%, transparent);
    color: var(--ink);
  }

  .nav__link--active,
  .nav__link--active:hover {
    background: var(--accent-soft);
    color: var(--ink);
  }

  .nav__icon,
  .nav__chevron,
  .nav__foot {
    display: none;
  }

  .menu-button {
    display: none;
    width: 38px;
    height: 38px;
    padding: 0;
    border: 1px solid var(--glass-line);
    border-radius: 999px;
    background: var(--glass);
    cursor: pointer;
  }

  .menu-button__line {
    display: block;
    width: 16px;
    height: 2px;
    margin: 4px auto;
    border-radius: 2px;
    background: var(--ink);
    transition: transform 0.25s var(--ease-out);
  }

  .header--open .menu-button__line:first-child {
    transform: translateY(3px) rotate(45deg);
  }

  .header--open .menu-button__line:last-child {
    transform: translateY(-3px) rotate(-45deg);
  }

  /* Theme button */
  .theme {
    display: grid;
    place-items: center;
    flex: none;
    width: 38px;
    height: 38px;
    padding: 0;
    border: 1px solid var(--glass-line);
    border-radius: 999px;
    background: var(--glass);
    color: var(--ink-soft);
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  .theme:hover {
    background: var(--accent-soft);
    color: var(--ink);
  }

  .theme__icon {
    width: 17px;
    height: 17px;
    overflow: visible;
  }

  .theme__core,
  .theme__cut,
  .theme__rays {
    transform-box: fill-box;
    transform-origin: center;
    transition:
      transform 0.5s var(--ease-out),
      opacity 0.3s ease;
  }

  :root[data-theme='dark'] .theme__core {
    transform: scale(1.7);
  }

  :root[data-theme='dark'] .theme__cut {
    transform: translate(-9px, 0);
  }

  :root[data-theme='dark'] .theme__rays {
    opacity: 0;
    transform: rotate(-90deg) scale(0.5);
  }

  /* Buttons */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    border: 0;
    border-radius: 999px;
    background: var(--gradient);
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    overflow-wrap: anywhere;
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .button:hover {
    box-shadow: 0 12px 26px -12px rgba(2, 119, 181, 0.7);
    transform: translateY(-1px);
  }

  .button--small {
    padding: 9px 18px;
    font-size: 14px;
  }

  .button--ghost {
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--ink);
  }

  .button--ghost:hover {
    border-color: var(--accent);
    box-shadow: none;
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
    position: relative;
    overflow: hidden;
    margin-top: calc(-1px - var(--header-height));
    padding: calc(97px + var(--header-height)) 0 96px;
    background: var(--paper);
  }

  .hero__glow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(560px 420px at 88% 8%, rgba(56, 189, 248, 0.24), transparent 70%),
      radial-gradient(460px 240px at 62% 70%, rgba(14, 165, 233, 0.14), transparent 70%);
    pointer-events: none;
  }

  .hero__accent {
    background: var(--headline-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hero__grid {
    position: relative;
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
    color: var(--ink-soft);
    font-size: 18px;
  }

  .hero__name {
    color: var(--ink);
    font-family: var(--font-heading);
    font-weight: 600;
    letter-spacing: -0.02em;
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
    border-top: 1px solid var(--line);
  }

  .hero__fact-value {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 600;
  }

  .hero__fact-label {
    color: var(--ink-soft);
    font-size: 14px;
  }

  /* Services */
  .services {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin: 48px 0 0;
    padding: 0;
    list-style: none;
  }

  .services__item {
    display: flex;
  }

  .service {
    display: flex;
    gap: 20px;
    width: 100%;
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .service__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: var(--icon-bg);
    color: var(--accent);
  }

  .service__title {
    font-size: 20px;
  }

  .service__text {
    margin-top: 8px;
    color: var(--ink-soft);
  }

  /* Work */
  .work {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
    margin-top: 48px;
  }

  .work__item {
    display: flex;
  }

  .project {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--paper);
  }

  /* The picture fills the top of the card, and leans in a little on hover */
  .project__media {
    margin: -28px -28px 24px;
    overflow: hidden;
    border-bottom: 1px solid var(--line);
    border-radius: calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0;
  }

  .project__image {
    display: block;
    width: 100%;
    height: auto;
    transition: transform 0.6s var(--ease-out);
  }

  .project:hover .project__image {
    transform: scale(1.03);
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
    color: var(--status-ink);
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
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: 10px;
    margin-top: 22px;
    color: var(--accent);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }

  /* A line draws in from the left, and leaves to the right */
  .project__link-text {
    position: relative;
  }

  .project__link-text::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;
    height: 2px;
    border-radius: 2px;
    background: var(--headline-gradient);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s var(--ease-out);
  }

  .project__link:hover .project__link-text::after,
  .project__link:focus-visible .project__link-text::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .project__arrow {
    position: relative;
    flex: none;
    width: 26px;
    height: 26px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--accent-soft);
    transition: color 0.25s ease;
  }

  /* The fill fades in on its own layer, because a gradient background can't fade */
  .project__arrow::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient);
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .project__arrow-icon {
    position: absolute;
    inset: 6px;
    width: 14px;
    height: 14px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.45s var(--ease-out);
  }

  .project__arrow-icon:last-child {
    transform: translate(-22px, 22px);
  }

  /* Pointing at the card already gives the arrow a small nudge */
  .project:hover .project__arrow-icon:first-child {
    transform: translate(2px, -2px);
  }

  .project__link:hover .project__arrow,
  .project__link:focus-visible .project__arrow {
    color: #fff;
  }

  .project__link:hover .project__arrow::before,
  .project__link:focus-visible .project__arrow::before {
    opacity: 1;
  }

  .project__link:hover .project__arrow-icon:first-child,
  .project__link:focus-visible .project__arrow-icon:first-child {
    transform: translate(22px, -22px);
  }

  .project__link:hover .project__arrow-icon:last-child,
  .project__link:focus-visible .project__arrow-icon:last-child {
    transform: none;
    transition-delay: 0.06s;
  }

  /* Process */
  .section--steps {
    background: var(--steps-bg);
  }

  .steps {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    margin: 52px 0 0;
    padding: 0;
    list-style: none;
  }

  .step {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  /* The line to the next step draws itself when the step appears */
  .step:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 46px;
    right: -20px;
    height: 2px;
    background: var(--headline-gradient);
    opacity: 0.55;
    transform-origin: left;
    transition: transform 0.9s var(--ease-out) calc(var(--reveal-delay, 0ms) + 200ms);
  }

  .step__number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border: 2px solid var(--accent);
    border-radius: 50%;
    background: var(--surface);
    color: var(--accent);
    font-family: var(--font-heading);
    font-size: 14px;
    font-weight: 700;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .step:hover .step__number {
    background: var(--accent);
    color: var(--surface);
  }

  .step__card {
    flex: 1;
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .step__title {
    font-size: 19px;
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
    background: var(--contact-bg);
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
    color: var(--ink-soft);
  }

  .contact__reach {
    display: grid;
    flex: none;
    gap: 16px;
  }

  .contact__phones {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .contact__phone {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 16px;
  }

  .contact__link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--ink);
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s ease;
  }

  .contact__link:hover {
    color: var(--accent);
  }

  .contact__link--whatsapp {
    color: var(--accent);
    font-size: 14px;
    font-weight: 600;
  }

  .contact__link--whatsapp:hover {
    color: var(--ink);
  }

  .contact__icon {
    flex: none;
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Footer */
  .footer {
    padding: 22px 0;
    background: var(--surface);
    border-top: 1px solid var(--line);
    color: var(--ink-soft);
    font-size: 13px;
  }

  .footer__inner {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  @media (max-width: 960px) {
    /* The links no longer fit on one line: they move into the menu */
    .menu-button {
      display: block;
    }

    .header__bar {
      grid-template-columns: 1fr auto;
    }

    .header__cta {
      display: none;
    }

    /* The menu fills the screen under the bar */
    .nav {
      position: absolute;
      top: calc(100% + 1px);
      left: 0;
      right: 0;
      height: calc(100vh - var(--header-height) - 1px);
      height: calc(100dvh - var(--header-height) - 1px);
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding: 12px var(--gutter) max(24px, env(safe-area-inset-bottom));
      overflow-y: auto;
      border: 0;
      border-radius: 0;
      background:
        radial-gradient(420px 300px at 100% 100%, rgba(56, 189, 248, 0.14), transparent 70%),
        radial-gradient(360px 260px at 0% 100%, rgba(14, 165, 233, 0.08), transparent 70%),
        var(--glass-menu);
      -webkit-backdrop-filter: saturate(170%) blur(28px);
      backdrop-filter: saturate(170%) blur(28px);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-6px);
      transition:
        opacity 0.2s ease,
        transform 0.3s var(--ease-out),
        visibility 0.2s;
    }

    .nav--open {
      opacity: 1;
      visibility: visible;
      transform: none;
    }

    .nav__link {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid var(--glass-line);
      border-radius: 0;
      color: var(--ink);
      font-family: var(--font-heading);
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.02em;
      opacity: 0;
      transform: translateY(8px);
      transition:
        opacity 0.35s ease,
        transform 0.45s var(--ease-out);
    }

    /* The links come in one after the other */
    .nav--open .nav__link {
      opacity: 1;
      transform: none;
      transition-delay: calc(var(--i) * 45ms + 50ms);
    }

    .nav__link:hover,
    .nav__link--active,
    .nav__link--active:hover {
      background: none;
    }

    /* The same soft tile as the service cards, filled in for the current section */
    .nav__icon {
      display: grid;
      place-items: center;
      flex: none;
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: var(--icon-bg);
      color: var(--accent);
    }

    .nav__icon svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .nav__link--active .nav__icon {
      background: var(--gradient);
      color: #fff;
    }

    .nav__chevron {
      display: block;
      width: 18px;
      height: 18px;
      margin-left: auto;
      fill: none;
      stroke: var(--ink-soft);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .nav__foot {
      display: grid;
      gap: 18px;
      margin-top: auto;
      padding-top: 32px;
    }

    .nav__contact {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 4px 16px;
      color: var(--ink-soft);
      font-size: 13.5px;
    }

    .nav__contact a {
      text-decoration: none;
    }

    .nav__contact a:hover {
      color: var(--ink);
    }

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
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .step:not(:last-child)::before {
      top: 46px;
      bottom: -16px;
      left: 22px;
      right: auto;
      width: 2px;
      height: auto;
      transform-origin: top;
    }

    .step {
      flex-direction: row;
      gap: 16px;
    }

    .step__number {
      flex: none;
    }
  }

  /* Short screens: the whole menu still fits */
  @media (max-width: 960px) and (max-height: 620px) {
    .nav__link {
      padding: 8px 0;
      font-size: 20px;
    }

    .nav__icon {
      width: 36px;
      height: 36px;
    }

    .nav__foot {
      gap: 12px;
      padding-top: 20px;
    }
  }

  @media (max-width: 760px) {
    .section,
    .contact {
      padding: 64px 0;
    }

    .hero {
      padding: calc(57px + var(--header-height)) 0 64px;
    }

    .service {
      padding: 22px;
      gap: 16px;
    }

    .services {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .contact__inner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
