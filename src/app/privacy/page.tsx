"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PrivacyPage() {
  const [language, setLanguage] = useState("en");

  return (
    <main className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex justify-between">
          <CardTitle className="text-3xl font-bold text-center">
            Privacy Policy
          </CardTitle>
          <div>
            <Select onValueChange={setLanguage}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ml">മലയാളം</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        {language === "en" ? (
        <CardContent>
          <ScrollArea className="h-[80vh] pr-4">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                This Privacy Policy explains how the Company (&quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects
                the personal information of all users (&quot;you&quot; or
                &quot;your&quot;) of our services, including delivery partners,
                customers, and other stakeholders, during their interaction with
                the Company&apos;s Centralized Distribution Network. By using
                our services, you agree to the practices outlined in this
                Privacy Policy.
              </p>

              <Separator className="my-6" />

              <section aria-labelledby="information-collect">
                <h2
                  id="information-collect"
                  className="text-2xl font-semibold mb-4"
                >
                  1. Information We Collect
                </h2>
                <div className="space-y-4">
                  <p>
                    We collect the following types of information to facilitate
                    the provision and management of our services:
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">
                      1.1 Personal Information:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Full name</li>
                      <li>Contact details (phone number, email address)</li>
                      <li>Residential address</li>
                      <li>
                        Government-issued identification (e.g., Aadhaar, PAN, or
                        driver&apos;s license)
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">
                      1.2 Professional Information (for delivery partners):
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Vehicle details (registration number, model, and
                        insurance)
                      </li>
                      <li>Bank account details for payment processing</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">
                      1.3 Usage and Operational Data:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Location data for delivery tracking and route
                        optimization (collected via the mobile app when enabled)
                      </li>
                      <li>Order history and transaction details</li>
                      <li>
                        Communication records with the Company&apos;s support
                        team
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="information-use">
                <h2
                  id="information-use"
                  className="text-2xl font-semibold mb-4"
                >
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <p>The information we collect is used to:</p>
                  <p>
                    2.1 Facilitate onboarding processes and verify identities
                    where applicable.
                  </p>
                  <p>
                    2.2 Assign delivery tasks (for delivery partners) and enable
                    real-time tracking to ensure efficient delivery operations.
                  </p>
                  <p>
                    2.3 Process payments securely and provide accurate payment
                    or transaction reports.
                  </p>
                  <p>
                    2.4 Communicate important updates, notifications, and
                    operational instructions.
                  </p>
                  <p>
                    2.5 Monitor and evaluate performance to improve service
                    quality.
                  </p>
                  <p>
                    2.6 Comply with legal requirements and ensure the security
                    of our platform.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="information-sharing">
                <h2
                  id="information-sharing"
                  className="text-2xl font-semibold mb-4"
                >
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4">
                  <p>
                    We do not sell, rent, or share your personal information
                    with third parties except as outlined below:
                  </p>
                  <p>
                    3.1 <strong>Service Providers</strong>: We may share your
                    information with trusted third-party service providers who
                    assist in payment processing, app functionality, and
                    operational support.
                  </p>
                  <p>
                    3.2 <strong>Legal Obligations</strong>: We may disclose your
                    information to comply with applicable laws, regulations, or
                    legal processes, or to protect our legal rights and
                    interests.
                  </p>
                  <p>
                    3.3 <strong>Business Transfers</strong>: In the event of a
                    merger, acquisition, or sale of assets, your information may
                    be transferred to the involved parties.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="data-security">
                <h2 id="data-security" className="text-2xl font-semibold mb-4">
                  4. Data Security
                </h2>
                <div className="space-y-4">
                  <p>
                    We are committed to protecting your personal information. We
                    use industry-standard security measures, including
                    encryption and access controls, to safeguard your data.
                    However, no method of transmission or storage is 100%
                    secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="data-retention">
                <h2 id="data-retention" className="text-2xl font-semibold mb-4">
                  5. Retention of Information
                </h2>
                <div className="space-y-4">
                  <p>
                    We retain your personal information for as long as necessary
                    to fulfill the purposes outlined in this Privacy Policy or
                    as required by law. Upon termination of your engagement or
                    discontinuation of our services, we may retain certain data
                    to comply with legal obligations, resolve disputes, or
                    enforce our agreements.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="your-rights">
                <h2 id="your-rights" className="text-2xl font-semibold mb-4">
                  6. Your Rights
                </h2>
                <div className="space-y-4">
                  <p>
                    You have the following rights regarding your personal
                    information:
                  </p>
                  <p>
                    6.1 <strong>Access and Correction</strong>: You may request
                    access to your personal information and request corrections
                    if it is inaccurate or incomplete.
                  </p>
                  <p>
                    6.2 <strong>Data Portability</strong>: You may request a
                    copy of your personal data in a portable format.
                  </p>
                  <p>
                    6.3 <strong>Withdrawal of Consent</strong>: You may withdraw
                    your consent for data collection and processing at any time;
                    however, this may impact your ability to continue using our
                    services.
                  </p>
                  <p>
                    6.4 <strong>Deletion</strong>: You may request the deletion
                    of your personal information, subject to legal or
                    operational requirements.
                  </p>
                  <p>
                    To exercise these rights, please contact us using the
                    details provided below.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="cookies">
                <h2 id="cookies" className="text-2xl font-semibold mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4">
                  <p>
                    The mobile app may use cookies and similar tracking
                    technologies to enhance functionality and monitor usage. You
                    can manage your cookie preferences through your device
                    settings.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="third-party">
                <h2 id="third-party" className="text-2xl font-semibold mb-4">
                  8. Third-Party Links
                </h2>
                <div className="space-y-4">
                  <p>
                    The app may contain links to third-party websites or
                    services. We are not responsible for the privacy practices
                    of these third parties, and we encourage you to review their
                    privacy policies before sharing any information.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="updates">
                <h2 id="updates" className="text-2xl font-semibold mb-4">
                  9. Updates to This Privacy Policy
                </h2>
                <div className="space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of any significant updates through the app
                    or other communication channels. Continued use of the app
                    after such updates constitutes acceptance of the revised
                    policy.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="contact">
                <h2 id="contact" className="text-2xl font-semibold mb-4">
                  10. Contact Us
                </h2>
                <div className="space-y-4">
                  <p>
                    If you have any questions or concerns about this Privacy
                    Policy or how your data is handled, please contact us at:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p>
                      <strong>Company Name:</strong> Ntouch Syndicates LLP
                    </p>
                    <p>
                      <strong>Email Address:</strong> ntouchsyndicate@gmail.com
                    </p>
                    <p>
                      <strong>Phone Number:</strong> +91 94477 72868
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Effective Date:</strong> 28th Jan 2025
                  </p>
                </div>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
        ):(
          <CardContent>
          <ScrollArea className="h-[80vh] pr-4">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                ഈ സ്വകാര്യതാ നയം കമ്പനിയുടെ (&quot;ഞങ്ങൾ,&quot; &quot;ഞങ്ങളുടെ,&quot; &quot;ഞങ്ങളെ&quot;) സേവനങ്ങൾ
                ഉപയോഗിക്കുന്ന എല്ലാ ഉപഭോക്താക്കളുടേയും (&quot;നിങ്ങൾ&quot; അല്ലെങ്കിൽ &quot;നിങ്ങളുടെ&quot;)
                സ്വകാര്യ വിവരങ്ങൾ എങ്ങനെ ശേഖരിക്കപ്പെടുന്നു, ഉപയോഗിക്കപ്പെടുന്നു,
                സംരക്ഷിക്കപ്പെടുന്നു എന്നതിനെക്കുറിച്ച് വിശദീകരിക്കുന്നു. ഇതിൽ ഡെലിവറി
                പങ്കാളികൾ, ഉപഭോക്താക്കൾ, മറ്റ് പങ്കാളികൾ എന്നിവരെയും ഉൾപ്പെടുത്തുന്നു.
                നമ്മുടെ സേവനങ്ങൾ ഉപയോഗിക്കുന്നത് വഴി, ഈ സ്വകാര്യതാ നയത്തിൽ
                വിവരിച്ചിരിക്കുന്ന രീതി നിങ്ങൾ അംഗീകരിക്കുന്നു.
              </p>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="information-collect">
                <h2 id="information-collect" className="text-2xl font-semibold mb-4">
                  1. ഞങ്ങൾ ശേഖരിക്കുന്ന വിവരങ്ങൾ
                </h2>
                <div className="space-y-4">
                  <p>
                    സേവനങ്ങളുടെ പ്രദാനം, മാനേജ്മെന്റ് എന്നിവ സാധൂകരിക്കുന്നതിനായി
                    ഞങ്ങൾ താഴെപ്പറയുന്ന വിവരങ്ങൾ ശേഖരിക്കുന്നു:
                  </p>
        
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">1.1 വ്യക്തിഗത വിവരങ്ങൾ:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>പൂർണ്ണ പേര്</li>
                      <li>ബന്ധപ്പെടാൻ വേണ്ട വിവരങ്ങൾ (ഫോൺ നമ്പർ, ഇമെയിൽ വിലാസം)</li>
                      <li>താമസ വിലാസം</li>
                      <li>
                        സർക്കാർ പുറത്തിറക്കിയ തിരിച്ചറിയൽ രേഖകൾ (ഉദാ: ആധാർ, പാൻ,
                        ഡ്രൈവർ ലൈസൻസ്)
                      </li>
                    </ul>
                  </div>
        
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">
                      1.2 പ്രൊഫഷണൽ വിവരങ്ങൾ (ഡെലിവറി പങ്കാളികൾക്കായി):
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        വാഹനം സംബന്ധമായ വിവരങ്ങൾ (റജിസ്‌ട്രേഷൻ നമ്പർ, മോഡൽ,
                        ഇൻഷുറൻസ്)
                      </li>
                      <li>പേയ്മെന്റ് പ്രോസസ്സിംഗിനുള്ള ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ</li>
                    </ul>
                  </div>
        
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">1.3 ഉപയോഗവും പ്രവർത്തന ഡാറ്റയും:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        ഡെലിവറി ട്രാക്കിംഗിനും റൂട്ട് ഓപ്റ്റിമൈസേഷനും വേണ്ട ലൊക്കേഷൻ
                        ഡാറ്റ (മൊബൈൽ ആപ്പ് വഴി ശേഖരിക്കുന്നു)
                      </li>
                      <li>ഓർഡർ ചരിത്രവും ഇടപാട് വിശദാംശങ്ങളും</li>
                      <li>
                        കമ്പനിയുടെ സപ്പോർട്ട് ടീമുമായുള്ള ആശയവിനിമയ രേഖകൾ
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="information-use">
                <h2 id="information-use" className="text-2xl font-semibold mb-4">
                  2. നിങ്ങളുടെ വിവരങ്ങൾ എങ്ങനെ ഉപയോഗിക്കുന്നു
                </h2>
                <div className="space-y-4">
                  <p>ഞങ്ങൾ ശേഖരിക്കുന്ന വിവരങ്ങൾ താഴെപ്പറയുന്ന ആവശ്യങ്ങൾക്ക് ഉപയോഗിക്കുന്നു:</p>
                  <p>
                    2.1 ആദ്യപ്രവേശന പ്രക്രിയകൾ സുഗമമാക്കുക, അങ്ങനെ തിരിച്ചറിയൽ
                    സാധൂകരിക്കുക.
                  </p>
                  <p>
                    2.2 ഡെലിവറി ജോലികൾ നിയോഗിക്കുക (ഡെലിവറി പങ്കാളികൾക്ക്) കൂടാതെ
                    തത്സമയ ട്രാക്കിംഗിലൂടെ കാര്യക്ഷമമായ പ്രവർത്തനം ഉറപ്പാക്കുക.
                  </p>
                  <p>
                    2.3 പേയ്മെന്റുകൾ സുരക്ഷിതമായി പ്രോസസ്സ് ചെയ്യുക, കൂടാതെ കൃത്യമായ
                    പേയ്മെന്റ് റിപ്പോർട്ടുകൾ നൽകുക.
                  </p>
                  <p>
                    2.4 പ്രധാന അപ്പ്ഡേറ്റുകൾ, അറിയിപ്പുകൾ, പ്രവർത്തന നിർദ്ദേശങ്ങൾ
                    എന്നിവ അറിയിക്കുക.
                  </p>
                  <p>
                    2.5 സേവനങ്ങളുടെ നിലവാരം മെച്ചപ്പെടുത്തുന്നതിന് പ്രകടനം നിരീക്ഷിക്കുക.
                  </p>
                  <p>
                    2.6 നിയമപരമായ ആവശ്യകതകൾ പാലിക്കുക, പ്ലാറ്റ്‌ഫോമിന്റെ സുരക്ഷ
                    ഉറപ്പാക്കുക.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="information-sharing">
                <h2 id="information-sharing" className="text-2xl font-semibold mb-4">
                  3. വിവരങ്ങളുടെ പങ്കിടലും വെളിപ്പെടുത്തലും
                </h2>
                <div className="space-y-4">
                  <p>
                    ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ{" "}
                    <span className="font-semibold">വിൽക്കുകയോ, വാടകയ്ക്ക് നൽകുകയോ</span>{" "}
                    ചെയ്യുന്നതല്ല, എന്നാൽ താഴെ പറയുന്ന സാഹചര്യങ്ങളിൽ മാത്രം
                    പങ്കിടും:
                  </p>
                  <p>
                    3.1 <span className="font-semibold">സേവന ദാതാക്കൾ:</span>{" "}
                    പേയ്മെന്റ് പ്രോസസ്സിംഗ്, ആപ്പ് പ്രവർത്തനങ്ങൾ, പ്രവർത്തന സഹായം
                    എന്നിവയിൽ സഹായിക്കുന്ന വിശ്വസനീയമായ മൂന്നാംപക്ഷ സേവനദാതാക്കൾക്കൊപ്പം.
                  </p>
                  <p>
                    3.2 <span className="font-semibold">നിയമ ആവശ്യങ്ങൾ:</span> നടപടികൾ
                    പാലിക്കാനും നിയമ അവകാശങ്ങൾ സംരക്ഷിക്കാനും അനുയോജ്യമായ വിവരങ്ങൾ
                    വെളിപ്പെടുത്താൻ കഴിയും.
                  </p>
                  <p>
                    3.3 <span className="font-semibold">ബിസിനസ് മാറ്റങ്ങൾ:</span>{" "}
                    കമ്പനി ലയനം, കൈമാറ്റം, അല്ലെങ്കിൽ ആസ്തികളുടെ വിൽപ്പന സംഭവിച്ചാൽ,
                    നിങ്ങളുടെ വിവരങ്ങൾ അതിൽ ഉൾപ്പെട്ടവർക്ക് കൈമാറപ്പെടും.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="data-security">
                <h2 id="data-security" className="text-2xl font-semibold mb-4">
                  4. ഡാറ്റ സുരക്ഷ
                </h2>
                <div className="space-y-4">
                  <p>
                    ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ സംരക്ഷിക്കാൻ
                    പ്രതിജ്ഞാബദ്ധമാണ്.{" "}
                    <span className="font-semibold">എൻക്രിപ്ഷൻ</span> അടക്കമുള്ള
                    വ്യവസായ നിലവാരത്തിലുള്ള സുരക്ഷാ മാർഗങ്ങൾ ഞങ്ങൾ ഉപയോഗിക്കുന്നു.
                    എന്നാൽ, <span className="font-semibold">100% സുരക്ഷ</span>{" "}
                    ഉറപ്പാക്കാൻ സാധ്യമല്ല.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="data-retention">
                <h2 id="data-retention" className="text-2xl font-semibold mb-4">
                  5. വിവരങ്ങളുടെ സംരക്ഷണകാലാവധി
                </h2>
                <div className="space-y-4">
                  <p>
                    ഈ സ്വകാര്യതാ നയത്തിൽ പരാമർശിച്ച ഉദ്ദേശങ്ങൾ പൂർത്തിയാക്കുന്നതുവരെ മാത്രമേ
                    ഞങ്ങൾ നിങ്ങളുടെ വിവരങ്ങൾ സൂക്ഷിക്കൂ.{" "}
                    <span className="font-semibold">സേവനങ്ങൾ അവസാനിച്ചതിനുശേഷം</span>,
                    നിയമ ബാധ്യതകൾ നിറവേറ്റുന്നതിനും തർക്കങ്ങൾ പരിഹരിക്കുന്നതിനും ചില
                    ഡാറ്റ സൂക്ഷിക്കാം.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="your-rights">
                <h2 id="your-rights" className="text-2xl font-semibold mb-4">
                  6. നിങ്ങളുടെ അവകാശങ്ങൾ
                </h2>
                <div className="space-y-4">
                  <p>നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾക്കായി നിങ്ങളുടെ പക്കലുള്ള അവകാശങ്ങൾ:</p>
                  <p>
                    6.1 <span className="font-semibold">ആക്‌സസ് ചെയ്യലും തിരുത്തലും:</span>{" "}
                    നിങ്ങളുടെ വിവരങ്ങൾക്ക് ആക്‌സസ് ചെയ്യാനും, തെറ്റായവ തിരുത്താനും
                    അപേക്ഷിക്കാം.
                  </p>
                  <p>
                    6.2 <span className="font-semibold">ഡാറ്റ പോർട്ടബിലിറ്റി:</span>{" "}
                    നിങ്ങളുടെ ഡാറ്റയുടെ പകർപ്പ് ആവശ്യപ്പെടാം.
                  </p>
                  <p>
                    6.3 <span className="font-semibold">സമ്മതം പിൻവലിക്കൽ:</span> ഡാറ്റ
                    ശേഖരണത്തിനും പ്രോസസ്സിംഗിനും നൽകിയ സമ്മതം പിൻവലിക്കാം, എന്നാൽ ഇത്
                    നിങ്ങളുടെ സേവനങ്ങളിൽ ബാധം ചെലുത്താം.
                  </p>
                  <p>
                    6.4 <span className="font-semibold">മായ്ച്ച്:</span>{" "}
                    <span className="font-semibold">
                      നിയമപരമായ ആവശ്യകതകൾ ഇല്ലാത്തിടത്തോളം
                    </span>{" "}
                    നിങ്ങളുടെ വിവരങ്ങൾ നീക്കം ചെയ്യാൻ അപേക്ഷിക്കാം.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="cookies">
                <h2 id="cookies" className="text-2xl font-semibold mb-4">
                  7. കുക്കികളും ട്രാക്കിംഗ് സാങ്കേതിക വിദ്യകളും
                </h2>
                <div className="space-y-4">
                  <p>
                    മൊബൈൽ ആപ്പ്,{" "}
                    <span className="font-semibold">കുക്കികൾ</span> ഉൾപ്പെടെ ട്രാക്കിംഗ്
                    സാങ്കേതിക വിദ്യകൾ ഉപയോഗിക്കാം.{" "}
                    <span className="font-semibold">
                      നിങ്ങളുടെ ഡിവൈസ് സെറ്റിങ്ങുകൾ വഴി
                    </span>{" "}
                    കുക്കി പ്രിഫറൻസുകൾ നിയന്ത്രിക്കാം.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="third-party">
                <h2 id="third-party" className="text-2xl font-semibold mb-4">
                  8. മൂന്നാംപക്ഷ ലിങ്കുകൾ
                </h2>
                <div className="space-y-4">
                  <p>
                    ആപ്പിൽ{" "}
                    <span className="font-semibold">
                      മൂന്നാംപക്ഷ വെബ്സൈറ്റുകളിലേക്കുള്ള ലിങ്കുകൾ
                    </span>{" "}
                    ഉണ്ടാകും.{" "}
                    <span className="font-semibold">
                      ആ വെബ്സൈറ്റുകളുടെ സ്വകാര്യതാ നയങ്ങൾ നിങ്ങളെ ബാധിക്കും
                    </span>
                    , അത് വായിച്ചുചേ‍യ്യാൻ നിർദ്ദേശിക്കുന്നു.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="updates">
                <h2 id="updates" className="text-2xl font-semibold mb-4">
                  9. സ്വകാര്യതാ നയത്തിലെ പുതുക്കലുകൾ
                </h2>
                <div className="space-y-4">
                  <p>
                    ഈ നയം കാലാനുസൃതമായി അപ്‌ഡേറ്റ് ചെയ്യാം.{" "}
                    <span className="font-semibold">മൂല്യവത്തായ മാറ്റങ്ങൾ</span>{" "}
                    ആപ്പിലൂടെയോ മറ്റ് ആശയവിനിമയ ചാനലുകളിലൂടെയോ അറിയിക്കും.{" "}
                    <span className="font-semibold">
                      പുതുക്കലുകൾക്കും ശേഷം സേവനം തുടരുന്നത്
                    </span>
                    ,{" "}
                    <span className="font-semibold">
                      പുതിയ നയത്തിന്‍റെ അംഗീകാരമായി
                    </span>{" "}
                    കണക്കാക്കപ്പെടും.
                  </p>
                </div>
              </section>
        
              <Separator className="my-6" />
        
              <section aria-labelledby="contact">
                <h2 id="contact" className="text-2xl font-semibold mb-4">
                  10. ഞങ്ങളെ ബന്ധപ്പെടുക
                </h2>
                <div className="space-y-4">
                  <p>
                    ഈ സ്വകാര്യതാ നയം, അല്ലെങ്കിൽ നിങ്ങളുടെ ഡാറ്റയുടെ കൈകാര്യം സംബന്ധിച്ച
                    ചോദ്യങ്ങൾ ഉണ്ടെങ്കിൽ, ഞങ്ങളെ സമീപിക്കുക:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p>
                      <strong>കമ്പനിയുടെ പേര്:</strong> Ntouch Syndicates LLP
                    </p>
                    <p>
                      <strong>ഇമെയിൽ വിലാസം:</strong> ntouchsyndicate@gmail.com
                    </p>
                    <p>
                      <strong>ഫോൺ നമ്പർ:</strong> +91 94477 72868
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>പ്രാബല്യ തീയതി:</strong> 28th January 2025
                  </p>
                </div>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
        
        )}
      </Card>
    </main>
  );
}
