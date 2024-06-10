import React, { useState } from "react";

import DownArrow from "@/assets/DownArrow";
import { frequentlyAsked } from "@/static/json/contactUs";

function TermsConditions() {
  const [accordianState, setAccordianState] = useState({ 0: false });

  let handleAccordian = (index) => {
    if (accordianState?.[index]) {
      setAccordianState({ [index]: false });
    } else {
      setAccordianState({ [index]: true });
    }
  };

  const termsConditions = [
    {
      title: "Description of Service",
      subContent: [
        {
          title: "Overview",
          descSty: "mb-6",
          description:
            "The Company will provide the Client with a paid subscription to the Service for a period as outlined in Annexure A (“Billing Period”), which will enable the Client to perform the following services for each of the specified number of retail locations authorised by (and associated with) the Client as outlined in Annexure A.",
          listData: {
            listSty: "list-decimal",
            list: [
              {
                line: "Submit business listing and related information to various first party and third party local and national websites, mobile applications, social networks, and Sekel Tech powered website, including mobile site, that participate in the Service (the “Publisher Partners”)",
              },
              {
                line: "Deliver text, image or video based content that adhere to Company’s policies and guidelines on Publisher Partner websites (the “Publisher Partner Sites”) via placement of one or more Sekel Tech Platform widgets (the “Windows”)",
              },
              {
                line: "Allocate and track number of phone calls resulting from the content delivered using virtual numbers delivered as outlined in Annexure A, and",
              },
              {
                line: "Access to a Dashboard (the “Dashboard”) that provides ability to: Upload and manage content outlined in (i) and (ii) above on an ongoing basis, and Basic reporting, such as views and actions (when available),on the content delivered via Windows.",
              },
            ],
          },
        },

        {
          title: "Business content",
          descSty: "mb-6",
          description:
            "Client will provide all information related to its business listings, products and services including pricing, description,availability and images. Client will administer and update the Service using the Dashboard with such information on a regular basis to keep the information accurate and current at all times, but in no event within 48-hours on a change being undertaken in its outlet to ensure an optimization of results achievable from the Service.Such content when displayed to Publisher Partners will not alter the search ranking of the associated business listings on the Publisher Partner Sites.",
        },

        {
          title: "Windows",
          descSty: "mb-6",
          description:
            "Client may designate text or image based content (in adherence to the Company’s policies and guidelines) using the Dashboard on an ongoing basis to be delivered on various Publisher Partner Sites via widget placements provided by the Service. This content does not promote you on spaces on Publisher Partner Sites specially designated for advertising. Client may also include such widgets on its own website or mobile site during the term of this Agreement.",
        },

        {
          title: "Call tracking using virtual phone numbers",
          descSty: "mb-6",
          description:
            "Phone monitoring capabilities using virtual phone numbers provided by the Service incorporates technology from third-party technology providers. Company will deliver a list of virtual phone numbers on a city by city basis (as stated in Annexure A) via the Dashboard based on timelines as outlined in Section 4.1. Once available, Client must associate each virtual phone number to one of its locations or content placements via the Dashboard and enable tracking or recording (in accordance with all applicable laws and consent of all parties involved in the conversations) to monitor the phone calls resulting from the content delivered via the Service. Virtual phone numbers provided must not be used for any purpose or in the context of any content outside that of the Service.",
        },

        {
          title: "Limitations",
          descSty: "mb-2 font-semibold",
          description: "You hereby acknowledge and agree that:",
          listData: {
            listSty: "list-decimal",
            list: [
              {
                line: "The Publisher Partner Sites that participate in the Service are subject to change at any time and that Publisher Partner Sites can be added and/or removed from the Service at any time,",
              },
              {
                line: "All content submitted by you for display on Publisher Partner Sites shall be subject to Company’s and Publisher Partners’ review & monitoring processes (including automated or manual processes), website design layout constraints, character limits, quality standards and other applicable policies, and that any such content may be rejected, in whole or in part, by the Company and/or a Publisher Partner at any time in its sole discretion, or modified at any time to comply with such policies,",
              },
              {
                line: "The Company does not guarantee that any specific listing or content will be displayed on any Publisher Partner Site,",
              },
              {
                line: "The appearance and/or location of any Window placement may change at any time, and",
              },
              {
                line: "The availability and the quality of service associated with virtual phone numbers depends on the services provided by third-party technology provider partners and hence cannot be guaranteed over the entire duration. The Company shall have no liability for any change in the Publisher Partner Sites, for any decision by a Publisher Partner to reject or modify any content submitted by you, or for any other decision, change or other action described in clauses (A), (B), (C) or (D) above.",
              },
            ],
          },
        },
        {
          title:
            "Optional paid services offered by Publisher Partners or third party vendors",
          description:
            "For any additional services that the Company helps negotiate with Publisher Partners or third party vendors (e.g. services that help improve visibility for the Client’s business listings on Publisher Partner Site), you will directly enter into an agreement with the applicable Publisher Partner or third party vendor. Company may charge a commission for facilitating such services from Publisher Partner Sites and/or third party vendors. Company will not be involved beyond the sale of such services and are will not be liable for any issues associated with the usage of such services.",
        },
      ],
    },
    {
      title: "Fees and Payment",
      subContent: [
        {
          title: "Fees",
          description:
            "By registering for the Service, you agree to all fee and payment terms (associated with services summarized herein in Annexure A)that are quoted to Client by a Company’s sales representative and reflected in a receipt. Any Service fees mentioned are exclusive of all applicable taxes and levies. Additional telecom charges, such as SMS and call charges, may apply on actual basis if they exceed the default quotas.",
        },

        {
          title: "Payment Terms",
          description:
            "All payments must be made in advance and payable at Bangalore in favor of Sekel Tech (India) Private Limited Any and all late payments shall accrue interest at the rate of one and one half percent (1.5%) per month. In addition, you are responsible for paying any reasonable expenses and all legal fees that we incur in connection with collecting late amounts.",
        },

        {
          title: "Renewal",
          description:
            "Unless terminated pursuant to Section 4, a fresh invoice for the next Billing Period will be sent to the Client 30 days prior to the end of the current Billing Period. Company reserves the right to revise pricing and Billing Period for its Service, and all such changes, when applicable, will be communicated as part of or along with the invoice to the Client.",
        },
      ],
    },
    {
      title: "Use of Service",
      subContent: [
        {
          title: "License",
          description:
            "The Company hereby grants the Client a limited, non-exclusive, non-transferable right and license to access and use the Service solely in connection with Client’s business needs. This license will terminate in the event this Agreement expires or is terminated pursuant to Section 4, in which case Client will immediately cease any further use of the Service.",
        },

        {
          title: "Ownership",
          description:
            "This is an Agreement for access to the Services, and, except with respect to the license set forth in Section 3.1 hereof, Client is not granted a license to any software by this Agreement. The Service is the copyrighted work of the Company and/or its various partners.The Company will be the sole owner of all right, title, and interest in and to the network, platform, Service, website code and any analytics or similar data or insights extracted or derived from their operation, including, without limitation, all intellectual property rights therein.",
        },

        {
          title: "Trademarks",
          description:
            "The trademarks, service marks, logos and any designs used or displayed on the Service are trademarks and/or service marks owned by the Company or its licensors. Nothing in this Agreement shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of the Company’s trademarks displayed on the Service without the Company’s prior, written permission in each instance. The appearance of any third-party trademarks does not in any way imply any connection, license, approval or other such relationship of any kind with such third party.",
        },

        {
          title: "Usage Restrictions",
          description:
            "Client’s use of the Service is limited solely to those rights granted in Section 3.1. Client shall not copy, prepare derivative works, decompile or reverse engineer the Service. Client will not remove any trademark, copyright, or other proprietary rights notices which appears on the Service. In addition, Client will not use the Service for any unlawful, fraudulent, improper or abusive purpose or in any way, which interferes with the Company’s ability to provide the Service to other customers, prevents or restricts other clients from using the Services, or damages any of Company’s or other client’s property. Prohibited uses include, but are not limited to uses in connection with the following.Impersonating any person or entity, including pretending to be anyone, or any entity, you are not, including impersonating or misrepresenting yourself as another person (including a celebrity), entity, or a civic or government leader, or otherwise misrepresenting your affiliation with a person or entity.Creating a false identity or otherwise attempting to mislead others as to the identity of the sender or the origin of any communication made using the Service.Harvesting or collecting any personal information about others without their consent or in violation of applicable law.Behavior that is obscene, threatening, harassing, defamatory, libelous, deceptive, fraudulent, malicious, infringing, or invasive of another’s privacy.Sending unsolicited and/or bulk messages or advertisements, including voicemails or facsimiles.Unauthorized access to the Service, other accounts, or computer systems or networks connected to the Service, through password mining or any other means.Transmitting any material that may infringe the intellectual property rights or other rights of third parties.Violating any TRAI or other governmental regulations regarding the transmission of technical data through the Service.Violation or non-adherence to any extant laws of the land governing the business associated with this Agreement.",
        },

        {
          title: "License to Client Content",
          description:
            "Client hereby grants Company a non-exclusive, worldwide, royalty-free, transferable, perpetual, irrevocable right and license to use, copy, publish, distribute, syndicate, reformat and update (for example, to standardize formats) any and all content that Client provides in connection with its use of the Service. Company may sublicense this right to any Publisher Partners and other online partners. This license will survive any termination or expiration of this Agreement.",
        },
        {
          title: "License to Client Marks",
          description:
            "Client hereby grants Company a non-exclusive, worldwide, paid-up, royalty-free, transferable (in the event of a sale or other change of control of Company’s business) right and license to use Client’s marks on any of Company’s websites or other marketing materials to indicate your participation in the Service. Company may sublicense this right to any of Publisher Partners and other online partners. In the event of any termination or expiration of this Agreement, Company will use commercially reasonable efforts to remove your marks from Company’s websites and marketing materials within a reasonable period of time, and to instruct Company’s online partners to do the same.",
        },
      ],
    },
    {
      title: "Term and Termination",
      subContent: [
        {
          title: "Term",
          description:
            "This Agreement is effective as of the date you register for the Service and shall remain in full force and effect until terminated by either Party in accordance with this Section 4. The standard delivery period of the Service, except for call tracking for which the standard delivery period is 45 days, is 7 days from the date of acceptance of this Agreement or the receipt of all payments related to this Agreement, whichever is later.",
        },

        {
          title: "Termination by Client",
          description:
            "Client may terminate this Agreement at and disconnect the Service at any time for convenience upon prior notice of not less than 30 days, to the Company (which may be provided by email).",
        },

        {
          title: "Termination by Company",
          description:
            "We may terminate this Agreement and disconnect your Service at any time for convenience at any time upon notice (which we may provide by email). Further, the Company may at any time, and without additional notice terminate, modify, suspend, disconnect, discontinue, or block access to some or all of the features of the Service if:",
          listData: {
            listSty: "list-decimal",
            list: [
              {
                line: "Company determines that Client use of the Service violates or has at any time violated this Agreement or any other applicable agreement.",
              },
              {
                line: "Company determines that such action is necessary to maintain or improve the Service, to prevent fraud or misrepresentation by affirmative acts and/or omissions, to protect other Clients, users or third parties, or for any other good cause.",
              },
              {
                line: "Company chooses to discontinue or modify the scope of its Service with due notices to all concerned.",
              },
              {
                line: "For any other reason that the Company deems it necessary or advisable to restrict Client access to the Service, including but not limited to compliance with requests by law enforcement or other government agencies.",
              },
            ],
          },
        },

        {
          title: "Survival",
          description:
            "Upon any termination or expiration of this Agreement, Client will pay Company the Fees for each month that has commenced prior to the effective date of such termination or expiration. The following provisions shall survive any termination of this Agreement: Section 3.4 (“License to Client Content”), this Section 4.4 (“Survival”), Section 5 (“Disclaimer and Limitation of Liability”), Section 6 (“Indemnification”), Section 7 (“Representations and Warranties”) and Section 8 (“General Provisions”).",
        },

        {
          title: "Upon termination",
          description:
            "Upon termination, the Company may immediately deactivate or delete all related accounts, information and files and/or revoke any further access to the Service and related accounts, information and files.",
        },
      ],
    },
    {
      title: "Disclaimer and Limitation of Liability.",
      subContent: [
        {
          title: "Disclaimer",
          description:
            "The Service and any other services provided by the Company in connection with this Agreement are supplied on an “AS IS” and “AS AVAILABLE” basis. To the fullest extent under applicable law, Company makes no, and disclaims all, warranties (including, but not limited to, any implied warranties of merchantability, fitness for a particular purpose and non-infringement), guarantees, and representations, whether express, implied, oral or otherwise. Company and other websites, databases and/or third party programs contained within the Service may contain bugs, errors, problems and/or other limitations. Company has no liability, whatsoever, to you or any third party, for any other party’s security methods and privacy protection procedures and/or any party’s use of, or inability to use, Company websites, databases and/or programs. Company disclaims any and all warranties, express and implied, that any other party’s security methods, privacy protection procedures and/or any party’s use of Company’s website, databases and/or programs will be uninterrupted or error-free.",
        },

        {
          title: "Limitation of Liability",
          listData: {
            listSty: "list-decimal",
            list: [
              {
                line: "In no event shall Company or any Publisher Partner be responsible for any consequential, incidental, special, punitive, exemplary or indirect damages arising from or relating to this Agreement or otherwise, including, without limitation, lost revenue or profits, even if Company has been advised of the possibility of such damages.",
              },
              {
                line: "The Company will not be liable or considered in breach of the Agreement, on account of a delay or failure to perform under the Agreement, as a result of causes or conditions that are beyond Company’s control.",
              },
              {
                line: "In addition, and notwithstanding anything contained herein to the contrary, Company’s liability under any cause of action arising from or in connection with this Agreement or otherwise shall be limited to Rupees Ten Thousand (Rs. 10,000/-) only. To the extent any liability of Company cannot be disclaimed, excluded or limited under applicable law, such liability shall be disclaimed, excluded and limited to the fullest extent permitted under applicable law.",
              },
            ],
          },
        },

        {
          title: "Termination by Company",
          description:
            "We may terminate this Agreement and disconnect your Service at any time for convenience at any time upon notice (which we may provide by email). Further, the Company may at any time, and without additional notice terminate, modify, suspend, disconnect, discontinue, or block access to some or all of the features of the Service if:",
          listData: {
            listSty: "list-decimal",
            list: [
              {
                line: "Company determines that Client use of the Service violates or has at any time violated this Agreement or any other applicable agreement.",
              },
              {
                line: "Company determines that such action is necessary to maintain or improve the Service, to prevent fraud or misrepresentation by affirmative acts and/or omissions, to protect other Clients, users or third parties, or for any other good cause.",
              },
              {
                line: "Company chooses to discontinue or modify the scope of its Service with due notices to all concerned.",
              },
              {
                line: "For any other reason that the Company deems it necessary or advisable to restrict Client access to the Service, including but not limited to compliance with requests by law enforcement or other government agencies.",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Indemnification.",
      subContent: [
        {
          description:
            "Client will defend, indemnify, and hold harmless, Company, its third party licensors and Publisher Partners, and its affiliates, and each of its and their respective officers, directors, members, managers, employees, sub-licensees, contractors and agents (collectively, “Indemnified Parties”) from and against any and all claims, actions, losses, liability, damages, fines, costs, and expenses (including reasonable legal fees and expenses) arising from or related to: (a) any breach of the Agreement by you (including, but not limited to, any representations and warranties made herein); (b) any violation of any law or regulation arising from or in connection with your participation in the Service; (c) any allegation arising from or relating to any content provided by you, including, but not limited to, any allegation that any content provided by or on behalf of you infringes or otherwise violates any trademark, trade name, service mark, copyright, license, trade secret, right of privacy or publicity or other intellectual property or proprietary right of any third party, constitutes false advertising, is defamatory and/or is in violation of any law or regulation; (d) any claim by any third party related to you or your products or services; and/or (e) any third party dispute with you, any injury suffered by a third party at your place of business or any other related issue.",
        },
      ],
    },
    {
      title: "Representations and Warranties.",
      subContent: [
        {
          description:
            "Company warrants that it will use commercially reasonable efforts to maintain the Service operational 99.9% of the time, excluding downtime for maintenance, upgrades, repairs and emergency outages. You represent, warrant and covenant that at all times during the term of this Agreement: 1. the individual accepting this Agreement is authorized to act on behalf of you and to bind you to this Agreement; 2. you have the full power and authority to conduct your business, to enter into this Agreement, and to perform your obligations under this Agreement; 3. your execution, delivery and performance of this Agreement will not conflict with or violate: (i) any provision of law, rule or regulation to which you are subject; (ii) any order, judgment or decree applicable to you; (iii) any provision of your organizational documents; or (iv) any agreement or other instrument applicable to you; 4. you will comply with all applicable laws, rules, regulations, court orders, judgments and decrees, including without limitation those governing account collection, export control, consumer protection, unfair competition, anti-discrimination, securities laws, and false advertising; and 5. you will be solely liable for any communications or transmissions sent through the Service and that the Company has no control over the content of any transmission.",
        },
      ],
    },
    {
      title: "General Provisions.",
      subContent: [
        {
          title: "Confidentiality",
          description:
            "Except as may be required by law and otherwise set forth in this Agreement, none of the Parties shall issue a publicity release or public announcement or otherwise make any disclosure concerning this Agreement, the transactions contemplated hereby, Confidential Information of the Company or any other information received from any other Party, without the prior written approval of the other Parties; provided, however, that nothing in this Agreement shall restrict the recipient of such information from disclosing information:",
          listData: {
            listSty: "list-decimal",
            list: [
              {
                line: "That is already publicly available;",
              },
              {
                line: "That was already known to such recipient prior to its disclosure in connection with the transactions contemplated by this Agreement; ",
              },
              {
                line: "That may be required or appropriate in response to any litigation or potential litigation, provided that such recipient will use reasonable efforts to notify the provider of such information in advance of such disclosure so as to permit the provider of such information to seek a protective order or otherwise contest such disclosure, and such recipient will use reasonable efforts to cooperate, at the expense of such provider, with such provider in pursuing any such protective order; ",
              },
              {
                line: "To such recipient’s officers, directors, shareholders, advisors, employees, members, partners, controlling persons, auditors or counsel on a confidential basis; or",
              },
              {
                line: "To Persons from whom releases, consents or approvals are required, or to whom notice is required to be provided, pursuant to the transactions contemplated by this Agreement.",
              },
              {
                line: "If any announcement is required by law to be made by any Party, prior to making such an announcement, such Party will, where practicable, deliver a draft of such announcement to the other Parties and shall give the other parties reasonable opportunity to comment thereon.",
              },
            ],
          },
        },
        {
          title: "Notices",
          description:
            "All notices to Company shall be sent to the Company’s registered address, attention Director. Any notices to Client may be effected by sending an email to the email address specified in Client’s Inbox (as specified in Annexure B) or by posting a message to Client’s Inbox, and shall be deemed received when sent (for email) or twenty-four (24) hours after having been posted (for messages in Client’s Inbox).",
        },
        {
          title: "Policies",
          description:
            "Client’s participation in the Service shall be subject to all applicable Company policies including, without limitation, the Privacy Policies posted on any Web Site on which Client listings are published, and any applicable Web Site specification requirements (collectively, “Policies”). The Policies may be modified by Company at any time. The latest Policies can be found on any of Company’s websites. You should review the Policies regularly. By your continued participation in a Service, you agree to all of the associated terms and conditions contained within the Policies effective at that time.",
        },
        {
          title: "Force Majeure",
          description:
            "In the event that either Party is prevented from performing, or is unable to perform, any of its obligations under this Agreement due to any cause beyond the reasonable control of the Party invoking this provision, the affected Party’s performance shall be excused and the time for performance shall be extended for the period of delay or inability to perform due to such occurrence.",
        },
        {
          title: "Waiver",
          description:
            "The waiver by either Party of a breach or a default of any provision of this Agreement by the other Party shall not be construed as a waiver of any succeeding breach of the same or any other provision, nor shall any delay or omission on the part of either Party to exercise or avail itself of any right, power or privilege that it has, or may have hereunder, operate as a waiver of any right, power or privilege by such Party.",
        },
        {
          title: "Independent Contractors",
          description:
            "Nothing contained in this Agreement shall be deemed to imply or constitute either Party as the agent or representative of the other Party, or both Parties as joint ventures or partners for any purpose.",
        },
        {
          title: "Governing Law",
          description:
            "This Agreement shall be governed by, and construed in accordance with, the laws of India, and subject to the courts at Bangalore.",
        },
        {
          title: "Severability",
          description:
            "Nothing herein contained shall be construed so as to require the commission of any act contrary to law, and wherever there is any conflict between any provision of this Agreement and any present or future statute, law, ordinance or regulation, the latter shall prevail, but in such event, the provision of this Agreement affected shall be curtailed and limited only to the extent necessary to bring it within legal requirements.",
        },
        {
          title: "Entire Agreement",
          description:
            "This Agreement constitutes the entire Agreement between the Parties with regard to the subject matter hereof. Company may modify the terms of this Agreement at any time without liability as the Service evolves, and your use of the Service after notice that the terms of this Agreement have changed constitutes your acceptance of the new terms.",
        },
        {
          title: "Headings",
          description:
            "Captions and headings contained in this Agreement have been included for ease of reference and convenience and shall not be considered in interpreting or construing this Agreement.",
        },
        {
          title: "Costs, Expenses and Legal Fees",
          description:
            "If either Party commences any action or proceeding against the other Party to enforce or interpret this Agreement, the prevailing Party in such action or proceeding shall be entitled to recover from the other Party the actual costs, expenses and reasonable legal fees (including all related costs and expenses), incurred by such prevailing Party in connection with such action or proceeding and in connection with obtaining and enforcing any judgment or order thereby obtained. The Parties have carefully read all of the provisions of this Agreement and will fully and faithfully comply with such provisions.",
        },
      ],
    },
    {
      title: "Annexure.",
      subContent: [
        {
          title: "Annexure A",
          description:
            "Summary of Subscribed Services & Payment Terms Billing period, payment terms and scope of deliverables, including number of business locations supported and number of virtual phone numbers by city, are as outlined in agreed commercial offer.",
        },
        {
          title: "Annexure B",
          description:
            "Key Client Contacts Contact information of business and technical contacts as provided by the Client.",
        },
      ],
    },
  ];

  return (
    <section className="pt-[50px] lg:pt-[100px] pb-[5px] lg:pb-[20px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="text-black-33 col-span-12 lg:col-span-9 pr-[85px]">
            <div className="mb-[52px]">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[28px] leading-[140%] font-medium text-black-33">
                  Terms & Conditions
                </h2>
              </div>
              <p className="mb-8">
                Before you use this website or any services available via this
                website, carefully read the terms and conditions of this
                website. By accessing this website or using the services, you
                and the business entity that you represent, if applicable, are
                agreeing to be bound by these terms. You represent and warrant
                that your actions will also bind the entity you represent while
                using this website or any services provided through this
                website. You hereby covenant to ensure that all users that gain
                access to the website and/or the services from you are bound by
                these terms. If you do not agree to all of the terms of this
                agreement, then do not access and/or use the services.
              </p>
              <p className="mb-8">
                Please read these terms carefully. If company undertakes any
                Modifications to these terms, we will highlight the same on our
                Homepage and for any material change made we will send you an
                Email notification of the same, subject to your account with us.
                To continue using the service post such changes or modifications
                You will be required to accept this terms of service once again
                by Clicking on ‘accept/agree’ tab.
              </p>
              <p className="mb-8">
                This terms of service agreement (“agreement”) is a legal
                agreement between you (together with the business entity, if
                any, that you represent, “client” or “you”) and sekel tech
                (india) private limited, a company incorporated under the
                companies act 1956, with its registered office in
                bangalore,(hereinafter referred to as “company”, “us” or “we”).
              </p>
              <p>
                Company and client where the context so permits shall
                hereinafter collectively be referred to as the “parties”, and
                each a “party” whereas, the parties agree to the following terms
                of service in connection with sekel tech platform (the
                “service”). This agreement governs in its entirety the
                relationship between the company and the client in connection
                with the service.
              </p>
            </div>
            <div className="">
              {termsConditions?.map((item, index) => {
                return (
                  <div
                    onClick={() => handleAccordian(index)}
                    className={`${
                      accordianState?.[index] === true ? "" : "active"
                    } text-black-33 font-medium cursor-pointer ${
                      index === termsConditions.length - 1
                        ? ""
                        : "border-b border-gray-400 mb-[45px] "
                    }`}
                  >
                    <div
                      className={`${
                        accordianState?.[index] === true ? "rounded-t-xl" : ""
                      } flex justify-between items-center list-none py-2`}
                    >
                      <span className="text-[28px] font-medium">
                        {item.title}
                      </span>
                      {index !== termsConditions.length - 1 && (
                        <span
                          className={`${
                            accordianState[index] === true ? "rotate-180" : ""
                          } transition`}
                        >
                          <DownArrow ml="ml-0" />
                        </span>
                      )}
                    </div>
                    <div
                      className={`${
                        accordianState[index] === true ||
                        index === termsConditions.length - 1
                          ? "text-black-33 pt-[16px] pb-[28px] font-normal"
                          : "hidden"
                      } animate-fadeIn`}
                    >
                      {item?.subContent?.map((subContentItem, idx) => (
                        <div className="mb-6" key={idx}>
                          {subContentItem?.title && (
                            <h3 className="text-[20px] font-medium leading-[140%] text-blue-900 mb-8">
                              {subContentItem?.title}
                            </h3>
                          )}
                          {subContentItem?.description && (
                            <p className={` ${subContentItem?.descSty}`}>
                              {subContentItem?.description}
                            </p>
                          )}
                          {subContentItem?.listData?.list?.length > 0 && (
                            <ul
                              className={` ${subContentItem?.listData?.listSty} pl-[18px] text-black-33`}
                            >
                              {subContentItem?.listData?.list?.map(
                                (listItem, listIndex) => (
                                  <li className="mb-1.5" key={listIndex}>
                                    {listItem?.line}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="mb-8">
              <p className="text-black-33 text-[14px] mb-2">Last Updated:</p>
              <p className="text-black-33 text-[16px]">19 July 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsConditions;
