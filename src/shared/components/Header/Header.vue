<template>
    <header>
        <div class="title">
            <h2>{{ title }}</h2>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
header {
    border-bottom: 1px solid var(--gray-200);
    margin-bottom: 56px;
}

.title {
    width: 60%;
    margin: 0 auto;

    @media(max-width: 780px) {
        width: 100%;
    }
}

h2 {
    font-weight: 900;
    font-size: 22px;
    line-height: 32px;
    text-align: left;
    color: var(--gray-500);

    @media(max-width: 780px) {
        text-align: center;
    }

}
</style>