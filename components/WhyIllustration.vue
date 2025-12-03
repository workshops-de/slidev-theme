<template>
  <svg
    v-bind="$attrs"
    xmlns="http://www.w3.org/2000/svg"
    width="400"
    height="600"
    viewBox="0 0 400 800"
    role="img"
    aria-label="Compass illustration representing purpose and direction"
  >
    <defs>
      <linearGradient :id="`compassRing-${uid}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#c4b5fd" />
        <stop offset="50%" stop-color="#a78bfa" />
        <stop offset="100%" stop-color="#8b5cf6" />
      </linearGradient>
      <linearGradient :id="`compassNeedleNorth-${uid}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fef3c7" />
        <stop offset="50%" stop-color="#fde68a" />
        <stop offset="100%" stop-color="#f59e0b" />
      </linearGradient>
      <linearGradient :id="`compassNeedleSouth-${uid}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f3f4f6" />
        <stop offset="50%" stop-color="#e5e7eb" />
        <stop offset="100%" stop-color="#d1d5db" />
      </linearGradient>
      <linearGradient :id="`compassCenter-${uid}`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ddd6fe" />
        <stop offset="100%" stop-color="#c4b5fd" />
      </linearGradient>
      <radialGradient :id="`compassGlow-${uid}`" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)" />
        <stop offset="70%" stop-color="rgba(124, 58, 237, 0.2)" />
        <stop offset="100%" stop-color="rgba(124, 58, 237, 0)" />
      </radialGradient>
    </defs>

    <!-- Glow effect -->
    <circle cx="200" cy="300" r="200" :fill="`url(#compassGlow-${uid})`" />

    <!-- Outer ring -->
    <circle
      cx="200"
      cy="300"
      r="180"
      :fill="`url(#compassRing-${uid})`"
      stroke="#6d28d9"
      stroke-width="4"
    />

    <!-- Inner decorative ring -->
    <circle
      cx="200"
      cy="300"
      r="160"
      fill="none"
      stroke="#a78bfa"
      stroke-width="2"
      stroke-dasharray="8 4"
    />

    <!-- Cardinal direction markers -->
    <g :stroke="isDark ? '#fef3c7' : '#1f2937'" stroke-width="2" :fill="isDark ? '#fef3c7' : '#1f2937'">
      <!-- North -->
      <path d="M200 130 L208 150 L192 150 Z" />
      <text x="200" y="100" text-anchor="middle" font-size="16" font-weight="bold" :fill="isDark ? '#fef3c7' : '#1f2937'">N</text>

      <!-- South -->
      <path d="M200 470 L192 450 L208 450 Z" />
      <text x="200" y="540" text-anchor="middle" font-size="16" font-weight="bold" :fill="isDark ? '#fef3c7' : '#1f2937'">S</text>

      <!-- East -->
      <path d="M270 300 L250 292 L250 308 Z" />
      <text x="420" y="320" text-anchor="middle" font-size="16" font-weight="bold" :fill="isDark ? '#fef3c7' : '#1f2937'">E</text>

      <!-- West -->
      <path d="M130 300 L150 308 L150 292 Z" />
      <text x="0" y="325" text-anchor="middle" font-size="16" font-weight="bold" :fill="isDark ? '#fef3c7' : '#1f2937'">W</text>
    </g>

    <!-- Degree markers -->
    <g stroke="#c4b5fd" stroke-width="1.5" opacity="0.6">
      <line x1="200" y1="130" x2="200" y2="125" />
      <line x1="200" y1="470" x2="200" y2="475" />
      <line x1="270" y1="300" x2="275" y2="300" />
      <line x1="130" y1="300" x2="125" y2="300" />
    </g>

    <!-- Compass needle (pointing North) -->
    <g transform="translate(200, 300)">
      <!-- North needle (yellow/cream with gradient) -->
      <path
        d="M0 -110 L-12 0 L0 12 L12 0 Z"
        :fill="`url(#compassNeedleNorth-${uid})`"
        stroke="#f59e0b"
        stroke-width="3"
      />
      <!-- South needle (white/grey with gradient) -->
      <path
        d="M0 12 L-12 0 L0 -110 L12 0 Z"
        :fill="`url(#compassNeedleSouth-${uid})`"
        stroke="#9ca3af"
        stroke-width="3"
      />
    </g>

    <!-- Center pivot -->
    <circle
      cx="200"
      cy="300"
      r="20"
      :fill="`url(#compassCenter-${uid})`"
      stroke="#8b5cf6"
      stroke-width="3"
    />
    <circle
      cx="200"
      cy="300"
      r="12"
      fill="#7c3aed"
    />
    <circle
      cx="200"
      cy="300"
      r="6"
      fill="#fef3c7"
    />

    <!-- Decorative rays -->
    <g stroke="#a78bfa" stroke-width="2" opacity="0.4" stroke-linecap="round">
      <line x1="200" y1="130" x2="200" y2="110" />
      <line x1="200" y1="470" x2="200" y2="490" />
      <line x1="270" y1="300" x2="290" y2="300" />
      <line x1="130" y1="300" x2="110" y2="300" />
    </g>
  </svg>
</template>

<script setup lang="ts">
import { useDarkMode } from '@slidev/client'

const uid = crypto.randomUUID()
const { isDark } = useDarkMode()
defineOptions({ name: 'WhyIllustration' })
</script>
