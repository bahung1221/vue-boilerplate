<template>
  <div id="app" v-cloak>
  <custom-header/>
    <custom-sidebar/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Sidebar from '@/components/common/Sidebar.vue'

export default {
  components: {
    CustomHeader: Header,
    CustomSidebar: Sidebar,
  },
}
</script>
