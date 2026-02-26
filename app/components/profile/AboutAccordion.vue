<script setup lang="ts">
import { profile } from '~/data/profile'

const items = computed(() =>
  profile.about.map((a) => ({
    label: a.label,
    icon: a.icon,
    content: a.content
  }))
)
</script>

<template>
  <UAccordion
    :items="items"
    :ui="{
      item: 'rounded-md overflow-hidden ring-1 ring-inset ring-default/20',
      // header bem compacto
      trigger:
        'group w-full flex items-center justify-center gap-2 px-2 py-1 text-[11px] font-medium text-toned',
      leadingIcon: 'size-3.5',
      label: 'text-center',
      trailingIcon:
        'size-3.5 ms-2 transition-transform duration-200 group-data-[state=open]:rotate-180',
      // conteúdo compacto
      content: 'px-3',
      body: 'pt-1 pb-2'
    }"
  >
    <template #content="{ item }">
      <div class="text-left">
        <p class="text-xs text-muted whitespace-pre-line leading-relaxed">
          {{ item.content }}
        </p>
      </div>
    </template>
  </UAccordion>
</template>