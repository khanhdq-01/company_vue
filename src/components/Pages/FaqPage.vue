<template>
    <div>
        <Navbar />
        <PageTitle 
            pageTitle="Frequently Asked Questions" 
            pageDesc="Get to know about Striki" 
        />
        <Faq />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import Faq from '../Common/Faq'
import BestSupport from '../Common/BestSupport'
import FreeTrial from '../Common/FreeTrial'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>