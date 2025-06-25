<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Đối tác đáng tin cậy của bạn" pageDesc="Khám phá điều gì khiến chúng tôi trở nên đặc biệt." />
        <AmazingFeatures />
        <PricingPlan />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import AmazingFeatures from '../HomeOne/AmazingFeatures.vue'
import PricingPlan from '../Common/PricingPlan';
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        AmazingFeatures,
        PricingPlan,
        FooterStyleOne,
    }
};
</script>