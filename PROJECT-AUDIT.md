# Project content and asset audit

Reviewed 15 November 2026. Professional roles and historical technologies come from Noor’s public LinkedIn profile or direct instructions. Public HTML, stylesheets, scripts, and local repository manifests provide additional technology evidence. Current site technology is not automatically treated as work Noor personally implemented; maintenance roles and known platform changes are stated explicitly.

## Public projects

| Project | Evidence and limits |
| --- | --- |
| [Hello Matcha](https://www.hellomatcha.sg/) | Custom `hello-matcha` WordPress theme; Tailwind signature in the compiled stylesheet; custom JavaScript; Contact Form 7, reCAPTCHA, Yoast SEO, and Google Tag Manager. Main-developer role confirmed by Noor. |
| [NTU College of Engineering](https://www.ntu.edu.sg/engineering/) | Sitefinity confirmed directly by Noor; ASP.NET web resources, NTU ResourcePackages CSS/JavaScript, ShareThis, and Google Tag Manager visible publicly. Main-developer role confirmed by Noor. |
| [NTU Nanofab](https://www.ntunanofab.com/) | Custom WordPress theme and `ntu-blocks` Gutenberg plugin; custom hero, media-card, and interactive-map scripts; Contact Form 7, reCAPTCHA, Yoast SEO, and Google Tag Manager. Main-developer role confirmed by Noor. |
| [Kandooma](https://kandooma-maldives.com/) | Custom WordPress theme, GSAP/ScrollTrigger, D-EDGE, Revinate forms, The Hotels Network, Contact Form 7, reCAPTCHA, Yoast SEO, and Google Tag Manager. Main-developer role confirmed by Noor. |
| [Gili Lankanfushi](https://gili-lankanfushi.com/) | LinkedIn establishes WordPress, Gutenberg, Yoast, Google Analytics, Emarsys, Fastbooking, and LEMP. Current site additionally exposes Bootstrap, jQuery, AOS, Slick, Fancybox, D-EDGE, Revinate, and custom blocks. |
| [DSO50](https://www.dso50.com.sg/) | LinkedIn records frontend support using AngularJS in 2022. Current site is an Angular-bundled application with Google Analytics. Portfolio preserves the historical technology and explains that the current site may have evolved. |
| [Join DSO / DSO Career Hub](https://join.dso.org.sg/) | Bonsey Jaden engagement supplied directly by Noor. Current public HTML and compiled frontend assets verify Bootstrap, jQuery, Swiper, GSAP, ScrollTrigger, Alpine.js, Vite, and Google Analytics. Captured the public homepage for the portfolio. No engagement date or unexposed backend stack was inferred. |
| [My First Skool](https://www.myfirstskool.com/) | LinkedIn records WordPress, GSAP, SiteOrigin, Yoast, and HubSpot. Browser-rendered HTML additionally exposes Gutenberg custom blocks, Stackable, jQuery, Swiper, and Google Tag Manager. HTTP requests sometimes receive a Cloudflare page, so browser inspection was used. |
| [PMIS](https://pmis.sisda.net/) | Public page describes SISDA/PUPR loan-project management and loads Bootstrap, jQuery, Chart.js, WOW.js, and Owl Carousel. LinkedIn records PUPR PMIS development with Laravel and the later PMC SIMURP PMIS assistant role. Backend details beyond that are not claimed. |
| [Momentree](https://momentree.co.id/) | Current public frontend loads Bootstrap, GSAP, ScrollTrigger, AOS, and Google Tag Manager. The existing local Momentree repository verifies Laravel, PHP, Sanctum, Laravel Mix, Sass, Axios, DataTables, Midtrans, QR codes, and spreadsheet tooling. No environment files were used. |
| [Cetaphil Friends](https://www.cetaphilfriends.com.sg/) | LinkedIn records WordPress/WooCommerce maintenance. Current source additionally exposes Bootstrap, jQuery, GSAP, Swiper, Dropzone, myCred, Brevo, Contact Form 7, OneTrust, and reCAPTCHA. Current technology does not imply ownership of every feature. |
| [American Standard APAC](https://www.americanstandard-apac.com/) | LinkedIn records Craft CMS maintenance. Current public site uses WordPress/Elementor. Portfolio keeps Craft CMS and explicitly notes the later platform change. |
| [Air Selangor](https://www.airselangor.com/) | LinkedIn records WordPress maintenance. Current public site uses Next.js. Portfolio keeps the historical stack and notes the platform change. |
| [Everise](https://weareeverise.com/) | WordPress maintenance documented on LinkedIn and verified in current public source. |
| [MISC Group](https://www.miscgroup.com/) | Umbraco maintenance documented on LinkedIn. The initial screenshot attempt encountered Cloudflare; a later browser visit loaded the live homepage successfully. Its verified screenshot is included as a local WebP asset. |

SIVA Kemenperin and Pratista Skincare appear on LinkedIn, but their historical domains did not resolve during the audit. They remain description-only entries with no guessed stack or broken website link. Loan Management System uses the eMonitoring login URL supplied by Noor: `https://emonitoring.sisda.net/login`. Its public login page provides the screenshot; current compiled assets additionally verify Vue.js, Vue Router, Vuetify, and ApexCharts. No login was performed. The earlier `lms.sisda.net` address is not used.

## Internal and mobile work

- **SAPA Gampong / Gampong Blang Digital:** existing repository README, backend/dashboard package manifests, Flutter pubspec, and deployment runbook verify the displayed stack. Images come from the repository’s prepared Play Store screenshots. No production or resident data was accessed.
- **Intranet JLM:** technologies and responsibilities are documented in the public professional profile. The public sign-in landing page at `https://intranet.jlm.net.id/`, supplied directly by Noor, is captured as the project image. No login was performed and no internal employee data was accessed.
- **WeR4Pets / PEDIGREE® App:** Noor explicitly confirmed the work was app maintenance and supplied the [Google Play listing](https://play.google.com/store/apps/details?id=com.mars.wer4pet&hl=en) and [related Pedigree Philippines website](https://www.pedigree.com.ph/). React Native and Express maintenance are documented in the professional profile. The project uses official app screenshots from Google Play. Pedigree is labeled as a related website, with no claim of website development or maintenance.
- **Bank Jatim CRM, KOIN POS/mobile, PUPR E-Archive, and Natieva:** technologies and responsibilities are limited to the public professional profile. No fabricated screenshots or public endpoints are supplied.

## Solusi Proteksi Mandiri products

All five products and their image assets are taken from the [company product pages](https://solusiproteksimandiri.com/product): Assets Management System, Broker Management System, Factory Tracking System, Gym Management System, and Venue Experience Website & CMS. Product cards link to those company pages, where visitors can find demo information. Portfolio does not duplicate demo credentials or add direct login flows.

Public demo source verifies React, React Router, and Tailwind CSS for Assets; Next.js and React for Broker, Factory, Gym, and Venue; and Tailwind CSS for Venue. Unexposed database/backend implementations are not guessed. Screenshots are stored locally as compressed WebP images.

## Logo sources

- Gunadarma: official university asset at `https://www.gunadarma.ac.id/wp-content/uploads/2024/03/logo-universitas-gunadarma-warna.png`; links point to the official university homepage. Degree dates and GPAs are from LinkedIn.
- Mediatropy: official mobile logo SVG from `https://www.mediatropy.com/images/logo-mobile.svg`.
- CUE: official logo image from `https://www.cue.group/assets/seo_logo.465b136e4405fa0f46bb.jpg`.
- Bonsey Jaden: company logo from its official LinkedIn company page, downloaded as a local asset so the portfolio does not depend on an expiring CDN URL.
- Jala Lintas Media: official image from `https://jlm.net.id/new-logo-jlm.png`.
- Solusi Proteksi Mandiri: official image from `https://solusiproteksimandiri.com/logo.png`.

Public project screenshots show current websites, which may have changed since the original engagement.
