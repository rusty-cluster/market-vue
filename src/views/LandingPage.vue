<template lang='pug'>
.landing-page(id="main")
  .landing-page__header(id="header")
    .landing-page__icon-menu
      img.landing-page__icon-svg(src='@/assets/icons/menu.svg')

    .landing-page__logo mrkt+

    .landing-page__icon-login
      img.landing-page__icon-svg(src='@/assets/icons/user.svg')

  .landing-page__roles
    .landing-page__links
      router-link.landing-page__link(:to="{ name: 'RetailerDashboard' }")
        .landing-page__name retailer
      router-link.landing-page__link(:to="{ name: 'VendorDashboard' }")
        .landing-page__name vendor
    .landing-page__move-on
      a.landing-page__button(href='#brief') more

  .landing-page__line
  .landing-page__brief(id="brief")
    p.landing-page__text Our store allows you to conveniently manage your sales and orders.
      br
      | lifeIdeal for both small businesses and large companies.
    .landing-page__move-on
      a.landing-page__button(href='#main') back
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
  scroll-behavior: smooth

.landing-page__header
  background: #ffffff
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
  border: 2px solid var(--ski-patrol)
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
  height: 22px
  width: 22px

.landing-page__logo
  flex: 1 1 auto
  font-size: 24px
  letter-spacing: -2px
  margin: 0 16px

.landing-page__roles
  font-size: 72px
  display: flex
  flex-direction: column
  background: url(/src/assets/images/background.jpg) no-repeat
  background-size: cover
  height: 90vh
  width: 100%
  box-sizing: border-box
  padding: 10px

.landing-page__links
  display: flex
  flex-direction: column
  align-items: center
  margin: 40px 0
  line-height: 70px
  height: 80vh

.landing-page__link
  color: var(--ski-patrol)
  font-weight: bold

.landing-page__button
  color: var(--ski-patrol)

.landing-page__move-on
  font-size: 40px
  display: flex
  align-self: center
  height: 10vh

.landing-page__line
  width: 100%
  border-top: 2px solid var(--ski-patrol)

.landing-page__brief
  display: flex
  justify-content: center
  box-sizing: border-box
  height: 90vh
  flex-direction: column
  padding: 10px

.landing-page__text
  display: flex
  align-items: center
  font-size: 42px
  color: var(--ski-patrol)
  line-height: 42px
  height: 90vh
</style>
