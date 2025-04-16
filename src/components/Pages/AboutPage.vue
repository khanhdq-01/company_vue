<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About" pageDesc="The Striki Story" />
        <TakeYourBusiness />
        <Partner />
        <WhyChooseUs />
        <ReadyToHelpYou class="pt-0" />
        <DownloadApp />
        <WhatsOurClients />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import TakeYourBusiness from '../About/TakeYourBusiness'
import Partner from '../Common/Partner'
import WhyChooseUs from '../Common/WhyChooseUs'
import ReadyToHelpYou from '../Common/ReadyToHelpYou'
import DownloadApp from '../Common/DownloadApp'
import WhatsOurClients from '../Common/WhatsOurClients'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        TakeYourBusiness,
        Partner,
        WhyChooseUs,
        ReadyToHelpYou,
        DownloadApp,
        WhatsOurClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
