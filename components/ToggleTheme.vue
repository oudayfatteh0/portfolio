<template>
    <div class="toggle-container">
        <div :class="['toggle', { 'toggle--on': isOn }]" @click="toggle">
            <div class="toggle-circle">

                <Icon v-if="!isOn" name="ant-design:sun-filled" class="text-orange-300" />

                <Icon v-else name="ant-design:moon-filled" class="text-white" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToggleSwitch',
    data() {
        return {
            isOn: false,
        };
    },
    mounted() {
        this.isOn = this.$colorMode.value === 'dark';
    },
    watch: {
        isOn(newVal) {
            this.$colorMode.value = newVal ? 'dark' : 'light';
        },
    },
    methods: {
        toggle() {
            this.isOn = !this.isOn;
        },
    },
};
</script>

<style scoped>
.toggle-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 50;
}

.toggle {
    display: flex;
    align-items: center;
    background-color: #282641;
    border-radius: 12px;
    padding: 2px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.toggle--on {
    background-color: #4caf50;
}

.toggle-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translateX(0);
    transition: transform 0.3s, background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon {
    width: 16px;
    height: 16px;
}

.sun {
    color: #fac575;
}

.moon {
    transform: translateY(-2px);
    color: #ffffff;
}
</style>