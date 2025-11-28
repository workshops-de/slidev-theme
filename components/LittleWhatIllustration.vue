<template>
  <svg
    v-bind="$attrs"
    xmlns="http://www.w3.org/2000/svg"
    width="400"
    height="600"
    viewBox="0 0 400 600"
    role="img"
    aria-label="Silver light bulb illustration"
  >
    <defs>
      <linearGradient :id="`bulbGlow-${uid}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fefefe" />
        <stop offset="55%" stop-color="#e3e7f0" />
        <stop offset="100%" stop-color="#cfd4dd" />
      </linearGradient>
      <linearGradient :id="`bulbGlass-${uid}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="45%" stop-color="#dfe5ef" />
        <stop offset="100%" stop-color="#bbc2ce" />
      </linearGradient>
      <linearGradient :id="`bulbBase-${uid}`" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#6e7583" />
        <stop offset="100%" stop-color="#4c515b" />
      </linearGradient>
      <linearGradient :id="`bulbRib-${uid}`" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#b7beca" />
        <stop offset="100%" stop-color="#8c94a4" />
      </linearGradient>
      <radialGradient :id="`bulbAura-${uid}`" cx="50%" cy="35%" r="55%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.85)" />
        <stop offset="70%" stop-color="rgba(206,216,232,0.45)" />
        <stop offset="100%" stop-color="rgba(206,216,232,0)" />
      </radialGradient>
    </defs>

    <rect
      x="40"
      y="60"
      width="320"
      height="480"
      rx="28"
      :fill="`url(#bulbGlow-${uid})`"
      stroke="#9aa2b3"
      stroke-width="3"
    />

    <g transform="translate(0, 20)">
      <circle cx="200" cy="220" r="150" :fill="`url(#bulbAura-${uid})`" />
      <path
        d="M200 80c-58 0-105 47-105 105 0 33 16 63 38 90 17 20 27 41 27 64v12h80v-12c0-23 10-44 27-64 22-27 38-57 38-90 0-58-47-105-105-105z"
        :fill="`url(#bulbGlass-${uid})`"
        stroke="#c8ced9"
        stroke-width="4"
      />

      <path
        d="M160 353h80c8 0 14 6 14 14v30c0 8-6 14-14 14h-80c-8 0-14-6-14-14v-30c0-8 6-14 14-14z"
        :fill="`url(#bulbBase-${uid})`"
        stroke="#2f333b"
        stroke-width="2"
      />

      <g stroke="#89909c" stroke-width="4">
        <line x1="170" y1="362" x2="170" y2="410" />
        <line x1="190" y1="362" x2="190" y2="410" />
        <line x1="210" y1="362" x2="210" y2="410" />
        <line x1="230" y1="362" x2="230" y2="410" />
      </g>

      <path d="M150 332h100v20h-100z" :fill="`url(#bulbRib-${uid})`" />

      <path
        d="M200 180c-20 0-36 16-36 36 0 15 9 29 22 34a14 14 0 0 1 8 12v9h12v-9a14 14 0 0 1 8-12c13-5 22-19 22-34 0-20-16-36-36-36z"
        fill="#fefefe"
        stroke="#edf2f7"
        stroke-width="3"
      />
      <path d="M200 210v44" stroke="#bfc6d3" stroke-width="4" stroke-linecap="round" />

      <g stroke="#f6f8fb" stroke-width="6" stroke-linecap="round">
        <line x1="200" y1="44" x2="200" y2="10" />
        <line x1="110" y1="90" x2="70" y2="50" />
        <line x1="290" y1="90" x2="330" y2="50" />
        <line x1="60" y1="190" x2="20" y2="190" />
        <line x1="340" y1="190" x2="380" y2="190" />
        <line x1="110" y1="290" x2="70" y2="330" />
        <line x1="290" y1="290" x2="330" y2="330" />
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
const uid = crypto.randomUUID()
defineOptions({ name: 'LittleWhatIllustration' })
</script>
