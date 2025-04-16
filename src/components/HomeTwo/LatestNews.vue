<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Our Latest News</h2>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog"><img src="../../assets/img/blog-image/4.jpg" alt="image"></router-link>

                            <div class="date"><i class='bx bx-calendar'></i> Oct 14, 2022</div>
                        </div>

                        <div class="post-content">
                            <h3><router-link to="/single-blog">50 world-changing people, We lost in the 2010s</router-link></h3>

                            <div class="post-info">
                                <div class="post-by">
                                    <img src="../../assets/img/author-image//4.jpg" alt="image">

                                    <h6>Sarah Taylor</h6>
                                </div>

                                <div class="details-btn">
                                    <router-link to="/single-blog"><i class="bx bx-right-arrow-alt"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog"><img src="../../assets/img/blog-image/5.jpg" alt="image"></router-link>

                            <div class="date"><i class='bx bx-calendar'></i> Oct 16, 2022</div>
                        </div>

                        <div class="post-content">
                            <h3><router-link to="/single-blog">Don't buy a tech gift until you read these rules</router-link></h3>

                            <div class="post-info">
                                <div class="post-by">
                                    <img src="../../assets/img/author-image//5.jpg" alt="image">

                                    <h6>Michel John</h6>
                                </div>

                                <div class="details-btn">
                                    <router-link to="/single-blog"><i class="bx bx-right-arrow-alt"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <router-link to="/single-blog"><img src="../../assets/img/blog-image/6.jpg" alt="image"></router-link>

                            <div class="date"><i class='bx bx-calendar'></i> Oct 18, 2022</div>
                        </div>

                        <div class="post-content">
                            <h3><router-link to="/single-blog">The golden rule of buying a phone as a gift</router-link></h3>

                            <div class="post-info">
                                <div class="post-by">
                                    <img src="../../assets/img/author-image//6.jpg" alt="image">

                                    <h6>Lucy Eva</h6>
                                </div>

                                <div class="details-btn">
                                    <router-link to="/single-blog"><i class="bx bx-right-arrow-alt"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="blog-notes">
                        <p>Insights to help you do what you do better, faster and more profitably. <a href="#">Read Full Blog</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LatestNews'
}
</script>