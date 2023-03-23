<template>
    <div class="modalWrapper">
        <div class="innerWrapper">
            <div class="photo">
                <img :src="photo" alt="Photo" />
            </div>
            <div class="description">
                <h2 class="title">{{ title }}</h2>
                <p class="description">{{ description }}
                </p>
            </div>
        </div>
        <div class="close" @click="closeModal" @keyup.esc="closeModal" />
    </div>
</template>

<script>
export default {
    name: 'ModalComponent',
    emits: ['closeModal'],
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            photo: null,
            title: null,
            description: null,
        };
    },
    methods: {
        closeModal(event) {
            this.$emit('closeModal', event);
        },

        trimString(string) {
            return string.length > 200 ? [string.substring(0, 200), '(...)'].join('') : string;
        },
    },
    mounted() {
        this.photo = this.item.links[0].href;
        this.title = this.item.data[0].title;
        this.description = this.trimString(this.item.data[0].description);
    },
};
</script>

<style lang="scss" scoped>
.modalWrapper {
    background: #f6f6f6;
    height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    left: 0;

    @media (min-width: 1024px) {
        max-width: 70%;
        height: 60%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        box-shadow: 0 30px 30px -10px rgba(0, 0, 0, .3);
    }
}

.innerWrapper {
    display: flex;
    height: 100%;
    padding: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1024px) {
        flex-direction: row;

        .photo {
            min-width: 50%;
            margin-right: 20px;
        }
    }
}

.photo {
    width: 90%;
    height: 50%;

    img {
        width: 100%;
    }
}

.description {
    color: #333;
}

.close {
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 30px;
    top: 0px;
    right: 0px;

    &::before,
    &::after {
        position: absolute;
        content: '';
        top: 30px;
        right: 20px;
        width: 20px;
        height: 2px;
        background: black;
        display: block;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
}
</style>
