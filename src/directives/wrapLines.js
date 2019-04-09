import 'jquery.dotdotdot/dist/jquery.dotdotdot.js'

const apllydots = (el, binding) => {
  let e = $(el),
    lineHeight = parseInt(e.css('line-height'), 10),
    margin = parseInt(e.css('margin-top'), 10) +
      parseInt(e.css('margin-bottom'), 10),
    padding = parseInt(e.css('padding-top'), 10) +
      parseInt(e.css('padding-bottom'), 10),
    dot,
    title

  dot = e
    .dotdotdot({
      height: lineHeight * (binding.value.lines || 1) + margin + padding + 1,
      watch: true,
      truncate: 'letter',
      keep: binding.value.keep
    })
    .data('dotdotdot')

  title = e.attr('title') || e.parent().attr('title')

  if (title + dot.getInstance().opts.ellipsis.textContent === e.text()) {
    dot.restore()
  }
  e.css('word-break', 'break-all')
}

export default {
  inserted (el, binding) {
    apllydots(el, binding)
  },
  update (el, binding) {
    apllydots(el, binding)
  }
}
