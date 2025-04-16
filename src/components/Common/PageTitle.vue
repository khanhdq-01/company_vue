<template>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>{{pageTitle}}</h2>
                <p>{{pageDesc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle', 'pageDesc']
}
</script>