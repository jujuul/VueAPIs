<template>
  <div>
    <div>我是slotB组件</div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <p>身体</p>
      <slot name="main"></slot>
      <p>身体</p>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
