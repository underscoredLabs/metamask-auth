function handleLogin() {
  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    window.ethereum.on("accountsChanged", function (accounts) {
      location.reload();
    });
  } else {
    const html = `
      <h1>No Metamask</h1>
      <hr>
      <img class="signButton" src="./images/install.png" onclick="location.href='https://metamask.io'">
    `;
    document.getElementById("app").innerHTML = html;
  }
}
