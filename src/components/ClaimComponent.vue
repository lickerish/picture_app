<template>
    <div class="claimWrapper">
        <div class="logoWrapper">
            <h1 class="claim">picture</h1>
            <img src="@/assets/search_view/Moon_Gray.png" alt="Moon icon" />
        </div>
        <p class="subclaim">
            Find your beloved pictures from space and discover unknown</p>
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
        }
    }

    .subclaim {
        margin: 20px 0 0 0;
        font-size: 13px;
        font-weight: 300;

        @media (min-width: 768px) {
            font-size: 17px;
            letter-spacing: 1px;
            line-height: 1;
        }
    }
}
</style>
