import React from 'react';

export default function TmsEnterpriseBusinessFlowSection() {
    return (
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>


            {/* Decorative background glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', opacity: '0.05', zIndex: 0, filter: 'blur(80px)', pointerEvents: 'none' }}></div>
            
            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-block', background: 'rgba(50,255,152,0.1)', color: 'var(--primary)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.5rem' }}>BUSINESS FLOW</div>
                    <h2 style={{ fontSize: '2.8rem', fontWeight: '800', letterSpacing: '-1px' }}>กระบวนการทำงาน<span className="text-gradient">แบบบูรณาการ</span></h2>
                </div>

                <div style={{ padding: '2rem 0', position: 'relative', overflowX: 'auto' }}>
                    <div className="business-flow-container">
                        
                        {/* Column 1: ORDER PLANNING */}
                        <div className="flow-column">
                            <h3 className="flow-col-title">ORDER PLANNING</h3>
                            
                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                </div>
                                <div className="node-content">
                                    <h4>API Order</h4>
                                    <p>รองรับการเชื่อมต่อระบบ WMS ERP ชั้นนำระดับโลก</p>
                                    <div className="erp-logos">
                                        <span>SAP</span> <span>Oracle</span> <span>Odoo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flow-arrow-down"></div>

                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                </div>
                                <div className="node-content">
                                    <h4>Automate Planing</h4>
                                    <p>วางแผนการขนส่งสินค้าจาก 3 ชั่วโมง เหลือเพียง 3 นาที</p>
                                </div>
                                <div className="badge-auto" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    AUTO 
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}>
                                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* SNAKE 1: From Col 1 (Box 2) to Col 2 (Box 1) */}
                        <div className="snake-connector snake-1">
                            <div className="line-h-bottom"></div>
                            <div className="line-v"></div>
                            <div className="line-h-top"></div>
                            <div className="snake-dot"></div>
                        </div>

                        {/* Column 2: JOB ASSIGNMENT */}
                        <div className="flow-column">
                            <h3 className="flow-col-title">JOB ASSIGNMENT</h3>
                            
                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                </div>
                                <div className="node-content">
                                    <h4>Free TMS For Carrier</h4>
                                    <p>Standardize to every parts</p>
                                </div>
                            </div>

                            <div className="flow-arrow-vertical-space dashed-vertical"></div>

                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                </div>
                                <div className="node-content">
                                    <h4>360TRUCKER APP</h4>
                                    <p>ผู้ให้บริการขนส่งตอบรับงาน และอัปเดตสถานะการขนส่งผ่านแอป</p>
                                </div>
                            </div>

                            <div className="flow-arrow-vertical-space dashed-vertical"></div>

                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </div>
                                <div className="node-content">
                                    <h4>360TRUCK Crowdsourcing</h4>
                                    <p>เชื่อมต่อกับแพลตฟอร์ม 360TRUCK หาผู้ให้บริการขนส่งได้อย่างไร้รอยต่อ</p>
                                </div>
                            </div>
                        </div>

                        {/* SNAKE 2: From Col 2 (Box 3) to Col 3 (Box 1) */}
                        <div className="snake-connector snake-2">
                            <div className="line-h-bottom"></div>
                            <div className="line-v"></div>
                            <div className="line-h-top"></div>
                            <div className="snake-dot" style={{ animationDelay: '0.5s' }}></div>
                        </div>

                        {/* Column 3: MONITORING */}
                        <div className="flow-column">
                            <h3 className="flow-col-title">MONITORING</h3>
                            
                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                </div>
                                <div className="node-content">
                                    <h4>Queue Management</h4>
                                    <p>การจัดการคิว จัดลำดับ ควบคุม และกระจายงานผู้ให้บริการขนส่ง</p>
                                </div>
                            </div>

                            <div className="flow-arrow-vertical-space dashed-vertical"></div>

                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                </div>
                                <div className="node-content">
                                    <h4>Instant Performance Report</h4>
                                    <p>แดชบอร์ดรายงานผลการดำเนินงานแบบเรียลไทม์</p>
                                </div>
                            </div>

                            <div className="flow-arrow-vertical-space dashed-vertical"></div>

                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div className="node-content">
                                    <h4>GPS Gateway</h4>
                                    <p>สามารถเชื่อมต่อข้อมูล GPS ได้มากกว่า 20 แบรนด์ในระบบเดียว</p>
                                </div>
                            </div>
                        </div>

                        {/* SNAKE 2: From Col 3 (Box 3) to Col 4 (Box 1) */}
                        <div className="snake-connector snake-2">
                            <div className="line-h-bottom"></div>
                            <div className="line-v"></div>
                            <div className="line-h-top"></div>
                            <div className="snake-dot" style={{ animationDelay: '1s' }}></div>
                        </div>

                        {/* Column 4: SETTLEMENT */}
                        <div className="flow-column">
                            <h3 className="flow-col-title">SETTLEMENT</h3>
                            
                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                </div>
                                <div className="node-content">
                                    <h4>API Cost Billing</h4>
                                    <p>Seamless Integration</p>
                                    <div className="erp-logos">
                                        <span>SAP</span> <span>Oracle</span> <span>Odoo</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flow-arrow-down"></div>

                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                </div>
                                <div className="node-content">
                                    <h4>Automate Cost Calculation</h4>
                                    <p>ระบบคำนวณค่าใช้จ่ายอัตโนมัติสำหรับผู้ให้บริการขนส่ง</p>
                                </div>
                                <div className="badge-auto" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    AUTO 
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '12px', height: '12px' }}>
                                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                                    </svg>
                                </div>
                            </div>

                            <div className="flow-arrow-down"></div>

                            <div className="flow-node">
                                <div className="minimal-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                </div>
                                <div className="node-content">
                                    <h4>อนุมัติจ่ายค่าขนส่ง</h4>
                                    <p>บัญชีสามารถทำจ่ายผู้ให้บริการขนส่งได้อย่างถูกต้อง และแม่นยำ</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
