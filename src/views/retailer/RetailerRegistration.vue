<template lang="pug">
RetailerHeader
.retailer-registration
  h1.retailer-registration__title Sign up

  form.retailer-registration__form
    p.retailer-registration__form-item
      label.retailer-registration__form-label(for='mail') Mail
      input.retailer-registration__form-input(
        v-model.trim='registration.mail'
        type='email'
        placeholder='your.email@domain.com'
        name='mail'
        required
      )
    
    p.retailer-registration__form-item
      label.retailer-registration__form-label(for='password') Password
      input.retailer-registration__form-input(
        v-model.trim='registration.password'
        type='password'
        name='password'
        required
      )

    p.retailer-registration__form-item
      label.retailer-registration__form-label(for='confirm-password') Confirm password
      input.retailer-registration__form-input(
        v-model.trim='registration.confirmPassword'
        type='password'
        name='confirm-password'
        required
      )

    .retailer-registration__button(type='submit') Submit
</template>

<script setup>
import { reactive } from 'vue'

import RetailerHeader from '@/components/retailer/RetailerHeader.vue'

const registration = reactive({
  mail: null,
  password: null,
  confirmPassword: null,
})
</script>

<style>
.retailer-registration
  display: flex
  flex-direction: column
  align-items: center
  margin: 0
  padding: 0 2vh

.retailer-registration__title
  color: var(--limone)

.retailer-registration__form
  display: flex
  flex-direction: column
  width: 100%

.retailer-registration__form-item
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  margin: 20px 0

.retailer-registration__form-label
  font-size: 18px
  flex-grow: 0

.retailer-registration__form-input
  font-family: 'Sofia'
  font-size: 16px
  flex-grow: 1
  color: var(--holy-crow)
  background: var(--lynx-white)
  border: none
  border-radius: 6px
  padding: 10px
  margin-top: 10px

.retailer-registration__button
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
  .retailer-registration__button
    width: 8vw
</style>
