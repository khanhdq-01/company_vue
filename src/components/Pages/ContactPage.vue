<template>
    <div>
        <Navbar />
        <PageTitle 
            pageTitle="Liên Hệ Với Chúng Tôi" 
            pageDesc="Gửi tin nhắn cho chúng tôi nếu bạn có bất kỳ câu hỏi nào" 
        />
        <Contact />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar';
import PageTitle from '../Common/PageTitle';
import Contact from '../Contact/Contact'
import OurLovingClients from '../Common/OurLovingClients'
import FooterStyleOne from '../Layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        PageTitle,
        Contact,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>