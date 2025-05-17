<template>
    <div class="signup-area">
        <div class="row m-0">
            <div class="col-lg-6 col-md-12 p-0">
                <div class="signup-image">
                    <img src="../../assets/img/logo_kingsoft_header.png" alt="image">
                </div>
            </div>

            <div class="col-lg-6 col-md-12 p-0">
                <div class="signup-content">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="signup-form">
                                <div class="logo">
                                    <router-link to="/">
                                        <img src="../../assets/img/logo_kingsoft_header.png" alt="image">
                                    </router-link>
                                </div>

                                <h3>Open up your Striki Account now</h3>
                                <p>
                                    Already signed up? 
                                    <router-link to="/log-in">Log in</router-link>
                                </p>

                                <form @submit.prevent>
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" placeholder="Your email address" class="form-control">
                                    </div>

                                    <div class="form-group">
                                        <input type="password" name="password" id="password" placeholder="Create a password" class="form-control">
                                    </div>

                                    <button type="submit" class="default-btn"><i class="bx bx-log-in"></i>Sign Up<span></span></button>

                                    <div class="connect-with-social">
                                        <span>Or</span>
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
    name: 'SignUp'
}
</script>