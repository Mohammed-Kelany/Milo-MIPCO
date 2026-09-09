
/* =========================================================
   MIPCO - MAIN JAVASCRIPT
   الوظائف: قائمة الجوال، القائمة المنسدلة، تأثير التمرير،
   إغلاق القوائم، وإرسال النموذج إلى واتساب
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
       فتح/إغلاق قائمة الجوال
    ===================================================== */
    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");
            updateMenuButton();
        });
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
            // إغلاق القائمة المنسدلة أيضًا إذا كانت مفتوحة
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

            // إغلاق باقي القوائم
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
       إغلاق القوائم عند تغيير حجم الشاشة (للعودة لسطح المكتب)
    ===================================================== */
    function closeMobileMenus() {
        if (window.innerWidth > 1000) {
            if (navbar && navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                updateMenuButton();
            }
            // إغلاق أي قائمة منسدلة
            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove("active");
                const toggle = dropdown.querySelector(".dropdown-toggle");
                if (toggle) toggle.setAttribute("aria-expanded", "false");
            });
        }
    }

    // استخدام debounce لتحسين الأداء
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
    handleHeaderScroll(); // للتأكد من الحالة عند التحميل

    /* =====================================================
       نموذج الاتصال - الإرسال إلى واتساب
    ===================================================== */
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // منع الإرسال الافتراضي للنموذج

            // جمع البيانات من الحقول
            const fullName = document.getElementById("fullName").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            // التحقق من أن الحقول الإلزامية ممتلئة (اختياري، لأن HTML required يقوم بالتحقق)
            if (!fullName || !phone || !service) {
                alert("يرجى ملء الحقول المطلوبة: الاسم، الهاتف، الخدمة");
                return;
            }

            // إنشاء نص الرسالة للواتساب
            let whatsappMessage = "طلب عرض سعر جديد:%0A";
            whatsappMessage += `الاسم: ${fullName}%0A`;
            whatsappMessage += `الهاتف: ${phone}%0A`;
            whatsappMessage += `الخدمة المطلوبة: ${service}`;

            // إضافة تفاصيل إضافية إن وجدت
            if (message) {
                whatsappMessage += `%0Aالتفاصيل: ${message}`;
            }

            // رقم الواتساب (بصيغة دولية بدون + أو 00)
            const whatsappNumber = "201227716700";
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            // فتح الرابط في نافذة جديدة
            window.open(whatsappURL, "_blank");

            // عرض رسالة نجاح (اختياري)
            if (formMessage) {
                formMessage.textContent = "تم تجهيز طلبك، سيتم فتح واتساب لإرساله.";
                formMessage.className = "form-message success";
                setTimeout(function () {
                    formMessage.style.display = "none";
                    formMessage.textContent = "";
                    formMessage.className = "form-message";
                }, 5000);
            }

            // إعادة تعيين النموذج (اختياري)
            contactForm.reset();
        });
    }

    /* =====================================================
       زر واتساب العائم (تأكيد الظهور)
    ===================================================== */
    const whatsappButton = document.querySelector(".whatsapp-float");
    if (whatsappButton) {
        whatsappButton.style.display = "flex";
        whatsappButton.style.visibility = "visible";
    }

}); 
