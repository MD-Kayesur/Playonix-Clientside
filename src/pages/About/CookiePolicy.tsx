import { Cookie, AlertTriangle, Shield, Globe } from "lucide-react";

const CookiePolicy = () => {
    return (
        <div className="p-6 pt-6 min-h-full space-y-8 animate-in slide-in-from-bottom-5 duration-500 text-white">
            <div className="flex items-center gap-3 border-b border-border pb-6">
                <Cookie className="w-8 h-8 text-[#FACC15]" />
                <h1 className="text-2xl font-bold text-white">Cookie Policy</h1>
            </div>

            {/* Header Info Bar */}
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-md px-3 py-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>18+ Only — Gambling can be addictive. Play responsibly.</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-muted text-white border border-border rounded-md px-3 py-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>We do not use behavioral retargeting or advertising cookies.</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-muted text-white border border-border rounded-md px-3 py-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>GDPR, UK GDPR & CCPA aware.</span>
                </div>
            </div>

            <div className="rounded-md border border-border p-6 bg-card">
                {/* Meta info */}
                <div className="space-y-1 text-xs text-white mb-6">
                    <p><span className="font-semibold text-white">Effective Date:</span> March 14, 2026</p>
                    <p><span className="font-semibold text-white">Last Updated:</span> March 14, 2026</p>
                </div>

                <div className="space-y-8 text-white">

                    {/* Section 1 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">1. Introduction</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>This Cookie Policy explains how OCReels.com ("OCReels", "we", "us", or "our") uses cookies and similar technologies when you access or use the OCReels.com website and related services (the "Service").</p>
                            <p>OCReels is an independent platform that provides casino comparisons, ratings, reviews, short-form video content, and community interactions.</p>
                            <p>This policy should be read together with the OCReels Privacy Policy and Terms of Service.</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">2. What Are Cookies</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Cookies are small text files stored on your device when you visit a website. They help websites operate properly, improve performance, remember preferences, and maintain security.</p>
                            <p>Cookies may be temporary (session cookies) or stored for longer periods (persistent cookies).</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">3. Device-Based Identification (No User Accounts)</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>OCReels does not create traditional user accounts.</p>
                            <p>Instead, the platform may associate activity with a device-based identifier generated using signals such as IP address, browser characteristics, and device information.</p>
                            <p>This allows users to interact with the platform, post ratings or comments, and participate in community activity without registering personal accounts.</p>
                            <p>Depending on jurisdiction, certain device identifiers may still be considered personal data under applicable data protection laws.</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">4. Types of Cookies We Use</h2>
                        <p className="text-sm leading-relaxed">OCReels may use the following categories of cookies.</p>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "4.1 Strictly Necessary Cookies",
                                    body: "These cookies are essential for the website to function properly. They enable core platform functionality including page navigation, security systems, fraud prevention, and platform stability. Without these cookies the website may not operate correctly.",
                                },
                                {
                                    title: "4.2 Performance and Analytics Cookies",
                                    body: "These cookies help us understand how visitors interact with the platform by collecting information such as pages visited, session duration, traffic sources, and general device information. This data is typically aggregated and used to improve platform performance and user experience.",
                                },
                                {
                                    title: "4.3 Functionality Cookies",
                                    body: "Functionality cookies allow the platform to remember preferences such as language selection or user interface settings.",
                                },
                                {
                                    title: "4.4 Affiliate Tracking Cookies",
                                    body: "OCReels may contain affiliate links to third party websites including online casino operators. When you click such links, third party partners may place cookies on your device to track referrals. These cookies are controlled by the third party operator and not by OCReels.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="pl-3 border-l-2 border-border space-y-1">
                                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm leading-relaxed">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">5. Cookies We Do Not Use</h2>
                        <p className="text-sm leading-relaxed">OCReels does not intentionally use the following technologies:</p>
                        <ul className="space-y-1.5 pl-4 text-sm">
                            {[
                                'behavioral retargeting advertising cookies',
                                'cross-site tracking technologies for advertising networks',
                                'hidden tracking pixels for advertising surveillance',
                                'invasive fingerprinting systems used for behavioral marketing',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">6. Automatic Data Collection Technologies</h2>
                        <p className="text-sm leading-relaxed">When you access the platform we may automatically collect certain technical information including:</p>
                        <ul className="space-y-1.5 pl-4 text-sm">
                            {[
                                'IP address',
                                'browser type and version',
                                'device information',
                                'approximate geographic region',
                                'time zone settings',
                                'session activity data',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm leading-relaxed">This information is used solely for platform security, fraud prevention, abuse detection, and service stability.</p>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">7. Cookie Consent Banner</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Where required by law, OCReels may display a cookie consent banner informing users that cookies are used and linking to this Cookie Policy.</p>
                            <p>Users may accept or manage cookie preferences where applicable. Strictly necessary cookies remain active at all times because they are required for platform functionality.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">8. Managing Cookies</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>You can manage cookies through your browser settings. Most browsers allow users to delete cookies, block cookies, disable third party cookies, or browse in private mode.</p>
                            <p>If essential cookies are blocked, certain parts of the platform may not function correctly.</p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">9. Your Rights Under Data Protection Laws (GDPR)</h2>
                        <p className="text-sm leading-relaxed">Under the General Data Protection Regulation (EU) 2016/679 and other applicable data protection laws, individuals may have the following rights:</p>
                        <div className="space-y-2">
                            {[
                                ['Right of Access', 'to obtain confirmation of whether personal data is processed and access to that data.'],
                                ['Right to Rectification', 'to request correction of inaccurate or incomplete personal data.'],
                                ['Right to Erasure', 'to request deletion of personal data where legally applicable.'],
                                ['Right to Restriction of Processing', 'to request limitations on how data is processed.'],
                                ['Right to Object', 'to object to certain types of processing based on legitimate interests.'],
                                ['Right to Data Portability', 'to receive personal data in a structured machine readable format.'],
                                ['Right to Withdraw Consent', 'where processing is based on consent.'],
                                ['Right to Lodge a Complaint', 'with a competent supervisory authority if you believe your data protection rights have been violated.'],
                            ].map(([right, desc], i) => (
                                <div key={i} className="pl-3 border-l-2 border-border text-sm">
                                    <span className="font-semibold text-white">{right}</span>
                                    <span className="text-white"> — {desc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">10. International Users</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>OCReels is accessible worldwide. Depending on your location different privacy regulations may apply including GDPR, UK GDPR, CCPA, and other regional laws.</p>
                            <p>By using the platform you acknowledge that data processing may occur in jurisdictions outside your country of residence.</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">11. Changes to This Policy</h2>
                        <p className="text-sm leading-relaxed">We may update this Cookie Policy periodically to reflect legal, technical, or operational changes. The most recent version will always be published on this page with an updated revision date.</p>
                    </section>

                    {/* Section 12 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">12. Contact</h2>
                        <p className="text-sm leading-relaxed">If you have questions about this Cookie Policy you may contact: <a href="mailto:legal@ocreels.com" className="text-[#FACC15] hover:underline">legal@ocreels.com</a></p>
                    </section>

                    <p className="text-xs font-medium mt-10 italic border-t border-border pt-4">
                        Effective Date: March 14, 2026 — Last Updated: March 14, 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;