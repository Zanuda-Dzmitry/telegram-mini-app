<template>
   <section>
      <button aria-haspopup="dialog" @click="open">
          Open popup
      </button>
   </section>
</template>
<script lang="ts" setup>
import { popup } from '@telegram-apps/sdk-vue'

const props = defineProps<{ title: string, message: string }>()

function open() {
  if (popup.isSupported()) {
    popup.open(props);
    return;
  }
}


</script>
<style lang="" scoped>
    
</style>