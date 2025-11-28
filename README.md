# @workshops-de/slidev-theme

[![NPM version](https://img.shields.io/npm/v/@workshops-de-slidev-theme?color=3AB9D4&label=)](https://www.npmjs.com/package/@workshops-de/slidev-theme)

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
theme: <b>@workshops-de/slidev-theme</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Layouts

This theme provides the following layouts:

| Layout        | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| `cover`       | Title slide with workshop title, subtitle, and optional body content |
| `section`     | Section divider with decorative background and "New Topic" badge     |
| `task`        | Task slide with orange theme and task illustration                   |
| `little-what` | Explanation slide with silver theme and purpose text                 |

## Components

This theme provides the following components:

| Component                | Description                                  |
| ------------------------ | -------------------------------------------- |
| `TaskIllustration`       | SVG illustration of a task board with pencil |
| `LittleWhatIllustration` | SVG illustration of a silver light bulb      |
| `SlideFooter`            | Footer component with workshops.de logo      |
| `WorkshopsLogo`          | SVG component for the workshops.de logo      |

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
