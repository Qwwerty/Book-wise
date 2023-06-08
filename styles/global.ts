import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 400,
    color: '$gray100',
  },
})
