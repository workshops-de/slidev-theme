<template>
    <footer class="wave">
        <div class="workshops-logo">
            <img src="/workshops-logo.svg" alt="workshops.de logo" />
        </div>
    </footer>
</template>

<style>
.wave {
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background: linear-gradient(120deg, #3023ae, #0a50c2, #4286f4);
  background-size: cover;
}

.workshops-logo {
  width: 130px;
}
</style>
