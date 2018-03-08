<template>
        <router-view/>
</template>

<style>
    body {
        font-family: Raleway, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f2f2f3;
    }

    h1, h2 {
        margin-top: 10px;
    }

    h1, h2, h3 {
        color: #232323;
    }

    .app-top-buttons {
        margin-top: 15px;
    }

    .cursor {
        cursor: pointer;
    }

    .cursor:hover {
        background-color: #f6f6f7;
    }

    .divider {
        height: 0.5em;
    }

    .form-control {
        background-color: #f2f2f3;
    }

    .form-control:focus {
        background-color: white !important;
        border-color: #aaa;
        box-shadow: 0 0;
    }

    a:hover {
        text-decoration: none;
    }

    .flip-180 {
        -ms-transform: rotate(180deg); /* IE 9 */
        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
        transform: rotate(180deg);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }

    .fade-leave-active {
        opacity: 0;
    }
</style>
