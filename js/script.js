/* =========================================================
   MIPCO - MAIN JAVASCRIPT
   الوظائف:
   - قائمة الجوال
   - القائمة المنسدلة
   - تأثير التمرير على الهيدر
   - Swiper للمنتجات
   - نموذج الاتصال (واتساب)
   - تبديل اللغة (AR / EN)
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       العناصر الأساسية
    ===================================================== */
    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");
    const header = document.querySelector(".header");
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const langSwitcher = document.getElementById("langSwitcher");
    const langLabel = document.getElementById("langLabel");

    /* =====================================================
       الترجمات (AR / EN)
    ===================================================== */
    const translations = {
        ar: {
            nav_home: "الرئيسية",
            nav_about: "من نحن",
            nav_services: "خدماتنا",
            nav_products: "منتجاتنا",
            nav_parts: "قطع الغيار",
            nav_contact: "اتصل بنا",
            nav_service_supply: "توريد وتركيب المصاعد",
            nav_service_maintenance: "صيانة المصاعد",
            nav_service_modernize: "تحديث وتطوير المصاعد",
            nav_service_spare_parts: "توريد قطع الغيار",
            nav_service_escalators: "السلالم الكهربائية",
            btn_quote: "اطلب عرض سعر",
            btn_discover: "اكتشف خدماتنا",
            btn_contact: "تواصل معنا",
            btn_request_service: "طلب الخدمة",
            btn_see_more: "عرض المزيد",
            btn_explore: "اكتشف المزيد",
            btn_consult: "طلب استشارة",
            btn_spare_parts: "طلب قطع غيار",
            hero_small: "MIPCO ELEVATOR SOLUTIONS",
            hero_title_1: "حلول متكاملة لعالم",
            hero_title_2: "المصاعد الحديثة",
            hero_desc: "نقدم حلولاً متخصصة في توريد وتركيب وصيانة وتحديث المصاعد والسلالم الكهربائية بأعلى مستويات الجودة والأمان.",
            hero_card_label: "خدماتنا الرئيسية",
            hero_card_title: "حلول متكاملة للمصاعد",
            hero_service_1: "توريد وتركيب المصاعد",
            hero_service_2: "صيانة وتحديث المصاعد",
            hero_service_3: "توريد قطع الغيار",
            hero_service_4: "السلالم الكهربائية",
            about_label: "من نحن",
            about_title: "خبرة وحلول متطورة في عالم المصاعد",
            about_p1: "MIPCO - MILO ELEVATOR PLANT تقدم حلولاً متكاملة في مجال المصاعد، بداية من التوريد والتركيب وحتى الصيانة والتحديث وتوفير قطع الغيار.",
            about_p2: "نعمل على تقديم أعلى مستويات الجودة والأمان باستخدام أحدث التقنيات والحلول المناسبة لمختلف أنواع المباني والمنشآت.",
            about_stat_1: "سنوات من الخبرة",
            about_stat_2: "مشروع ناجح",
            about_stat_3: "دعم فني",
            services_label: "خدماتنا",
            services_title: "حلول متكاملة للمصاعد",
            services_desc: "نقدم مجموعة متكاملة من الخدمات لتلبية احتياجات المشاريع المختلفة.",
            products_label: "منتجاتنا",
            products_title: "حلول المصاعد لجميع أنواع المباني",
            products_desc: "مجموعة متنوعة من المصاعد المصممة لتناسب مختلف الاحتياجات.",
            product_1_title: "مصاعد الركاب",
            product_1_desc: "حلول مريحة وآمنة للمباني السكنية والتجارية.",
            product_2_title: "المصاعد البانورامية",
            product_2_desc: "تصميم عصري ومظهر مميز للمباني والفنادق.",
            product_3_title: "مصاعد البضائع",
            product_3_desc: "حلول قوية لنقل البضائع والأحمال المختلفة.",
            product_4_title: "مصاعد المستشفيات",
            product_4_desc: "مصاعد مخصصة للمنشآت الطبية والمستشفيات.",
            escalators_label: "السلالم الكهربائية",
            escalators_title: "حلول حركة متطورة للمباني الكبيرة",
            escalators_desc: "نوفر حلولاً متكاملة لتوريد وتركيب وصيانة السلالم الكهربائية والممرات المتحركة بأعلى معايير الجودة والسلامة.",
            escalator_li_1: "توريد السلالم الكهربائية",
            escalator_li_2: "تركيب وتشغيل الأنظمة",
            escalator_li_3: "الصيانة الدورية",
            escalator_li_4: "توفير قطع الغيار",
            why_label: "لماذا MIPCO",
            why_title: "الجودة والسلامة أولويتنا",
            why_desc: "نعمل على تقديم حلول موثوقة تناسب احتياجات عملائنا.",
            why_1_title: "الجودة",
            why_1_desc: "استخدام منتجات وحلول عالية الجودة.",
            why_2_title: "السلامة",
            why_2_desc: "تطبيق أعلى معايير الأمان والسلامة.",
            why_3_title: "الخبرة",
            why_3_desc: "فريق متخصص في أنظمة المصاعد.",
            why_4_title: "الدعم",
            why_4_desc: "خدمات دعم وصيانة مستمرة للعملاء.",
            parts_label: "قطع الغيار",
            parts_title: "قطع غيار عالية الجودة",
            parts_desc: "نوفر مجموعة واسعة من قطع الغيار والمكونات اللازمة لصيانة وتشغيل مختلف أنواع المصاعد.",
            contact_label: "تواصل معنا",
            contact_title: "نحن جاهزون لخدمتكم",
            contact_desc: "يمكنك التواصل معنا للحصول على عرض سعر أو استشارة.",
            contact_phone: "الهاتف",
            contact_email: "البريد الإلكتروني",
            contact_address: "العنوان",
            contact_address_value: "مصر",
            form_name: "الاسم بالكامل",
            form_phone: "رقم الهاتف",
            form_service: "اختر الخدمة المطلوبة",
            form_service_1: "توريد وتركيب المصاعد",
            form_service_2: "صيانة المصاعد",
            form_service_3: "تحديث وتطوير المصاعد",
            form_service_4: "السلالم الكهربائية",
            form_service_5: "قطع الغيار",
            form_message: "اكتب تفاصيل طلبك",
            form_submit: "إرسال طلب عرض سعر",
            clients_label: "عملاؤنا",
            clients_title: "نفخر بثقة عملائنا",
            clients_desc: "نفخر بالتعاون مع مجموعة من العملاء والشركات ونحرص دائمًا على تقديم أفضل حلول المصاعد والسلالم الكهربائية.",
            footer_about: "حلول متكاملة في مجال المصاعد والسلالم الكهربائية.",
            footer_quick: "روابط سريعة",
            footer_services: "خدماتنا",
            footer_service_1: "المصاعد",
            footer_service_4: "الصيانة",
            footer_contact: "تواصل معنا",
            copyright: "© 2026 MIPCO - MILO ELEVATOR PLANT جميع الحقوق محفوظة.",
            form_success: "تم تجهيز طلبك، سيتم فتح واتساب لإرساله.",
            form_error: "يرجى ملء الحقول المطلوبة: الاسم، الهاتف، الخدمة",
            whatsapp_label: "طلب عرض سعر جديد",
            whatsapp_name: "الاسم",
            whatsapp_phone: "الهاتف",
            whatsapp_service: "الخدمة المطلوبة",
            whatsapp_details: "التفاصيل"
        },
        en: {
            nav_home: "Home",
            nav_about: "About Us",
            nav_services: "Services",
            nav_products: "Products",
            nav_parts: "Spare Parts",
            nav_contact: "Contact Us",
            nav_service_supply: "Elevator Supply & Installation",
            nav_service_maintenance: "Elevator Maintenance",
            nav_service_modernize: "Elevator Modernization",
            nav_service_spare_parts: "Spare Parts Supply",
            nav_service_escalators: "Escalators",
            btn_quote: "Request a Quote",
            btn_discover: "Discover Our Services",
            btn_contact: "Contact Us",
            btn_request_service: "Request Service",
            btn_see_more: "See More",
            btn_explore: "Explore More",
            btn_consult: "Request Consultation",
            btn_spare_parts: "Request Spare Parts",
            hero_small: "MIPCO ELEVATOR SOLUTIONS",
            hero_title_1: "Integrated Solutions for",
            hero_title_2: "Modern Elevators",
            hero_desc: "We provide specialized solutions for supplying, installing, maintaining, and modernizing elevators and escalators with the highest levels of quality and safety.",
            hero_card_label: "Our Main Services",
            hero_card_title: "Complete Elevator Solutions",
            hero_service_1: "Elevator Supply & Installation",
            hero_service_2: "Maintenance & Modernization",
            hero_service_3: "Spare Parts Supply",
            hero_service_4: "Escalators",
            about_label: "About Us",
            about_title: "Experience & Advanced Solutions in Elevators",
            about_p1: "MIPCO - MILO ELEVATOR PLANT provides integrated solutions in the elevator field, from supply and installation to maintenance, modernization, and spare parts supply.",
            about_p2: "We deliver the highest standards of quality and safety using the latest technologies and solutions suitable for all types of buildings and facilities.",
            about_stat_1: "Years of Experience",
            about_stat_2: "Successful Projects",
            about_stat_3: "Technical Support",
            services_label: "Our Services",
            services_title: "Complete Elevator Solutions",
            services_desc: "We offer a comprehensive range of services to meet the needs of various projects.",
            products_label: "Our Products",
            products_title: "Elevator Solutions for All Building Types",
            products_desc: "A variety of elevators designed to suit different needs.",
            product_1_title: "Passenger Elevators",
            product_1_desc: "Comfortable and safe solutions for residential and commercial buildings.",
            product_2_title: "Panoramic Elevators",
            product_2_desc: "Modern design and distinctive look for buildings and hotels.",
            product_3_title: "Freight Elevators",
            product_3_desc: "Strong solutions for transporting goods and various loads.",
            product_4_title: "Hospital Elevators",
            product_4_desc: "Elevators dedicated to medical facilities and hospitals.",
            escalators_label: "Escalators",
            escalators_title: "Advanced Mobility Solutions for Large Buildings",
            escalators_desc: "We provide integrated solutions for supplying, installing, and maintaining escalators and moving walkways with the highest quality and safety standards.",
            escalator_li_1: "Escalator Supply",
            escalator_li_2: "Installation & Operation",
            escalator_li_3: "Periodic Maintenance",
            escalator_li_4: "Spare Parts Supply",
            why_label: "Why MIPCO",
            why_title: "Quality & Safety Are Our Priority",
            why_desc: "We work to provide reliable solutions that suit our clients' needs.",
            why_1_title: "Quality",
            why_1_desc: "Using high-quality products and solutions.",
            why_2_title: "Safety",
            why_2_desc: "Applying the highest safety and security standards.",
            why_3_title: "Experience",
            why_3_desc: "A specialized team in elevator systems.",
            why_4_title: "Support",
            why_4_desc: "Continuous support and maintenance services for clients.",
            parts_label: "Spare Parts",
            parts_title: "High-Quality Spare Parts",
            parts_desc: "We provide a wide range of spare parts and components needed for the maintenance and operation of various types of elevators.",
            contact_label: "Contact Us",
            contact_title: "We Are Ready to Serve You",
            contact_desc: "You can contact us to get a quote or consultation.",
            contact_phone: "Phone",
            contact_email: "Email",
            contact_address: "Address",
            contact_address_value: "Egypt",
            form_name: "Full Name",
            form_phone: "Phone Number",
            form_service: "Select the required service",
            form_service_1: "Elevator Supply & Installation",
            form_service_2: "Elevator Maintenance",
            form_service_3: "Elevator Modernization",
            form_service_4: "Escalators",
            form_service_5: "Spare Parts",
            form_message: "Write your request details",
            form_submit: "Send Quote Request",
            clients_label: "Our Clients",
            clients_title: "We Are Proud of Our Clients' Trust",
            clients_desc: "We are proud to cooperate with a group of clients and companies and always strive to provide the best elevator and escalator solutions.",
            footer_about: "Integrated solutions in the field of elevators and escalators.",
            footer_quick: "Quick Links",
            footer_services: "Our Services",
            footer_service_1: "Elevators",
            footer_service_4: "Maintenance",
            footer_contact: "Contact Us",
            copyright: "© 2026 MIPCO - MILO ELEVATOR PLANT. All rights reserved.",
            form_success: "Your request is ready. WhatsApp will open to send it.",
            form_error: "Please fill in the required fields: Name, Phone, Service",
            whatsapp_label: "New Quote Request",
            whatsapp_name: "Name",
            whatsapp_phone: "Phone",
            whatsapp_service: "Required Service",
            whatsapp_details: "Details"
        }
    };

    /* =====================================================
       المتغيرات الحالية
    ===================================================== */
    let currentLang = localStorage.getItem("mipco_lang") || "ar";
    const currentWhatsappNumber = "201289992138";

    /* =====================================================
       تطبيق اللغة
    ===================================================== */
    function applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        document.documentElement.setAttribute("lang", lang);
        document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

        // ترجمة العناصر النصية
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            if (t[key]) {
                el.textContent = t[key];
            }
        });

        // ترجمة الـ placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            const key = el.getAttribute("data-i18n-placeholder");
            if (t[key]) {
                el.setAttribute("placeholder", t[key]);
            }
        });

        // تحديث زر تبديل اللغة
        if (langLabel) {
            langLabel.textContent = lang === "ar" ? "EN" : "ع";
        }

        // تحديث عنوان الصفحة
        document.title = lang === "ar"
            ? "MIPCO | MILO ELEVATOR PLANT | مصاعد وسلالم كهربائية"
            : "MIPCO | MILO ELEVATOR PLANT | Elevators & Escalators";

        // تحديث الوصف
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", lang === "ar"
                ? "MIPCO - MILO ELEVATOR PLANT | حلول متكاملة للمصاعد والسلالم الكهربائية"
                : "MIPCO - MILO ELEVATOR PLANT | Integrated solutions for elevators and escalators");
        }

        localStorage.setItem("mipco_lang", lang);
        currentLang = lang;
    }

    /* =====================================================
       زر تبديل اللغة
    ===================================================== */
    if (langSwitcher) {
        langSwitcher.addEventListener("click", function (e) {
            e.preventDefault();
            const newLang = currentLang === "ar" ? "en" : "ar";
            applyLanguage(newLang);
        });
    }

    // تطبيق اللغة المحفوظة عند التحميل
    applyLanguage(currentLang);

    /* =====================================================
       وظيفة مساعدة لتحديث حالة زر القائمة
    ===================================================== */
    function updateMenuButton() {
        if (!menuBtn || !navbar) return;
        const isActive = navbar.classList.contains("active");
        const icon = menuBtn.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars", !isActive);
            icon.classList.toggle("fa-xmark", isActive);
        }
        menuBtn.setAttribute("aria-expanded", isActive ? "true" : "false");
    }

    /* =====================================================
       فتح/إغلاق قائمة الجوال (مع دعم اللمس)
    ===================================================== */
    if (menuBtn && navbar) {
        let lastTouchTime = 0;

        function toggleMenu(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            navbar.classList.toggle("active");
            updateMenuButton();
        }

        // دعم النقر العادي
        menuBtn.addEventListener("click", function (e) {
            const now = Date.now();
            if (now - lastTouchTime < 500) return;
            toggleMenu(e);
        });

        // دعم اللمس (للموبايل)
        menuBtn.addEventListener("touchend", function (e) {
            lastTouchTime = Date.now();
            toggleMenu(e);
        }, { passive: false });
    }

    /* =====================================================
       إغلاق قائمة الجوال عند النقر على أي رابط داخلها
    ===================================================== */
    const allNavLinks = document.querySelectorAll(".navbar a");
    allNavLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbar && navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                updateMenuButton();
            }
            const parentDropdown = link.closest(".nav-dropdown");
            if (parentDropdown) {
                parentDropdown.classList.remove("active");
                const toggle = parentDropdown.querySelector(".dropdown-toggle");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    /* =====================================================
       القائمة المنسدلة
    ===================================================== */
    dropdowns.forEach(function (dropdown) {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        if (!toggle) return;

        toggle.addEventListener("click", function (event) {
            event.stopPropagation();

            dropdowns.forEach(function (item) {
                if (item !== dropdown) {
                    item.classList.remove("active");
                    const itemToggle = item.querySelector(".dropdown-toggle");
                    if (itemToggle) itemToggle.setAttribute("aria-expanded", "false");
                }
            });

            dropdown.classList.toggle("active");
            const isExpanded = dropdown.classList.contains("active");
            toggle.setAttribute("aria-expanded", isExpanded);
        });
    });

    // إغلاق القائمة المنسدلة عند النقر خارجها
    document.addEventListener("click", function (event) {
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
                const toggle = dropdown.querySelector(".dropdown-toggle");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    /* =====================================================
       إغلاق القوائم عند تغيير حجم الشاشة
    ===================================================== */
    function closeMobileMenus() {
        if (window.innerWidth > 1000) {
            if (navbar && navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                updateMenuButton();
            }
            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("active");
                const toggle = dropdown.querySelector(".dropdown-toggle");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            });
        }
    }

    let resizeTimer;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(closeMobileMenus, 250);
    });

    /* =====================================================
       تأثير التمرير على الهيدر
    ===================================================== */
    function handleHeaderScroll() {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();

    /* =====================================================
       SWIPER - قسم المنتجات
    ===================================================== */
    if (typeof Swiper !== "undefined") {
        new Swiper(".products-swiper", {
            slidesPerView: 1.15,
            spaceBetween: 15,
            centeredSlides: false,
            loop: true,
            grabCursor: true,
            watchSlidesProgress: true,
            pagination: {
                el: ".products-swiper .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".products-swiper .swiper-button-next",
                prevEl: ".products-swiper .swiper-button-prev",
            },
            breakpoints: {
                500: {
                    slidesPerView: 1.5,
                    spaceBetween: 15,
                },
                700: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1180: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                },
            },
        });
    }

    /* =====================================================
       نموذج الاتصال - الإرسال إلى واتساب
    ===================================================== */
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();
            const t = translations[currentLang];

            if (!fullName || !phone || !service) {
                alert(t.form_error);
                return;
            }

            let whatsappMessage = `${t.whatsapp_label}:%0A`;
            whatsappMessage += `${t.whatsapp_name}: ${fullName}%0A`;
            whatsappMessage += `${t.whatsapp_phone}: ${phone}%0A`;
            whatsappMessage += `${t.whatsapp_service}: ${service}`;

            if (message) {
                whatsappMessage += `%0A${t.whatsapp_details}: ${message}`;
            }

            const whatsappURL = `https://wa.me/${currentWhatsappNumber}?text=${whatsappMessage}`;
            window.open(whatsappURL, "_blank");

            if (formMessage) {
                formMessage.textContent = t.form_success;
                formMessage.className = "form-message success";
                setTimeout(function () {
                    formMessage.style.display = "none";
                    formMessage.textContent = "";
                    formMessage.className = "form-message";
                }, 5000);
            }

            contactForm.reset();
        });
    }

    /* =====================================================
       زر واتساب العائم
    ===================================================== */
    const whatsappButton = document.querySelector(".whatsapp-float");
    if (whatsappButton) {
        whatsappButton.style.display = "flex";
        whatsappButton.style.visibility = "visible";
    }

});
