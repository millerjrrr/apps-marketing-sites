const PrivacyPolicyPage = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="inner-container opening-banner overflow-x-hidden rounded-[30px] bg-[var(--secondary)] shadow-[0_0_10px_0_rgba(255,255,255,0.9)] md:overflow-x-visible">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>
          <p className="pb-5 pl-10">Effective Date: December 8, 2024</p>

          <p>
            This privacy policy explains how Griddier handles your personal
            data.
          </p>
          <div className="h-3" />
          <p>
            <strong>1. Data Storage</strong>
          </p>
          <p>
            Griddier stores all user data locally on your device. No personal or
            usage data is collected, transmitted, or stored on any server.
          </p>
          <div className="h-3" />
          <p>
            <strong>2. No Data Transmission</strong>
          </p>
          <p>
            Your data remains on your device only. The app does not send any
            information over the internet or to any third party.
          </p>
          <div className="h-3" />
          <p>
            <strong>3. Developer Access</strong>
          </p>
          <p>
            The developers of Griddier have no access to your data since it
            never leaves your device.
          </p>
          <div className="h-3" />
          <p>
            <strong>4. Data Security</strong>
          </p>
          <p>
            While we take care to keep your data secure within the app, we
            recommend securing your device with a password or biometric lock to
            protect your information.
          </p>
          <div className="h-3" />
          <p>
            <strong>5. User Control</strong>
          </p>
          <p>
            You have full control over your data. You can delete or reset your
            data at any time within the app.
          </p>
          <div className="h-3" />
          <p>
            <strong>6. Contact</strong>
          </p>
          <p>
            If you have any questions or concerns regarding this privacy policy,
            please contact me at millerjr@tcd.ie
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
