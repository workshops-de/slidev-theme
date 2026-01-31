# @workshops.de/slidev-theme

[![NPM version](https://img.shields.io/npm/v/@workshops-de-slidev-theme?color=3AB9D4&label=)](https://www.npmjs.com/package/@workshops.de/slidev-theme)

A theme for workshops held by [workshops.de](https://workshops.de).

<!--
  Learn more about how to write a theme:
  https://sli.dev/guide/write-theme.html
--->

<!--
  run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>@workshops.de/slidev-theme</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Layouts

This theme provides and overrides the following layouts:

| Layout            | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `cover`           | Title slide with tech logo slot, centered title/subtitle, and logo footer.  |
| `section`         | Section divider with "Section" badge and centered content.                  |
| `sub-section`     | Section divider with left accent border for nested sections.                |
| `task`            | Task slide with orange "Task" badge and left-aligned content.               |
| `little-what`     | Short primer slide with silver badge and left-aligned content.              |
| `why`             | Rationale slide with purple badge and left-aligned content.                 |
| `what-if`         | Hypothetical slide with red badge and left-aligned content.                 |
| `ask-me-anything` | Centered big prompt for open Q&A.                                           |
| `default`         | Overrides Slidev default layout to use the theme surface.                   |
| `two-cols`        | Overrides Slidev two-column layout to use the theme surface.                |
| `two-cols-header` | Overrides two-column-header layout to use the theme surface.                |
| `image-left`      | Overrides image-left layout to use the theme surface on the text side.      |
| `image-right`     | Overrides image-right layout to use the theme surface on the text side.     |
| `end`             | Overrides end layout with the theme surface and centered "END" text.        |

### Layout usage

All layouts share a unified surface component (`SectionSurface`) and color variants matching `SectionBadge`. The default variant is blue.

Example:

<pre><code>---
layout: section
---

# Title
</code></pre>

## Components

This theme provides the following components:

| Component        | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `SectionSurface` | Base surface used by all layouts, with color variants |
| `SectionBadge`   | Badge with matching color variants                    |
| `Callout`        | Callout box with info/tip/important/warning/caution   |
| `SlideFooter`    | Footer component with workshops.de logo               |
| `WorkshopsLogo`  | SVG component for the workshops.de logo               |

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
