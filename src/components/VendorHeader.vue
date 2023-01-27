<template lang='pug'>
.vendor-header
  .vendor-header__icon-menu
    img.vendor-header__icon-svg(src='@/assets/icons/menu.svg')

  .vendor-header__logo mrkt

  .vendor-header__icon-search
    img.vendor-header__icon-svg(src='@/assets/icons/magnifying-glass.svg')
</template>

<style>
.vendor-header
  display: flex
  align-items: center
  box-sizing: border-box
  background: var(--faded-grey)
  padding: 0 20px
  position: sticky
  top: 0
  height: 11vh

.vendor-header__icon-menu
  display: flex
  align-items: center
  justify-content: center
  border: 2px solid var(--kamenozoki-grey)
  border-radius: 8px
  cursor: pointer
  height: 30px
  width: 30px

.vendor-header__icon-search
  display: flex
  align-items: center
  justify-content: center
  background: var(--lynx-white)
  border-radius: 100%
  cursor: pointer
  height: 34px
  width: 34px

.vendor-header__icon-svg
  height: 18px
  width: 18px

.vendor-header__logo
  flex: 1 1 auto
  font-size: 24px
  letter-spacing: -2px
  margin: 0 16px

</style>
