import { Shield, AlertTriangle, Globe, Lock } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="p-6 pt-6 min-h-full space-y-8 animate-in slide-in-from-bottom-5 duration-500 text-white">
            <div className="flex items-center gap-3 border-b border-border pb-6">
                <Shield className="w-8 h-8 text-[#FACC15]" />
                <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
            </div>

            {/* Header Info Bar */}
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-md px-3 py-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>18+ Only — Gambling can be addictive. Play responsibly.</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-muted text-white border border-border rounded-md px-3 py-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    <span>Independent casino comparison and affiliate media platform.</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-muted text-white border border-border rounded-md px-3 py-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>We do not sell your personal data.</span>
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
                            <p>Welcome to Playonix.com ("Playonix", "we", "us", or "our"). This Privacy Policy explains how Playonix collects, uses, processes, stores, and protects personal data when users access or use the Playonix.com website and related services (the "Service").</p>
                            <p>Playonix operates as an independent casino comparison, review, affiliate marketing, and media platform. The Service may include casino reviews, rankings, ratings, promotional listings, sponsored placements, user-generated comments, and links to third-party websites including casino operators and related services.</p>
                            <p>Playonix is not a gambling operator. The Service does not offer casino games, accept wagers, hold player balances, process withdrawals, or provide gambling services.</p>
                            <p>Certain links on the Service may be affiliate tracking links. Playonix may receive compensation if a user clicks a link and performs actions on a third-party website, such as account registration or deposits.</p>
                            <p className="font-medium text-white/80">By accessing or using Playonix.com you acknowledge that you have read and understood this Privacy Policy.</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">2. Data Controller</h2>
                        <div className="text-sm leading-relaxed space-y-2">
                            <p>For purposes of applicable data protection laws, Playonix acts as the data controller of personal data processed through the Service.</p>
                            <p>Contact Email: <a href="mailto:hey@playonix.com" className="text-[#FACC15] hover:underline">hey@playonix.com</a></p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">3. Scope of This Policy</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>This Privacy Policy applies to personal data collected through the Playonix.com website, user comments and reviews, communications sent to Playonix, analytics technologies, affiliate attribution technologies, moderation systems, security systems, and fraud-prevention mechanisms.</p>
                            <p>This policy does not apply to third-party websites or services linked from Playonix. Such services operate under their own privacy policies and legal terms.</p>
                            <p>Playonix currently operates without requiring user account creation or login registration. Users may be able to submit comments or reviews without creating an account.</p>
                            <p>Because of this structure Playonix generally does not collect account credentials such as passwords or authentication data. However, technical identifiers may still be processed in connection with use of the Service.</p>
                        </div>
                    </section>

                    {/* Section 4 (Age Restrictions labeled as 5 in source) */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">4. Age Restrictions</h2>
                        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                            <p className="text-sm leading-relaxed text-yellow-500/90">The Service is intended strictly for adults. Users must be at least 18 years old or the legal age required in their jurisdiction to access gambling-related informational or promotional content. Playonix does not knowingly collect personal data from minors.</p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">5. Personal Data Collected</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Playonix may collect personal information voluntarily provided by users such as a nickname, email address used to contact us, or content contained within reviews, messages, or comments.</p>
                            <p>Technical information may also be collected automatically when users access the Service. This may include IP address, browser type, device type, operating system, referring pages, visited pages, timestamps, interaction data, and approximate location derived from IP address.</p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">6. Cookies and Similar Technologies</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Playonix uses cookies and related technologies to operate website functionality, remember preferences, measure traffic and performance, support security systems, prevent abuse, and measure affiliate link performance.</p>
                            <p>A separate Cookie Policy may provide more detailed information regarding these technologies.</p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">7. Affiliate Attribution</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Playonix participates in affiliate marketing programs. Some outbound links may contain tracking parameters allowing partners to measure link clicks, registrations, deposits, and other conversions.</p>
                            <p>Once users leave the Playonix website, third-party operators may collect and process their own data according to their own privacy policies.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">8. Purposes of Data Processing</h2>
                        <p className="text-sm leading-relaxed">Personal data may be processed for purposes including operating the website, enabling comment features, analyzing traffic and performance, detecting fraud or abuse, enforcing platform policies, responding to inquiries, complying with legal obligations, and protecting the rights and security of Playonix and its users.</p>
                    </section>

                    {/* Section 9 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">9. Legal Basis for Processing</h2>
                        <p className="text-sm leading-relaxed">Where the General Data Protection Regulation or similar legislation applies, processing may rely on legitimate interests in operating and securing the Service, user consent where required for cookies, compliance with legal obligations, and protection of legal rights.</p>
                    </section>

                    {/* Section 10 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">10. Data Not Intentionally Collected</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Playonix does not intentionally collect government identification documents, biometric data, banking information, payment card data, gambling account credentials, or detailed wagering history from third-party operators.</p>
                            <p>Users should not submit sensitive personal information through public areas of the Service.</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">11. Public Content</h2>
                        <p className="text-sm leading-relaxed">Reviews, comments, ratings, and other submissions may be publicly visible and may be indexed by search engines. Users should avoid including personal or sensitive information within public submissions.</p>
                    </section>

                    {/* Section 12 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">12. Moderation and Abuse Prevention</h2>
                        <p className="text-sm leading-relaxed">Technical data may be processed to detect spam, prevent review manipulation, identify automated abuse, investigate suspicious activity, enforce moderation rules, and maintain platform integrity.</p>
                    </section>

                    {/* Section 13 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">13. Data Sharing</h2>
                        <p className="text-sm leading-relaxed">Playonix does not sell personal data to data brokers. Limited information may be shared with service providers that support operation of the Service including hosting providers, infrastructure providers, analytics services, security tools, affiliate attribution systems, and legal or regulatory authorities where required by law.</p>
                    </section>

                    {/* Section 14 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">14. International Data Transfers</h2>
                        <p className="text-sm leading-relaxed">Because the Service may rely on global infrastructure providers, personal data may be processed outside a user's country of residence. Appropriate safeguards will be applied where required by applicable law.</p>
                    </section>

                    {/* Section 15 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">15. Data Retention</h2>
                        <p className="text-sm leading-relaxed">Personal data is retained only for as long as necessary for the operation of the Service, moderation purposes, security investigations, legal compliance, or resolution of disputes.</p>
                    </section>

                    {/* Section 16 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">16. Data Security</h2>
                        <p className="text-sm leading-relaxed">Playonix implements reasonable technical and organizational safeguards designed to protect personal data. However, no internet-based system can guarantee absolute security.</p>
                    </section>

                    {/* Section 17 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">17. User Rights</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Depending on applicable law, users may have rights to access personal data, request correction, request deletion, restrict processing, object to processing, withdraw consent where applicable, or lodge complaints with supervisory authorities.</p>
                            <p>Requests may be submitted to <a href="mailto:hey@playonix.com" className="text-[#FACC15] hover:underline">hey@playonix.com</a>.</p>
                        </div>
                    </section>

                    {/* Section 18 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">18. U.S. Privacy Rights</h2>
                        <p className="text-sm leading-relaxed">Residents of certain U.S. states may have additional rights under applicable privacy legislation including rights relating to access, correction, or deletion of personal information.</p>
                    </section>

                    {/* Section 19 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">19. Do Not Track Signals</h2>
                        <p className="text-sm leading-relaxed">Some browsers transmit Do Not Track signals. Because no universal standard exists for interpreting these signals, Playonix does not currently respond to them.</p>
                    </section>

                    {/* Section 20 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">20. Responsible Gambling Notice</h2>
                        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                            <p className="text-sm leading-relaxed text-yellow-500/90">Playonix may contain gambling-related promotional or informational content. Gambling involves financial risk and may lead to addiction. Playonix does not provide gambling services and does not control third-party operators.</p>
                        </div>
                    </section>

                    {/* Section 21 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">21. Changes to This Policy</h2>
                        <p className="text-sm leading-relaxed">Playonix may update this Privacy Policy from time to time. Updated versions will be published on the website with a revised date.</p>
                    </section>

                    {/* Section 22 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">22. Contact Information</h2>
                        <p className="text-sm leading-relaxed">Privacy inquiries may be directed to <a href="mailto:hey@playonix.com" className="text-[#FACC15] hover:underline">hey@playonix.com</a>.</p>
                    </section>

                    {/* Section 23 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">23. Final Statement</h2>
                        <p className="text-sm leading-relaxed font-medium text-white/80">
                            By using Playonix.com you acknowledge that you have read and agreed to this Privacy Policy.
                        </p>
                    </section>

                    <p className="text-xs font-medium mt-10 italic border-t border-border pt-4">
                        Effective Date: March 14, 2026 — Last Updated: March 14, 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
