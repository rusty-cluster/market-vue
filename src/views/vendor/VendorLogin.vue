<template lang='pug'>
VendorHeader
.vendor-login
  h1.vendor-login__title Log In

  form.vendor-login__form(@submit.prevent='default')
    p.vendor-login__item
      label.vendor-login__label(for='email') Email
      input.vendor-login__input(
        v-model.lazy.trim='vendorForm.email'
        type='email'
        placeholder='john@doe.io'
        name='email'
        required
      )
    p.vendor-login__item
      label.vendor-login__label(
        for='password'
        type='password'
        id='new-password'
      ) Password
      input.vendor-login__input(
        v-model.lazy.trim='vendorForm.password'
        type='password'
        name='password'
        required
      )
    .vendor-login__submit(type='submit' @click='loginVendor') Sign In
</template>

<script setup>
import { reactive } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
import vendorClient from '@/api/vendor-client'
import { useVendorStore } from '@/stores/vendor'
import router from '@/router'

const vendor = useVendorStore()

const vendorForm = reactive({
  email: null,
  password: null,
})

const loginVendor = async () => {
  try {
    await vendor.login({ vendor: vendorForm })
    router.push({ path: '/vendor' })
  } catch {
    console.log("🐗 can't register vendor")
  }
}
</script>

<style>
.vendor-login
  margin: 0
  padding: 0 8vw
  display: flex
  flex-direction: column

.vendor-login__title
  display: flex
  justify-content: center
  color: var(--nero)
  margin: 10px

.vendor-login__form
  display: flex
  flex-direction: column
  box-sizing: border-box

.vendor-login__item
  display: flex
  flex-direction: column
  margin: 16px 0

.vendor-login__label
  display: flex
  font-size: 18px
  padding: 10px 0

.vendor-login__input
  display: flex
  color: var(--nero)
  background: var(--lynx-white)
  font-family: 'Sofia'
  font-size: 16px
  padding: 16px 20px
  box-sizing: border-box
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 10px

.vendor-login__submit
  display: flex
  justify-content: center
  padding: 16px 20px
  margin: 4vh 0
  border-radius: 10px
  cursor: pointer
  background: var(--nero)
  color: var(--lynx-white)
</style>
