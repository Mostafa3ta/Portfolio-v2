import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Work from './Work'

describe('Work', () => {
  it('lists the production work first, then the open-source showcases under their own heading', () => {
    render(<Work />)
    const production = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)
    expect(production).toEqual(['Elevent', 'MedicaProf', 'Open-source showcases'])
    const showcases = screen.getAllByRole('heading', { level: 4 }).map((heading) => heading.textContent)
    expect(showcases).toEqual(['Slotwise', 'Gatekeeper', 'Pulseboard'])
  })

  it('gives every showcase a live demo and a link to its source', () => {
    render(<Work />)
    for (const name of ['Slotwise', 'Gatekeeper', 'Pulseboard']) {
      const card = screen.getByRole('article', { name })
      expect(within(card).getByRole('link', { name: /Live demo/ })).toHaveAttribute('href', expect.stringMatching(/^https:\/\/.+\.pages\.dev$/))
      expect(within(card).getByRole('link', { name: /Source/ })).toHaveAttribute('href', expect.stringMatching(/^https:\/\/github\.com\/Mostafa3ta\//))
    }
  })

  it('keeps the case study link on Elevent only', () => {
    render(<Work />)
    const caseStudies = screen.getAllByRole('link', { name: /Read the case study/ })
    expect(caseStudies).toHaveLength(1)
    expect(caseStudies[0]).toHaveAttribute('href', '/work/elevent')
  })
})
