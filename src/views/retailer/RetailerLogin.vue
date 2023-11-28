<template lang="pug">
RetailerHeader
.retailer-login
  h1.retailer-login__title Log in

  form.retailer-login__form(@submit.prevent='default')
    p.retailer-login__form-item
      label.retailer-login__form-label(for='email') Mail
      input.retailer-login__form-input(
        v-model.lazy.trim='retailerLoginForm.email'
        type='email'
        placeholder='your.email@domain.com'
        name='email'
        required
      )
    
    p.retailer-login__form-item
      label.retailer-login__form-label(for='password') Password
      input.retailer-login__form-input(
        v-model.lazy.trim='retailerLoginForm.password'
        type='password'
        name='password'
        required
      )

    .retailer-login__button(type='submit' @click='onRetailerLogin') Sign In
</template>

<script setup>
import { reactive } from 'vue'
import router from '@/router'
import retailerClient from '@/api/retailer-client'
import { useRetailerStore } from '@/stores/retailer'

import RetailerHeader from '@/components/retailer/RetailerHeader.vue'

const retailer = useRetailerStore()

const retailerLoginForm = reactive({
  email: null,
  password: null
})

const onRetailerLogin = async () => {
  try {
    await retailer.login({ retailer: retailerLoginForm })
    router.push({ path: '/retailer' })
  } catch {
    console.log("🐗 can't sign in retailer")
  }
}
</script>

<style>
.retailer-login
  display: flex
  flex-direction: column
  align-items: center
  margin: 0
  padding: 0 2vh

.retailer-login__title
  color: var(--limone)

.retailer-login__form
  display: flex
  flex-direction: column
  width: 100%

.retailer-login__form-item
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  margin: 20px 0

.retailer-login__form-label
  font-size: 18px
  flex-grow: 0

.retailer-login__form-input
  font-family: 'Sofia'
  font-size: 16px
  flex-grow: 1
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  padding: 10px
  margin-top: 10px

.retailer-login__button
  display: flex
  align-items: center
  justify-content: center
  width: 24vw
  color: var(--lynx-white)
  background: var(--limone)
  border-radius: 10px
  cursor: pointer
  margin: 24px auto 12px
  padding: 10px

@media (min-width: 810px)
  .retailer-login__button
    width: 8vw
</style>
