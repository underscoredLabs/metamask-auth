import "./App.css";
import { useState } from "react";
import Onboard from "bnc-onboard";
import Web3 from "web3";

let web3;

const onboard = Onboard({
  dappId: "abfa7356-64c3-4047-a6e1-cdb39a0c691e", // [String] The API key created by step one above
  networkId: 1, // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: (wallet) => {
      web3 = new Web3(wallet.provider);
      console.log(`${wallet.name} is now connected`);
    },
  },
  walletSelect: {
    wallets: [
      { walletName: "metamask", preferred: true, label: "MetaMask - Browser" },
      {
        walletName: "walletConnect",
        infuraKey: "6429a308b4d646399b1ea170bb406c61",
        preferred: true,
        label: "WalletConnect - Mobile",
      },
      { walletName: "torus", preferred: true, label: "Torus - Social" },
    ],
  },
});

function App() {
  const [signedMessage, setSignedMessage] = useState(null);

  const login = async () => {
    try {
      await onboard.walletSelect();
      await onboard.walletCheck();
      setSignedMessage(await signMessage());
    } catch (error) {
      console.log(error);
    }
  };

  const signMessage = async () => {
    const from = (await web3.eth.getAccounts())[0];
    const expiration = Math.round(Date.now() / 1000 + 300).toString();
    const message = `${from}-${expiration}`;
    const signature = await web3.eth.personal.sign(message, from);
    return `Code ${signature}-${message}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <code className="App-signature">{signedMessage}</code>
        <span className="App-button" onClick={login}>
          Select a Wallet
        </span>
        <div className="App-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OngHbKxGmDQ" title="dAppy Doge Auth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
