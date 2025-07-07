<template>
    <div>
        <Navbar />
        <MainBanner />
        <Featured />
        <AboutUs />
        <Job />
        <GetStarted />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import MainBanner from '../HomeEight/MainBanner';
import Featured from '../HomeEight/Featured';
import AboutUs from '../HomeEight/AboutUs';
import Job from '../HomeEight/Job';
import GetStarted from '../HomeEight/GetStarted';
import Footer from '../Layouts/Footer'

export default {
    components: {
        Navbar,
        MainBanner,
        Featured,
        AboutUs,
        Job,
        GetStarted,
        Footer,
    }
};
</script>
