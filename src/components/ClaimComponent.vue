<template>
    <div class="claimWrapper">
        <h1 class="claim">picture.</h1>
        <p class="subclaim">
            Find you beloved pictures from space and discover unknown</p>
        <p class="subclaim">
            Type anything to start
        </p>
    </div>
</template>

<script>
export default {
    name: 'ClaimComponent',
};
</script >

<style lang="scss" scoped>
.claimWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    p {
        margin: 0px;
        margin-bottom: 10px;
    }

    .claim {
        font-size: 50px;
    }

    .subclaim {
        margin: 20px 0 0 0;
        font-size: 13px;
    }
}
</style>
