<template lang='pug'>
.vendor-header
  .vendor-header__menu
    svg.vendor-header__menu-icon(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 20 20' stroke-width='1.2' stroke='currentColor')
      path(stroke-linecap='round' stroke-linejoin='round' d='M3.75 9h16.5m-16.5 6.75h16.5')

  .vendor-header__logo .mrkt

  .vendor-header__inbox
    svg.vendor-header__inbox-icon(xmlns='http://www.w3.org/2000/svg' fill='none' viewbox='0 0 24 24' stroke-width='1.2' stroke='currentColor')
      path(stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75')
</template>

<style>
.vendor-header
  display: flex
  align-items: center
  box-sizing: border-box
  height: 10vh
  position: sticky
  top: 0
  background: var(--bleached-silk)

.vendor-header__menu
  margin-right: 20px
  cursor: pointer

.vendor-header__menu-icon
  padding: 8px
  height: 24px
  width: 24px
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 14px

.vendor-header__logo
  font-size: 24px
  letter-spacing: -2px
  flex: 1 1 auto

.vendor-header__inbox
  width: 10vw
  cursor: pointer

.vendor-header__inbox-icon
  height: 24px
  width: 24px
</style>
