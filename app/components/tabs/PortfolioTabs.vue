<script setup lang="ts">
import TabProjects from '~/components/tabs/TabProjects.vue'
import TabSkills from '~/components/tabs/TabSkills.vue'
import TabCertificates from '~/components/tabs/TabCertificates.vue'

const items = [
  { label: 'Projetos', icon: 'i-lucide-folder-kanban', slot: 'projects' },
  { label: 'Habilidades', icon: 'i-lucide-sparkles', slot: 'skills' },
  { label: 'Certificados', icon: 'i-lucide-award', slot: 'certificates' }
]
</script>

<template>
  <div class="mt-6">
    <UTabs
      :items="items"
      class="w-full"
      :ui="{
        list: 'bg-elevated/60 dark:bg-elevated/35 rounded-xl ring-1 ring-inset ring-default/40',
        // indicador um pouco menos agressivo no dark (ajuda em neon)
        indicator: 'rounded-lg shadow-sm bg-primary/90 dark:bg-primary/80',
        trigger: [
          'grow',
          // inativo
          'data-[state=inactive]:text-gray-600 hover:data-[state=inactive]:text-gray-900',
          'dark:data-[state=inactive]:text-white/80 dark:hover:data-[state=inactive]:text-white',
          // ativo: usa token (controlado pelo CSS acima)
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