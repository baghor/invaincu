import type { Directive } from 'vue'
import { defineNuxtPlugin } from '#imports'

/*
 * v-reveal="delayMs": the element fades and rises into place the first time
 * it scrolls into view.
 *
 * v-spotlight: a soft light follows the mouse across a card. Mouse only.
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () =>
    (observer ??= new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          ;(entry.target as HTMLElement).dataset.in = ''
          observer?.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.04 }
    ))

  const reveal: Directive<HTMLElement, number | undefined> = {
    getSSRProps: () => ({ 'data-reveal': '' }),

    mounted(el, binding) {
      el.dataset.reveal = ''

      if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)

      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.dataset.in = ''
        return
      }

      getObserver().observe(el)
    },

    unmounted(el) {
      observer?.unobserve(el)
    },
  }

  const spotlight: Directive<HTMLElement> = {
    getSSRProps: () => ({}),

    mounted(el) {
      el.addEventListener('pointermove', (event: PointerEvent) => {
        if (event.pointerType !== 'mouse') return

        const box = el.getBoundingClientRect()

        el.style.setProperty('--mx', `${event.clientX - box.left}px`)
        el.style.setProperty('--my', `${event.clientY - box.top}px`)
      })
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
  nuxtApp.vueApp.directive('spotlight', spotlight)

  // Tells the head script the app started, so revealed content stays hidden until it scrolls in
  if (import.meta.client) (window as Window & { __motion?: boolean }).__motion = true
})
