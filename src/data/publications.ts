export type Publication = {
  id: string
  bibKey: string
  entry: 'misc' | 'inproceedings'
  year: string
  kind: string
  title: string
  /** Display author line. Leave undefined until known — nothing renders. */
  byline?: string
  /** BibTeX `author` field. Omitted from the citation when undefined. */
  bibAuthors?: string
  venue?: string
  note?: string
  /** "Abstract preview" only renders when this is set. */
  abstract?: string
}

export const publications: Publication[] = [
  {
    id: 'p1',
    bibKey: 'sah2026cfrp',
    entry: 'misc',
    year: '2026',
    kind: 'PREPRINT',
    title:
      'Machine Learning-Based Prediction of Ultimate Load and Failure Mode of CFRP-Strengthened Steel I-Beam for Design Assessment and Optimization',
    note: 'Preprint',
  },
  {
    id: 'p2',
    bibKey: 'sah2026llm',
    entry: 'misc',
    year: '2026',
    kind: 'PREPRINT',
    title: 'Assessing Data-Driven Performance Decline on LLM Fine-tuning',
    byline: 'Sah Rohit., I Crk.',
    bibAuthors: 'Sah Rohit and I Crk',
    note: 'Preprint',
  },
  {
    id: 'p3',
    bibKey: 'sah2023movie',
    entry: 'inproceedings',
    year: '2023',
    kind: 'CONFERENCE · ICICNIS',
    title:
      'Performance Evaluation of Movie-Based Recommendation Systems using Hybrid Machine Learning Models',
    byline: 'Sah R., Amrutha G., Manasa, Chapagain B., & Padmavathi A.',
    bibAuthors:
      'Sah, R. and Amrutha, G. and Manasa and Chapagain, B. and Padmavathi, A.',
    venue:
      'International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS)',
  },
]

export const pubMeta = (p: Publication) =>
  [p.byline, p.venue ?? p.note].filter(Boolean).join(' · ')

export const bibtex = (p: Publication) => {
  const fields: [string, string | undefined][] = [
    ['title', p.title],
    ['author', p.bibAuthors],
    ['booktitle', p.entry === 'inproceedings' ? p.venue : undefined],
    ['year', p.year],
    ['note', p.note],
  ]
  const present = fields.filter((f): f is [string, string] => Boolean(f[1]))
  const pad = Math.max(...present.map(([k]) => k.length))
  const body = present
    .map(([k, v]) => `  ${k.padEnd(pad)} = {${v}}`)
    .join(',\n')
  return `@${p.entry}{${p.bibKey},\n${body}\n}`
}
