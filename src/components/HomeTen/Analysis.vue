<template>
    <div class="is-analysis-area ptb-100">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="is-analysis-image">
                        <img src="../../assets/img/it-solution/analysis.jpg" alt="image">

                        <div class="analysis-vector-shape">
                            <img src="../../assets/img/it-solution/team/vector.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="is-analysis-content">
                        <h3>Let's start with a free project Analysis!</h3>

                        <form @submit.prevent>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" id="name" class="form-control" required>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" id="email" class="form-control" required>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Phone</label>
                                        <input type="text" name="phone_number" id="phone_number" required class="form-control">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control" required>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <label>Your Message</label>
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="6" required></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">I agree with <a href="#">Privacy Policy</a></label>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn">Let’s Get Started<span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Analysis'
}
</script>