type ThemeColorToken =
  | 'aquatech-cyan'
  | 'aquatech-electric'
  | 'aquatech-mint'
  | 'aquatech-teal'
  | 'brand'
  | 'candysky-blue'
  | 'candysky-ice'
  | 'candysky-sky'
  | 'combo01-ink'
  | 'combo01-paper'
  | 'combo03-espresso'
  | 'combo03-taupe'
  | 'combo04-charcoal'
  | 'combo05-blue'
  | 'combo05-ice'
  | 'combo05-ink'
  | 'combo05-mint'
  | 'lavasky-azure'
  | 'lavasky-violet'
  | 'neonspectrum-azure'
  | 'neonspectrum-cyan'
  | 'neonspectrum-deep'
  | 'neonspectrum-green'
  | 'neonspectrum-lime'
  | 'ocean'
  | 'pastelpop-butter'
  | 'pastelpop-lilac'
  | 'pastelpop-mint'
  | 'pastelpop-sky'
  | 'rosewine-berry'
  | 'rosewine-crimson'
  | 'rosewine-mauve'
  | 'rosewine-petal'
  | 'slate'
  | 'sunrise-amber'
  | 'sunrise-coral'
  | 'sunrise-cream'
  | 'sunrise-orange'
  | 'sunrise-red'
  | 'uxblue'
  | 'uxgreen'
  | 'uxpurple'
  | 'uxred'

type ThemeColors = {
  primary: ThemeColorToken
  secondary: ThemeColorToken
  tertiary: ThemeColorToken
  success: ThemeColorToken
  info: ThemeColorToken
  warning: ThemeColorToken
  error: ThemeColorToken
  neutral: ThemeColorToken
}

const defaultUiColors: ThemeColors = {
  primary: 'neonspectrum-lime',
  secondary: 'neonspectrum-azure',
  tertiary: 'neonspectrum-cyan',
  success: 'neonspectrum-green',
  info: 'aquatech-electric',
  warning: 'sunrise-amber',
  error: 'uxred',
  neutral: 'combo04-charcoal'
}

export default defineAppConfig({
  ui: {
    colors: defaultUiColors
  }
})