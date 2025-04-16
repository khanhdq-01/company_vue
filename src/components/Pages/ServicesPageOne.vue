<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services" pageDesc="Our Services" />
        <Services />
        <WhyChooseUs />
        <PricingPlan />
        <ReadyToHelpYou />
        <DownloadApp />
        <WhatsOurClients />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import Services from '../ServicesOne/Services'
import WhyChooseUs from '../Common/WhyChooseUs'
import PricingPlan from '../Common/PricingPlan'
import ReadyToHelpYou from '../Common/ReadyToHelpYou'
import DownloadApp from '../Common/DownloadApp'
import WhatsOurClients from '../Common/WhatsOurClients'
import BestSupport from '../Common/BestSupport'
import OurLovingClients from '../Common/OurLovingClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Services,
        WhyChooseUs,
        PricingPlan,
        ReadyToHelpYou,
        DownloadApp,
        WhatsOurClients,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>
