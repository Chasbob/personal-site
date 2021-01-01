const { hsl, rgb } = require('bulma-css-vars')

function LightenDarkenColor(col, amt) {
  let usePound = true

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0
  const out = (g | (b << 8) | (r << 16)).toString(16)
  return '#' + out.padStart(6, '0')
  // return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

function lighten(col, amt) {
  return LightenDarkenColor(col, amt)
}

function darken(col, amt) {
  return LightenDarkenColor(col, -amt)
}

// initial dark colours
const appColors = {
  black: hsl(0, 0, 4),
  'black-bis': hsl(0, 0, 7),
  'black-ter': hsl(0, 0, 14),

  'grey-light': '#8c9b9d',
  'grey-lighter': '#dbdee0',
  grey: darken('#8c9b9d', 18),
  'grey-darker': '#1f2424',
  'grey-dark': '#313636',
  'grey-lightest': lighten('#dbdee0', 18),

  'white-ter': hsl(0, 0, 96),
  'white-bis': hsl(0, 0, 98),
  white: hsl(0, 0, 100),

  orange: hsl(14, 100, 53),
  yellow: hsl(48, 100, 67),
  green: hsl(141, 53, 53),
  turquoise: hsl(171, 100, 41),
  cyan: hsl(204, 71, 53),
  blue: hsl(217, 71, 53),
  purple: hsl(271, 100, 71),
  red: hsl(348, 86, 61),
}

// dark theme colours
appColors['primary'] = '#375a7f'
appColors['info'] = appColors['cyan']
appColors['success'] = appColors['green']
appColors['warning'] = appColors['yellow']
appColors['danger'] = appColors['red']
appColors['light'] = appColors['white-ter']
appColors['dark'] = appColors['grey-darker']

// schema colours
appColors['scheme-main'] = appColors['grey-darker']
appColors['scheme-main-bis'] = appColors['white-bis']
appColors['scheme-main-ter'] = appColors['white-ter']
appColors['scheme-invert'] = appColors['black']
appColors['scheme-invert-bis'] = appColors['black-bis']
appColors['scheme-invert-ter'] = appColors['black-ter']

// background colours
appColors['background'] = appColors['grey-darker']
appColors['footer-background-color'] = appColors['background']
appColors['button-border-color'] = appColors['background']

// titles
appColors['title-color'] = '#fff'
appColors['subtitle-color'] = appColors['grey-light']
appColors['subtitle-strong-color'] = appColors['grey-light']

// borders
appColors['border'] = appColors['grey-lighter']
appColors['border-hover'] = appColors['grey-light']
appColors['border-light'] = appColors['grey-lightest']
appColors['border-light-hover'] = appColors['grey-light']

// text
appColors['text'] = '#fff'
appColors['text-light'] = appColors['grey']
appColors['text-strong'] = '#d2d2d2'

// box
appColors['box-color'] = appColors['text']
appColors['box-background-color'] = appColors['grey-dark']

// card

appColors['card-background-color'] = appColors['grey-dark']

appColors['code-background'] = appColors['background']

appColors['pre'] = appColors['text']
appColors['pre-background'] = appColors['background']

appColors['link'] = appColors['turquoise']
appColors['link-visited'] = appColors['purple']
appColors['link-hover'] = '#1abc9c'
appColors['link-hover-border'] = appColors['grey-light']
appColors['link-focus'] = lighten(appColors['link'], 5)
appColors['link-active'] = appColors['link']
appColors['link-active-border'] = appColors['grey-dark']

appColors['button-color'] = appColors['primary']
appColors['button-hover-color'] = appColors['text']
appColors['button-focus'] = appColors['text']
appColors['button-active-color'] = appColors['text']

appColors['body-background-color'] = darken(appColors['grey-darker'], 4)
appColors['body-color'] = appColors['text']
appColors['hr-background-color'] = appColors['background']
appColors['strong-color'] = appColors['text-strong']

appColors['navbar-background-color'] = appColors['primary']
appColors['navbar-item-color'] = appColors['text']
appColors['navbar-item-hover-color'] = appColors['link']
// appColors['navbar-item-hover-background-color'] = rgb(255, 255, 255, 0)
// appColors['navbar-item-active-background-color'] = rgb(0, 0, 0, 0)
appColors['navbar-divider-background-color'] = rgb(0, 0, 0, 0.2)
appColors['navbar-dropdown-border-top'] =
  appColors['navbar-divider-background-color']
appColors['navbar-dropdown-background-color'] = appColors['primary']
appColors['navbar-dropdown-item-hover-color'] = appColors['grey-lighter']
appColors['navbar-dropdown-item-active-color'] = appColors['link']

appColors['dropdown-content-background-color'] = appColors['background']
appColors['dropdown-item-color'] = appColors['text']

module.exports = {
  jsOutputFile: 'src/bulma-generated/dark/bulma-colors.js',
  sassOutputFile: 'src/bulma-generated/dark/generated-bulma-vars.sass',
  cssFallbackOutputFile: 'src/bulma-generated/dark/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'src/main.scss',
  transition: '0.5s ease',
}
