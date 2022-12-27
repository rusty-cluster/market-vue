<template lang='pug'>
.retailer-product-search-field
  .retailer-product-search-field__search-button
  input.retailer-product-search-field__search(
    type='search'
    name='q'
    placeholder='Search for products...'
    autofocus
  )
</template>

<style>
.retailer-product-search-field
  display: flex
  align-items: center
  justify-content: center
  height: 50px
  width: 90%
  margin: 0 0 2vh 0
  padding: 1vh 0
  border: 1px solid var(--kamenozoki-grey)
  border-radius: 20px
  background: var(--bleached-silk)

.retailer-product-search-field__search-button
  height: 44px
  width: 44px
  background-position: center
  background-repeat: no-repeat
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-search' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.2' stroke='%23262626' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Ccircle cx='10' cy='10' r='7' /%3E%3Cline x1='21' y1='21' x2='15' y2='15' /%3E%3C/svg%3E")

input.retailer-product-search-field__search
  font-size: 20px
  width: 90%
  padding: 1vh
  border: none
  border-radius: 24px
  background: var(--lynx-white)

input.retailer-product-search-field__search:focus
  outline-style: none
  box-shadow: none
  border-color: transparent
</style>
