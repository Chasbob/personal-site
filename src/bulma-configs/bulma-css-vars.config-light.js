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

  grey: '#8c9b9d',
  'grey-light': '#a9afb7',
  'grey-lighter': '#dee2e5',
  'grey-darker': hsl(0, 0, 21),
  'grey-dark': hsl(0, 0, 29),
  'grey-lightest': hsl(0, 0, 93),

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
appColors['scheme-main'] = appColors['white']
appColors['scheme-main-bis'] = appColors['white-bis']
appColors['scheme-main-ter'] = appColors['white-ter']
appColors['scheme-invert'] = appColors['black']
appColors['scheme-invert-bis'] = appColors['black-bis']
appColors['scheme-invert-ter'] = appColors['black-ter']

// borders
appColors['border'] = appColors['grey-lighter']
appColors['border-hover'] = appColors['grey-light']
appColors['border-light'] = appColors['grey-lightest']
appColors['border-light-hover'] = appColors['grey-light']

// background colours
appColors['background'] = appColors['white']
appColors['footer-background-color'] = appColors['scheme-main-bis']
appColors['button-border-color'] = appColors['border']

// text
appColors['text'] = appColors['grey-dark']
appColors['text-light'] = appColors['grey']
appColors['text-strong'] = appColors['grey-darker']

// titles
appColors['title-color'] = appColors['text-strong']
appColors['subtitle-color'] = appColors['text']
appColors['subtitle-strong-color'] = appColors['text-strong']

// box
appColors['box-color'] = appColors['text']
appColors['box-background-color'] = appColors['white-ter']

// card

appColors['card-background-color'] = appColors['scheme-main']

appColors['code-background'] = appColors['background']

appColors['pre'] = appColors['text']
appColors['pre-background'] = appColors['background']

appColors['link'] = appColors['primary']
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

appColors['body-background-color'] = appColors['white-ter']
appColors['body-color'] = appColors['text']
appColors['hr-background-color'] = appColors['background']
appColors['strong-color'] = appColors['text-strong']

appColors['navbar-background-color'] = appColors['primary']
appColors['navbar-item-color'] = appColors['white-ter']
appColors['navbar-item-hover-color'] = appColors['white-ter']
appColors['navbar-item-active-color'] = appColors['white-ter']
appColors['navbar-item-hover-background-color'] = darken(
  appColors['primary'],
  15
)

appColors['dropdown-content-background-color'] = appColors['background']
appColors['dropdown-item-color'] = appColors['text']

module.exports = {
  jsOutputFile: 'src/bulma-generated/light/bulma-colors.js',
  sassOutputFile: 'src/bulma-generated/light/generated-bulma-vars.sass',
  cssFallbackOutputFile: 'src/bulma-generated/light/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'src/main.scss',
  transition: '0.5s ease',
}
