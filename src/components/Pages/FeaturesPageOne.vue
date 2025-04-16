<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Features" 
            pageDesc="The ability to elicit, assessing opportunities" 
        />
        <Features />
        <WhatsOurClients />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import Features from '../FeaturesOne/Features'
import WhatsOurClients from '../Common/WhatsOurClients'
import BestSupport from '../Common/BestSupport'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Features,
        WhatsOurClients,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>