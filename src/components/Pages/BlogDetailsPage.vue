<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Tin tức" pageDesc="Kiến thức & Kinh nghiệm" />

        <BlogDetails />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import BlogDetails from '../SingleBlog/BlogDetails'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        BlogDetails,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>