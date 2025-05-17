<template>
    <div>
        <Navbar />
        <PageTitle 
            pageTitle="Team" 
            pageDesc="Meet Our experts always ready to help you" 
        />
        <Team />
        <OurLovingClients />
        <WhatsOurClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import Team from '../Team/Team'
import OurLovingClients from '../Common/OurLovingClients'
import WhatsOurClients from '../Common/WhatsOurClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        Team,
        OurLovingClients,
        WhatsOurClients,
        FooterStyleOne,
    }
};
</script>