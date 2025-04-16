<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <UIDesign />
        <DigitalMarketing />
        <AmazingFeatures />
        <WhatsOurClients />
        <WhyChooseUs />
        <PricingPlan />
        <ReadyToHelpYou />
        <Faq class="bg-color-f4f5fe" />
        <LatestNews />
        <BestSupport />
        <OurLovingClients />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import MainBanner from '../HomeTwo/MainBanner';
import Features from '../Common/Features';
import UIDesign from '../HomeTwo/UIDesign';
import DigitalMarketing from '../HomeTwo/DigitalMarketing';
import AmazingFeatures from '../HomeTwo/AmazingFeatures';
import WhatsOurClients from '../HomeTwo/WhatsOurClients';
import WhyChooseUs from '../Common/WhyChooseUs';
import PricingPlan from '../Common/PricingPlan';
import ReadyToHelpYou from '../HomeTwo/ReadyToHelpYou';
import Faq from '../Common/Faq'
import LatestNews from '../HomeTwo/LatestNews'
import BestSupport from '../Common/BestSupport'
import OurLovingClients from '../Common/OurLovingClients';
import Footer from '../Layouts/Footer'

export default {
    components: {
        Navbar,
        MainBanner,
        Features,
        UIDesign,
        DigitalMarketing,
        AmazingFeatures,
        WhatsOurClients,
        WhyChooseUs,
        PricingPlan,
        ReadyToHelpYou,
        Faq,
        LatestNews,
        BestSupport,
        OurLovingClients,
        Footer,
    }
};
</script>
