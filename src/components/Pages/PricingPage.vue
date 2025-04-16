<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Transparent Pricing" 
            pageDesc="Border-less account pricing" 
        />
        <PricingPlan />
        <Faq />
        <OurLovingClients />
        <FreeTrial class="pt-0" />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import PricingPlan from '../Common/PricingPlan'
import Faq from '../Common/Faq'
import OurLovingClients from '../Common/OurLovingClients'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        PricingPlan,
        Faq,
        OurLovingClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
