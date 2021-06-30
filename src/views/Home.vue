<template>
  <div class="home">
    <Banner />
    <Collections />
    <BestPrice />
  </div>
</template>

<script>
import Banner from "@/components/Home/Banner.vue"
import Collections from "@/components/Home/Collections.vue"
import BestPrice from "@/components/Home/BestPrice.vue"

export default {
  name: 'Home',
  components: {
    Banner,
    Collections,
    BestPrice
  }
}
</script>
