<template>
    <div>
        <Navbar />
        <PageTitle 
            pageTitle="Contact Us" 
            pageDesc="Drop us Message for any Query" 
        />
        <Contact />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import Contact from '../Contact/Contact'
import OurLovingClients from '../Common/OurLovingClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        Contact,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>