import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[80vh] pr-4">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                This Privacy Policy explains how the Company (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and protects 
                the personal information of all users (&quot;you&quot; or &quot;your&quot;) of our services, including delivery partners, 
                customers, and other stakeholders, during their interaction with the Company&apos;s Centralized Distribution 
                Network. By using our services, you agree to the practices outlined in this Privacy Policy.
              </p>

              <Separator className="my-6" />

              <section aria-labelledby="information-collect">
                <h2 id="information-collect" className="text-2xl font-semibold mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-4">
                  <p>We collect the following types of information to facilitate the provision and management of our services:</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">1.1 Personal Information:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Full name</li>
                      <li>Contact details (phone number, email address)</li>
                      <li>Residential address</li>
                      <li>Government-issued identification (e.g., Aadhaar, PAN, or driver&apos;s license)</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">1.2 Professional Information (for delivery partners):</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Vehicle details (registration number, model, and insurance)</li>
                      <li>Bank account details for payment processing</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">1.3 Usage and Operational Data:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Location data for delivery tracking and route optimization (collected via the mobile app when enabled)</li>
                      <li>Order history and transaction details</li>
                      <li>Communication records with the Company&apos;s support team</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="information-use">
                <h2 id="information-use" className="text-2xl font-semibold mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <p>The information we collect is used to:</p>
                  <p>2.1 Facilitate onboarding processes and verify identities where applicable.</p>
                  <p>2.2 Assign delivery tasks (for delivery partners) and enable real-time tracking to ensure efficient delivery operations.</p>
                  <p>2.3 Process payments securely and provide accurate payment or transaction reports.</p>
                  <p>2.4 Communicate important updates, notifications, and operational instructions.</p>
                  <p>2.5 Monitor and evaluate performance to improve service quality.</p>
                  <p>2.6 Comply with legal requirements and ensure the security of our platform.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="information-sharing">
                <h2 id="information-sharing" className="text-2xl font-semibold mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4">
                  <p>We do not sell, rent, or share your personal information with third parties except as outlined below:</p>
                  <p>3.1 <strong>Service Providers</strong>: We may share your information with trusted third-party service providers who assist in payment processing, app functionality, and operational support.</p>
                  <p>3.2 <strong>Legal Obligations</strong>: We may disclose your information to comply with applicable laws, regulations, or legal processes, or to protect our legal rights and interests.</p>
                  <p>3.3 <strong>Business Transfers</strong>: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the involved parties.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="data-security">
                <h2 id="data-security" className="text-2xl font-semibold mb-4">
                  4. Data Security
                </h2>
                <div className="space-y-4">
                  <p>We are committed to protecting your personal information. We use industry-standard security measures, including encryption and access controls, to safeguard your data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="data-retention">
                <h2 id="data-retention" className="text-2xl font-semibold mb-4">
                  5. Retention of Information
                </h2>
                <div className="space-y-4">
                  <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Upon termination of your engagement or discontinuation of our services, we may retain certain data to comply with legal obligations, resolve disputes, or enforce our agreements.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="your-rights">
                <h2 id="your-rights" className="text-2xl font-semibold mb-4">
                  6. Your Rights
                </h2>
                <div className="space-y-4">
                  <p>You have the following rights regarding your personal information:</p>
                  <p>6.1 <strong>Access and Correction</strong>: You may request access to your personal information and request corrections if it is inaccurate or incomplete.</p>
                  <p>6.2 <strong>Data Portability</strong>: You may request a copy of your personal data in a portable format.</p>
                  <p>6.3 <strong>Withdrawal of Consent</strong>: You may withdraw your consent for data collection and processing at any time; however, this may impact your ability to continue using our services.</p>
                  <p>6.4 <strong>Deletion</strong>: You may request the deletion of your personal information, subject to legal or operational requirements.</p>
                  <p>To exercise these rights, please contact us using the details provided below.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="cookies">
                <h2 id="cookies" className="text-2xl font-semibold mb-4">
                  7. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4">
                  <p>The mobile app may use cookies and similar tracking technologies to enhance functionality and monitor usage. You can manage your cookie preferences through your device settings.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="third-party">
                <h2 id="third-party" className="text-2xl font-semibold mb-4">
                  8. Third-Party Links
                </h2>
                <div className="space-y-4">
                  <p>The app may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before sharing any information.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="updates">
                <h2 id="updates" className="text-2xl font-semibold mb-4">
                  9. Updates to This Privacy Policy
                </h2>
                <div className="space-y-4">
                  <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant updates through the app or other communication channels. Continued use of the app after such updates constitutes acceptance of the revised policy.</p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="contact">
                <h2 id="contact" className="text-2xl font-semibold mb-4">
                  10. Contact Us
                </h2>
                <div className="space-y-4">
                  <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p><strong>Company Name:</strong> Ntouch Syndicates LLP</p>
                    <p><strong>Email Address:</strong> ntouchsyndicate@gmail.com</p>
                    <p><strong>Phone Number:</strong> +91 94477 72868</p>
                  </div>
                  <p className="text-muted-foreground"><strong>Effective Date:</strong> 28th Jan 2025</p>
                </div>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </main>
  )
}