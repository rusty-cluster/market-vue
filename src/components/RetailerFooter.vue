<template lang='pug'>
.retailer-footer
  .retailer-footer__thematic-break
  .retailer-footer__link All link Reserved
  .retailer-footer__link Terms And conditions
  .retailer-footer__link Privacy Policy
  .retailer-footer__link © 2022 mrkt
</template>

<style>
.retailer-footer
  font-size: 14px
  display: flex
  flex-direction: column
  align-items: center
  padding: 5vh 2vh 2.5vh
  color: var(--holy-crow)
  box-sizing: border-box

.retailer-footer__thematic-break
  align-self: stretch
  border-top: 1px solid var(--limone)
  margin-bottom: 2.5vh

.retailer-footer__link
  flex-grow: 2
  padding: 0.5vh
  cursor: pointer
</style>