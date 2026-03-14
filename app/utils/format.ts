export function toPublicPath(src: string) {
  if (!src) return src
  return src.startsWith('/') ? src : `/${src}`
}

export function formatDatePt(isoDate: string) {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return isoDate

  const date = new Date(`${isoDate}T00:00:00`)
  if (Number.isNaN(date.getTime())) return isoDate

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

export function formatMonthYearPt(value: string) {
  if (!value) return value

  const normalized = /^\d{4}-\d{2}$/.test(value) ? `${value}-01` : value
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) return value

  const date = new Date(`${normalized}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
    year: 'numeric'
  })
    .format(date)
    .replace(' de ', '/')
    .replace('.', '')
    .toLowerCase()
}

export function formatYm(ym: string) {
  return formatMonthYearPt(ym)
}