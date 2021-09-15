import React from "react";
import "../../styles/blockchain.scss";

const Blockchain = () => {
	return (
		<div className="container d-flex flex-column justify-content-center">
			<div>
				<h1>Blockchain Explained</h1>
				<p>
					If you have been following banking, investing, or cryptocurrency over the last ten years, you may
					have heard the term blockchain, the record-keeping technology behind the Bitcoin network.{" "}
				</p>
			</div>

			<div className="typo">
				<h2>What is Blockchain?</h2>
				<p>
					Blockchain seems complicated, and it definitely can be, but its core concept is really quite simple.
					A blockchain is a type of database. To be able to understand blockchain, it helps to first
					understand what a database actually is. A database is a collection of information that is stored
					electronically on a computer system. Information, or data, in databases is typically structured in
					table format to allow for easier searching and filtering for specific information. Large databases
					achieve this by housing data on servers that are made of powerful computers. These servers can
					sometimes be built using hundreds or thousands of computers in order to have the computational power
					and storage capacity necessary for many users to access the database simultaneously. While a
					spreadsheet or database may be accessible to any number of people, it is often owned by a business
					and managed by an appointed individual that has complete control over how it works and the data
					within it. So how does a blockchain differ from a database?
				</p>
			</div>

			<div className="typo">
				<h2>Storage Structure</h2>
				<p>
					One key difference between a typical database and a blockchain is the way the data is structured. A
					blockchain collects information together in groups, also known as blocks, that hold sets of
					information. Blocks have certain storage capacities and, when filled, are chained onto the
					previously filled block, forming a chain of data known as the blockchain. All new information that
					follows that freshly added block is compiled into a newly formed block that will then also be added
					to the chain once filled. This makes it so that all blockchains are databases but not all databases
					are blockchains. This system also inherently makes an irreversible timeline of data when implemented
					in a decentralized nature. When a block is filled it is set in stone and becomes a part of this
					timeline. Each block in the chain is given an exact timestamp when it is added to the chain.{" "}
				</p>
			</div>

			<div className="typo">
				<h2>Advantages of Blockchain</h2>
				<h3>Accuracy of the Chain</h3>
				<p>
					Transactions on the blockchain network are approved by a network of thousands of computers. This
					removes almost all human involvement in the verification process, resulting in less human error and
					an accurate record of information. Even if a computer on the network were to make a computational
					mistake, the error would only be made to one copy of the blockchain. In order for that error to
					spread to the rest of the blockchain, it would need to be made by at least 51% of the network’s
					computers—a near impossibility for a large and growing network the size of Bitcoins.
				</p>
				<h3>Cost Reductions</h3>
				<p>
					Typically, consumers pay a bank to verify a transaction, a notary to sign a document, or a minister
					to perform a marriage. Blockchain eliminates the need for third-party verification and, with it,
					their associated costs. Business owners incur a small fee whenever they accept payments using credit
					cards, for example, because banks and payment processing companies have to process those
					transactions. Bitcoin, on the other hand, does not have a central authority and has limited
					transaction fees.
				</p>
				<h3>Decentralization</h3>
				<p>
					Blockchain does not store any of its information in a central location. Instead, the blockchain is
					copied and spread across a network of computers. Whenever a new block is added to the blockchain,
					every computer on the network updates its blockchain to reflect the change. By spreading that
					information across a network, rather than storing it in one central database, blockchain becomes
					more difficult to tamper with. If a copy of the blockchain fell into the hands of a hacker, only a
					single copy of the information, rather than the entire network, would be compromised.
				</p>
				<h3>Efficient Transactions</h3>
				<p>
					Transactions placed through a central authority can take up to a few days to settle. If you attempt
					to deposit a check on Friday evening, for example, you may not actually see funds in your account
					until Monday morning. Whereas financial institutions operate during business hours, five days a
					week, blockchain is working 24 hours a day, seven days a week, and 365 days a year. Transactions can
					be completed in as little as ten minutes and can be considered secure after just a few hours. This
					is particularly useful for cross-border trades, which usually take much longer because of time-zone
					issues and the fact that all parties must confirm payment processing.
				</p>
				<h3>Private Transactions</h3>
				<p>
					Many blockchain networks operate as public databases, meaning that anyone with an internet
					connection can view a list of the network’s transaction history. Although users can access details
					about transactions, they cannot access identifying information about the users making those
					transactions. It is a common misperception that blockchain networks like bitcoin are anonymous, when
					in fact they are only confidential. That is, when a user makes public transactions, their unique
					code called a public key, is recorded on the blockchain, rather than their personal information. If
					a person has made a Bitcoin purchase on an exchange that requires identification then the persons
					identity is still linked to their blockchain address, but a transaction, even when tied to a persons
					name, does not reveal any personal information.
				</p>
				<h3>Secure Transactions</h3>
				<p>
					Once a transaction is recorded, its authenticity must be verified by the blockchain network.
					Thousands of computers on the blockchain rush to confirm that the details of the purchase are
					correct. After a computer has validated the transaction, it is added to the blockchain block. Each
					block on the blockchain contains its own unique hash, along with the unique hash of the block before
					it. When the information on a block is edited in any way, that blocks hashcode changes—however, the
					hash code on the block after it would not. This discrepancy makes it extremely difficult for
					information on the blockchain to be changed without notice.
				</p>
				<h3>Transparency</h3>
				<p>
					Most blockchains are entirely open-source software. This means that anyone and everyone can view its
					code. This gives auditors the ability to review cryptocurrencies like Bitcoin for security. This
					also means that there is no real authority on who controls Bitcoin’s code or how it is edited.
					Because of this, anyone can suggest changes or upgrades to the system. If a majority of the network
					users agree that the new version of the code with the upgrade is sound and worthwhile then Bitcoin
					can be updated.
				</p>
				<h3>Banking the Unbanked</h3>
				<p>
					Perhaps the most profound facet of blockchain and Bitcoin is the ability for anyone, regardless of
					ethnicity, gender, or cultural background, to use it. According to the world bank there are nearly 2
					billion adults that do not have bank accounts or any means of storing their money or wealth. Nearly
					all of these individuals live in developing countries where the economy is in its infancy and
					entirely dependent on cash. These people often earn little money that is paid in physical cash. They
					then need to store this physical cash in hidden locations in their homes or places of living leaving
					them subject to robbery or unnecessary violence. Keys to a bitcoin wallet can be stored on a piece
					of paper, a cheap cell phone, or even memorized if necessary. For most people, it is likely that
					these options are more easily hidden than a small pile of cash under a mattress. Blockchains of the
					future are also looking for solutions to not only be a unit of account for wealth storage, but also
					to store medical records, property rights, and a variety of other legal contracts.
				</p>
			</div>

			<div className="typo">
				<h2>What is Next for Blockchain?</h2>
				<p>
					First proposed as a research project in 1991, blockchain is comfortably settling into its late
					twenties. Like most millennials its age, blockchain has seen its fair share of public scrutiny over
					the last two decades, with businesses around the world speculating about what the technology is
					capable of and where it’s headed in the years to come. With many practical applications for the
					technology already being implemented and explored, blockchain is finally making a name for itself at
					age twenty-seven, in no small part because of bitcoin and cryptocurrency. As a buzzword on the
					tongue of every investor in the nation, blockchain stands to make business and government operations
					more accurate, efficient, secure, and cheap with fewer middlemen.
				</p>
			</div>
		</div>
	);
};

export default Blockchain;
