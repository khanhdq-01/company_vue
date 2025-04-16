<template>
    <div class="pricing-area pt-100 pb-70 bg-f4f5fe">
        <div class="container">
            <div class="section-title">
                <h2>Choose The Pricing Plan</h2>
            </div>

            <div class="pricing-list-tab">
                <div class="tabs">
                    <ul class="tabs__header">
                        <li 
                            class="tabs__header-item" 
                            v-for="tab in tabs" 
                            v-on:click="selectTab (tab.id)" 
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <i :class="tab.icon"></i>
                            {{tab.name}}
                        </li>
                    </ul>
                </div>
                <div class="tabs__container">
                    <div 
                        class="tabs__list"
                        ref='tabsList'
                    >
                        <div 
                            class="tabs__list-tab"
                            v-for="tab in tabs"
                            v-bind:class="{ 'active': activeTab == tab.id }"
                            :key="tab.id"
                        >
                            <div class="row justify-content-center">
                                <div 
                                    class="col-lg-4 col-md-6"
                                    v-for="item in tab.items"
                                    :key="item.id"
                                >
                                    <div class="single-pricing-table left-align">
                                        <div class="pricing-header">
                                            <h3>{{item.title}}</h3>
                                        </div>

                                        <div class="price">
                                            <sup>$</sup>{{item.price}}<sub>/ {{item.period}}</sub>
                                        </div>

                                        <ul class="pricing-features">
                                            <li
                                                v-for="feature in item.pricingFeatures"
                                                :key="feature.id"
                                            >
                                                <i :class="feature.icon"></i> 
                                                {{feature.feature}}
                                            </li>
                                        </ul>

                                        <div class="btn-box">
                                            <router-link :to="item.btnLink" class="default-btn">
                                                <i class="bx bxs-hot"></i> 
                                                {{item.btnText}}
                                                <span></span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PricingPlan',
    data () {
        return {
            activeTab: 1,
            offsetRight: 0,
            tabs: [
                {
                    id: 1,
                    icon: 'bx bxs-calendar-check',
                    name: 'Monthly',
                    items: [
                        {
                            id: 1,
                            title: 'Free',
                            price: '0',
                            period: 'monthly',
                            btnText: 'Try It Free Now',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Up to 3 chat operators',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bxs-badge-check',
                                    feature: '100 ChatBot Triggers',
                                },
                                {
                                    id: 3,
                                    icon: 'bx bxs-badge-check',
                                    feature: '24/7 Live Chat',
                                },
                                {
                                    id: 4,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Email Integration',
                                },
                                {
                                    id: 5,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Messenger Integration',
                                },
                                {
                                    id: 6,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Info',
                                },
                                {
                                    id: 7,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Mobile + Desktop Apps',
                                },
                                {
                                    id: 8,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Quick Responses',
                                },
                                {
                                    id: 9,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Drag & Drop Widgets',
                                },
                                {
                                    id: 10,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Notes',
                                },
                                {
                                    id: 11,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Google Analytics',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: 'Starter',
                            price: '49',
                            period: 'monthly',
                            btnText: 'Try It Free Now',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Up to 4 chat operators',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bxs-badge-check',
                                    feature: '150 ChatBot Triggers',
                                },
                                {
                                    id: 3,
                                    icon: 'bx bxs-badge-check',
                                    feature: '24/7 Live Chat',
                                },
                                {
                                    id: 4,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Email Integration',
                                },
                                {
                                    id: 5,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Messenger Integration',
                                },
                                {
                                    id: 6,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Info',
                                },
                                {
                                    id: 7,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Mobile + Desktop Apps',
                                },
                                {
                                    id: 8,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Quick Responses',
                                },
                                {
                                    id: 9,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Drag & Drop Widgets',
                                },
                                {
                                    id: 10,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Notes',
                                },
                                {
                                    id: 11,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Google Analytics',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: 'Professional',
                            price: '79',
                            period: 'monthly',
                            btnText: 'Try It Free Now',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Up to 5 chat operators',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bxs-badge-check',
                                    feature: '200 ChatBot Triggers',
                                },
                                {
                                    id: 3,
                                    icon: 'bx bxs-badge-check',
                                    feature: '24/7 Live Chat',
                                },
                                {
                                    id: 4,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Email Integration',
                                },
                                {
                                    id: 5,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Messenger Integration',
                                },
                                {
                                    id: 6,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Info',
                                },
                                {
                                    id: 7,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Mobile + Desktop Apps',
                                },
                                {
                                    id: 8,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Quick Responses',
                                },
                                {
                                    id: 9,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Drag & Drop Widgets',
                                },
                                {
                                    id: 10,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Notes',
                                },
                                {
                                    id: 11,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Google Analytics',
                                },
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    icon: 'bx bxs-calendar-check',
                    name: 'Yearly',
                    items: [
                        {
                            id: 1,
                            title: 'Free',
                            price: '0',
                            period: 'yearly',
                            btnText: 'Try It Free Now',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Up to 3 chat operators',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bxs-badge-check',
                                    feature: '100 ChatBot Triggers',
                                },
                                {
                                    id: 3,
                                    icon: 'bx bxs-badge-check',
                                    feature: '24/7 Live Chat',
                                },
                                {
                                    id: 4,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Email Integration',
                                },
                                {
                                    id: 5,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Messenger Integration',
                                },
                                {
                                    id: 6,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Info',
                                },
                                {
                                    id: 7,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Mobile + Desktop Apps',
                                },
                                {
                                    id: 8,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Quick Responses',
                                },
                                {
                                    id: 9,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Drag & Drop Widgets',
                                },
                                {
                                    id: 10,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Notes',
                                },
                                {
                                    id: 11,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Google Analytics',
                                },
                            ]
                        },
                        {
                            id: 2,
                            title: 'Starter',
                            price: '79',
                            period: 'Yearly',
                            btnText: 'Try It Free Now',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Up to 4 chat operators',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bxs-badge-check',
                                    feature: '150 ChatBot Triggers',
                                },
                                {
                                    id: 3,
                                    icon: 'bx bxs-badge-check',
                                    feature: '24/7 Live Chat',
                                },
                                {
                                    id: 4,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Email Integration',
                                },
                                {
                                    id: 5,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Messenger Integration',
                                },
                                {
                                    id: 6,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Info',
                                },
                                {
                                    id: 7,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Mobile + Desktop Apps',
                                },
                                {
                                    id: 8,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Quick Responses',
                                },
                                {
                                    id: 9,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Drag & Drop Widgets',
                                },
                                {
                                    id: 10,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Notes',
                                },
                                {
                                    id: 11,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Google Analytics',
                                },
                            ]
                        },
                        {
                            id: 3,
                            title: 'Professional',
                            price: '99',
                            period: 'Yearly',
                            btnText: 'Try It Free Now',
                            btnLink: '/contact',
                            pricingFeatures: [
                                {
                                    id: 1,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Up to 5 chat operators',
                                },
                                {
                                    id: 2,
                                    icon: 'bx bxs-badge-check',
                                    feature: '200 ChatBot Triggers',
                                },
                                {
                                    id: 3,
                                    icon: 'bx bxs-badge-check',
                                    feature: '24/7 Live Chat',
                                },
                                {
                                    id: 4,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Email Integration',
                                },
                                {
                                    id: 5,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Messenger Integration',
                                },
                                {
                                    id: 6,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Info',
                                },
                                {
                                    id: 7,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Mobile + Desktop Apps',
                                },
                                {
                                    id: 8,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Quick Responses',
                                },
                                {
                                    id: 9,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Drag & Drop Widgets',
                                },
                                {
                                    id: 10,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Visitor Notes',
                                },
                                {
                                    id: 11,
                                    icon: 'bx bxs-badge-check',
                                    feature: 'Google Analytics',
                                },
                            ]
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    mounted () {
        let tabsList = this.$refs.tabsList
        tabsList.style.right = this.offsetRight + 'px'
    },
}
</script>