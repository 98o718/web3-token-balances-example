import Web3 from 'web3';

import ERC20ABI from './abi-erc20.json';

const web3 = new Web3(window.web3.currentProvider);

window.ethereum.enable();

(async () => {
	// Get wallet balance
	const accounts = await web3.eth.getAccounts();
	console.log('accounts', accounts);
	const walletBalance = await web3.eth.getBalance(accounts[0]);
	console.log('walletBalance', walletBalance);

	// Get token balance
	const tokenAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'; // BUSD on BSC

	const contract = new web3.eth.Contract(ERC20ABI, tokenAddress, {
		from: web3.eth.defaultAccount,
	});

	const tokenBalance = await contract.methods.balanceOf(accounts[0]).call();
	console.log('tokenBalance', tokenBalance);
})();
