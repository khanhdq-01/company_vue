<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>Get to know about <span>Striki</span></h2>

                        <accordion>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        What access do I have on the free plan?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        What access do I have on a free trial?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        Does the price go up as my team gets larger?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        How can I cancel/pause my subscription?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        Can I pay via an invoice?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </template>
                            </accordion-item>
                        </accordion>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="faq-image">
                        <img src="../../assets/img/faq-img1.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";

export default {
    name: 'Faq',
    components: {
        Accordion,
        AccordionItem
    },
}
</script>