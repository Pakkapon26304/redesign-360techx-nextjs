"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`} 
            id="navbar"
            style={{ 
                background: 'var(--nav-bg)', 
                backdropFilter: 'var(--glass-blur)', 
                WebkitBackdropFilter: 'var(--glass-blur)',
                borderBottom: '1px solid var(--border-color)'
            }}
        >
            <div className="nav-container">
                <Link href="/" className="logo-link">
                    <img src="/Logo-interface/360techx_logo_horizontal_nobg_white.png" className="logo-img dark-logo" />
                    <img src="/Logo-interface/360techx_logo_horizontal_nobg_black.png" alt="360TECHX Logo" className="logo-img light-logo" />
                </Link>
                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link href="/" className={pathname === '/' ? 'active' : ''}>หน้าแรก</Link>
                    <Link href="/about" className={pathname === '/about' ? 'active' : ''}>เกี่ยวกับเรา</Link>
                    <Link href="/ibid" className={pathname === '/ibid' ? 'active' : ''}>IBID</Link>
                    <div className="dropdown">
                        <Link href="#" className="dropbtn">TMS <span className="caret">&#9662;</span></Link>
                        <div className="dropdown-content">
                            <Link href="/360techx-basic">Basic</Link>
                            <Link href="#tms-premium" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>Premium <span style={{ fontSize: '0.6rem', background: 'var(--primary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase' }}>Soon</span></Link>
                            <Link href="/360techx-enterprise">Enterprise</Link>
                            <Link href="#topup" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>360TOP UP <span style={{ fontSize: '0.6rem', background: 'var(--primary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase' }}>Soon</span></Link>
                            <Link href="/ibid">iBID</Link>
                        </div>
                    </div>
                    <Link href="/news" className={pathname === '/news' ? 'active' : ''}>ข่าวสารและโปรโมชั่น</Link>
                    <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>ติดต่อเรา</Link>
                    
                    <div className="mobile-nav-actions">
                        <Link href="#" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>เข้าสู่ระบบ</Link>
                        <Link href="#" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>สมัครใช้งานฟรี</Link>
                    </div>
                </div>
                <div className="nav-actions-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button className="theme-toggle hide-on-mobile" onClick={toggleTheme} aria-label="Toggle Theme">
                        <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </button>
                    <div className="desktop-nav-actions" style={{ display: 'flex', gap: '1rem' }}>
                        <Link href="#" className="btn btn-outline hide-on-mobile">เข้าสู่ระบบ</Link>
                        <Link href="#" className="btn btn-primary topbar-signup">สมัครใช้งานฟรี</Link>
                    </div>
                </div>
                <div className="menu-toggle" onClick={toggleMobileMenu}>
                    <span className="bar" style={mobileMenuOpen ? { transform: 'rotate(-45deg) translate(-5px, 6px)' } : {}}></span>
                    <span className="bar" style={mobileMenuOpen ? { opacity: '0' } : {}}></span>
                    <span className="bar" style={mobileMenuOpen ? { transform: 'rotate(45deg) translate(-5px, -6px)' } : {}}></span>
                </div>
            </div>
        </nav>
    );
}
