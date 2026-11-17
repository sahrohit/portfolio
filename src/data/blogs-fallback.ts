import type { BlogPost } from '@/lib/blogs'

/** Last-known feed snapshot, rendered only when the RSS fetch fails. */
export const fallbackPosts: BlogPost[] = [
  {
    title: 'Sweepline Algorithm',
    url: 'https://blog.sahrohit.com.np/posts/plane-sweep-parallel/',
    date: new Date('2025-06-14T00:22:00Z'),
    tags: 'Parallel Plane Sweep Algorithm',
  },
  {
    title: 'Parallelizing Sorting Algorithms with OpenMP',
    url: 'https://blog.sahrohit.com.np/posts/parallel-sorting-algorithm/',
    date: new Date('2024-10-13T22:52:00Z'),
    tags: 'Parallelizing Sorting Algorithms to squeeze out performance.',
  },
  {
    title: 'Automated Latex Resume with GitHub Action',
    url: 'https://blog.sahrohit.com.np/posts/automated-latex-resume/',
    date: new Date('2024-05-12T17:22:00Z'),
    tags: 'Resume built with Latex, that generates PDF upon committing and also updates you portfolio resume.',
  },
]
