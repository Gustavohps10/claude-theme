import fs from 'node:fs'

import type { AddonContext, AddonTheme } from '@mr-tick/sdk'
import { describe, expect, it, vi } from 'vitest'

import ClaudeAddon from '../dist/index.js'

describe('Claude packaged theme', () => {
  it('registers the built theme with the complete original stylesheet', () => {
    const register = vi.fn<(theme: AddonTheme) => void>()
    const context = {
      contributions: { themes: { register } },
    } as unknown as AddonContext
    const originalCss = fs.readFileSync(
      new URL('../globals.css', import.meta.url),
      'utf8',
    )

    new ClaudeAddon().activate(context)

    expect(register).toHaveBeenCalledExactlyOnceWith({
      id: 'claude',
      name: 'Claude',
      description: 'Light and dark palettes inspired by Claude.',
      css: originalCss,
    })
  })
})
