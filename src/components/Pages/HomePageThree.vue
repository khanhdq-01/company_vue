<template>
    <div>
        <Navbar />
        <MainBanner />
        <Features />
        <ITConsultancy />
        <HostingServices />
        <ReadyToHelpYou />
        <AmazingFeatures />
        <WhatsOurClients />
        <PricingPlan />
        <OurLovingClients class="bg-white bg-color-f8fbfa" />
        <DownloadApp />
        <LatestNews />
        <BestSupport />
        <FreeTrial />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import MainBanner from '../HomeThree/MainBanner';
import Features from '../Common/Features';
import ITConsultancy from '../HomeThree/ITConsultancy';
import HostingServices from '../HomeThree/HostingServices';
import ReadyToHelpYou from '../Common/ReadyToHelpYou';
import AmazingFeatures from '../HomeThree/AmazingFeatures';
import WhatsOurClients from '../HomeThree/WhatsOurClients';
import PricingPlan from '../Common/PricingPlan';
import OurLovingClients from '../Common/OurLovingClients';
import DownloadApp from '../Common/DownloadApp';
import LatestNews from '../Common/LatestNews'
import BestSupport from '../HomeThree/BestSupport'
import FreeTrial from '../Common/FreeTrial'
import Footer from '../Layouts/Footer'

export default {
    components: {
        Navbar,
        MainBanner,
        Features,
        ITConsultancy,
        HostingServices,
        ReadyToHelpYou,
        AmazingFeatures,
        WhatsOurClients,
        PricingPlan,
        OurLovingClients,
        DownloadApp,
        LatestNews,
        BestSupport,
        FreeTrial,
        Footer,
    }
};
</script>
