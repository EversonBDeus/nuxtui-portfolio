import type { DirectiveBinding, ObjectDirective } from 'vue'

type RevealOptions = {
  once?: boolean
  delay?: number
  duration?: number
  distance?: number
  origin?: 'bottom' | 'top' | 'left' | 'right'
  threshold?: number
  rootMargin?: string
}

type RevealElement = HTMLElement & {
  __revealObserver?: IntersectionObserver
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

const revealDirective: ObjectDirective<RevealElement, RevealOptions> = {
  mounted(el: RevealElement, binding: DirectiveBinding<RevealOptions>) {
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

    if (el.__revealObserver) {
      el.__revealObserver.disconnect()
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

    el.__revealObserver = observer
    observer.observe(el)
  },

  unmounted(el: RevealElement) {
    if (el.__revealObserver) {
      el.__revealObserver.disconnect()
      delete el.__revealObserver
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', revealDirective)
})