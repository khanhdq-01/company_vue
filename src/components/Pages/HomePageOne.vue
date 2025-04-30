<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <MobileDevelopment />
        <HostingServices />
        <WhyChooseUs />
        <AmazingFeatures />
        <PricingPlan />
        <ReadyToHelpYou />
        <OurLovingClients />
        <Faq />
        <BestSupport />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import MainBanner from '../HomeOne/MainBanner';
import Features from '../Common/Features';
import MobileDevelopment from '../HomeOne/MobileDevelopment';
import HostingServices from '../HomeOne/HostingServices';
import WhyChooseUs from '../Common/WhyChooseUs';
import AmazingFeatures from '../HomeOne/AmazingFeatures';
import PricingPlan from '../Common/PricingPlan';
import ReadyToHelpYou from '../Common/ReadyToHelpYou';
import OurLovingClients from '../Common/OurLovingClients';
import Faq from '../Common/Faq'
import BestSupport from '../HomeOne/BestSupport'
import Blog from '../../components/BlogOne/Blog';
import Footer from '../Layouts/Footer'

export default {
    name: 'HomePageOne',
    components: {
        Navbar,
        MainBanner,
        Features,
        MobileDevelopment,
        HostingServices,
        WhyChooseUs,
        AmazingFeatures,
        PricingPlan,
        ReadyToHelpYou,
        OurLovingClients,
        Faq,
        BestSupport,
        Blog,
        Footer,
    }
};
</script>
