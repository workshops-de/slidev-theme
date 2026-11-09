import type { NavOperations, ShortcutOptions } from '@slidev/types';
import { defineShortcutsSetup } from '@slidev/types';

// Removes the default shortcuts that get in the way of drawing with slidev-addon-tldraw:
// space (next slide) and d (toggle dark mode). Use the arrow keys to navigate.
export default defineShortcutsSetup((_nav: NavOperations, base: ShortcutOptions[]) =>
  base.filter((shortcut) => shortcut.name !== 'next_space' && shortcut.name !== 'toggle_dark')
);
