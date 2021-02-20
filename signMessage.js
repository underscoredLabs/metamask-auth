const signMessage = async () => {
  const from = (await web3.eth.getAccounts())[0];
  const message = Math.round(Date.now() / 1000 + 300).toString();
  const signature = await web3.eth.personal.sign(message, from);
  console.log({ message, signature, from });
  const signedMessage = `${signature}-${message}`;
  const html = `
    <h1>Login Code:</h1>
    <code style="word-wrap: break-word;">${signedMessage}</code>
  `;
  document.getElementById("app").innerHTML = html;
};
