<template>
    <div>
        <Navbar />
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
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import BlogOne from '../BlogTwo/BlogOne'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        BlogOne,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>