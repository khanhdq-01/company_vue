<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Dịch vụ của chúng tôi" pageDesc="Nơi bạn đặt niềm tin - chúng tôi trao giá trị" />
        <Features />
        <ServicesTwo />
        <MobileDevelopment />
        <PricingPlan />
        <FooterStyleOne />
    </div>
</template>

<script>
import Features from '../Common/Features';
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import ServicesTwo from '../ServicesThree/ServicesTwo'
import MobileDevelopment from '../HomeOne/MobileDevelopment'
import PricingPlan from '../Common/PricingPlan';
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Features,
        Navbar,
        PageTitle,
        ServicesTwo,
        MobileDevelopment,
        PricingPlan,
        FooterStyleOne,
    }
};
</script>