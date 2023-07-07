<template lang="pug">
.vendor-categories-item
    .vendor-categories-item__link
      .vendor-categories-item__name {{ props.category.name }}
        .vendor-categories-item__id {{ props.category.id }}
      .vendor-categories-item__icon
        img.vendor-categories-item__icon-svg(src='@/assets/icons/right-arrow.svg')
</template>

<script setup>
const props = defineProps({
  category: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-categories-item
  display: flex
  justify-content: space-between
  align-items: center

.vendor-categories-item__link
  width: 60vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.vendor-categories-item__id
  color: var(--kamenozoki-grey)

.vendor-categories-item__name
  padding-left: 10px
  color: var(--nero)

.vendor-categories-item__icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

.vendor-categories-item__icon-svg
  height: 14px
  width: 14px
</style>
