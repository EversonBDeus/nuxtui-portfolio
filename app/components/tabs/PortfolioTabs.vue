<script setup lang="ts">
import TabProjects from '~/components/tabs/TabProjects.vue'
import TabSkills from '~/components/tabs/TabSkills.vue'
import TabCertificates from '~/components/tabs/TabCertificates.vue'

const isMobile = useMediaQuery('(max-width: 639px)')

const items = computed(() => [
  {
    label: isMobile.value ? 'Proj.' : 'Projetos',
    icon: 'i-lucide-folder-kanban',
    slot: 'projects'
  },
  {
    label: isMobile.value ? 'Hab.' : 'Habilidades',
    icon: 'i-lucide-sparkles',
    slot: 'skills'
  },
  {
    label: isMobile.value ? 'Cert.' : 'Certificados',
    icon: 'i-lucide-award',
    slot: 'certificates'
  }
])
</script>

<template>
  <div class="mt-4 sm:mt-6">
    <UTabs
      v-reveal
      :items="items"
      class="w-full"
      :ui="{
        list: 'rounded-xl bg-elevated/60 p-1 ring-1 ring-inset ring-default/40 dark:bg-elevated/35',
        indicator: 'rounded-lg bg-primary/90 shadow-sm dark:bg-primary/80',
        trigger: [
          'grow min-w-0',
          'px-2 py-2 text-xs sm:px-3 sm:py-2.5 sm:text-sm',
          'data-[state=inactive]:text-gray-600 hover:data-[state=inactive]:text-gray-900',
          'dark:data-[state=inactive]:text-white/80 dark:hover:data-[state=inactive]:text-white',
          'data-[state=active]:text-inverted'
        ].join(' ')
      }"
    >
      <template #projects><TabProjects /></template>
      <template #skills><TabSkills /></template>
      <template #certificates><TabCertificates /></template>
    </UTabs>
  </div>
</template>