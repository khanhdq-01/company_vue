<template>
    <div>
        <Navbar />
        <PageTitle 
            pageTitle="Blog" 
            pageDesc="News and Insights" 
        />
        <Blog />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import Blog from '../BlogOne/Blog'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        Blog,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>