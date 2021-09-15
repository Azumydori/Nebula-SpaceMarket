import React from "react";
import "../../styles/blockchain.scss";

const NftLearn = () => {
	return (
		<div className="container">
			<h1>What Is a Non-Fungible Token (NFT)?</h1>
			<p>
				Non-fungible tokens or NFTs are cryptographic assets on blockchain with unique identification codes and
				metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or
				exchanged at equivalency. This differs from fungible tokens like cryptocurrencies, which are identical
				to each other and, therefore, can be used as a medium for commercial transactions.
			</p>

			<p className="typo">
				The distinct construction of each NFT has the potential for several use cases. For example, they are an
				ideal vehicle to digitally represent physical assets like real estate and artwork. Because they are
				based on blockchains, NFTs can also be used to remove intermediaries and connect artists with audiences
				or for identity management. NFTs can remove intermediaries, simplify transactions, and create new
				markets.
			</p>

			<p className="typo">
				Much of the current market for NFTs is centered around collectibles, such as digital artwork, sports
				cards, and rarities. Perhaps the most hyped space is NBA Top Shot, a place to collect non-fungible
				tokenized NBA moments in a digital card form. Some of these cards have sold for millions of dollars.
				Recently, Twitter CEO, Jack Dorsey, tweeted a link to a tokenized version of the first tweet ever
				written where he wrote just setting up my twttr. The NFT version of the first-ever tweet has already
				been bid up to $2.5 million.
			</p>

			<div className="typo">
				<h2>Understanding NFTs</h2>
				<p>
					Like physical money, cryptocurrencies are fungible i.e., they can be traded or exchanged, one for
					another. For example, one Bitcoin is always equal in value to another Bitcoin. Similarly, a single
					unit of Ether is always equal to another unit. This fungibility characteristic makes
					cryptocurrencies suitable for use as a secure medium of transaction in the digital economy.
				</p>
			</div>

			<p className="typo">
				NFTs shift the crypto paradigm by making each token unique and irreplaceable, thereby making it
				impossible for one non-fungible token to be equal to another. They are digital representations of assets
				and have been likened to digital passports because each token contains a unique, non-transferable
				identity to distinguish it from other tokens. They are also extensible, meaning you can combine one NFT
				with another to breed a third, unique NFT.{" "}
			</p>

			<p className="typo">
				Just like Bitcoin, NFTs also contain ownership details for easy identification and transfer between
				token holders. Owners can also add metadata or attributes pertaining to the asset in NFTs. For example,
				tokens representing coffee beans can be classified as fair trade. Or, artists can sign their digital
				artwork with their own signature in the metadata.{" "}
			</p>

			<p className="typo">
				NFTs evolved from the ERC-721 standard. Developed by some of the same people responsible for the ERC-20
				smart contract, ERC-721 defines the minimum interface – ownership details, security, and metadata –
				required for exchange and distribution of gaming tokens. The ERC-1155 standard takes the concept further
				by reducing the transaction and storage costs required for NFTs and batching multiple types of
				non-fungible tokens into a single contract.
			</p>

			<p className="typo">
				NFTs evolved from the ERC-721 standard. Developed by some of the same people responsible for the ERC-20
				smart contract, ERC-721 defines the minimum interface – ownership details, security, and metadata –
				required for exchange and distribution of gaming tokens. The ERC-1155 standard takes the concept further
				by reducing the transaction and storage costs required for NFTs and batching multiple types of
				non-fungible tokens into a single contract.
			</p>

			<p className="typo">
				While the cryptokitties use case may sound trivial, succeeding ones have more serious business
				implications. For example, NFTs have been used in private equity transactions as well as real estate
				deals. One of the implications of enabling multiple types of tokens in a contract is the ability to
				provide escrow for different types of NFTs, from artwork to real estate, into a single financial
				transaction.{" "}
			</p>
		</div>
	);
};

export default NftLearn;
