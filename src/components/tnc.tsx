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
} from "./ui/select";

export default function TermsAndConditions({
  showCommitment = true,
}: {
  showCommitment?: boolean;
}) {
  const [language, setLanguage] = useState("en");

  return (
    <section className="container mx-auto py-8 px-4">
      {!showCommitment ? (
        <div className="h-16  flex justify-end gap-4 items-center">
          <p className="text-sm  text-gray-900">Choose Your Language</p>
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
      ) : (
        <div className="h-16 w-full flex justify-between items-center">
          <Select onValueChange={setLanguage}>
            <SelectTrigger>
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ml">മലയാളം</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Terms and Conditions for Delivery Partners
          </CardTitle>
        </CardHeader>
        {language === "en" ? (
          <CardContent>
            <ScrollArea
              className={`${!showCommitment ? "h-[80vh]" : "h-[45vh] "}  pr-4`}
            >
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  This document outlines the terms and conditions applicable to
                  delivery partners (&quot;Auto Drivers&quot;) who engage with
                  the entity (&quot;Company&quot; or &quot;Platform Owner&quot;)
                  as part of the Centralized Distribution Network in Kerala. By
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
                      last-mile delivery services in their assigned panchayats,
                      as per the instructions and guidelines provided by the
                      Company.
                    </p>
                    <p>
                      1.2 All deliveries must be conducted professionally,
                      efficiently, and in accordance with the Company&apos;s
                      Code of Conduct.
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
                      2.2 Any violation of the Code of Conduct, including but
                      not limited to theft, fraud, misconduct, or negligence,
                      will result in immediate termination of the partnership
                      and potential legal action.
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
                      3.1 Any assets, goods, or materials provided by the
                      Company (including delivery uniforms, tools, or electronic
                      devices) must be returned in good condition upon
                      termination of the partnership or cessation of delivery
                      services.
                    </p>
                    <p>
                      3.2 Failure to return these items may result in the
                      Company deducting the value of the unreturned items from
                      the delivery partner&apos;s final settlement or initiating
                      legal action if necessary.
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
                      power over all aspects of the partnership, including but
                      not limited to operational protocols, delivery
                      assignments, payment structures, and termination
                      decisions.
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
                      partnership at its discretion for any breach of these
                      terms and conditions, failure to adhere to the Code of
                      Conduct, or any action that jeopardizes the integrity or
                      reputation of the Company.
                    </p>
                    <p>
                      6.2 Delivery partners may choose to voluntarily terminate
                      their partnership by providing prior written notice.
                      Before termination, all Company-owned assets must be
                      returned, and any outstanding payments or obligations must
                      be settled.
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
                      addressed amicably through mutual discussion. If
                      unresolved, disputes will be subject to the jurisdiction
                      of courts located in Kerala.
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
                      8.1 The Company reserves the right to amend or update
                      these terms and conditions at any time. Delivery partners
                      will be notified of any changes in advance, and continued
                      engagement with the Company after such notification will
                      constitute acceptance of the revised terms.
                    </p>
                  </div>
                </section>

                {showCommitment && (
                  <>
                    <Separator className="my-6" />

                    <p className="text-muted-foreground italic">
                      By Submiting the form, I, the delivery partner, confirm
                      that I have read, understood, and agreed to abide by these
                      terms and conditions.
                    </p>
                  </>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        ) : (
          <CardContent>
            <ScrollArea
              className={`${!showCommitment ? "h-[80vh]" : "h-[45vh] "}  pr-4`}
            >
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  ഈ രേഖ കേരളത്തിലെ കേന്ദ്രകൃത്യമായ വിതരണ ശൃംഖലയുമായി
                  സഹകരിക്കുന്ന ഡെലിവറി പങ്കാളികൾക്ക് (&quot;ഓട്ടോ
                  ഡ്രൈവർമാർ&quot;) ബാധകമായ നിബന്ധനകളും വ്യവസ്ഥകളും
                  വിശദീകരിക്കുന്നു. ഡെലിവറി പങ്കാളിയായി ചേരുന്നതിലൂടെ, നിങ്ങൾ ഈ
                  നിബന്ധനകളും വ്യവസ്ഥകളും പൂർണ്ണമായും അംഗീകരിക്കുന്നു.
                </p>

                <Separator className="my-6" />

                <section aria-labelledby="role-responsibilities">
                  <h2
                    id="role-responsibilities"
                    className="text-2xl font-semibold mb-4"
                  >
                    1. ഡെലിവറി പങ്കാളിയുടെ പങ്കും ഉത്തരവാദിത്വങ്ങളും
                  </h2>
                  <div className="space-y-4">
                    <p>
                      1.1 ഡെലിവറി പങ്കാളികൾ, കമ്പനിയുടെ നിർദ്ദേശങ്ങളും
                      മാർഗ്ഗനിർദ്ദേശങ്ങളും അനുസരിച്ച്, നിശ്ചയിച്ച പഞ്ചായത്തുകളിൽ
                      അവസാന മൈൽ ഡെലിവറി സേവനങ്ങൾ നൽകേണ്ടതാണ്.
                    </p>
                    <p>
                      1.2 എല്ലാ ഡെലിവറികളും പ്രൊഫഷണലായും കാര്യക്ഷമമായും
                      കമ്പനിയുടെ പെരുമാറ്റച്ചട്ടം പാലിച്ച് നടത്തണം.
                    </p>
                    <p>
                      1.3 ഉപഭോക്താക്കളിൽ നിന്ന് ശേഖരിക്കുന്ന പണമെല്ലാം
                      സുരക്ഷിതമായി, കൂടാതെ ഉടൻതന്നെ കമ്പനിക്ക് കൈമാറണം.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                <section aria-labelledby="code-conduct">
                  <h2 id="code-conduct" className="text-2xl font-semibold mb-4">
                    2. പെരുമാറ്റച്ചട്ടം
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p>2.1 ഡെലിവറി പങ്കാളികൾക്ക് നിർബന്ധമായും:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          ഉപഭോക്താക്കളോടും, കമ്പനിയുടെ പ്രതിനിധികളോടും, മറ്റു
                          പങ്കാളികളോടും ആദരവോടെയും വിനയത്തോടെയും പെരുമാറണം.
                        </li>
                        <li>
                          ഉൽപ്പന്നങ്ങൾ ഉപഭോക്താക്കൾക്ക് സമയബന്ധിതവും
                          സുരക്ഷിതവുമായ രീതിയിൽ നൽകണം.
                        </li>
                        <li>
                          പണികൃത്യങ്ങൾ നിർവഹിക്കുന്നതിനിടെ പ്രാദേശിക നിയമങ്ങളും
                          ഗതാഗത നിയമങ്ങളും കർശനമായി പാലിക്കണം.
                        </li>
                      </ul>
                    </div>
                    <p>
                      2.2 മോഷണം, തട്ടിപ്പ്, ദുരുപയോഗം, അലംഭാവം എന്നിവ ഉൾപ്പെടെ
                      പെരുമാറ്റച്ചട്ടത്തിന്റെ ലംഘനങ്ങൾ ഉണ്ടെങ്കിൽ, ഉടൻ
                      പങ്കാളിത്തം അവസാനിപ്പിക്കപ്പെടും, അതോടൊപ്പം നിയമനടപടികൾ
                      സ്വീകരിക്കും.
                    </p>
                    <p>
                      2.3 വ്യവസ്ഥകളുടെ ലംഘനത്തിന്റെ തെളിവുകൾ ലഭിച്ചാൽ, ഡെലിവറി
                      പങ്കാളിയുടെ പങ്കാളിത്തം അവസാനിപ്പിക്കാൻ കമ്പനി പൂർണ്ണമായ
                      അധികാരം ഉപയോഗിക്കും.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                <section aria-labelledby="property-assets">
                  <h2
                    id="property-assets"
                    className="text-2xl font-semibold mb-4"
                  >
                    3. സ്വത്തുക്കളും ആസ്തികളും
                  </h2>
                  <div className="space-y-4">
                    <p>
                      3.1 കമ്പനി നൽകുന്ന (ഡെലിവറി യൂണിഫോം, ഉപകരണങ്ങൾ,
                      ഇലക്ട്രോണിക് ഉപകരണങ്ങൾ മുതലായവ) ആസ്തികൾ, പങ്കാളിത്തം
                      അവസാനിക്കുമ്പോൾ അല്ലെങ്കിൽ സേവനം നിർത്തുമ്പോൾ നല്ല നിലയിൽ
                      തിരികെ നൽകണം.
                    </p>
                    <p>
                      3.2 ഈ വസ്തുക്കൾ തിരികെ നൽകാൻ പരാജയപ്പെട്ടാൽ, അവയുടെ മൂല്യം
                      അവസാന പേയ്‌മെന്റിൽ നിന്ന് കുറയ്ക്കാൻ അല്ലെങ്കിൽ
                      നിയമനടപടികൾ സ്വീകരിക്കാൻ കമ്പനി അവകാശവാനാണ്.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                <section aria-labelledby="payments">
                  <h2 id="payments" className="text-2xl font-semibold mb-4">
                    4. പേയ്മെന്റുകളും സാമ്പത്തിക ബാധ്യതകളും
                  </h2>
                  <div className="space-y-4">
                    <p>
                      4.1 ഡെലിവറി പങ്കാളികൾക്ക്, അവരുടെ പേയ്മെന്റുകൾ നേരിട്ട്
                      കമ്പനി വഴി ലഭിക്കും.
                    </p>
                    <p>
                      4.2 ഉപഭോക്താക്കളിൽ നിന്ന് ശേഖരിക്കുന്ന പണത്തിന്റെ ഒരു
                      ഭാഗവും, ഡെലിവറി പങ്കാളികൾക്ക് സൂക്ഷിക്കാൻ അനുമതിയില്ല.
                      എല്ലാ ഉപഭോക്തൃ പേയ്മെന്റുകളും ഉടൻതന്നെ,
                      വ്യത്യാസങ്ങളില്ലാതെ, കമ്പനിയിൽ എത്തിക്കേണ്ടതാണ്.
                    </p>
                    <p>
                      4.3 പേയ്‌മെന്റുകൾ കൈമാറുന്നതിൽ, വൈകലുകൾ, ദുരുപയോഗം,
                      വ്യത്യാസങ്ങൾ എന്നിവ നടന്നാൽ, പങ്കാളിത്തം സസ്പെൻഡ്
                      ചെയ്യപ്പെടുകയോ, അവസാനിപ്പിക്കപ്പെടുകയോ ചെയ്യും.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                <section aria-labelledby="authority">
                  <h2 id="authority" className="text-2xl font-semibold mb-4">
                    5. കമ്പനിയുടെ അധികാരം
                  </h2>
                  <div className="space-y-4">
                    <p>
                      5.1 കമ്പനി, പങ്കാളിത്തവുമായി ബന്ധപ്പെട്ട എല്ലാ
                      കാര്യങ്ങളിലും, പൂർണ്ണമായും അവസാനമായ തീരുമാനങ്ങൾ എടുക്കും.
                    </p>
                    <p>
                      5.2 ഡെലിവറി പങ്കാളികൾ, കമ്പനിയുടെ ഈ അവസാന തീരുമാനങ്ങളെ
                      അംഗീകരിക്കുന്നു.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                <section aria-labelledby="termination">
                  <h2 id="termination" className="text-2xl font-semibold mb-4">
                    6. പങ്കാളിത്തത്തിന്റെ അവസാനിപ്പിക്കൽ
                  </h2>
                  <div className="space-y-4">
                    <p>
                      6.1 ഡെലിവറി പങ്കാളിത്തം, വ്യവസ്ഥകളും നിബന്ധനകളും
                      ലംഘിച്ചാൽ, അവസാനിപ്പിക്കാൻ കമ്പനി അവകാശവാനാണ്.
                    </p>
                    <p>
                      6.2 ഡെലിവറി പങ്കാളികൾ, എഴുത്തിൽ മുൻകൂട്ടി അറിയിച്ച്,
                      സ്വമേധയാ പങ്കാളിത്തം അവസാനിപ്പിക്കാം. അവസാനിപ്പിക്കലിന്
                      മുമ്പ്, കമ്പനിയുടെ സ്വത്തുക്കൾ തിരികെ നൽകുകയും,
                      ബാക്കിയുള്ള ചുമതലകൾ തീര്ത്തും.
                    </p>
                    <p>
                      6.3 അവസാനിപ്പിക്കൽ നടക്കുമ്പോൾ, കമ്പനിയുടെ ആസ്തികൾ തിരികെ
                      നൽകിയതും ഔപചാരികതകൾ പൂർത്തിയാക്കിയതും ശേഷമല്ലാതെ,
                      പേയ്‌മെന്റുകൾ ലഭ്യമാകില്ല.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                <section aria-labelledby="liabilities">
                  <h2 id="liabilities" className="text-2xl font-semibold mb-4">
                    7. ബാധ്യതകളും തർക്കങ്ങളും
                  </h2>
                  <div className="space-y-4">
                    <p>
                      7.1 ഡെലിവറി പങ്കാളികളുടെ അലംഭാവം, ദുരുപയോഗം എന്നിവ മൂലം,
                      കമ്പനിയുടെ ആസ്തികൾക്കും ഉപഭോക്തൃ ഉൽപ്പന്നങ്ങൾക്കും ഉണ്ടായ
                      നഷ്ടങ്ങൾ എന്നിവയ്ക്ക് അവർ തന്നെ ഉത്തരവാദികളായിരിക്കും.
                    </p>
                    <p>
                      7.2 പങ്കാളിത്തവുമായി ബന്ധപ്പെട്ട തർക്കങ്ങൾ, പരസ്പര
                      ചർച്ചയിലൂടെ പരിഹരിക്കാം. അത് സാധ്യമാകാത്തപക്ഷം, കേരളത്തിലെ
                      കോടതി അധികാര പരിധി അന്തിമമായിരിക്കും.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                <section aria-labelledby="amendments">
                  <h2 id="amendments" className="text-2xl font-semibold mb-4">
                    8. വ്യവസ്ഥകളുടെ പരിഷ്‌കരണങ്ങൾ
                  </h2>
                  <div className="space-y-4">
                    <p>
                      8.1 കമ്പനി, ഈ നിബന്ധനകളും വ്യവസ്ഥകളും എപ്പോൾ വേണമെങ്കിലും
                      മാറ്റം വരുത്തുവാനും, പുതുക്കുവാനും അവകാശവാനാണ്. മാറ്റം
                      സംബന്ധിച്ച് പങ്കാളികളെ അറിയിക്കും, പുതുക്കൽ അറിയിച്ചതിന്
                      ശേഷം തുടർന്നുള്ള പ്രവർത്തനങ്ങൾ, പുതിയ നിബന്ധനകളുടെ
                      അംഗീകാരമായി കണക്കാക്കും.
                    </p>
                  </div>
                </section>

                {showCommitment && (
                  <>
                    <Separator className="my-6" />

                    <p className="text-muted-foreground italic">
                      ഈ ഫോം സമർപ്പിച്ചതിലൂടെ, ഞാൻ, ഡെലിവറി പങ്കാളിയായ വ്യക്തി, ഈ
                      നിബന്ധനകളും വ്യവസ്ഥകളും വായിച്ചും, അവ മനസ്സിലാക്കിയും,
                      പാലിക്കുമെന്ന് ഉറപ്പിക്കുന്നു.
                    </p>
                  </>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        )}
      </Card>
    </section>
  );
}
