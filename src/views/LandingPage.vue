<template lang='pug'>
.landing-page
  .landing-page__header
    .landing-page__icon-menu
      img.landing-page__icon-svg(src='@/assets/icons/menu.svg')

    .landing-page__logo mrkt+

    .landing-page__icon-search
      img.landing-page__icon-svg(src='@/assets/icons/magnifying-glass.svg')

  .landing-page__roles
    router-link.landing-page__link(:to="{ name: 'RetailerDashboard' }")
      .vendor-categories__name retailer
    |
    router-link.landing-page__link(:to="{ name: 'VendorDashboard' }")
      .vendor-categories__name vendor

  p.landing-page__text 'Our store allows you to conveniently manage your sales and orders.
    br
    | lifeIdeal for both small businesses and large companies.'

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
  background-size: cover
  background: #ffffff

.landing-page__header
  display: flex
  align-items: center
  box-sizing: border-box
  position: sticky
  top: 0
  height: 10vh
  width: 100%
  padding: 0 2vh

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

.landing-page__roles
  font-size: 40px
  display: flex
  align-items:  end
  justify-content: center
  flex-direction: column
  line-height: 26px
  background: url(/src/assets/images/background.jpg) no-repeat
  height: 90vh
  width: 100%

</style>
