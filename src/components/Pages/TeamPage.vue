<template>
    <div>
        <NavbarStyleTwo />
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
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo';
import PageTitle from '../Common/PageTitle';
import Team from '../Team/Team'
import OurLovingClients from '../Common/OurLovingClients'
import WhatsOurClients from '../Common/WhatsOurClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Team,
        OurLovingClients,
        WhatsOurClients,
        FooterStyleOne,
    }
};
</script>