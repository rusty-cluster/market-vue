<template lang='pug'>
.landing-page__header
  .landing-page__icon-menu
    img.landing-page__icon-svg(src='@/assets/icons/menu.svg')

  .landing-page__logo mrkt

  .landing-page__icon-search
    img.landing-page__icon-svg(src='@/assets/icons/magnifying-glass.svg')
.landing-page
  .landing-page__retailer retailer
  .landing-page__vendor vendor
</template>

<script setup>
import { reactive } from 'vue'
</script>

<style>
.landing-page
  display: flex
  align-items: center
  flex-direction: column
  box-sizing: border-box
  background-image: url(/src/assets/images/background.jpg)
  padding: 0 2vh
  height: 100vh

.landing-page__header
  display: flex
  align-items: center
  box-sizing: border-box
  padding: 0 2vh
  position: sticky
  top: 0
  height: 10vh

.landing-page__icon-menu
  display: flex
  align-items: center
  justify-content: center
  border: 2px solid var(--kamenozoki-grey)
  border-radius: 8px
  cursor: pointer
  height: 30px
  width: 30px

.landing-page__icon-search
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer
  height: 34px
  width: 34px

.landing-page__icon-svg
  height: 18px
  width: 18px

.landing-page__logo
  flex: 1 1 auto
  font-size: 24px
  letter-spacing: -2px
  margin: 0 16px

.landing-page__retailer
  font-size: 40px
  display: flex
  align-items: center
  flex-direction: column

.landing-page__vendor
  font-size: 40px
  display: flex
  align-items: center
  flex-direction: column
</style>
