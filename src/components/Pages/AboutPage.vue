<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Về chúng tôi" pageDesc="Tin cậy hôm nay – Dẫn đầu ngày mai" />
        <TakeYourBusiness />
        <Partner />
        <WhyChooseUs />
        <ReadyToHelpYou class="pt-0" />
        <AmazingFeatures />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import TakeYourBusiness from '../About/TakeYourBusiness'
import Partner from '../Common/Partner'
import WhyChooseUs from '../Common/WhyChooseUs'
import AmazingFeatures from '../HomeOne/AmazingFeatures'
import ReadyToHelpYou from '../Common/ReadyToHelpYou'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        TakeYourBusiness,
        Partner,
        WhyChooseUs,
        AmazingFeatures,
        ReadyToHelpYou,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
