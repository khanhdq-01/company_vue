<template>
    <div class="sm-faq-area pb-100">
        <div class="container pt-100">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-md-12">
                    <div class="sm-faq-image">
                        <img src="../../assets/img/seo-marketing/faq.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="sm-faq-accordion">
                        <h2>Get to know about Striki</h2>

                        <accordion>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        Keyword & Market Research
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla porttitor accumsan tincidunt cras ultricies ligula sed magna dictum porta curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        Graphics & Interactive Content
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla porttitor accumsan tincidunt cras ultricies ligula sed magna dictum porta curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        Why is SEO Link Building Important?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla porttitor accumsan tincidunt cras ultricies ligula sed magna dictum porta curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        How can I cancel my subscription?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla porttitor accumsan tincidunt cras ultricies ligula sed magna dictum porta curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        Social Media Promotion
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nulla porttitor accumsan tincidunt cras ultricies ligula sed magna dictum porta curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
                                </template>
                            </accordion-item>
                        </accordion>
                    </div>
                </div>
            </div>
        </div>

        <div class="sm-faq-shape">
            <img src="../../assets/img/seo-marketing/faq-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
import Accordion from "../Common/Accordion";
import AccordionItem from "../Common/AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem
    },
}
</script>