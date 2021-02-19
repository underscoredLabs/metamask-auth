const signMessage = async () => {
  const from = (await web3.eth.getAccounts())[0];
  const message = Math.round((Date.now() / 1000) + 300).toString();
  const signature = await web3.eth.personal.sign(message, from);
  console.log({ message, signature, from });
  return `${signature}-${message}`;
};
