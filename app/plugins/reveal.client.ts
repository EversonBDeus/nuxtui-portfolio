// plugins/reveal.client.ts
import { defineNuxtPlugin } from '#app'

type RevealOptions = {
  once?: boolean
  delay?: number // ms
  duration?: number // ms
  distance?: number // px
  origin?: 'bottom' | 'top' | 'left' | 'right'
  threshold?: number
  rootMargin?: string
}

const DEFAULTS: Required<RevealOptions> = {
  once: true,
  delay: 0,
  duration: 650,
  distance: 18,
  origin: 'bottom',
  threshold: 0.12,
  rootMargin: '0px 0px -10% 0px'
}

function getOptions(bindingValue: unknown): Required<RevealOptions> {
  if (bindingValue && typeof bindingValue === 'object') {
    const v = bindingValue as RevealOptions
    return {
      once: v.once ?? DEFAULTS.once,
      delay: v.delay ?? DEFAULTS.delay,
      duration: v.duration ?? DEFAULTS.duration,
      distance: v.distance ?? DEFAULTS.distance,
      origin: v.origin ?? DEFAULTS.origin,
      threshold: v.threshold ?? DEFAULTS.threshold,
      rootMargin: v.rootMargin ?? DEFAULTS.rootMargin
    }
  }
  return DEFAULTS
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      const opts = getOptions(binding.value)

      // classes base
      el.classList.add('reveal')
      el.classList.add(`reveal--${opts.origin}`)

      // css vars (para controlar sem ficar criando mil classes)
      el.style.setProperty('--reveal-delay', `${opts.delay}ms`)
      el.style.setProperty('--reveal-duration', `${opts.duration}ms`)
      el.style.setProperty('--reveal-distance', `${opts.distance}px`)

      // evita reprocessar o mesmo elemento
      const already = (el as any).__revealObserver as IntersectionObserver | undefined
      if (already) already.disconnect()

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue

            el.classList.add('reveal--visible')

            if (opts.once) {
              observer.unobserve(el)
            }
          }
        },
        {
          threshold: opts.threshold,
          rootMargin: opts.rootMargin
        }
      )

      ;(el as any).__revealObserver = observer
      observer.observe(el)
    },
    unmounted(el) {
      const obs = (el as any).__revealObserver as IntersectionObserver | undefined
      if (obs) obs.disconnect()
      delete (el as any).__revealObserver
    }
  })
})