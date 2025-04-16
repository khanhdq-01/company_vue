<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Blog Details" 
            pageDesc="News and Insights" 
        />
        <BlogDetails />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import BlogDetails from '../SingleBlog/BlogDetails'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        BlogDetails,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>