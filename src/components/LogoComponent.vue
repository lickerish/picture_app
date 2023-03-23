<template>
    <div class="logoWrapper">
        <h1 class="claim">picture</h1>
        <img src="@/assets/search_view/Moon_Gray.png" alt="Moon icon" />
    </div>
</template>

<script>
export default {
    name: 'LogoComponent',
};
</script >

<style lang="scss" scoped>
.claim {
    font-size: 50px;
    margin: 0;

    @media (min-width: 768px) {
        font-size: 80px;
    }
}

.logoWrapper {
    display: flex;
    flex-direction: row;

    img {
        opacity: 0.9;
        height: 25px;
        align-self: flex-end;
        margin-bottom: 20px;
        margin-left: 3px;

        @media (max-width: 768px) {
            height: 15px;
            margin-bottom: 11px;
        }
    }
}
</style>
