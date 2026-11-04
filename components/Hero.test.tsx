import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

// Example component test: render a component and check what a visitor would see,
// using roles and visible text (the way screen readers and users find things).

describe('Hero', () => {
  it('shows the name as the page heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: 'Mostafa Mahmoud' })).toBeInTheDocument()
  })

  it('lists three highlights', () => {
    render(<Hero />)
    const highlights = screen.getByRole('list', { name: 'Highlights' })
    expect(highlights.querySelectorAll('li')).toHaveLength(3)
  })

  it('links the main call to action to the Elevent case study', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Elevent case study/ })).toHaveAttribute('href', '/work/elevent')
  })
})
