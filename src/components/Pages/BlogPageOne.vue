<template>
    <div>
        <NavbarStyleTwo />
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
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import Blog from '../BlogOne/Blog'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Blog,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>