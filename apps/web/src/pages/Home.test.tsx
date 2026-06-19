import { describe, it, expect, beforeAll, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/pages/Home'

beforeAll(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  )
})

describe('Home', () => {
  it('renders the studio marketing page with all key sections', () => {
    render(<Home />)

    expect(screen.getByTestId('home-root')).toBeTruthy()

    expect(screen.getAllByText(/Obsi/i).length).toBeGreaterThan(0)

    for (const id of ['about', 'artists', 'gallery', 'services', 'reviews', 'contact']) {
      expect(document.getElementById(id)).toBeTruthy()
    }

    expect(screen.getAllByText(/95 Google reviews/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Send message/i)).toBeTruthy()
  })
})
