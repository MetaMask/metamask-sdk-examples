import './style.css'
import javascriptLogo from './javascript.svg'
import metamaskLogo from './mm-fox.svg'

import { MetaMaskSDK } from "@metamask/sdk"

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "MetaMask SDK JavaScript Quickstart",
    url: window.location.href,
    // iconUrl: "https://mydapp.com/icon.png" // Optional
  },
  infuraAPIKey: import.meta.env.VITE_INFURA_API_KEY,
})

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://metamask.io" target="_blank">
      <img src="${metamaskLogo}" class="logo" alt="MetaMask logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>MetaMask SDK JavaScript Quickstart</h1>
    <div class="card">
      <button id="connectButton" type="button">Connect Wallet</button>
      <button id="disconnectButton" type="button">Disconnect Wallet</button>
    </div>
    <div class="card" id="accountInfo">
    </div>
    <p class="read-the-docs">
      SDK Documentation: <a class="underline" href="https://docs.metamask.io/sdk/connect/javascript" target="_blank">https://docs.metamask.io/sdk/quickstarts/javascript</a>
    </p>
    <footer>
      <a
        href="https://github.com/MetaMask/metamask-sdk-examples/tree/main/quickstarts/javascript"
        target="_blank"
        class="source-code-link"
      >
        Source code
      </a>
    </footer>
  </div>
`

const connectButton = document.querySelector('#connectButton')
const disconnectButton = document.querySelector('#disconnectButton')
const accountInfo = document.querySelector('#accountInfo')

// Initially hide disconnect button
disconnectButton.style.display = 'none'

// Function to update button visibility
const updateButtonVisibility = (isConnected) => {
  connectButton.style.display = isConnected ? 'none' : 'block'
  disconnectButton.style.display = isConnected ? 'block' : 'none'
}

connectButton.addEventListener('click', async () => {
  try {
    const accounts = await MMSDK.connect()
    console.log(accounts)
    accountInfo.innerHTML = `
      <p>Account: ${accounts[0]}</p>
    `
    updateButtonVisibility(true)
  } catch (error) {
    console.error(error)
  }
})

disconnectButton.addEventListener('click', async () => {
  try {
    await MMSDK.terminate()
    accountInfo.innerHTML = ''
    updateButtonVisibility(false)
  } catch (error) {
    console.error(error)
  }
})