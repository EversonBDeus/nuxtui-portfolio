<script setup lang="ts">
import { computed, ref } from 'vue'
import { certificates } from '~/data/certificates'
import type { Certificate } from '~/data/certificates'
import CertificateCard from '~/components/certificates/CertificateCard.vue'
import CertificateSlideover from '~/components/certificates/CertificateSlideover.vue'
import { formatDatePt } from '~/utils/format'

const viewMode = ref<'grid' | 'timeline'>('grid')

const selected = ref<Certificate | null>(null)
const isOpen = ref(false)

function openCertificate(item: Certificate) {
  selected.value = item
  isOpen.value = true
}

const orderedCertificates = computed(() => {
  return [...certificates].sort((a, b) => {
    return new Date(b.issuedDate).getTime() - new Date(a.issuedDate).getTime()
  })
})
</script>

<template>
  <div class="space-y-4 pt-4">
    <div class="flex items-center justify-between gap-3">
      <div class="text-left">
        <h2 class="text-lg font-semibold">Certificados</h2>
        <p class="text-sm text-muted">
          Cursos e formações concluídas com emissão registrada.
        </p>
      </div>

      <UButton
        :icon="viewMode === 'grid' ? 'i-lucide-timeline' : 'i-lucide-layout-grid'"
        color="primary"
        variant="soft"
        @click="viewMode = viewMode === 'grid' ? 'timeline' : 'grid'"
      >
        {{ viewMode === 'grid' ? 'Linha do tempo' : 'Grade' }}
      </UButton>
    </div>

    <UEmpty
      v-if="orderedCertificates.length === 0"
      icon="i-lucide-award"
      title="Nenhum certificado cadastrado"
      description="Adicione certificados em app/data/certificates.ts."
    />

    <div v-else>
      <div
        v-if="viewMode === 'grid'"
        class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        <CertificateCard
          v-for="c in orderedCertificates"
          :key="c.id"
          v-reveal
          :item="c"
          @open="openCertificate"
        />
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="(c, index) in orderedCertificates"
          :key="c.id"
          class="relative pl-8"
        >
          <span class="absolute left-0 top-2.5 h-3 w-3 rounded-full bg-primary" />
          <span
            v-if="index < orderedCertificates.length - 1"
            class="absolute left-[5px] top-6 h-[calc(100%+1rem)] w-px bg-default"
          />

          <button
            type="button"
            class="block w-full rounded-2xl border border-default bg-muted/30 p-4 text-left transition hover:border-primary/40 hover:bg-muted/60"
            @click="openCertificate(c)"
          >
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div class="space-y-1.5">
                <p class="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                  {{ formatDatePt(c.issuedDate) }}
                </p>

                <h3 class="font-semibold leading-snug">
                  {{ c.title }}
                </h3>

                <p class="text-sm text-muted">
                  {{ c.provider }}
                  <span v-if="c.issuer"> · {{ c.issuer }}</span>
                </p>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-if="c.workload"
                  class="rounded-full border border-default px-2.5 py-1 text-xs text-muted"
                >
                  {{ c.workload }}
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <CertificateSlideover v-model="isOpen" :item="selected" />
  </div>
</template>