/* =========================================================
   MIPCO - MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const navbar =
        document.getElementById("navbar");


    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const icon =
                menuBtn.querySelector("i");


            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar > a"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (
                    navbar &&
                    menuBtn
                ) {

                    navbar.classList.remove(
                        "active"
                    );


                    const icon =
                        menuBtn.querySelector("i");


                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }
        );

    });


    /* =====================================================
       DROPDOWN MENU
    ===================================================== */

    const dropdowns =
        document.querySelectorAll(
            ".nav-dropdown"
        );


    dropdowns.forEach(
        function (dropdown) {

            const toggle =
                dropdown.querySelector(
                    ".dropdown-toggle"
                );


            if (!toggle) return;


            toggle.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    dropdowns.forEach(
                        function (item) {

                            if (
                                item !== dropdown
                            ) {

                                item.classList.remove(
                                    "active"
                                );

                            }

                        }
                    );


                    dropdown.classList.toggle(
                        "active"
                    );


                    const isExpanded =
                        dropdown.classList.contains(
                            "active"
                        );


                    toggle.setAttribute(
                        "aria-expanded",
                        isExpanded
                    );

                }
            );

        }
    );


    /* =====================================================
       CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            dropdowns.forEach(
                function (dropdown) {

                    if (
                        !dropdown.contains(
                            event.target
                        )
                    ) {

                        dropdown.classList.remove(
                            "active"
                        );


                        const toggle =
                            dropdown.querySelector(
                                ".dropdown-toggle"
                            );


                        if (toggle) {

                            toggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }

                }
            );

        }
    );


    /* =====================================================
       CLOSE MENU ON WINDOW RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 1000 &&
                navbar &&
                menuBtn
            ) {

                navbar.classList.remove(
                    "active"
                );


                const icon =
                    menuBtn.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header =
        document.querySelector(
            ".header"
        );


    function handleHeaderScroll() {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );


    handleHeaderScroll();


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                alert(
                    "تم استلام طلبك بنجاح، وسوف نتواصل معك في أقرب وقت."
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       WHATSAPP BUTTON CHECK
    ===================================================== */

    const whatsappButton =
        document.querySelector(
            ".whatsapp-float"
        );


    if (whatsappButton) {

        whatsappButton.style.display =
            "flex";

        whatsappButton.style.visibility =
            "visible";

    }


});