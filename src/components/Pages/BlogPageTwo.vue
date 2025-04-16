<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Blog Right Sidebar" 
            pageDesc="News and Insights" 
        />
        <BlogOne />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import BlogOne from '../BlogTwo/BlogOne'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        BlogOne,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>