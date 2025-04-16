<template>
    <section class="error-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="error-content">
                        <img src="~/assets/img/404.png" alt="error">
    
                        <h3>Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
    
                        <router-link to="/" class="default-btn"><i class='bx bx-rotate-left'></i>Go to Home<span></span></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'error'
}
</script>