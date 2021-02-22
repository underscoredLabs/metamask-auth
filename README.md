# Metamask Auth

Passwordless Login to Game Engine

https://underscoredlabs.github.io/metamask-auth


Login Code is broken into 3 parts:
```
1. Signed message
2. Signer address
3. Expiration timestamp

Example: 0xSignedMsg-0xSignerAddr-1614024607

Signing "0xSignerAddr-1614024607" 
will create signed message 
"0xSignedMsg"

Full Example: 0x1843015ad6a2932ab9c12d71557b193bc916cef37fc09002a2178f3c2f5e9b1b0d2cc2ac580fa0c5895dbd8ac357e22d3c4917a01365dbae14805f9fb6b2b9be1b-0x35706484aB20Cbf22F5c7a375D5764DA8166aE1c-1614024607
```

