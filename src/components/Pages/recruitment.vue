<template>
    <div>
        <Navbar />
        <MainBanner />
        <Featured />
        <AboutUs />
        <CaseStudies />
        <Testimonials />
        <Partner />
        <Video />
        <GetStarted />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import MainBanner from '../HomeEight/MainBanner';
import Featured from '../HomeEight/Featured';
import AboutUs from '../HomeEight/AboutUs';
import CaseStudies from '../HomeEight/CaseStudies';
import Testimonials from '../HomeEight/Testimonials';
import Partner from '../HomeEight/Partner';
import Video from '../HomeEight/Video';
import GetStarted from '../HomeEight/GetStarted';
import Footer from '../Layouts/Footer'

export default {
    components: {
        Navbar,
        MainBanner,
        Featured,
        AboutUs,
        CaseStudies,
        Testimonials,
        Partner,
        Video,
        GetStarted,
        Footer,
    }
};
</script>
