import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import type { ShikiSetupReturn } from '@slidev/types';
import { defineShikiSetup } from '@slidev/types';

// Code highlighting for every deck using this theme.
// Twoslash is not configured here: Slidev ships it built in (`twoslash` after the language).
export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'material-theme-ocean',
      light: 'light-plus',
    },
    // Comment markers in code blocks, styled in styles/shiki-transformers.css:
    // [!code highlight], [!code word:xyz], [!code ++], [!code --], [!code focus],
    // [!code error], [!code warning]
    transformers: [
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      transformerNotationDiff(),
      transformerNotationFocus(),
      transformerNotationErrorLevel(),
    ],
  };
});
