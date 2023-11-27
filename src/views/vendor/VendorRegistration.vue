<template lang='pug'>
VendorHeader
.vendor-registration
  h1.vendor-registration__title Sign up

  form.vendor-registration__form
    p.vendor-registration__item
      label.vendor-registration__label(for='name') Name
      input.vendor-registration__input(
        v-model=' vendorForm.name'
        type='text'
        placeholder='John'
        name='name'
        required
      )

    p.vendor-registration__item
      label.vendor-registration__label(for='email') Email
      input.vendor-registration__input(
        v-model=' vendorForm.email'
        type='email'
        placeholder='john@gmail.io'
        name='email'
        required
      )
    p.vendor-registration__item
      label.vendor-registration__label(
        type="password"
        autocomplete="new-password"
        id="new-password"
        ) Password
      input.vendor-registration__input(
        v-model=' vendorForm.password'
        type='password'
        name='password'
        required
      )

    .vendor-registration__submit(type='submit' @click="registerVendor") Create account
</template>

<script setup>
import { reactive } from 'vue'
import VendorHeader from '@/components/vendor/VendorHeader.vue'
import vendorClient from '@/api/vendor-client'
import { useVendorStore } from '@/stores/vendor'
import router from '@/router'

const vendor = useVendorStore()

const vendorForm = reactive({
  name: null,
  email: null,
  password: null,
})

const registerVendor = async () => {
  try {
    await vendor.register({ vendor: vendorForm })
    router.push({ path: '/vendor' })
  } catch {
    console.log("🐗 can't register vendor")
  }
}
</script>

<style>
.vendor-registration
  margin: 0
  padding: 0 8vw
  display: flex
  flex-direction: column

.vendor-registration__title
  display: flex
  justify-content: center
  color: var(--nero)
  margin: 10px

.vendor-registration__form
  display: flex
  flex-direction: column
  box-sizing: border-box

.vendor-registration__item
  display: flex
  flex-direction: column
  margin: 16px 0

.vendor-registration__label
  display: flex
  font-size: 18px
  padding: 10px 0

.vendor-registration__input
  display: flex
  color: var(--nero)
  background: var(--lynx-white)
  font-family: 'Sofia'
  font-size: 16px
  padding: 16px 20px
  box-sizing: border-box
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 10px

.vendor-registration__submit
  display: flex
  justify-content: center
  padding: 16px 20px
  margin: 4vh 0
  border-radius: 10px
  cursor: pointer
  background: var(--nero)
  color: var(--lynx-white)
</style>
