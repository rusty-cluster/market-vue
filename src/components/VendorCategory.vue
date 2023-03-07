<template lang="pug">
.vendor-category
    .vendor-category__link
      .vendor-category__name {{ props.category.name }}
        .vendor-category__id {{ props.category.id }}
      .vendor-category__icon
        img.vendor-category__icon-svg(src='@/assets/icons/right-arrow.svg')
</template>

<script setup>
const props = defineProps({
  category: { type: Object, default: () => {} },
})
</script>

<style>
.vendor-category
  display: flex
  justify-content: space-between
  align-items: center

.vendor-category__link
  width: 60vw
  display: flex
  justify-content: space-between
  align-items: center
  padding: 10px
  margin: 20px auto
  border-radius: 10px
  cursor: pointer
  background: var(--lynx-white)

.vendor-category__id
  color: var(--kamenozoki-grey)

.vendor-category__name
  padding-left: 10px
  color: var(--nero)

.vendor-category__icon
  display: flex
  align-items: center
  justify-content: center
  background: var(--faded-grey)
  border-radius: 100%
  height: 30px
  width: 30px

.vendor-category__icon-svg
  height: 14px
  width: 14px
</style>
