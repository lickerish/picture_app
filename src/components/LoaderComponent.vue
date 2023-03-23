<template>
    <div class="loader"></div>
</template>

<script>
export default {
    name: 'LoaderComponent',
};
</script>
<style lang="scss" scoped>
.loader {
    margin-top: 100px;
    display: inline-block;
    width: 60px;
    height: 60px;

    @media (min-width: 768px) {
        width: 90px;
        height: 90px;
    }
}

.loader:after {
    content: " ";
    display: block;
    width: 40px;
    height: 40px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid black;
    border-color: black transparent black transparent;
    animation: loader 1.2s linear infinite;

    @media (min-width: 768px) {
        width: 90px;
        height: 90px;
    }
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
