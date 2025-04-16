<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services Style Two" pageDesc="Our Services" />
        <ServicesOne />
        <WhatsOurClients />
        <WhyChooseUs />
        <PricingPlan />
        <ReadyToHelpYou />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import ServicesOne from '../ServicesTwo/ServicesOne'
import PageTitle from '../Common/PageTitle';
import WhatsOurClients from '../ServicesTwo/WhatsOurClients'
import WhyChooseUs from '../Common/WhyChooseUs'
import PricingPlan from '../Common/PricingPlan'
import ReadyToHelpYou from '../ServicesTwo/ReadyToHelpYou'
import BestSupport from '../Common/BestSupport'
import OurLovingClients from '../Common/OurLovingClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ServicesOne,
        WhatsOurClients,
        WhyChooseUs,
        PricingPlan,
        ReadyToHelpYou,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>
