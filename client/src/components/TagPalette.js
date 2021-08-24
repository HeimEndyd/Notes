export const tagPalette = {
  red: 'red darken-1',
  pink: 'pink darken-1',
  purple: 'purple darken-1',
  cyan: 'cyan darken-1',
  green: 'green darken-1',
  lime: 'lime darken-1',
  yellow: 'yellow darken-1',
  orange: 'orange darken-1',
  Color: function (index) {
    return this[Object.keys(this)[index % 8]]
  },
}
