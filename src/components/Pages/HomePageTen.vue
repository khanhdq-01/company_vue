<template>
    <div>
        <TopBar />
        <NavbarStyleThree />
        <MainBanner />
        <Features />
        <About />
        <Services />
        <Partner />
        <Expertise />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <Team />
        <Analysis />
        <Subscribe />
        <FooterStyleTwo />
    </div>
</template>

<script>
import TopBar from '../Layouts/TopBar'
import NavbarStyleThree from '../Layouts/NavbarStyleThree';
import MainBanner from '../HomeTen/MainBanner';
import Features from '../HomeTen/Features';
import About from '../HomeTen/About';
import Services from '../HomeTen/Services';
import Partner from '../HomeTen/Partner'
import Expertise from '../HomeTen/Expertise';
import CaseStudies from '../HomeTen/CaseStudies';
import Pricing from '../HomeTen/Pricing';
import Testimonials from '../HomeTen/Testimonials';
import Team from '../HomeTen/Team';
import Analysis from '../HomeTen/Analysis'
import Subscribe from '../HomeTen/Subscribe'
import FooterStyleTwo from '../Layouts/FooterStyleTwo'

export default {
    components: {
        TopBar,
        NavbarStyleThree,
        MainBanner,
        Features,
        About,
        Services,
        Partner,
        Expertise,
        CaseStudies,
        Pricing,
        Testimonials,
        Team,
        Analysis,
        Subscribe,
        FooterStyleTwo,
    }
};
</script>
