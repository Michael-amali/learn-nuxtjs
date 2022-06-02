<template>
  <div>
    <LazyHydrate when-visible>
      <Hero />
    </LazyHydrate>
    <div class="wrapper">
      <LargeCardDisplay
        v-for="cardInfo in largeCardInfo"
        :key="cardInfo.id + Math.random()"
        :cards-section="cardInfo"
      />
      <SmallCardDisplay
        v-for="cardInfo in smallCardSections"
        :key="cardInfo.id + Math.random()"
        :cards-section="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import { largeCardSections, smallCardSections } from '@/assets/data.js'

export default {
  name: 'IndexPage',
  components: { LazyHydrate },
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections
    }
  }
}
</script>

<style>
.wrapper {
  margin-top: 17rem;
}

</style>
