<template>
    <div>
        <NavbarStyleOne />
        <MainBanner />
        <AmazingFeatures />
        <Services />
        <MoreToDiscover />
        <WhyChooseUs />
        <YourApplication />
        <WhatsOurClients />
        <PricingPlan />
        <Faq />
        <OurLovingClients />
        <FreeTrial class="pt-0" />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleOne from '../Layouts/NavbarStyleOne'
import MainBanner from '../HomeFour/MainBanner';
import AmazingFeatures from '../HomeFour/AmazingFeatures';
import Services from '../HomeFour/Services';
import MoreToDiscover from '../HomeFour/MoreToDiscover';
import WhyChooseUs from '../Common/WhyChooseUs'
import YourApplication from '../HomeFour/YourApplication';
import WhatsOurClients from '../Common/WhatsOurClients';
import PricingPlan from '../Common/PricingPlan';
import Faq from '../Common/Faq'
import OurLovingClients from '../Common/OurLovingClients';
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleOne,
        MainBanner,
        AmazingFeatures,
        Services,
        MoreToDiscover,
        WhyChooseUs,
        YourApplication,
        WhatsOurClients,
        PricingPlan,
        Faq,
        OurLovingClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>