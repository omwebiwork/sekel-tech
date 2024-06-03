import React from "react";

function PrivacyPolicy() {
  const listData = [
    {
      title: "What does this policy cover? ",
      desc: "This Privacy Policy covers the treatment of personally identifiable information (“Personal Information”) gathered when you are using or accessing the Services. This Privacy Policy also covers our treatment of any Personal Information that our business partners share with us or that we share with our business partners. This Privacy Policy does not apply to the practices of third parties that we do not own or control, including but not limited to any third party websites, services and applications (“Third Party Services”) that you elect to access through the Service or to individuals that we do not manage or employ. While we attempt to facilitate access only to those Third Party Services that share our respect for your privacy, we cannot take responsibility for the content or privacy policies of those Third Party Services. We encourage you to carefully review the privacy policies of any Third Party Services you access.",
    },
    {
      title: "What information do we collect? ",
      desc: "The information we gather enables us to personalize, improve and continue to operate the Services. In connection with certain aspects of the Services, we may request, collect and/or display some of your Personal Information. We collect the following types of information from our users.",
    },
    {
      title: "Account Information. ",
      desc: "When you create an Account, you will provide information that could be Personal Information, such as your username, password, email address, physical address and phone numbers. You acknowledge that this information may be personal to you, and by creating an account for access to the Services and providing Personal Information to us, you allow others, including us, to identify you and therefore may not be anonymous. We may use your contact information to send you information about our Services. We reserve the right to contact you when we believe it is necessary, such as for account recovery purposes.",
    },
    {
      title: "Virtual Telephone Numbers.",
      desc: "We provide our clients, particularly national and regional brands and their local outlets or dealers, with virtual telephone numbers that can be used by individuals looking at their locations, products and services, campaigns or other content, as provided by us, to contact them. When end users use one of these virtual telephone numbers to contact one of our clients, we route them to the appropriate client. As part of routing a phone call made to one of our special telephone numbers, we may collect the following information about that call: (i) the telephone number placing the call and any metadata about that number that is made available by the telephone service (e.g., caller ID information); (ii) the client receiving the call; (iii) the duration of the call; (iv) the location from which the call was made; and (v) the type of device from which the call was made. While we never sell or otherwise use that number for external marketing purposes, we may store some or all of this information and our clients may place a call, send a message (including but not limited to an SMS or text message), or otherwise attempt to establish contact through the telephone number placing the call. We may use the telephone number for internal purposes such as collecting and analyzing information on usage patterns for our Services.",
    },
    {
      title: "User Content.",
      desc: "Some features of the Services allow you to provide content to the Services, such as written comments, enquiries or likes/ratings. All content submitted by you to the Services may be retained by us indefinitely, even after you terminate your account. We may continue to disclose such content to third parties in a manner that does not reveal Personal Information, as described in this Privacy Policy.",
    },
    {
      title:
        "IP Address Information and Other Information Collected Automatically.",
      desc: "We automatically receive and record information from your web browser when you interact with the Services, including your IP address and cookie information. This information is used for fighting spam/malware and also to facilitate collection of data concerning your interaction with the Services (e.g., what links you have clicked on).Generally, the Services automatically collect usage information, such as the number and frequency of visitors to the Site. We may use this data in aggregate form, that is, as a statistical measure, but not in a manner that would identify you personally. This type of aggregate data enables us and third parties authorized by us to figure out how often individuals use parts of the Services so that we can analyze and improve them.",
    },
    {
      title: "Email Communications.",
      desc: "We may receive a confirmation when you open an email from us. We use this confirmation to improve our customer service.",
    },
    {
      title: "Information Collected Using Cookies.",
      desc: "Cookies are pieces of text that may be provided to your computer through your web browser when you access a website. Your browser stores cookies in a manner associated with each website you visit. We use cookies to enable our servers to recognize your web browser and tell us how and when you visit the Site and otherwise use the Services through the Internet.Our cookies do not, by themselves, contain Personal Information, and we do not combine the general information collected through cookies with other Personal Information to tell us who you are. As noted, however, we do use cookies to identify that your web browser has accessed aspects of the Services and may associate that information with your Account if you have one.Most browsers have an option for turning off the cookie feature, which will prevent your browser from accepting new cookies, as well as (depending on the sophistication of your browser software) allowing you to decide on acceptance of each new cookie in a variety of ways. We strongly recommend that you leave cookies active, because they enable you to take advantage of the most attractive features of the Services. Acceptance of cookies is not a requirement to browse a Site; however certain areas and features of a Site require your acceptance of cookies to work properly.This Privacy Policy covers our use of cookies only and does not cover the use of cookies by third parties. We do not control when or how third parties place cookies on your computer. For example, third party websites to which a link points may set cookies on your computer.",
    },
    {
      title: "Use of Google Analytics.",
      desc: "We use a third-party tracking service called Google Analytics that uses cookies to track non-personally identifiable information about visitors to our Sites in the aggregate.",
    },
    {
      title: "Aggregate Information.",
      desc: "We collect statistical information about how both unregistered and registered users, collectively, use the Services (“Aggregate Information”). Some of this information is derived from Personal Information. This statistical information is not Personal Information and cannot be tied back to you, your Account or your web browser.",
    },
    {
      title: "How, and with whom, is my information shared?",
      desc: "The Services are designed to help you share information with others. As a result, some of the information generated through the Services is shared publicly or with third parties. We will share your personal information with third parties only in the ways that are described in this privacy statement and will never sell your personal information.",
    },
    {
      title: "Public Information about Your Activity on the Services.",
      desc: "Some of your activity on and through the Services is in public by default. This includes, but is not limited to content you have posted on the Site or otherwise through the Services. Registered users may have some of this information associated with their Accounts. Unregistered users will not have this association, but information concerning their use of the Services (such as what pages they have visited) may be tracked anonymously through the use of cookies and stored by us. Please also remember that if you choose to provide Personal Information using certain features of the Services, then that information is governed by the privacy settings of those particular features and may be publicly available. Individuals reading such information may use or disclose it to other individuals or entities without our control and without your knowledge. Therefore, we urge you to think carefully about including any specific information you may deem private in content that you create or submit through the Services.",
    },
    {
      title: "IP Address Information.",
      desc: "While we collect and store IP address information, that information is not made public. We do at times, however, share this information with our clients, publisher partners, service providers and other persons with whom we conduct business, and as otherwise specified in this Privacy Policy.",
    },
    {
      title: "Information You Elect to Share.",
      desc: "You may access other Third Party Services through the Services, for example by clicking on links to those Third Party Services from within the Site. We are not responsible for the privacy policies and/or practices of these Third Party Services, and you are responsible for reading and understanding those Third Party Services’ privacy policies. This Privacy Policy only governs information collected on the Services.",
    },
    {
      title: "Aggregate Information.",
      desc: "We share Aggregate Information with our clients, publisher partners, service providers and other persons with whom we conduct business. We share this type of statistical data so that our partners can understand how and how often people use our Services and their services or websites, which facilitates improving both their services and how our Services interface with them. In addition, these third parties may share with us non-private, aggregated or otherwise non Personal Information about you that they have independently developed or acquired.",
    },
    {
      title: "Email, SMS and Phone Communications.",
      desc: "As part of the Services, you may occasionally receive email and other communications from us, such as our newsletter or communications relating to your Account. In addition, since we are able to offer our services to you, in part, based on your willingness to be reached by our clients (third-party advertisers) and business partners, you agree to receive e-mail marketing, phone calls or SMS marketing messages from us and our clients and business partners. To unsubscribe to our newsletters, please follow the directions in these communications. Communications relating to your Account will only be sent for purposes important to the Services, such as password recovery.",
    },
    {
      title: "User Profile Information. ",
      desc: "User profile information including your username and other information you enter may be displayed to other users to facilitate user interaction within the Services. We will not directly reveal user email addresses to other users.",
    },
    {
      title: "Information Shared with Our Agents. ",
      desc: "We employ and contract with people and other entities that perform certain tasks on our behalf and who are under our control (our “Agents”). We may need to share Personal Information with our Agents in order to provide products or services to you. Unless we tell you differently, our Agents do not have any right to use Personal Information or other information we share with them beyond what is necessary to assist us. You hereby consent to our sharing of Personal Information with our Agents.",
    },
    {
      title: "Information Disclosed Pursuant to Business Transfers.",
      desc: "In some cases, we may choose to buy or sell assets. In these types of transactions, user information is typically one of the transferred business assets. Moreover, if we, or substantially all of our assets, were acquired, or if we go out of business or enter bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of us or our assets may continue to use your Personal Information as set forth in this policy.",
    },
    {
      title: "Information Disclosed for Our Protection and Others. ",
      desc: "We also reserve the right to access, read, preserve, and disclose any information as it reasonably believes is necessary to (i) satisfy any applicable law, regulation, legal process or governmental request, (ii) enforce these Terms of Service, including investigation of potential violations hereof, (iii) detect, prevent, or otherwise address fraud, security or technical issues, (iv) respond to user support requests, or (v) protect our rights, property or safety, our users and the public. This includes exchanging information with other companies and organizations for fraud protection and spam/malware prevention.",
    },
    {
      title: "Information We Share With Your Consent.",
      desc: "Except as set forth above, you will be notified when your Personal Information may be shared with third parties, and will be able to prevent the sharing of this information.",
    },
    {
      title: "Is information about me secure?",
      desc: "Your Account information will be protected by a password for your privacy and security. You need to prevent unauthorized access to your Account and Personal Information by selecting and protecting your password appropriately and limiting access to your computer and browser by signing off after you have finished accessing your Account. We seek to protect Account information to ensure that it is kept private; however, we cannot guarantee the security of any Account information. Unauthorized entry or use, hardware or software failure, and other factors, may compromise the security of user information at any time. We otherwise store all of our information, including your IP address information, using industry-standard techniques. We do not guarantee or warrant that such techniques will prevent unauthorized access to information about you that we store, Personal Information or otherwise.",
    },
    {
      title: "What information of mine can I access?",
      desc: "If you are a registered user, you can access information associated with your Account by logging into the Services. Registered and unregistered users can access and delete cookies through their web browser settings. If the personally identifiable information that is on file with us changes, you may correct or update it on our site by making the change on the account information page or by contacting us at support@sekel.tech",
    },
    {
      title: "User Obligations",
      desc: "1. You must, at all times, respect the terms and conditions of the then-current Privacy Policy and the Terms of Service. This includes respecting all intellectual property rights which may belong to third parties. 2. You must not create or otherwise disseminate any information which may be deemed to be injurious, violent, offensive, racist or xenophobic or which may otherwise violate the purpose and spirit of Company and its community of Users. 3. You must not provide information to Company and /or other Users which you believe might be injurious or detrimental to your person, professional or social status. 4. Any violation of these guidelines may lead to the restriction, suspension or termination of your account by Company, as we take these principles seriously and consider them to be the basis on which our Users adhere to the Company Website and the services which it offers.",
    },
    {
      title: "How can I delete my account?",
      desc: "Should you ever decide to delete your Account, you may do so by emailing support@sekel.tech If you terminate your Account, any association between your Account and information we store will no longer be accessible through your Account. However, given the nature of sharing on the Services, any public activity on your Account prior to deletion will remain stored on our servers and will remain accessible to the public. We will retain your information for as long as your account is active or as needed to provide you services. If you wish to cancel your account or request that we no longer use your information to provide you services contact us at support@sekel.tech We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
    },
    {
      title: "What choices do I have regarding my information?",
      desc: "You can use some of the features of the Services without registering, thereby limiting the type of information that we collect.You can always opt not to disclose certain information to us, even though it may be needed to take advantage of some of our features.You can delete your Account. Please note that we will need to verify that you have the authority to delete the Account, and activity generated prior to deletion will remain stored by us and may be publicly accessible.With your consent we may post your testimonial along with your name, if you wish to have the testimonial removed, please contact us.",
    },
    {
      title: "What happens when there are changes to this Privacy Policy? ",
      desc: "We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we collect or use information, we will notify you by posting an announcement on the Site or sending you an email. A user is bound by any changes to the Privacy Policy when he or she uses the Services after such changes have been first posted. In the event there are significant changes in the way we treat your personally identifiable information, we will display a notice on the website or send you an email, as provided for above. If you use Company’ service after notice of changes have been sent to you or published on our site, you hereby provide your consent to the changed practices.",
    },
    {
      title: "What if I have questions or concerns?",
      desc: "If you have any questions or concerns regarding privacy using the Services, please send us a detailed message to support@sekel.tech We will make every effort to resolve your concerns.",
    },
  ];
  return (
    <div className="pt-8 pb-8 lg:pt-20 lg:pb-10 font-mulish">
      <div className="container">
        <div className="space-y-4 pb-4">
          <h2 className="text-2xl font-medium text-secondary not-italic">{`Last Updated: 27 September 2018`}</h2>
          <p className="text-xl text-secondary not-italic ">{` This Privacy Policy describes the policies and procedures of Sekel Tech (India) Private Limited (“we”, “our” or “us”) on the collection, use and disclosure of your personal information on https://sekel.tech (the “Site”) and the services, features, content or applications we offer (collectively with the Site, the “Services”).`}</p>
        </div>
        <div className="space-y-4 pb-4">
          <h1 className="text-2xl font-medium text-secondary not-italic ">{`We receive information about you from various sources, including:`}</h1>
          <ol className="text-xl text-secondary not-italic ">
            <li>{`1. When you register for the Site and the Services, through your user account on the Services (your “Account”)`}</li>
            <li>{`2. Your use of the Services generally and from third party websites and services.`}</li>
          </ol>
        </div>
        <div className="space-y-4 pb-6">
          <h1 className="text-2xl font-medium text-secondary not-italic ">{`We adhere to the following principles to protect your privacy:`}</h1>
          <ol className="text-xl text-secondary not-italic ">
            <li>{`1. We do not rent or sell your personally identifiable information to third parties for any purposes.`}</li>
            <li>{`2. We share your contact information with another User or third party only upon your consent.`}</li>
            <li>{`3. Any personally identifiable information that you provide will be secured with industry standard protocols and technology.`}</li>
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <p className="text-xl text-secondary not-italic ">{`When you use the Services, you are consenting to the collection, transfer, handling, management, storage, disclosure and other uses of your information as described in this Privacy Policy.`}</p>
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            {listData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
