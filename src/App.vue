<template>
  <router-view />
</template>

<style>
:root
  --background: #ffffff
  --bleached-silk: #f2f2f2
  --faded-grey: #e9e8e4
  --kamenozoki-grey: #c7c3b7
  --cloudy-today: #a69f95
  --holy-crow: #302f2b
  --ski-patrol: #c41239
  --lynx-white: #f7f7f7
  --limone: #d3bd48
  --nero: #262626
  --thamar-black: #181818

@font-face
  font-family: 'Sofia'
  src: url('@/assets/fonts/sofia-regular.woff2') format('woff2')
  font-weight: 400
  font-style: normal
 
@font-face
  font-family: 'Sofia Light'
  src: url('/@/assets/fonts/sofia-light.woff2') format('woff2')
  font-weight: 300
  font-style: normal

body
  margin: 0
  font-family: 'Sofia'

.app
  min-height: 100vh
  background: var(--background)

a
  color: #808080
  text-decoration: none

a:hover
  color: #808080
</style>
