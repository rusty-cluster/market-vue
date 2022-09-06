<template>
  <router-view />
</template>

<style>
@font-face
  font-family: 'Sofia'
  src: url('@/assets/fonts/sofia-regular.woff2') format('woff2')

body
  margin: 0
  font-family: 'Sofia'

.app
  min-height: 100vh
  background: #fbfafa

a
  color: #808080
  text-decoration: none

a:hover
  color: #808080
</style>
