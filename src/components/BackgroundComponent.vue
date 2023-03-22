<template>
    <div class="backgroundWrapper" />
</template>

<script>
export default {
    name: 'BackgroundComponent',
};
</script >

<style lang="scss" scoped>
.backgroundWrapper {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, rgba(10, 10, 10, 10) 0%, rgba(12, 12, 12, 50) 60%,
            rgb(20, 20, 20) 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
