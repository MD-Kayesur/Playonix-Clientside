import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";

const TermsOfService = () => {
    return (
        <div className="p-6 pt-6 min-h-full space-y-8 animate-in slide-in-from-bottom-5 duration-500 text-white">
            <div className="flex items-center gap-3 border-b border-border pb-6">
                <FileText className="w-8 h-8 text-[#FACC15]" />
                <h1 className="text-2xl font-bold text-white">Terms of Service</h1>
            </div>

            {/* Header Info Bar */}
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-md px-3 py-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>18+ Only — Gambling can be addictive. Play responsibly.</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-muted text-white border border-border rounded-md px-3 py-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Independent platform. We may earn commissions from partner links.</span>
                </div>
                <div className="flex items-center gap-2 text-xs bg-muted text-white border border-border rounded-md px-3 py-1.5">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Always check local laws before participating in online gambling.</span>
                </div>
            </div>

            <div className="rounded-md border border-border p-6 bg-card">
                <div className="space-y-1 text-xs text-white mb-6">
                    <p><span className="font-semibold text-white">Effective Date:</span> March 14, 2026</p>
                    <p><span className="font-semibold text-white">Last Modified:</span> March 14, 2026</p>
                    <p className="text-xs mt-2 italic">
                        This document sets out the legally binding terms governing access to and use of the Playonix.com website, platform, content, community features, affiliate links, reviews, and related services.
                    </p>
                </div>

                <div className="space-y-8 text-white">

                    {/* Section 1 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">1. Introduction and Acceptance of Terms</h2>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-white text-sm">Agreement</h3>
                            <p className="text-sm leading-relaxed">
                                These Terms of Service ("Terms") govern your access to and use of the Playonix.com website, platform, and related services (collectively, the "Service"). By accessing, browsing, viewing, posting on, or otherwise using the Service, or by clicking an "Accept" or similar button when presented with these Terms, you confirm that you have read, understood, and agree to be bound by these Terms as a legally binding agreement between you and Playonix.com ("Playonix," "we," "us," or "our").
                            </p>
                            <p className="text-sm leading-relaxed font-medium text-white/80">
                                If you do not agree to these Terms, you must not access or use the Service.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-white text-sm">Additional Policies</h3>
                            <p className="text-sm leading-relaxed">
                                These Terms apply together with any other rules, guidelines, notices, or policies posted on the Service, including any Privacy Policy, Community Guidelines, or affiliate disclosures, all of which are incorporated into these Terms by reference. In the event of a conflict between these Terms and any other platform policy, these Terms shall prevail unless explicitly stated otherwise.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-white text-sm">Capacity</h3>
                            <p className="text-sm leading-relaxed">
                                You represent and warrant that you have the legal capacity and authority to enter into these Terms. If you use the Service on behalf of a company, organization, or other legal entity, you represent that you are authorized to bind that entity to these Terms, in which case "you" and "User" shall refer to both you and that entity.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">2. Definitions</h2>
                        <p className="text-sm leading-relaxed">For purposes of these Terms:</p>
                        <ul className="space-y-2 text-sm leading-relaxed list-none">
                            {[
                                ['"Playonix", "we", "us", or "our"', 'means the Playonix.com platform and its owner/operator.'],
                                ['"User" or "you"', 'means any individual or entity who accesses or uses the Service in any capacity, including visitors, reviewers, commenters, creators, affiliates, and viewers.'],
                                ['"Content"', 'means any information, text, ratings, reviews, comments, messages, graphics, photos, videos, images, nicknames, device or technical identifiers, links, or other material made available on or through the Service.'],
                                ['"User Content"', 'means any Content submitted, uploaded, posted, transmitted, or otherwise made available by a User.'],
                                ['"Affiliate Link"', 'means a link that may generate compensation, commission, referral income, revenue share, CPA, hybrid compensation, or similar commercial benefit to Playonix if a User clicks, registers, deposits, purchases, or otherwise interacts with the linked third-party service.'],
                                ['"Third-Party Service"', 'means any service, website, app, platform, network, operator, provider, or contractor not owned or controlled by Playonix, including casino operators, affiliate partners, advertisers, analytics providers, payment processors, hosting providers, verification providers, and social media services.'],
                                ['"Applicable Law"', 'means all laws, regulations, directives, codes, rules, and legal requirements applicable to you, to us, or to the Service, including the laws of your own jurisdiction.'],
                            ].map(([term, def], i) => (
                                <li key={i} className="pl-3 border-l-2 border-border">
                                    <span className="font-medium text-white">{term}</span> {def}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">3. Scope of the Service</h2>
                        <div className="space-y-3 text-sm leading-relaxed">
                            <p>Playonix.com is an online platform that may display, organize, feature, rank, review, discuss, promote, compare, or otherwise present online casinos, gambling brands, bonuses, promotions, user opinions, ratings, videos, short-form media, and related information or entertainment content.</p>
                            <p>Playonix is an informational, promotional, media, and community platform. Playonix is not a gambling operator. We do not offer casino games ourselves, do not accept bets, do not hold player balances, do not process gambling withdrawals, and do not operate as a licensed casino unless expressly stated otherwise in writing on the Service.</p>
                            <p>The Service may include user-generated reviews, comments, ratings, reactions, and uploaded media. We do not guarantee the truthfulness, completeness, reliability, legality, or accuracy of any User Content. Users remain solely responsible for the Content they post.</p>
                            <p>You understand that Content on the Service may include commercial promotions, subjective opinions, and user statements that may be incomplete, inaccurate, biased, offensive, outdated, or unlawful. You use the Service at your own risk.</p>
                            <p>Nothing in these Terms creates any partnership, joint venture, employment, agency, or fiduciary relationship between Playonix and any User, affiliate, partner, reviewer, moderator, or third party.</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">4. Affiliate Disclosure and Commercial Relationships</h2>
                        <div className="space-y-4 text-sm leading-relaxed">
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">Affiliate Links May Be Present</h3>
                                <p>Playonix may include Affiliate Links. This means that some links, buttons, promotions, call-to-actions, listings, videos, banners, or other clickable elements on the Service may direct you to third-party websites through tracking links, and we may receive compensation if you click those links or take actions such as registering, making a deposit, becoming an active user, or otherwise interacting with the third-party service.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">Compensation Does Not Guarantee Endorsement</h3>
                                <p>The fact that Playonix may receive compensation does not mean that any third-party service is safe, legal, suitable, or appropriate for you. You remain solely responsible for evaluating whether any third-party service is lawful, suitable, and acceptable for your own use.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">Third-Party Terms Apply</h3>
                                <p>If you click any external link and visit a third-party website, including a casino operator or related partner, your use of that third-party website is governed solely by that third party's terms, policies, and legal obligations, not by these Terms.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">No Guarantees</h3>
                                <p>Playonix does not guarantee winnings, outcomes, bonus availability, payment speed, fairness, legality, licensing status, or user experience with any third-party service. Bonus terms, wagering requirements, eligibility rules, withdrawal conditions, and local restrictions may apply and may change at any time.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">5. Eligibility and Age Restriction</h2>
                        <div className="space-y-4 text-sm leading-relaxed">
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">Adults Only</h3>
                                <p>The Service is intended only for adults. You must be at least eighteen (18) years old, or the age of legal majority or other higher minimum age required by the laws of your jurisdiction for accessing this type of service, whichever is higher, to use Playonix. By using the Service, you represent and warrant that you satisfy this requirement.</p>
                            </div>
                            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                                <h3 className="font-semibold text-yellow-500 text-sm">18+ | Higher Local Age Requirement</h3>
                                <p className="text-sm mt-1">Playonix is strictly 18+ only, or such higher age as may be required in your country, state, region, or local jurisdiction for gambling-related promotional, review, affiliate, or casino-comparison content. If your local law requires a higher minimum age, that higher age requirement applies to you. If you do not meet the required minimum age, you must not use the Service.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">User Responsibility</h3>
                                <p>We do not guarantee that the Service is legal to access in your location. It is entirely your own responsibility to verify that your access to and use of the Service is lawful in your jurisdiction.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">6. User Responsibility for Legal Compliance</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Playonix operates internationally and does not guarantee that the Service, or any third-party links, brands, reviews, bonus references, or gambling-related materials shown on the Service, are lawful in every jurisdiction.</p>
                            <p>You are solely responsible for determining whether:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'it is legal for you to access the Service;',
                                    'it is legal for you to view gambling-related promotional or affiliate content;',
                                    'it is legal for you to click, register with, deposit to, or use any third-party operator or service featured on the Service.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>If access to the Service or any related third-party offering is restricted, prohibited, or unlawful in your jurisdiction, you must not use the Service for that purpose.</p>
                            <p>By using the Service, you confirm that you have independently verified that your use of the Service complies with all Applicable Law.</p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">7. Access Identifier and Security</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>To access certain interactive features, you may be assigned or associated with a technical identifier linked to your device, browser, network information, IP address, cookies, or similar technical means used to operate the Service. Playonix does not require traditional user account registration for normal use of the Service.</p>
                            <p>Where the Service allows nicknames, comments, ratings, reviews, uploads, reactions, or similar activity, those actions may be associated with the device-based or IP-linked technical identifier used on the device accessing the Service.</p>
                            <p>You are solely responsible for activity carried out through your device or technical identifier when using the Service. You must immediately notify us at <span className="text-white font-medium">hey@Playonix.com</span> if you suspect unauthorized use, impersonation, abuse, or misuse connected with your device-based access to the Service.</p>
                            <p>You may not:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'impersonate another person or entity;',
                                    'use false or misleading identity details in connection with a nickname, review, comment, rating, upload, or other activity;',
                                    'circumvent device-based, browser-based, cookie-based, IP-based, or other technical measures used to limit duplicate, abusive, fraudulent, or manipulative behavior;',
                                    'use technical workarounds to submit duplicate reviews, ratings, votes, comments, or moderation-sensitive actions from multiple devices, browsers, IP addresses, or identifiers in order to manipulate the Service.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>We may suspend, restrict, block, or terminate access identifiers, devices, browsers, nicknames, posts, or Service access that appear fraudulent, abusive, misleading, or in violation of these Terms.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">8. Reviews, Ratings, Comments, and User Content</h2>
                        <div className="text-sm leading-relaxed space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-white">User Responsibility for Content</h3>
                                <p>You are solely responsible for any review, rating, comment, message, image, video, nickname, or other User Content you submit to the Service.</p>
                                <p>By posting User Content, you represent and warrant that:</p>
                                <ul className="space-y-1.5 pl-4 mt-2">
                                    {[
                                        'your content is truthful to the best of your knowledge;',
                                        'your content does not violate any law or any third-party rights;',
                                        'your content is not defamatory, misleading, fabricated, abusive, threatening, harassing, or unlawful;',
                                        'you have the right to post any text, image, media, or other material you upload.',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-white">Prohibited Review and Comment Conduct</h3>
                                <p>You must not post, upload, transmit, or otherwise make available any Content that:</p>
                                <ul className="space-y-1.5 pl-4 mt-2">
                                    {[
                                        'is knowingly false, fabricated, or misleading;',
                                        'contains fake accusations or invented claims about a casino, company, brand, user, or other person;',
                                        'contains hate speech, discrimination, or incitement of hostility;',
                                        'contains obscene, pornographic, sexually explicit, excessively graphic, or otherwise inappropriate images or media where not expressly allowed;',
                                        'includes malware, malicious links, phishing attempts, scams, or deceptive promotions;',
                                        'infringes intellectual property, privacy rights, publicity rights, or other legal rights;',
                                        'promotes illegal activity or encourages users to break the law.',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">Honest Opinions Only</h3>
                                <p>Reviews and ratings must reflect genuine views, experiences, or opinions. Coordinated manipulation, fake engagement, purchased reviews, review farming, bot-posting, or posting on behalf of others without disclosure is prohibited.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">9. Moderation, Enforcement, and Platform Discretion</h2>
                        <div className="text-sm leading-relaxed space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-white">Sole Moderation Discretion</h3>
                                <p>Playonix reserves the absolute right, at its sole and unilateral discretion, to determine whether any review, rating, comment, image, video, nickname, identifier-linked activity, post, or other User Content violates these Terms, our policies, platform standards, or the intended integrity of the Service.</p>
                                <p>This includes, without limitation, content that we consider to be: spam or deliberate spam-like behavior; repetitive or disruptive posting; fake, fabricated, bad-faith, or manipulative reviews; unsupported or invented allegations; abusive or inappropriate criticism; bullying, harassment, or insults toward other users, brands, moderators, or third parties; misleading or low-quality comments intended to manipulate rankings, trust, or brand reputation; or inappropriate, offensive, or irrelevant images or uploads.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">No Obligation to Publish or Keep Content Live</h3>
                                <p>We are under no obligation to publish, preserve, or restore any User Content. We may remove, hide, edit formatting of, restrict visibility of, demonetize, downrank, disable, or permanently delete any User Content or block related device-based access at any time, with or without notice, where we believe such action is appropriate.</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-white">Moderation Decisions</h3>
                                <p>You acknowledge and agree that moderation decisions may be made by Playonix administrators, moderators, or automated systems on the basis of platform integrity, safety, legal risk, quality control, anti-spam enforcement, brand protection, community standards, or user experience. Such decisions may be made even where the violation is not objectively provable to your satisfaction. Nothing in these Terms obligates Playonix to host, display, or continue displaying any specific review, comment, or user submission.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">10. Acceptable Use Policy</h2>
                        <p className="text-sm">You agree not to use the Service in any way that:</p>
                        <ul className="space-y-1.5 pl-4 text-sm">
                            {[
                                'violates any Applicable Law;',
                                'facilitates unlawful gambling access where prohibited;',
                                'targets minors or encourages underage gambling;',
                                'impersonates any person or entity;',
                                'publishes false, defamatory, or misleading statements;',
                                'abuses, threatens, or harasses others;',
                                'uploads inappropriate, offensive, or unauthorized images or media;',
                                'infringes copyrights, trademarks, privacy rights, or other legal rights;',
                                'introduces malware, harmful code, or unauthorized automation;',
                                'scrapes, copies, republishes, reverse engineers, or exploits the Service without authorization;',
                                'manipulates rankings, traffic, comments, ratings, affiliate tracking, or platform metrics;',
                                'interferes with the security, operation, or integrity of the Service.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm leading-relaxed">This list is not exhaustive. We may determine, in our sole discretion, that other conduct is harmful, inappropriate, manipulative, unlawful, or inconsistent with the intended use of the Service.</p>
                    </section>

                    {/* Section 11 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">11. Intellectual Property</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>All platform software, branding, logos, design, layout, graphics, interface elements, text, databases, and other materials made available by Playonix, excluding User Content and third-party property, are owned by or licensed to Playonix and are protected by applicable intellectual property laws.</p>
                            <p>You may not copy, reproduce, republish, distribute, modify, frame, scrape, sell, license, or exploit any portion of the Service without our prior written consent, except as permitted by law.</p>
                            <p>By submitting User Content to the Service, you grant Playonix a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to host, store, reproduce, display, distribute, publish, adapt, moderate, format, and otherwise use that User Content for purposes of operating, promoting, improving, securing, and administering the Service. You represent that you have all rights necessary to grant this license.</p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">12. Third-Party Services and External Links</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>The Service may contain links to third-party websites, operators, advertisers, partners, and services. These may include casino websites, affiliate programs, review partners, trackers, analytics services, media hosts, or other commercial partners.</p>
                            <p>We do not control and are not responsible for:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'the legality, availability, safety, or content of third-party websites;',
                                    'whether a third-party operator is licensed, fair, solvent, or reputable;',
                                    'any transactions, disputes, losses, or damages arising from your interaction with any third party;',
                                    'bonus terms, payment issues, KYC procedures, withdrawal disputes, or account restrictions imposed by third-party operators.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>Your interaction with any third party is entirely at your own risk.</p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">13. No Gambling Advice or Professional Advice</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Content on Playonix is for general informational, promotional, media, comparison, entertainment, and community purposes only. Nothing on the Service constitutes legal advice, financial advice, tax advice, investment advice, addiction counseling, or professional regulatory advice.</p>
                            <p>We do not advise you to gamble. We do not guarantee that gambling is suitable, safe, profitable, legal, or risk-free. Gambling involves risk and may lead to financial loss, addiction, and other harms.</p>
                            <p>If you choose to gamble or use any third-party service referenced on the platform, you do so entirely at your own risk and responsibility.</p>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">14. Disclaimer of Warranties</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>The Service is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, Playonix disclaims all warranties, express or implied, including any implied warranties of merchantability, fitness for a particular purpose, non-infringement, title, availability, accuracy, reliability, or uninterrupted operation.</p>
                            <p>We do not warrant that:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'the Service will always be available, secure, or error-free;',
                                    'reviews, comments, ratings, or rankings are accurate or complete;',
                                    'third-party offers, bonuses, or promotions will remain available;',
                                    'any third-party operator is legal or appropriate for you;',
                                    'any defect, bug, vulnerability, or interruption will be corrected without delay.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Section 15 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">15. Limitation of Liability</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>To the fullest extent permitted by law, Playonix, its owners, operators, affiliates, officers, employees, moderators, contractors, licensors, and partners shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, goodwill, data, business opportunity, reputation, or expected savings arising out of or related to:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'your use of or inability to use the Service;',
                                    'reliance on reviews, ratings, comments, rankings, or other Content;',
                                    'your interaction with third-party websites or operators;',
                                    'any gambling losses, financial harm, or disputes with third parties;',
                                    'moderation actions, content removal, restriction of device-based access, or termination of access;',
                                    'unauthorized access, hacking, service outages, or technical failures.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>To the maximum extent permitted by law, if Playonix is found liable for any claim, our total aggregate liability shall not exceed the greater of: (a) the amount you paid us directly, if any, in the twelve (12) months preceding the event giving rise to the claim, or (b) one hundred euros (EUR 100).</p>
                        </div>
                    </section>

                    {/* Section 16 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">16. Indemnification</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>You agree to defend, indemnify, and hold harmless Playonix and its owners, operators, affiliates, officers, employees, contractors, moderators, partners, and service providers from and against any claims, demands, liabilities, losses, damages, judgments, costs, and expenses, including reasonable legal fees, arising out of or related to:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'your use of the Service;',
                                    'your User Content;',
                                    'your violation of these Terms;',
                                    'your violation of any Applicable Law;',
                                    'your violation of any rights of any third party;',
                                    'your use of any third-party service linked from the Service.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Section 17 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">17. Suspension and Termination</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>We may, at any time and in our sole discretion, without prior notice, suspend, restrict, deactivate, block, or permanently terminate your access to the Service, your device-based identifier, your nickname, or your ability to use any feature if we believe that:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'you have violated these Terms;',
                                    'your conduct creates legal, reputational, operational, or security risk;',
                                    'you have posted prohibited reviews, comments, or media;',
                                    'you have engaged in spam, manipulation, harassment, or false claims;',
                                    'you are underage or may be underage;',
                                    'continued access by you is harmful to other users, third parties, or the integrity of the Service.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>We may also remove any Content or disable any feature at any time for legal, operational, moderation, safety, integrity, or business reasons. Termination does not limit any other rights or remedies available to us.</p>
                        </div>
                    </section>

                    {/* Section 18 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">18. Privacy</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Your use of the Service may also be governed by our Privacy Policy and cookie-related notices, as updated from time to time. By using the Service, you acknowledge that your information may be processed in accordance with those policies.</p>
                            <p>You should not post personal, confidential, or sensitive information in public comments or reviews.</p>
                        </div>
                    </section>

                    {/* Section 19 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">19. Changes to These Terms</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>We may revise or update these Terms at any time in our sole discretion. Updated Terms become effective when posted on the Service unless otherwise stated. Your continued use of the Service after updated Terms are posted constitutes your acceptance of the revised Terms.</p>
                            <p>It is your responsibility to review these Terms periodically.</p>
                        </div>
                    </section>

                    {/* Section 20 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">20. Governing Law and Disputes</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>These Terms shall be governed by and construed in accordance with the laws determined by Playonix in its legal notices or operating entity documentation, without regard to conflict of law rules, unless mandatory law requires otherwise.</p>
                            <p>You agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved in the competent court or forum determined under applicable law, unless another dispute resolution method is expressly required by law or separately agreed.</p>
                        </div>
                    </section>

                    {/* Section 21 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">21. Contact Information</h2>
                        <div className="text-sm leading-relaxed space-y-2">
                            <h3 className="font-semibold text-white">General Contact</h3>
                            <p>E-mail: <a href="mailto:hey@Playonix.com" className="text-[#FACC15] hover:underline">hey@Playonix.com</a></p>
                            <p>If you believe that content on the Service violates these Terms, infringes your rights, or should be reviewed by our moderation team, you may contact us at the address above.</p>
                        </div>
                    </section>

                    {/* Section 22 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">22. Final Acknowledgment</h2>
                        <p className="text-sm leading-relaxed font-medium text-white/80">
                            By using Playonix.com, you acknowledge that you have read, understood, and agreed to these Terms of Service.
                        </p>
                    </section>

                    {/* Section 23 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">23. Responsible Gambling</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Gambling can be addictive and may lead to financial loss, emotional distress, and other negative consequences. Users should only gamble:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'for entertainment purposes;',
                                    'with money they can afford to lose;',
                                    'in moderation.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>If you believe that gambling may be causing harm to you or someone close to you, we strongly encourage seeking help from professional support organizations that specialize in gambling addiction.</p>
                            <p>Playonix does not provide gambling services and cannot control the behavior of third-party operators or users. If you choose to engage in gambling activities through any third-party service linked from the platform, you do so entirely at your own risk.</p>
                        </div>
                    </section>

                    {/* Section 24 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">24. Copyright and Intellectual Property Complaints (DMCA / Copyright)</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Playonix respects intellectual property rights. If you believe that any content available on the Service infringes your copyright, trademark, or other intellectual property rights, you may submit a notice requesting removal of the content.</p>
                            <p>Your notice should include:</p>
                            <ul className="space-y-1.5 pl-4">
                                {[
                                    'identification of the copyrighted work claimed to be infringed;',
                                    'identification of the material that is claimed to be infringing;',
                                    'your contact information;',
                                    'a statement that you believe in good faith that the use is unauthorized;',
                                    'a statement that the information in the notice is accurate.',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>Notices may be sent to: <a href="mailto:hey@Playonix.com" className="text-[#FACC15] hover:underline">hey@Playonix.com</a></p>
                            <p>Playonix may remove or disable access to allegedly infringing content and may terminate or block repeat violators from further use of the Service.</p>
                        </div>
                    </section>

                    {/* Section 25 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">25. Advertising and Sponsored Content Transparency</h2>
                        <div className="text-sm leading-relaxed space-y-3">
                            <p>Playonix may display:</p>
                            <ul className="space-y-1.5 pl-4">
                                {['advertisements;', 'sponsored listings;', 'promoted content;', 'affiliate promotions;', 'paid partnerships.'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p>Some rankings, listings, or featured placements may include commercial relationships with partners. While Playonix aims to provide honest reviews and information, users should understand that commercial relationships may influence visibility, placement, and promotional exposure.</p>
                            <p>We encourage users to always conduct their own independent research before interacting with any third-party service featured on the platform.</p>
                        </div>
                    </section>

                    {/* Section 26 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">26. Severability</h2>
                        <p className="text-sm leading-relaxed">If any provision of these Terms is found to be invalid, illegal, or unenforceable under applicable law, the remaining provisions shall remain in full force and effect.</p>
                    </section>

                    {/* Section 27 */}
                    <section className="space-y-3">
                        <h2 className="text-lg font-semibold text-white border-b border-border pb-2">27. Entire Agreement</h2>
                        <div className="text-sm leading-relaxed space-y-2">
                            <p>These Terms, together with any referenced policies, constitute the entire agreement between you and Playonix regarding the use of the Service.</p>
                            <p>They replace any prior agreements, understandings, or communications relating to the Service.</p>
                        </div>
                    </section>

                    <p className="text-xs font-medium mt-10 italic border-t border-border pt-4">
                        Effective Date: March 14, 2026 — Last Modified: March 14, 2026
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
