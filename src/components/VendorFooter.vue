<template lang='pug'>
.vendor-footer
  .vendor-footer__thematic-break
  .vendor-footer__link All link Reserved
  .vendor-footer__link Terms And conditions
  .vendor-footer__link Privacy Policy
  .vendor-footer__link © 2022 .mrkt
</template>

<style>
.vendor-footer
  display: flex
  padding-top: 40px
  padding-bottom: 20px
  flex-direction: column
  align-items: center
  font-size: 14px
  color: var(--holy-crow)
  box-sizing: border-box

.vendor-footer__thematic-break
  border-top: 1px solid var(--limone)
  width: 88vw
  margin-bottom: 20px

.vendor-footer__link
  padding: 4px
  cursor: pointer
  flex-grow: 2
</style>
