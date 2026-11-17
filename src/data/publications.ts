export const SELF = 'Rohit Kumar Sah'

export type Publication = {
  id: string
  entry: 'article' | 'inproceedings' | 'mastersthesis'
  year: string
  /** Mono kicker above the title. */
  kind: string
  title: string
  authors: string[]
  /** Where it appeared, e.g. "Designs 10(6), 125 · MDPI". */
  venue: string
  url: string
  linkLabel: string
  /** "Abstract preview" only renders when this is set. */
  abstract?: string
  /** BibTeX fields, in output order. */
  bib: [string, string][]
}

export const publications: Publication[] = [
  {
    id: 'jha2026cfrp',
    entry: 'article',
    year: '2026',
    kind: 'JOURNAL ARTICLE · MDPI DESIGNS',
    title:
      'Machine Learning Prediction of Ultimate Load and Failure Mode of CFRP-Strengthened Steel I-Beams: Source-Aware Validation and Limits of Transferability',
    authors: ['Bishal Kumar Jha', 'Alaa El-Din El-Sisi', SELF],
    venue: 'Designs 10(6), 125 · MDPI · Nov 2026',
    url: 'https://doi.org/10.3390/designs10060125',
    linkLabel: 'MDPI ↗',
    abstract:
      'Carbon fibre-reinforced polymer (CFRP) strengthening of steel I-beams can increase flexural capacity, but assessment commonly requires analytical models or finite element analysis (FEA). This paper examines how far machine learning (ML) predictions of ultimate load and failure mode for simply supported steel I-beams with CFRP bonded to the tension flange transfer beyond the studies used for training. A database of 292 records from nine studies (36 experimental, 256 numerical) was compiled with specimen-level provenance for source study, calibration family, failure-label origin and adhesive-property definition. Random-split gradient boosting (GB) reaches R² = 0.998, but 83% of the records come from two studies. Under leave-one-study-out (LOSO) validation, pooled R² falls to 0.478 (mean absolute percentage error, MAPE = 36.2%) and is positive for only two of nine held-out studies; holding out calibration families gives R² = 0.452 (MAPE = 47.7%). Training on numerical records from other calibration families and testing on experiments gives R² = 0.517 (MAPE = 39.3%). Multiple linear regression matches GB on random splits but fails to generalize to out-of-study data (LOSO R² = 0.166). When the unstrengthened capacity of the same beam is supplied, a hybrid formulation predicts total load with LOSO MAPE = 4.5%, but its ML increment model is no better than a mean-increment baseline across studies (increment R² = 0.026 against −0.036). Failure-mode classifiers trained and tested on source-reported labels under LOSO reach 59.4% accuracy, below the 72.2% of a majority-class baseline.',
    bib: [
      [
        'title',
        'Machine Learning Prediction of Ultimate Load and Failure Mode of CFRP-Strengthened Steel I-Beams: Source-Aware Validation and Limits of Transferability',
      ],
      [
        'author',
        'Jha, Bishal Kumar and El-Sisi, Alaa El-Din and Sah, Rohit Kumar',
      ],
      ['journal', 'Designs'],
      ['volume', '10'],
      ['number', '6'],
      ['pages', '125'],
      ['year', '2026'],
      ['publisher', 'MDPI'],
      ['doi', '10.3390/designs10060125'],
    ],
  },
  {
    id: 'sah2026thesis',
    entry: 'mastersthesis',
    year: '2026',
    kind: 'M.S. THESIS · SIUE',
    title: 'Assessing Data-Driven Performance Decline on LLM Fine-Tuning',
    authors: [SELF],
    venue:
      'Southern Illinois University Edwardsville · Advisor: Igor Crk · 73 pp. · ProQuest No. 32672095',
    url: 'https://www.proquest.com/docview/3347316939',
    linkLabel: 'ProQuest ↗',
    abstract:
      'Low-quality, unstructured training datasets cause significant reductions in reasoning ability under fine tuning. To demonstrate this effect, we have conducted a controlled experiment comparing five different junk-to-control data mixture ratios (0%, 20%, 50%, 80%, and 100%) and five different LoRA utilizing LLaMA-3-8B Instruct as the primary model and LLaMA-Factory as the training framework. The control dataset consisted of 12,068 ArXiv scientific passages while the junk dataset was comprised of 69,056 randomly selected tweets based on their engagement degree (mean length of 7.5 words, unreasoned). Models were then evaluated on the ARC-Challenge Benchmark via lm-evaluation-harness. Results demonstrated a monotonically decreasing trend of ARC-Challenge accuracy as the junk ratio increased: From a baseline of 74.9% to 58.9% after fine-tuning on 100% clean data, which represents an unavoidable penalty; and then decreased to 49.4% after fine-tuning on 100% junk data; a decrease of 9.5 percentage points attributable to junk data. A sample size ablation study at 100% junk confirmed that the loss was content driven and not volume driven. Since scores did not vary significantly over three separate volumes (1,000, 5,000, or 10,000) samples of junk data, it can be inferred that increasing amounts of junk do not equate to additional decreases in performance.',
    bib: [
      ['title', 'Assessing Data-Driven Performance Decline on LLM Fine-Tuning'],
      ['author', 'Sah, Rohit Kumar'],
      ['school', 'Southern Illinois University Edwardsville'],
      ['type', 'M.S. thesis'],
      ['year', '2026'],
      ['note', 'ProQuest Dissertations \\& Theses, No. 32672095'],
      ['isbn', '9798247929642'],
      ['url', 'https://www.proquest.com/docview/3347316939'],
    ],
  },
  {
    id: 'padmavathi2024movie',
    entry: 'inproceedings',
    year: '2024',
    kind: 'CONFERENCE · IEEE ICMCSI',
    title:
      'Performance Evaluation of Movie-Based Recommendation Systems using Hybrid Machine Learning Models',
    authors: [
      'A. Padmavathi',
      'Gottumukkala Amrutha',
      SELF,
      'Birat Chapagain',
      'A. S. L. Manasa',
    ],
    venue:
      '2024 5th International Conference on Mobile Computing and Sustainable Informatics (ICMCSI), pp. 195–201 · IEEE',
    url: 'https://doi.org/10.1109/ICMCSI61536.2024.00035',
    linkLabel: 'IEEE Xplore ↗',
    abstract:
      'The recommendation systems are used in different sectors to offer tailored services for users. The major applications of these systems are in the entertainment sector, where the movie-based recommendation systems can suggest movie recommendations personalized to users based on their feedback or search history. The research study mainly focusses on evaluating the performance of recommendation models including content filtering and collaborative filtering methods like KNN model, SVD, Boost and the hybrid models that combine these approaches. Also, the study assesses the Matrix Factorization Technique as it ensures the robustness. The study compares the accuracy, efficiency, and robustness of each model using Netflix dataset and evaluation metrics designed specifically for movie-based recommendation systems.',
    bib: [
      [
        'title',
        'Performance Evaluation of Movie-Based Recommendation Systems using Hybrid Machine Learning Models',
      ],
      [
        'author',
        'Padmavathi, A. and Amrutha, Gottumukkala and Sah, Rohit Kumar and Chapagain, Birat and Manasa, A. S. L.',
      ],
      [
        'booktitle',
        '2024 5th International Conference on Mobile Computing and Sustainable Informatics (ICMCSI)',
      ],
      ['pages', '195--201'],
      ['year', '2024'],
      ['publisher', 'IEEE'],
      ['doi', '10.1109/ICMCSI61536.2024.00035'],
    ],
  },
]

export const bibtex = (p: Publication) => {
  const pad = Math.max(...p.bib.map(([k]) => k.length))
  const body = p.bib.map(([k, v]) => `  ${k.padEnd(pad)} = {${v}}`).join(',\n')
  return `@${p.entry}{${p.id},\n${body}\n}`
}
