<template lang="pug">
RetailerHeader

.retailer-registration
  h1.retailer-registration__title Sign up

  form.retailer-registration__form(@submit.prevent='default')
    p.retailer-registration__form-item
      label.retailer-registration__form-label(for='name') Name
      input.retailer-registration__form-input(
        v-model.lazy.trim='retailerRegistrationForm.name'
        type='text'
        placeholder='your.name'
        name='name'
        required
      )
    
    p.retailer-registration__form-item
      label.retailer-registration__form-label(for='email') Mail
      input.retailer-registration__form-input(
        v-model.lazy.trim='retailerRegistrationForm.email'
        type='email'
        placeholder='your.email@domain.com'
        name='email'
        required
      )
    
    p.retailer-registration__form-item
      label.retailer-registration__form-label(for='password') Password
      input.retailer-registration__form-input(
        v-model.lazy.trim='retailerRegistrationForm.password'
        type='password'
        name='password'
        required
      )

    .retailer-registration__button(type='submit' @click='onRetailerRegister') Save
</template>

<script setup>
import { reactive, ref } from 'vue'
import router from '@/router'
import retailerClient from '@/api/retailer-client'
import { useRetailerStore } from '@/stores/retailer'

import RetailerHeader from '@/components/retailer/RetailerHeader.vue'

const retailer = useRetailerStore()

const retailerRegistrationForm = reactive({
  email: null,
  name: null,
  password: null
})

const onRetailerRegister = async () => {
  try {
    await retailer.register({ retailer: retailerRegistrationForm })
    router.push({ path: '/retailer' })
  } catch {
    console.log("🐗 can't register retailer")
  }
}
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
