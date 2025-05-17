<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Về chúng tôi" pageDesc="The KodingSoft" />
        <TakeYourBusiness />
        <Partner />
        <WhyChooseUs />
        <ReadyToHelpYou class="pt-0" />
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
        ReadyToHelpYou,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
