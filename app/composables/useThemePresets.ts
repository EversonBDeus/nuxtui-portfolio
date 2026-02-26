export type ThemePresetId =
  | 'ux-mastery'
  | 'neon-spectrum'
  | 'lava-sunset'
  | 'pastel-pop'
  | 'aquatech-minimal'
  | 'ux-elite'
  | 'rose-wine'
  | 'minty-dark'
  | 'sunset-lava'
  | 'cyber-lime'

export type ThemePreset = {
  id: ThemePresetId
  label: string
  colors: {
    primary: string
    secondary: string
    tertiary: string
    success: string
    info: string
    warning: string
    error: string
    neutral: string
  }
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'ux-mastery',
    label: 'UX Mastery',
    colors: {
      primary: 'uxblue',
      secondary: 'uxpurple',
      tertiary: 'ocean',
      success: 'uxgreen',
      info: 'candysky-sky',
      warning: 'sunrise-amber',
      error: 'uxred',

      // ✅ IMPORTANTÍSSIMO (legibilidade):
      // neutral controla "cinzas", textos muted, fundos e variantes soft/subtle.
      // slate é um neutral equilibrado para light/dark.
      neutral: 'slate'
    }
  },
  {
    id: 'neon-spectrum',
    label: 'Neon Spectrum',
    colors: {
      primary: 'neonspectrum-cyan',
      secondary: 'neonspectrum-deep',
      tertiary: 'combo05-mint',
      success: 'neonspectrum-lime',
      info: 'neonspectrum-azure',
      warning: 'sunrise-orange',
      error: 'rosewine-crimson',
      neutral: 'combo04-charcoal'
    }
  },
  {
    id: 'lava-sunset',
    label: 'Lava & Sunset',
    colors: {
      primary: 'sunrise-orange',
      secondary: 'lavasky-violet',
      tertiary: 'sunrise-coral',
      success: 'brand',
      info: 'lavasky-azure',
      warning: 'sunrise-amber',
      error: 'sunrise-red',
      neutral: 'combo03-espresso'
    }
  },
  {
    id: 'pastel-pop',
    label: 'Pastel Pop',
    colors: {
      primary: 'pastelpop-lilac',
      secondary: 'pastelpop-mint',
      tertiary: 'pastelpop-sky',
      success: 'aquatech-mint',
      info: 'candysky-ice',
      warning: 'pastelpop-butter',
      error: 'rosewine-petal',
      neutral: 'combo05-ice'
    }
  },
  {
    id: 'aquatech-minimal',
    label: 'Aquatech Minimal',
    colors: {
      primary: 'aquatech-teal',
      secondary: 'aquatech-cyan',
      tertiary: 'combo05-blue',
      success: 'neonspectrum-green',
      info: 'aquatech-electric',
      warning: 'sunrise-amber',
      error: 'rosewine-berry',
      neutral: 'combo01-paper'
    }
  },
  {
    id: 'ux-elite',
    label: 'The UX Elite',
    colors: {
      primary: 'uxpurple',
      secondary: 'uxblue',
      tertiary: 'uxgreen',
      success: 'brand',
      info: 'candysky-blue',
      warning: 'sunrise-amber',
      error: 'uxred',
      neutral: 'combo01-ink'
    }
  },
  {
    id: 'rose-wine',
    label: 'Rose Wine',
    colors: {
      primary: 'rosewine-crimson',
      secondary: 'rosewine-berry',
      tertiary: 'rosewine-petal',
      success: 'uxgreen',
      info: 'lavasky-azure',
      warning: 'sunrise-cream',
      error: 'rosewine-mauve',
      neutral: 'combo03-espresso'
    }
  },
  {
    id: 'minty-dark',
    label: 'Minty Dark Mode',
    colors: {
      primary: 'combo05-mint',
      secondary: 'combo05-blue',
      tertiary: 'combo05-ice',
      success: 'neonspectrum-green',
      info: 'aquatech-electric',
      warning: 'pastelpop-butter',
      error: 'uxred',
      neutral: 'combo05-ink'
    }
  },
  {
    id: 'sunset-lava',
    label: 'Sunset Lava',
    colors: {
      primary: 'sunrise-orange',
      secondary: 'lavasky-violet',
      tertiary: 'sunrise-coral',
      success: 'uxgreen',
      info: 'lavasky-azure',
      warning: 'sunrise-amber',
      error: 'sunrise-red',
      neutral: 'combo03-taupe'
    }
  },
  {
    id: 'cyber-lime',
    label: 'Cyber Lime',
    colors: {
      primary: 'neonspectrum-lime',
      secondary: 'neonspectrum-azure',
      tertiary: 'neonspectrum-cyan',
      success: 'neonspectrum-green',
      info: 'aquatech-electric',
      warning: 'sunrise-amber',
      error: 'uxred',
      neutral: 'combo04-charcoal'
    }
  }
]

export function useThemePresets() {
  const cookie = useCookie<ThemePresetId>('theme', { default: () => 'cyber-lime' })

  const preset = computed<ThemePreset>(() => {
    return THEME_PRESETS.find((t) => t.id === cookie.value) ?? THEME_PRESETS[0]
  })

  function setPreset(id: ThemePresetId) {
    cookie.value = id
  }

  return {
    presets: THEME_PRESETS,
    preset,
    setPreset
  }
}