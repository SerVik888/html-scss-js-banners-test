const bannerList = document.querySelectorAll('.banner')
bannerList.forEach(el => {
  el.addEventListener('click', e => {
    const self = e.currentTarget
    const control = self.querySelector('.banner__control')
    const content = self.querySelector('.banner__content')
    self.classList.toggle('open')
    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true)
      control.setAttribute('aria-hidden', false)
      content.style.maxHeight = content.scrollHeight + 'px'
    } else {
      control.setAttribute('aria-expanded', false)
      control.setAttribute('aria-hidden', true)
      content.style.maxHeight = null
    }
  })
})
