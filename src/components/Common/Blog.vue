<template>
    <div class="sm-blog-area pt-100 pb-70">
        <div class="container">
            <div class="section-title-with-large-box">
                <span>Latest Blog</span>
                <h2>Check our Latest & Trending Blogs</h2>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="sm-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog">
                                <img src="../../assets/img/seo-marketing/blog/blog1.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="blog-content">
                            <ul class="meta">
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/user1.jpg" alt="image">
                                        Angela Carter
                                    </a>
                                </li>
                                <li><i class='bx bx-calendar'></i> 14 Feb, 2022</li>
                            </ul>    
                            <h3>
                                <router-link to="/single-blog">Some strategies to attract new customers</router-link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="sm-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog">
                                <img src="../../assets/img/seo-marketing/blog/blog2.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="blog-content">
                            <ul class="meta">
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/user2.jpg" alt="image">
                                        Angela Carter
                                    </a>
                                </li>
                                <li><i class='bx bx-calendar'></i> 14 Feb, 2022</li>
                            </ul>    
                            <h3>
                                <router-link to="/single-blog">How to make your business successful</router-link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="sm-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog">
                                <img src="../../assets/img/seo-marketing/blog/blog3.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="blog-content">
                            <ul class="meta">
                                <li>
                                    <a href="#">
                                        <img src="../../assets/img/user3.jpg" alt="image">
                                        Angela Carter
                                    </a>
                                </li>
                                <li><i class='bx bx-calendar'></i> 14 Feb, 2022</li>
                            </ul>    
                            <h3>
                                <router-link to="/single-blog">What are the strategies used in a digital marketing?</router-link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sm-blog-shape">
            <img src="../../assets/img/seo-marketing/blog/shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>