<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Features" 
            pageDesc="The ability to elicit, assessing opportunities" 
        />
        <FeaturesOne />
        <WhatsOurClients />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import FeaturesOne from '../FeaturesTwo/FeaturesOne'
import WhatsOurClients from '../FeaturesTwo/WhatsOurClients'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        FeaturesOne,
        WhatsOurClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>