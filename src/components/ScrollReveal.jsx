"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const revealOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, revealOptions);
        
        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });

        // Hero Scrollytelling Effect
        const handleScroll = () => {
            const heroWrapper = document.querySelector('.hero-scroll-wrapper');
            const rotators = document.querySelectorAll('.rotator-item');
            if (heroWrapper && rotators.length > 0) {
                const wrapperRect = heroWrapper.getBoundingClientRect();
                const scrollableHeight = heroWrapper.offsetHeight - window.innerHeight;
                
                let progress = -wrapperRect.top / scrollableHeight;
                progress = Math.max(0, Math.min(1, progress));
                
                const numItems = rotators.length;
                let activeIndex = Math.floor(progress * numItems);
                if (activeIndex >= numItems) activeIndex = numItems - 1;
                
                rotators.forEach((item, index) => {
                    if (index === activeIndex) {
                        item.classList.add('active');
                        item.classList.remove('exit');
                    } else if (index < activeIndex) {
                        item.classList.add('exit');
                        item.classList.remove('active');
                    } else {
                        item.classList.remove('active', 'exit');
                    }
                });
                
                const heroContent = document.querySelector('.hero-content');
                if (heroContent) {
                    if (progress > 0.85) {
                        const fadeOutProgress = (progress - 0.85) / 0.15;
                        heroContent.style.opacity = Math.max(0, 1 - fadeOutProgress);
                        heroContent.style.transform = `translateY(-${fadeOutProgress * 50}px)`;
                    } else {
                        heroContent.style.opacity = 1;
                        heroContent.style.transform = `translateY(0px)`;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger handleScroll once on mount to set initial states
        handleScroll();

        return () => {
            revealOnScroll.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]); // Re-run when pathname changes

    return null; 
}
