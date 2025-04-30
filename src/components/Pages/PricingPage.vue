<template>
    <div>
        <Navbar />
        <PageTitle 
        pageTitle="Dịch vụ phù hợp"
        pageDesc="Giải pháp giá cả rõ ràng, không rào cản"


        />
        <PricingPlan />
        <Faq />
        <OurLovingClients />
        <FreeTrial class="pt-0" />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import PricingPlan from '../Common/PricingPlan'
import Faq from '../Common/Faq'
import OurLovingClients from '../Common/OurLovingClients'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        PricingPlan,
        Faq,
        OurLovingClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
