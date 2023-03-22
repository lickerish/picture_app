<template>
    <div class="claimWrapper">
        <LogoComponent />
        <p class="subclaim">
            Find your beloved pictures from space and discover unknown</p>
        <p class="subclaim">
            Type anything to start
        </p>
    </div>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue';

export default {
    name: 'ClaimComponent',
    components: {
        LogoComponent,
    },
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

    .subclaim {
        margin: 20px 0 0 0;
        font-size: 13px;
        font-weight: 300;

        @media (min-width: 768px) {
            font-size: 17px;
            letter-spacing: 1px;
            line-height: 1;
        }

        @media (max-width: 768px) {
            font-size: 9px;
            line-height: 0px;
        }
    }
}
</style>
