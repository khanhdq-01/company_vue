<template>
    <div class="faq-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12">
                    <div class="faq-accordion">
                        <h2>Câu hỏi thường gặp <span>KodingSoft</span></h2>

                        <accordion>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        KodingSoft sử dụng công nghệ nào trong phát triển web?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>KodingSoft sử dụng các công nghệ hiện đại như Vue.js, Laravel, và Node.js để phát triển các ứng dụng web. Chúng tôi cũng kết hợp các công cụ tiên tiến như Docker và MySQL để đảm bảo hiệu suất và tính mở rộng của dự án.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        Làm sao để KodingSoft tối ưu hiệu suất trang web?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>KodingSoft tối ưu hóa hiệu suất web bằng cách sử dụng các phương pháp như giảm thiểu mã nguồn, tối ưu hóa hình ảnh, và sử dụng các công nghệ tiên tiến như lazy loading và caching để trang web tải nhanh hơn và hoạt động mượt mà hơn.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        KodingSoft có hỗ trợ xây dựng website responsive không?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Vâng, tất cả các dự án của KodingSoft đều được thiết kế để đảm bảo tính tương thích cao trên các thiết bị khác nhau. Chúng tôi sử dụng CSS Flexbox, Grid và các phương pháp responsive design khác để tối ưu hóa trải nghiệm người dùng trên tất cả các thiết bị.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        KodingSoft có cung cấp dịch vụ bảo trì web không?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>KodingSoft cung cấp dịch vụ bảo trì web dài hạn cho các khách hàng của mình. Chúng tôi đảm bảo rằng trang web của bạn luôn được cập nhật, sửa lỗi kịp thời và tối ưu hóa thường xuyên để duy trì hiệu suất tối đa.</p>
                                </template>
                            </accordion-item>
                            <accordion-item>
                                <template v-slot:accordion-trigger>
                                    <button class="accordion-button">
                                        <i class="bx bx-plus"></i>
                                        KodingSoft có hỗ trợ tích hợp các công cụ bên ngoài vào website không?
                                    </button>
                                </template>
                                <template v-slot:accordion-content>
                                    <p>Chắc chắn! KodingSoft có kinh nghiệm tích hợp các công cụ và API bên ngoài vào website, bao gồm các dịch vụ thanh toán, công cụ phân tích dữ liệu, và các nền tảng CRM để tăng cường chức năng và hiệu quả của trang web.</p>
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
