<template>
    <div>
        <TopBar />
        <NavbarStyleThree />
        <MainBanner />
        <Partner />
        <Features />
        <WhatWeDo />
        <Funfacts />
        <Services />
        <WhyChooseUs />
        <Subscribe />
        <Team />
        <Pricing />
        <Testimonials />
        <Blog />
        <FooterStyleTwo />
    </div>
</template>

<script>
import TopBar from '../Layouts/TopBar'
import NavbarStyleThree from '../Layouts/NavbarStyleThree'
import MainBanner from '../HomeEleven/MainBanner'
import Partner from '../HomeEleven/Partner'
import Features from '../HomeEleven/Features'
import WhatWeDo from '../HomeEleven/WhatWeDo'
import Funfacts from '../HomeEleven/Funfacts'
import Services from '../HomeEleven/Services'
import WhyChooseUs from '../HomeEleven/WhyChooseUs'
import Subscribe from '../HomeEleven/Subscribe'
import Team from '../HomeEleven/Team'
import Pricing from '../HomeEleven/Pricing'
import Testimonials from '../HomeEleven/Testimonials'
import Blog from '../Common/Blog'
import FooterStyleTwo from '../Layouts/FooterStyleTwo'

export default {
    components: {
        TopBar,
        NavbarStyleThree,
        MainBanner,
        Partner,
        Features,
        WhatWeDo,
        Funfacts,
        Services,
        WhyChooseUs,
        Subscribe,
        Team,
        Pricing,
        Testimonials,
        Blog,
        FooterStyleTwo,
    }
};
</script>
