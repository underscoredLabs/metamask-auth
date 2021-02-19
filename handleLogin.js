function handleLogin() {
  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();

    window.ethereum.on("accountsChanged", function (accounts) {
      location.reload();
    });

    return true;
  } else {
    const html = `
      <h1>No Metamask</h1>
      <hr>
      <button onclick="location.href='https://metamask.io';"> Install </button>
    `;
    document.getElementById("app").innerHTML = html;
    return false;
  }
}
