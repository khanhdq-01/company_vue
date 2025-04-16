<template>
    <div class="login-area">
        <div class="row m-0">
            <div class="col-lg-6 col-md-12 p-0">
                <div class="login-image">
                    <img src="../../assets/img/login-bg.jpg" alt="image">
                </div>
            </div>

            <div class="col-lg-6 col-md-12 p-0">
                <div class="login-content">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="login-form">
                                <div class="logo">
                                    <router-link to="/">
                                        <img src="../../assets/img/logo.png" alt="image">
                                    </router-link>
                                </div>

                                <h3>Welcome back</h3>
                                <p>
                                    New to Striki? 
                                    <router-link to="/sign-up">Sign up</router-link>
                                </p>

                                <form @submit.prevent>
                                    <div class="form-group">
                                        <input type="email" placeholder="Your email address" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <input type="password" placeholder="Your password" class="form-control">
                                    </div>

                                    <button type="submit" class="default-btn"><i class="bx bxs-hot"></i>Login<span></span></button>
                                    
                                    <div class="forgot-password">
                                        <a href="#">Forgot Password?</a>
                                    </div>

                                    <div class="connect-with-social">
                                        <button type="submit" class="facebook"><i class='bx bxl-facebook'></i> Connect with Facebook</button>
                                        <button type="submit" class="google"><i class='bx bxl-google'></i> Connect with Google</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>