<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services Style" pageDesc="Our Services" />
        <ServicesTwo />
        <WhatsOurClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import ServicesTwo from '../ServicesThree/ServicesTwo'
import WhatsOurClients from '../ServicesTwo/WhatsOurClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        ServicesTwo,
        WhatsOurClients,
        FooterStyleOne,
    }
};
</script>