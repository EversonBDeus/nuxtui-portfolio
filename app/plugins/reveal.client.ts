import { defineNuxtPlugin } from '#app'

type RevealOptions = {
  once?: boolean
  delay?: number
  duration?: number
  distance?: number
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
    const value = bindingValue as RevealOptions

    return {
      once: value.once ?? DEFAULTS.once,
      delay: value.delay ?? DEFAULTS.delay,
      duration: value.duration ?? DEFAULTS.duration,
      distance: value.distance ?? DEFAULTS.distance,
      origin: value.origin ?? DEFAULTS.origin,
      threshold: value.threshold ?? DEFAULTS.threshold,
      rootMargin: value.rootMargin ?? DEFAULTS.rootMargin
    }
  }

  return DEFAULTS
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      const opts = getOptions(binding.value)

      el.classList.add('reveal')
      el.classList.add(`reveal--${opts.origin}`)

      el.style.setProperty('--reveal-delay', `${opts.delay}ms`)
      el.style.setProperty('--reveal-duration', `${opts.duration}ms`)
      el.style.setProperty('--reveal-distance', `${opts.distance}px`)

      if (!('IntersectionObserver' in window)) {
        el.classList.add('reveal--visible')
        return
      }

      const existingObserver = (el as HTMLElement & {
        __revealObserver?: IntersectionObserver
      }).__revealObserver

      if (existingObserver) {
        existingObserver.disconnect()
      }

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

      ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver = observer
      observer.observe(el)
    },

    unmounted(el) {
      const observer = (el as HTMLElement & {
        __revealObserver?: IntersectionObserver
      }).__revealObserver

      if (observer) {
        observer.disconnect()
      }

      delete (el as HTMLElement & {
        __revealObserver?: IntersectionObserver
      }).__revealObserver
    }
  })
})