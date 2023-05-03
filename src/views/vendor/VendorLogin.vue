<template lang='pug'>
VendorHeader
.vendor-login
  h1.vendor-login__title Log In

  form.vendor-login__form
    p.vendor-login__form-item
      label.vendor-login__form-label(for='mail') Mail
      input.vendor-login__form-input(
        v-model='login.mail'
        type='text'
        placeholder='elon@musk.io'
        name='mail'
        required
      )
    p.vendor-login__form-item
      label.vendor-login__form-label(for='password') Password
      input.vendor-login__form-input(
        v-model='login.password'
        type='password'
        name='password'
        required
      )
    .vendor-login__submit(type='submit') Save
</template>

<script setup>
import { reactive } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'

const login = reactive({
  username: null,
  password: null,
})
</script>

<style>
.vendor-login
  margin: 0
  padding: 0 2vh
  display: flex
  flex-direction: column

.vendor-login__title
  display: flex
  justify-content: center
  color: var(--limone)
  margin: 10px

.vendor-login__form
  display: flex
  flex-direction: column
  box-sizing: border-box

.vendor-login__form-item
  display: flex
  flex-direction: column

.vendor-login__form-label
  display: flex
  font-size: 18px

.vendor-login__form-input
  display: flex
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.vendor-login__submit
  width: 24vw
  display: flex
  justify-content: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  cursor: pointer
  background: var(--limone)
  color: var(--lynx-white)
</style>
