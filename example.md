---
theme: ./
addons:
  - window-mockup
---

# Slidev Theme Starter

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    Press Space for next page <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---

# What is Slidev?

Slidev is a slide maker and presentation tool designed for developers. It includes the following features:

- 📝 **Text-based** - focus on your content with Markdown, then style it later
- 🎨 **Themable** - themes can be shared and reused as npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embed Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export to PDF, PPTX, PNGs, or even a hostable SPA
- 🛠 **Hackable** - virtually anything that's possible on a webpage is possible in Slidev

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

## Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd> / <kbd>shift</kbd><kbd>space</kbd>   | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: section
---

# Code Snippets

---
layout: image-right
image: https://cover.sli.dev
---

# Code

Use code snippets and get the highlighting directly!

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```

---
layout: image-right
image: https://cover.sli.dev
---

# Code - TwoSlash

Use code snippets and get the highlighting directly!

```ts twoslash
interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  role?: string;
}

const user: User = {};
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---
layout: default
layoutClass: gap-x-sm
---

# Code

<WindowMockup title="code-file.ending" codeblock>
```typescript
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

---
layout: default
layoutClass: gap-x-sm
---

# Code line numbers

<WindowMockup title="code-file.ending" codeblock>
```typescript{*}{lines:true}
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

---
layout: default
layoutClass: gap-x-sm
---

## Highlight single line

<WindowMockup title="code-file.ending" codeblock>
```typescript{2}{lines:true}
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

## Highlight multiple lines

<WindowMockup title="code-file.ending" codeblock>
```typescript{2,3}{lines:true}
export class MyModule {
  myState: unknown
  method(): void {}
}
```
</WindowMockup>

## Navigate through lines

<WindowMockup title="code-file.ending" codeblock>
```typescript{1|2|3|4}{lines:true}
export class MyModule {
  myState: unknown
  method(): void {}
}
```
</WindowMockup>

---
layout: default
layoutClass: gap-x-sm
---

# Code - Magic Move

<WindowMockup codeblock>

````md magic-move
```ts
console.log("Hello, World!");
```

```js
console.log("Hello, World!");
console.log(`Step ${1}`);
```

```js
console.log("Hello, World!");
console.log(`Step ${1 + 1}`);
```

```ts
console.log("Hello, World!");
console.log(`Step ${3}` as string);
```
````

</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Code on the `right`

::left::

- Explain important facts

::right::

<WindowMockup title="code-file.ending" codeblock>
```typescript
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Code on the `left`

::left::

<WindowMockup title="code-file.ending" codeblock>
```typescript
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

::right::

- Explain important facts

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Two code snippets next to each other

::left::

<WindowMockup title="TypeScript" codeblock>
```typescript
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

::right::

<WindowMockup title="HTML" codeblock>
```html
<article>
  <h2>Hello, there</h2>
</article>
```
</WindowMockup>

::bottom::

Important note on the button.

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Two code snippets next to each other

::left::

<WindowMockup title="TypeScript" codeblock>
```typescript
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

::right::

<WindowMockup title="HTML" codeblock>
```html
<article>
  <h2>Hello, there</h2>
</article>
```
</WindowMockup>

::bottom::

🔥 Important note on the button.

---
layout: two-cols-header
layoutClass: gap-x-sm
---

# Window `color`-theme

::left::

<WindowMockup title="TypeScript" codeblock>
```typescript
export class MyModule {
  myState: unknown
}
```
</WindowMockup>

::right::

<WindowMockup title="HTML" color="light" codeblock>
```html
<article>
  <h2>Hello, there</h2>
</article>
```
</WindowMockup>

---
layout: section
---

# Tasks

---
layout: task
---

# Create the first app
