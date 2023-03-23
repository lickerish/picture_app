<template>
    <input id="search" :class="{ dark }" placeholder="Search" @input="handleChange" />
</template>

<script>
export default {
    name: 'SearchInputComponent',
    props: {
        modelValue: {
            type: String,
            required: true,
        },
        dark: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    methods: {
        handleChange(event) {
            console.log(event.target.value);
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script >

<style lang="scss" scoped>
input {
    height: 30px;
    background: none;
    border: 0;
    font-size: 16px;
    border-bottom: 1px solid #FFF;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-style: italic;
    transition: box-shadow .5s ease-out;
    text-align: center;

    @media (max-width: 768px) {
        margin-top: 10px;
        height: 20px;
        font-size: 11px;
    }
}

input:focus {
    outline: none;
    box-shadow: 0 9px 12px -10px rgba(255, 255, 255, 0.5);
    font-style: normal;
}

input:focus::placeholder {
    color: transparent;
}

.dark {
    color: black;
    border-bottom-color: black;
}

.dark:focus {
    box-shadow: 0 10px 20px -8px rgba(black, .2);
}
</style>
