const NFTs = [];

function mintNFT(_name, _zodiacSign, _birthDay, _birthMonth) {
    
	const NFT = {
		"name": _name,
		"zodiacSign": _zodiacSign,
		"birthDay": _birthDay,
		"birthMonth": _birthMonth
	};
	NFTs.push(NFT);
	console.log("Minted: " + _name);
}

function listNFTs() {
	for (let i = 0; i < NFTs.length; i++) {
		console.log("\nname: " + NFTs[i].name);
		console.log("zodiacSign: " + NFTs[i].zodiacSign);
		console.log("birthDay: " + NFTs[i].birthDay);
		console.log("birthMonth: " + NFTs[i].birthMonth);
	}
}

function getTotalSupply() {
	console.log("Total Supply: " + NFTs.length);
}

mintNFT("Gen", "Taurus", "20", "May");
mintNFT("John", "Gemini", "21", "May");
mintNFT("Genesis", "Sagittarius", "23", "November");
mintNFT("Joshua", "Aries", "1", "April");
listNFTs();
console.log("\n");
getTotalSupply();
