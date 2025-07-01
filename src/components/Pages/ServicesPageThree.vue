<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Dịch vụ của chúng tôi" pageDesc="Khám phá các dịch vụ nổi bật" />
        <MobileDevelopment />
        <ServicesTwo />
        <PricingPlan />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import ServicesTwo from '../ServicesThree/ServicesTwo'
import MobileDevelopment from '../HomeOne/MobileDevelopment'
import PricingPlan from '../Common/PricingPlan';
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        ServicesTwo,
        MobileDevelopment,
        PricingPlan,
        FooterStyleOne,
    }
};
</script>