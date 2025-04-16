<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Featured />
        <AboutUs />
        <OurServices />
        <CaseStudies />
        <Testimonials />
        <Partner />
        <OurTeam />
        <OurLatestBlog />
        <Video />
        <GetStarted />
        <Footer />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import MainBanner from '../HomeEight/MainBanner';
import Featured from '../HomeEight/Featured';
import AboutUs from '../HomeEight/AboutUs';
import OurServices from '../HomeEight/OurServices';
import CaseStudies from '../HomeEight/CaseStudies';
import Testimonials from '../HomeEight/Testimonials';
import Partner from '../HomeEight/Partner';
import OurTeam from '../HomeEight/OurTeam';
import OurLatestBlog from '../HomeEight/OurLatestBlog'
import Video from '../HomeEight/Video';
import GetStarted from '../HomeEight/GetStarted';
import Footer from '../Layouts/Footer'

export default {
    components: {
        NavbarStyleTwo,
        MainBanner,
        Featured,
        AboutUs,
        OurServices,
        CaseStudies,
        Testimonials,
        Partner,
        OurTeam,
        OurLatestBlog,
        Video,
        GetStarted,
        Footer,
    }
};
</script>
