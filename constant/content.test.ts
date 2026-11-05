import { describe, expect, it } from 'vitest'
import { Experiences, NavItems } from '@/constant'

// Example unit test: plain data and logic, no browser needed.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// "Jan 2026" -> a number that sorts by date; "Present" sorts after everything.
function toSortable(date: string): number {
  if (date === 'Present') return Number.MAX_SAFE_INTEGER
  const [month, year] = date.split(' ')
  return Number(year) * 12 + MONTHS.indexOf(month)
}

describe('site content', () => {
  it('lists experience newest first', () => {
    const starts = Experiences.map((job) => toSortable(job.from))
    const sorted = [...starts].sort((a, b) => b - a)
    expect(starts).toEqual(sorted)
  })

  it('never ends a job before it starts', () => {
    for (const job of Experiences) {
      expect(toSortable(job.to)).toBeGreaterThanOrEqual(toSortable(job.from))
    }
  })

  it('gives every nav item a unique section id', () => {
    const ids = NavItems.map((item) => item.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
