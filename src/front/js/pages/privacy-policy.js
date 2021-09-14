import React from "react";

import "../../styles/privacy-policy.scss";

const PrivacyPolicy = () => {
	return (
		<div className="container d-flex flex-column justify-content-center">
			<div>
				<h1 className="text-center">
					<strong>Nebula Privacy Policy</strong>
				</h1>
				<p>
					This Privacy Notice describes how Nebula collects and processes your personal information through
					the Nebula websites and applications that reference this Privacy Notice.  “Nebula” refers to an
					ecosystem comprising Nebula websites (whose domain names include but are not limited to
					www.nebula.com/es ), mobile applications, clients, applets and other applications that are developed
					to offer Nebula Services, and includes independently-operated platforms, websites and clients within
					the ecosystem (e.g., Nebula Open Platform, Nebula Launchpad, Nebula Labs, Nebula Charity, Nebula
					DEX, Nebula X, JEX, Trust Wallet, and fiat gateways).  “Nebula Operators” refer to all parties that
					run Nebula, including but not limited to legal persons, unincorporated organizations and teams that
					provide Nebula Services and are responsible for such services. “Nebula” as used in this Notice
					includes Nebula Operators. This Privacy Notice applies to all platforms, websites, and departments
					of Nebula and Nebula Operators.  By using Nebula Services, you are consenting to the collection,
					storage, processing and transfer of your personal information as described in this Privacy Notice.
				</p>
			</div>

			<div className="privacy-question">
				<h2>1. What Personal Information About Users Does Nebula Collect?</h2>
				<p>
					Nebula collects your personal information in order to provide and continually improve our products
					and services. Here are the types of personal information we collect: Information you give us: we
					receive and store any information you provide in relation to Nebula. You can choose not to provide
					certain information but then you might not be able to use some Nebula Services.  Examples of
					information that you give us include:
				</p>
				<ul>
					<li>email address</li>
					<li>name</li>
					<li>gender</li>
					<li>date of birth</li>
					<li>home address</li>
					<li>nationality</li>
					<li>country code</li>
					<li>other information to help us identify you</li>
				</ul>

				<p>
					Automatically Collected information: we automatically collect and store certain types of information
					about your use of Nebula Services including your interaction with content and services available
					through Nebula Services. Like many websites, we use cookies and other unique identifiers and we
					obtain certain types of information when your web browser or device accesses Nebula Services.
					Examples of the information we collect and analyse include:
				</p>
				<ul>
					<li>the Internet protocol (IP) address used to connect your computer to the Internet</li>
					<li>login, e-mail address, password and location of your device or computer</li>
					<li>
						Nebula Services metrics (e.g., the occurrences of technical errors, your interactions with
						service features and content, and your settings preferences)
					</li>
					<li>version and time zone settings</li>
					<li>transaction history</li>
				</ul>
				<p>
					Information from other sources: we may receive information about you from other sources such as
					credit history information from credit bureaus, which we use to help prevent and detect fraud.
				</p>
			</div>

			<div className="privacy-question">
				<h2>2. Can Children Use Nebula Services?</h2>
				<p>Nebula does not allow anyone under the age of 18 to use Nebula Services.</p>
			</div>

			<div className="privacy-question">
				<h2>3. For What Purposes Does Nebula Process My Personal Information?</h2>
				<p>
					We process your personal information to operate, provide, and improve the Nebula Services that we
					offer our users. These purposes include:
				</p>
				<ul>
					<li>
						Transaction services. We use your personal information to take and handle orders, process
						payments, and communicate with you about orders and services, and promotional offers.
					</li>
					<li>
						Provide, troubleshoot, and improve Nebula Services. We use your personal information to provide
						functionality, analyse performance, fix errors, and improve the usability and effectiveness of
						Nebula Services.
					</li>
					<li>
						Recommendations and personalisation. We use your personal information to recommend features and
						services that might be of interest to you, identify your preferences, and personalise your
						experience with Nebula Services.
					</li>
					<li>
						Comply with legal obligations. In certain cases, we collect and use your personal information to
						comply with laws and regulations. For instance, we collect bank account information for identity
						verification and other purposes.
					</li>
					<li>
						Communicate with you. We use your personal information to communicate with you in relation to
						Nebula Services.
					</li>
					<li>
						Fraud prevention and credit risks. We process personal information to prevent and detect fraud
						and abuse in order to protect the security of our users, Nebula Services and others. We may also
						use scoring methods to assess and manage credit risks.
					</li>
					<li>
						Purposes for which we seek your consent. We may also ask for your consent to process your
						personal information for a specific purpose that we communicate to you. When you consent to our
						processing your personal information for a specified purpose, you may withdraw your consent at
						any time and we will stop processing of your data for that purpose.
					</li>
				</ul>
			</div>

			<div className="privacy-question">
				<h2>4. What About Cookies and Other Identifiers?</h2>
				<p>
					We use cookies and similar tools to enhance your user experience, provide our services, and
					understandhow customers use our services so we can make improvements. To enable our systems to
					recognise your browser or device and to provide Nebula Services to you, we use cookies. We use
					operational cookies and similar tools (collectively, cookies) to provide our services, for example:
				</p>
				<ul>
					<li>Recognising you when you sign-in to use our services.</li>
					<li>Providing customised features and services.</li>
					<li>
						Displaying features and services which might be of interest to you, including ads on our
						services.
					</li>
					<li>Preventing fraudulent activity.</li>
					<li>Improving security.</li>
					<li>Keeping track of your preferences such as currency and language.</li>
					<li>We also use cookies to understand how users use our services so we can make improvements.</li>
				</ul>
				<p>
					The settings on your browser will tell you how to prevent your browser from accepting new cookies,
					how to have the browser notify you when you receive a new cookie, how to disable and remove cookies,
					and when cookies will expire. Operational cookies allow you to take advantage of some of Nebulas
					essential features. If you block or otherwise reject operational cookies through your browser
					settings some features and services may not work.
				</p>

				<h2>5. Does Nebula Share My Personal Information?</h2>
				<p>
					Information about our users is an important part of our business and we are not in the business of
					selling our users personal information to others.
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
