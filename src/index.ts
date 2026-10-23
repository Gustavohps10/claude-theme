import type { AddonContext, IAddon } from '@mr-tick/sdk'

import css from '../globals.css'

export default class ClaudeAddon implements IAddon {
  activate(context: AddonContext): void {
    context.contributions.themes.register({
      id: 'claude',
      name: 'Claude',
      description: 'Light and dark palettes inspired by Claude.',
      css,
    })
  }

  deactivate(): void {}
}
