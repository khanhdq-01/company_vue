<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <MobileDevelopment />
        <HostingServices />
        <WhyChooseUs />
        <AmazingFeatures />
        <WhatsOurClients />
        <PricingPlan />
        <ReadyToHelpYou />
        <OurLovingClients />
        <Faq />
        <BestSupport />
        <LatestNews />
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
import WhatsOurClients from '../Common/WhatsOurClients';
import PricingPlan from '../Common/PricingPlan';
import ReadyToHelpYou from '../Common/ReadyToHelpYou';
import OurLovingClients from '../Common/OurLovingClients';
import Faq from '../Common/Faq'
import BestSupport from '../HomeOne/BestSupport'
import LatestNews from '../Common/LatestNews'
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
        WhatsOurClients,
        PricingPlan,
        ReadyToHelpYou,
        OurLovingClients,
        Faq,
        BestSupport,
        LatestNews,
        Footer,
    }
};
</script>
