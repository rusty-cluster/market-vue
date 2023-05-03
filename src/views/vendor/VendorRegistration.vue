<template lang='pug'>
VendorHeader
.vendor-registration
  h1.vendor-registration__title Sign up

  form.vendor-registration__form
    p.vendor-registration__form-item
      label.vendor-registration__form-label(for='username') Mail
      input.vendor-registration__form-input(
        v-model=' registration.mail'
        type='text'
        placeholder='elon@musk.io'
        name='mail'
        required
      )
    p.vendor-registration__form-item
      label.vendor-registration__form-label(for='password') Password
      input.vendor-registration__form-input(
        v-model=' registration.password'
        type='password'
        name='password'
        required
      )

    p.vendor-registration__form-item
      label.vendor-registration__form-label(for='confirmPassword') Confirm password
      input.vendor-registration__form-input(
        v-model=' registration.confirmPassword'
        type='password'
        name='confirmPassword'
        required
      )
    .vendor-registration__submit(type='submit') Save
</template>

<script setup>
import { reactive } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'

const registration = reactive({
  mail: null,
  password: null,
  confirmPassword: null,
})
</script>

<style>
.vendor-registration
  margin: 0
  padding: 0 2vh
  display: flex
  flex-direction: column

.vendor-registration__title
  display: flex
  justify-content: center
  color: var(--limone)
  margin: 10px

.vendor-registration__form
  display: flex
  flex-direction: column
  box-sizing: border-box

.vendor-registration__form-item
  display: flex
  flex-direction: column

.vendor-registration__form-label
  display: flex
  font-size: 18px

.vendor-registration__form-input
  display: flex
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  font-family: 'Sofia'
  font-size: 16px
  padding: 10px

.vendor-registration__submit
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
