document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeIcon = themeSwitch.querySelector('i');

    const langSwitch = document.getElementById('lang-switch');
    const progressBar = document.getElementById('scroll-progress');

    const translations = {
        en: {
            hero_subtitle: 'OUR VISION',
            hero_title: 'Optimization \u00D7 Maximization',
            hero_description: 'Creating a world where everyone can leverage their strengths to create the greatest value',
            hero_text1: 'There are tedious procedures and unnecessary tasks in business. Losing time to them and not focusing on what matters is a waste.',
            hero_text2: 'With the power of the University of Tokyo and AI, we automate thoroughly and let professionals handle it.',
            hero_motto: '\"Immerse yourself in what you love and are good at\"\nThis is the greatest engine for business growth.',
            contact_btn: 'Contact',
            strengths_title: 'University of Tokyo \u00D7 AI = Overwhelming business optimization',
            strength1_title: 'Automate and optimize operations with cutting-edge AI',
            strength1_desc: 'We constantly catch up with the latest AI technology and incorporate it into workflows to eliminate waste so you can focus on what matters.',
            strength2_title: 'High-level members with exceptional thinking and speed',
            strength2_desc: 'Our team of mostly University of Tokyo graduates swiftly understands any challenge and finds the optimal solution.',
            strength3_title: 'Total support from development to design and subsidies',
            strength3_desc: 'Engineers, designers and subsidy specialists collaborate to provide long-term consulting for business growth.',
            stat_projects: 'Projects',
            stat_satisfaction: 'Customer satisfaction',
            stat_ai: 'AI implementations',
            services_title: 'Services',
            service1_title: 'AI Agent Development',
            service1_desc: 'We develop AI agents that maximize efficiency such as chatbots, automation and data analysis.',
            service2_title: 'System Development',
            service2_desc: 'We handle everything from requirement definition to operation so you can leave it all to us.',
            service3_title: 'Subsidy Support',
            service3_desc: 'We handle complex applications to maximize subsidies and grants.',
            recruitment_title: 'Recruiting University of Tokyo engineering interns\nProviding overwhelming growth environment',
            recruitment_desc: 'We solve business issues with cutting-edge AI and expertise. Join us if you want to grow at high speed.',
            company_info: 'Company Info',
            testimonial1_text: '"OptiMax dramatically streamlined our operations."',
            testimonial1_author: '- CEO of Company A',
            testimonial2_text: '"We achieved outstanding results thanks to the talented team and AI technology."',
            testimonial2_author: '- CTO of Company B',
            testimonial3_text: '"The Subsidy Application tool let us apply smoothly and was a huge help."',
            testimonial3_author: '- Startup C',
            company_label_name: "Company Name",
            company_name: "OptiMax Inc.",
            company_label_address: "Address",
            company_address: "Shinagawa South Tower, 4-4-17 Minami-Shinagawa, Shinagawa-ku, Tokyo",
            company_label_established: "Founded",
            company_established: "April 2023",
            company_label_officers: "Executives",
            company_officers: "CEO Shota Osuga<br>Director Kaito Urata<br>Director Kotaro Takada<br>Director Hikaru Takahashi",
            faq_q1: 'Is the initial consultation free?',
            faq_a1: 'Yes, the first consultation is free of charge.',
            faq_q2: 'How long does it take to introduce AI?',
            faq_a2: 'Depending on the content, it can be introduced in as little as one month.',
            faq_q3: 'Can you handle requests from distant locations?',
            faq_a3: 'We mainly meet online, so we can work with clients nationwide.',
            contact_title: 'Contact',
            contact_intro: 'Feel free to contact us regarding our services or recruitment.',
            form_name: 'Name',
            form_email: 'Email',
            form_message: 'Message',
            submit_btn: 'Send',
            footer_copy: '© 2023 OptiMax Inc. All Rights Reserved.'
        },
        ja: {
            hero_subtitle: 'OUR VISION',
            hero_title: '最適化×最大化',
            hero_description: '誰もが自分の得意を活かし、最高の価値を生み出せる世界を創る',
            hero_text1: 'ビジネスの現場には、面倒な手続きや複雑な開発、やらなくてもいい業務があふれている。そんな無駄に時間を奪われて、やるべきことに集中できないのは、もったいなさすぎる。',
            hero_text2: '我々が、東大 × AIの力で、徹底的に自動化し、プロフェッショナルが巻き取る。',
            hero_motto: '「好きなこと、得意なことに没頭する」<br>それが、ビジネスの最大の成長エンジンになると信じている。',
            contact_btn: 'お問い合わせ',
            strengths_title: '東大 × AI ＝ 圧倒的な業務最適化',
            strength1_title: '最新のAI技術を活用し、業務を自動化・最適化',
            strength1_desc: '常に最先端のAI技術をキャッチアップし、業務フローに組み込むことでムダを徹底的に削減。人間がやるべき仕事にフォーカスできる環境を提供します。',
            strength2_title: 'ハイレベルなメンバーによる圧倒的な思考力とスピード',
            strength2_desc: '私たちは、ほぼ全員が東大出身のプロフェッショナル集団。複雑なシステム開発、データ分析、補助金申請など、どんな課題でも素早く理解し、最適解を導きます。',
            strength3_title: 'システム開発 × デザイン × 補助金申請までトータルサポート',
            strength3_desc: 'エンジニアだけでなく、デザイナーや補助金申請の専門家も在籍。単なる受託開発ではなく、ビジネスの成長に寄り添う長期的なコンサルティングまで対応可能。',
            stat_projects: 'プロジェクト実績',
            stat_satisfaction: '顧客満足度',
            stat_ai: 'AI導入実績',
            services_title: 'サービス内容',
            service1_title: 'AIエージェント開発',
            service1_desc: '最先端のAI技術を活用し、業務効率を最大化するAIエージェントを開発。チャットボット、タスク自動化、データ分析など、あなたのビジネスに最適なAIソリューションを提供します。',
            service2_title: 'システム開発',
            service2_desc: '「スピード × 丸投げOK」で、最短ルートの開発を実現。要件が固まっていなくても大丈夫。課題の整理から設計、開発、運用保守まですべてお任せください。',
            service3_title: '補助金採択くん',
            service3_desc: '補助金・助成金を最大限活用し、ビジネスの成長をサポート。複雑な申請プロセスを代行し、採択率を高めるための戦略的な書類作成を実施。',
            recruitment_title: '東大生エンジニアインターン生限定募集<br>圧倒的な成長環境を提供',
            recruitment_desc: '私たちは、最先端のAI技術と高度な専門知識を活かし、ビジネスの課題を解決するプロフェッショナル集団です。「優秀な環境で、圧倒的なスピードで成長したい」そんな志の高いエンジニアインターン生を募集します。',
            company_info: '会社情報',
            faq_q1: 'サービスの相談は無料ですか？',
            faq_a1: 'はい、初回のご相談は無料で承っております。',
            faq_q2: 'AI導入までどれくらいの期間が必要ですか？',
            faq_a2: '内容によりますが、最短1ヶ月での導入が可能です。',
            faq_q3: '遠方からの依頼も可能ですか？',
            faq_a3: 'オンラインでの打ち合わせを中心に、全国からご依頼いただけます。',
            contact_title: 'お問い合わせ',
            contact_intro: 'サービス内容、採用エントリーなど、お気軽にお問い合わせください。',
            form_name: 'お名前',
            form_email: 'メールアドレス',
            form_message: 'お問い合わせ内容',
            submit_btn: '送信する',
            footer_copy: '© 2023 株式会社OptiMax All Rights Reserved.'
        }
    };

    // Apply translations to elements with data-i18n

    const applyTranslations = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.body.setAttribute('data-lang', lang);
        langSwitch.textContent = lang === 'ja' ? 'EN' : 'JA';
    };

    const savedLang = localStorage.getItem('lang') || 'ja';
    applyTranslations(savedLang);

    langSwitch.addEventListener('click', () => {
        const current = document.body.getAttribute('data-lang') || 'ja';
        const newLang = current === 'ja' ? 'en' : 'ja';
        localStorage.setItem('lang', newLang);
        applyTranslations(newLang);
    });

    if (progressBar) {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / scrollTotal) * 100;
        progressBar.style.width = progress + '%';
    }
    
    themeSwitch.addEventListener('click', function() {
        if (document.body.getAttribute('data-theme') === 'light') {
            document.body.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                const menu = document.querySelector('.menu');
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });
    
    const fadeElements = document.querySelectorAll('.section-content');
    
    const fadeInOnScroll = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    fadeInOnScroll();
    
    window.addEventListener('scroll', fadeInOnScroll);
    
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    const counters = document.querySelectorAll('.counter');
    
    const startCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = +counter.innerText;
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(startCounters, 40);
            } else {
                counter.innerText = target;
            }
        });
    };
    
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounters();
                observer.unobserve(statsSection);
            }
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    /* Hero animation using GSAP */
    if (window.gsap) {
        gsap.from('.vision-subtitle', {y: 20, opacity: 0, duration: 1});
        gsap.from('.vision-title', {y: 40, opacity: 0, duration: 1, delay: 0.2});
        gsap.from('.vision-description', {y: 40, opacity: 0, duration: 1, delay: 0.4});
        gsap.from('.vision-motto', {y: 40, opacity: 0, duration: 1, delay: 0.6});
        gsap.from('.cta-button', {y: 40, opacity: 0, duration: 1, delay: 0.8});
    }

    /* Testimonials slider */
    const testimonials = document.querySelectorAll('#testimonials .testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 5000);
    }

    /* FAQ accordion */
    document.querySelectorAll('#faq .faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
        });
    });

    /* Scroll to top button */
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight / 2) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
            if (progressBar) {
                const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (window.scrollY / scrollTotal) * 100;
                progressBar.style.width = progress + '%';
            }
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < window.innerHeight) {
            const heroContent = document.querySelector('.hero-content');
            const parallaxSpeed = 0.5;
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
            }
            
            const heroBg = document.querySelector('#hero .hexagon-bg');
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrollPosition * -0.2}px)`;
            }
        }
    });
});
