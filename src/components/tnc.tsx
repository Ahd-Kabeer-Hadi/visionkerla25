import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsAndConditions({
  showCommitment = true,
}: {
  showCommitment?: boolean;
}) {
  return (
    <section className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Terms and Conditions for Delivery Partners
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ScrollArea
            className={`${!showCommitment ? "h-[80vh]" : "h-[45vh] "}  pr-4`}
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">
                This document outlines the terms and conditions applicable to
                delivery partners (&quot;Auto Drivers&quot;) who engage with the
                entity (&quot;Company&quot; or &quot;Platform Owner&quot;) as
                part of the Centralized Distribution Network in Kerala. By
                agreeing to become a delivery partner, you accept these terms
                and conditions in full.
              </p>

              <Separator className="my-6" />

              <section aria-labelledby="role-responsibilities">
                <h2
                  id="role-responsibilities"
                  className="text-2xl font-semibold mb-4"
                >
                  1. Role and Responsibilities of the Delivery Partner
                </h2>
                <div className="space-y-4">
                  <p>
                    1.1 Delivery partners are responsible for providing
                    last-mile delivery services in their assigned panchayats, as
                    per the instructions and guidelines provided by the Company.
                  </p>
                  <p>
                    1.2 All deliveries must be conducted professionally,
                    efficiently, and in accordance with the Company&apos;s Code
                    of Conduct.
                  </p>
                  <p>
                    1.3 Delivery partners must ensure that any payments
                    collected from customers are promptly and securely
                    transferred to the Company.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="code-conduct">
                <h2 id="code-conduct" className="text-2xl font-semibold mb-4">
                  2. Code of Conduct
                </h2>
                <div className="space-y-4">
                  <div>
                    <p>2.1 Delivery partners must:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Treat customers, Company representatives, and other
                        stakeholders with respect and courtesy.
                      </li>
                      <li>
                        Ensure the timely and safe delivery of products to
                        customers.
                      </li>
                      <li>
                        Adhere to local laws and traffic regulations while
                        performing their duties.
                      </li>
                    </ul>
                  </div>
                  <p>
                    2.2 Any violation of the Code of Conduct, including but not
                    limited to theft, fraud, misconduct, or negligence, will
                    result in immediate termination of the partnership and
                    potential legal action.
                  </p>
                  <p>
                    2.3 The Company reserves the right to terminate a delivery
                    partner&apos;s engagement and take fair action if evidence
                    of any violation is presented.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="property-assets">
                <h2
                  id="property-assets"
                  className="text-2xl font-semibold mb-4"
                >
                  3. Property and Assets
                </h2>
                <div className="space-y-4">
                  <p>
                    3.1 Any assets, goods, or materials provided by the Company
                    (including delivery uniforms, tools, or electronic devices)
                    must be returned in good condition upon termination of the
                    partnership or cessation of delivery services.
                  </p>
                  <p>
                    3.2 Failure to return these items may result in the Company
                    deducting the value of the unreturned items from the
                    delivery partner&apos;s final settlement or initiating legal
                    action if necessary.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="payments">
                <h2 id="payments" className="text-2xl font-semibold mb-4">
                  4. Payments and Financial Obligations
                </h2>
                <div className="space-y-4">
                  <p>
                    4.1 Delivery partners will receive their payments directly
                    from the Company.
                  </p>
                  <p>
                    4.2 Delivery partners are not authorized to retain any
                    portion of the payments collected from customers. They are
                    required to ensure all customer payments reach the Company
                    promptly and without any discrepancies.
                  </p>
                  <p>
                    4.3 Any delays, misappropriations, or discrepancies in
                    transferring payments may result in suspension or
                    termination of the partnership, along with legal action if
                    deemed necessary.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="authority">
                <h2 id="authority" className="text-2xl font-semibold mb-4">
                  5. Authority of the Company
                </h2>
                <div className="space-y-4">
                  <p>
                    5.1 The Company retains full authority and decision-making
                    power over all aspects of the partnership, including but not
                    limited to operational protocols, delivery assignments,
                    payment structures, and termination decisions.
                  </p>
                  <p>
                    5.2 Delivery partners acknowledge and accept that the
                    Company&apos;s decisions will be final and binding in all
                    matters.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="termination">
                <h2 id="termination" className="text-2xl font-semibold mb-4">
                  6. Termination of Partnership
                </h2>
                <div className="space-y-4">
                  <p>
                    6.1 The Company reserves the right to terminate the
                    partnership at its discretion for any breach of these terms
                    and conditions, failure to adhere to the Code of Conduct, or
                    any action that jeopardizes the integrity or reputation of
                    the Company.
                  </p>
                  <p>
                    6.2 Delivery partners may choose to voluntarily terminate
                    their partnership by providing prior written notice. Before
                    termination, all Company-owned assets must be returned, and
                    any outstanding payments or obligations must be settled.
                  </p>
                  <p>
                    6.3 In case of termination, the delivery partner will
                    receive their due payments (if any) after verifying the
                    return of Company-owned assets and completion of all
                    formalities.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="liabilities">
                <h2 id="liabilities" className="text-2xl font-semibold mb-4">
                  7. Liabilities and Disputes
                </h2>
                <div className="space-y-4">
                  <p>
                    7.1 Delivery partners shall be held liable for any loss or
                    damage to Company assets, customer goods, or payments
                    resulting from negligence or misconduct.
                  </p>
                  <p>
                    7.2 Any disputes arising from the partnership will be
                    addressed amicably through mutual discussion. If unresolved,
                    disputes will be subject to the jurisdiction of courts
                    located in Kerala.
                  </p>
                </div>
              </section>

              <Separator className="my-6" />

              <section aria-labelledby="amendments">
                <h2 id="amendments" className="text-2xl font-semibold mb-4">
                  8. Amendments to the Terms and Conditions
                </h2>
                <div className="space-y-4">
                  <p>
                    8.1 The Company reserves the right to amend or update these
                    terms and conditions at any time. Delivery partners will be
                    notified of any changes in advance, and continued engagement
                    with the Company after such notification will constitute
                    acceptance of the revised terms.
                  </p>
                </div>
              </section>

              {showCommitment && (
                <>
                  <Separator className="my-6" />

                  <p className="text-muted-foreground italic">
                    By Submiting the form, I, the delivery partner, confirm that
                    I have read, understood, and agreed to abide by these terms
                    and conditions.
                  </p>
                </>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}
