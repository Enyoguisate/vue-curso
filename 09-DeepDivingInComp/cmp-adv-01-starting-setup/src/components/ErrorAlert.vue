<template>
<dialog open>
    <slot name="default"></slot>
</dialog>
</template>

<style>
dialog {
    margin: 0;
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: white;
    box-shadow: 0 2px 8px rgba(77, 66, 66, 0.26);
    padding: 1rem;
}
</style>
