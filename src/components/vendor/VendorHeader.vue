<template lang='pug'>
.vendor-header
  .vendor-header__menu
    img.vendor-header__svg(src='@/assets/icons/menu.svg')

  .vendor-header__logo mrkt+

  .vendor-header__search
    img.vendor-header__svg(src='@/assets/icons/magnifying-glass.svg')
</template>

<style>
.vendor-header
  display: flex
  align-items: center
  box-sizing: border-box
  background: var(--white)
  padding: 0 8vw
  position: sticky
  top: 0
  height: 10vh

.vendor-header__menu
  width: 24px
  display: flex
  align-items: center

.vendor-header__search
  width: 24px
  display: flex
  align-items: center

.vendor-header__logo
  padding: 20px
  margin: 0 16px
  flex: 1 1 auto
  font-size: 28px
  text-align: center
  letter-spacing: -2px
  color: var(--mine-shaft)

.vendor-header__svg
  position: relative
</style>
