<template>
  <div>
    <div class="text-3xl font-bold underline text-center">
      {{ name }}
    </div>
    <div class="p-4 grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="i in 4" :key="i">
        <div><img :src="imageUrl" alt="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Text',
      imageUrl: require('../assets/images/fe1.jpg'),
      imageUrl2: require('../assets/images/fe2.jpg')
    }
  }
}
</script>

<style scoped>

</style>
