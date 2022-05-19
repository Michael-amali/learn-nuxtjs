<template>
  <div class="container">
    <LargeCardDisplay
      v-for="cardInfo in largeCardInfo.slice(0,1)"
      :key="cardInfo.id + Math.random()"
      :cards-section="cardInfo"
    />
    <SmallCardDisplay
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id + Math.random()"
      :cards-section="cardInfo"
    />
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data.js'
export default {
  name: 'ProductPage',
  asyncData () {
    return {
      newTitle: 'testing asyncData'
    }
  },
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections
    }
  },
  head () {
    return {
      title: 'Products',
      script: [{ src: '/products/index.js' }],
      meta: [{ hid: 'description', name: 'description', content: 'Fire extinguisher for rent' }]
    }
  },
  mounted () {
    this.getUsers()
    console.log(process.env.TEST_ENV, 'env')
  },
  methods: {
    getUsers () {
      this.$axios.$get('https://reqres.in/api/users?page=2').then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
