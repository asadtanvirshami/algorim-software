import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="px-4 py-8 mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        We are fully committed to meeting the GDPR and CCPA standards with
        reference to your privacy and security rights.
      </p>
      <p className="mb-4">
        <strong>Algorim Inc.</strong> (“the Company”) has created this Privacy
        Policy in accordance with our commitment to respecting and protecting
        your privacy. It explains how the Company collects, uses, and discloses
        personal information of people who visit the Algorim website defined
        below (“Sites”).
      </p>
      <p className="mb-4">
        The Privacy Policy applies to the use of all Company websites and
        subdomains, including Algorim.com.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Compliance</h2>
      <p className="mb-4">
        By accessing the Sites, you agree to the terms of our Privacy Policy
        outlined below. If you do not agree to the terms of this Policy, please
        do not access or use any of the Sites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Collection</h2>
      <p className="mb-4">
        When you use the Sites, we collect the following information in order to
        provide you with better services:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Your name</li>
        <li>Your email</li>
        <li>Your phone number</li>
      </ul>
      <p className="mb-4">
        We do not collect Personal Information from your visit to our Sites
        unless you intentionally send it to us via the Contact Form and give us
        your explicit consent. In this case, we collect the Personal Information
        identified above to respond to your query and send you emails for
        promotional or informational purposes. Should you wish not to receive
        such emails, the option to unsubscribe will be included in the message.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Usage Data Collection</h2>
      <p className="mb-4">
        We may also collect information on how the Sites are accessed and used
        by you (“Usage Data”). This data may include the date and time of your
        visit, the pages of the Sites that you visit, time spent on those pages,
        number of clicks, domain name, and location information (country/state),
        and other statistics.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Tracking and Cookies Data</h2>
      <p className="mb-4">
        Cookies are small files that can be stored on your computer or device
        when you browse our Sites.
      </p>
      <p className="mb-4">
        The Company uses cookies and similar tracking technologies on the Sites
        to collect information in order to provide better services to our users,
        in particular, improve user experience and website navigation. We also
        use cookies to analyze how users interact with our Sites. Examples of
        cookies we use:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Session cookies</li>
        <li>Security cookies to protect your data security</li>
      </ul>
      <p className="mb-4">
        You can configure your browser to accept or reject cookies. If you
        reject our cookies, we will not collect any of your Personal Data. By
        rejecting cookies, you may still use our Sites, but some functionality
        may be restricted.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Use of Data</h2>
      <p className="mb-4">
        The Company processes data we collect on our servers both within and
        outside of the United States of America. Any information collected by
        the Company will be processed in compliance with this Privacy Policy for
        the purposes of making better business decisions, supporting the Sites
        activities that users choose to engage with, improving visitors’ user
        experience, providing higher quality solutions and services to our
        customers, providing subscriptions, newsletters, promotional and
        informational messages to our users if they permitted such use,
        conducting customer satisfaction surveys, or in connection with certain
        transactions or job applications.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Retention</h2>
      <p className="mb-4">
        The Company will retain your Personal Data only for as long as is
        necessary for the purposes set out in this Privacy Policy. Your Personal
        Data may be used to the extent necessary to comply with the Company’s
        legal obligations (laws), resolve disputes, and enforce legal
        agreements. Your Usage Data will be retained for internal analysis
        purposes.
      </p>

      {/* More sections can be added as needed, following the format above */}

      <h2 className="text-xl font-semibold mt-6 mb-2">GDPR Rights</h2>
      <p className="mb-4">
        If your personal information is protected under EU laws, GDPR gives you
        various rights in connection with our processing of your Personal Data.
      </p>
      <p className="mb-4">
        You can correct, update, or delete inaccuracies to your information by
        contacting us at any time. We will handle your request promptly.
      </p>
    </div>
  );
};

export default Page;
