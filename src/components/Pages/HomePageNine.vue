<template>
    <div>
        <Navbar />
        <div class="seo-marketing-home-with-full-background">
            <MainBanner />
            <Features />
            <About />
            <CheckWebsites />
            <Services />
            <Funfacts />
            <WeWork />
            <Faq />
            <Partner />
            <Overview />
            <Pricing />
            <Subscribe />
        </div>
        <Blog />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import MainBanner from '../HomeNine/MainBanner';
import Features from '../HomeNine/Features';
import About from '../HomeNine/About';
import CheckWebsites from '../HomeNine/CheckWebsites';
import Services from '../HomeNine/Services';
import Funfacts from '../HomeNine/Funfacts';
import WeWork from '../HomeNine/WeWork';
import Faq from '../HomeNine/Faq';
import Partner from '../HomeNine/Partner'
import Overview from '../HomeNine/Overview';
import Pricing from '../HomeNine/Pricing';
import Subscribe from '../HomeNine/Subscribe'
import Blog from '../Common/Blog'
import FooterStyleTwo from '../Layouts/FooterStyleTwo'

export default {
    components: {
        Navbar,
        MainBanner,
        Features,
        About,
        CheckWebsites,
        Services,
        Funfacts,
        WeWork,
        Faq,
        Partner,
        Overview,
        Pricing,
        Subscribe,
        Blog,
        FooterStyleTwo,
    }
};
</script>
