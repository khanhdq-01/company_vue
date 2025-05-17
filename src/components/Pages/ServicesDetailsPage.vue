<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Service Details" pageDesc="Our Services" />
        <Servicedetails />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import Servicedetails from '../SingleService/Servicedetails'
import BestSupport from '../Common/BestSupport'
import OurLovingClients from '../Common/OurLovingClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        Servicedetails,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>