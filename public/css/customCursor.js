const CustomCursor = require('custom-cursor.js').default

const options = {
  focusElements: ['a', 'button'],
  focusClass: 'cursor--focused'
}

const element = '.cursor'
const customCursor = new CustomCursor(element, options).initialize()