type YearMonth = [number, number]

const nowYM = (): YearMonth => {
  const d = new Date()
  return [d.getUTCFullYear(), d.getUTCMonth() + 1]
}

export const monthsBetween = (start: YearMonth, end: YearMonth | null) => {
  const e = end ?? nowYM()
  return (e[0] - start[0]) * 12 + (e[1] - start[1])
}

/** 32 → "2y 8m" */
export const durLabel = (months: number) => {
  const y = Math.floor(months / 12)
  return `${y ? `${y}y ` : ''}${months % 12}m`
}

/** Months since career start → "8+ years" */
export const yearsLabel = (start: YearMonth) =>
  `${Math.floor(monthsBetween(start, null) / 12)}+ years`

const MONTHS = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ')

/** Date → "Jun 14 '25" (UTC, so the day never shifts by timezone) */
export const blogDate = (d: Date) =>
  `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()} '${String(d.getUTCFullYear()).slice(-2)}`
