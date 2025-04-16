<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Services Style Three" pageDesc="Our Services" />
        <ServicesTwo />
        <WhatsOurClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import ServicesTwo from '../ServicesThree/ServicesTwo'
import WhatsOurClients from '../ServicesTwo/WhatsOurClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ServicesTwo,
        WhatsOurClients,
        FooterStyleOne,
    }
};
</script>