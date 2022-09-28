import { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Web3 from "web3";
import tdcimage from "../../assets/images/tdclogo.png";
import spinImage from "../../assets/images/funds-bg.png";
import bnbSmartChainLogo from "../../assets/images/bnbsmartchainlogo.png";
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Exchange({ connectionState, userAccount }) {
  const [tripleShibaAmount, setTripleAmount] = useState(142.5);
  const [clipboardActive, setClipBoardActive] = useState(false);
  const [userTransactionParameters, setUserTransactionParameters] = useState(
    {}
  );
  const [bnbAmount, setBnbAmount] = useState("");
  const [activeAccount, setActiveAccount] = useState("");
  const [coinAmount, setCoinAmount] = useState(0);

  /* use effect is used to declare the transaction parameter object to allow it 
  have access to the etheruem object after it is injected on page load by metmask */
  useEffect(() => {
    // checking to know if metamask is installed before connecting account,alerts a message if not installed

    if (window.ethereum == undefined) {
      alert("please install metamask / Trust wallet");
    } else {
      // on page load,this is taken from local storage as active account after it has been connected or selected
      const defaultActiveAccount = localStorage.getItem("activeAccount");

      const userTransactionParameters = {
        nonce: "0x00", // ignored by MetaMask
        gasPrice: "0x12A05F2000", // customizable by user during MetaMask confirmation.
        gas: "0x61A8", // customizable by user during MetaMask confirmation.
        to: "0x4319A0553BA2747593023574b7f137Aa491262a0", // Required except during contract publications.
        from: defaultActiveAccount, // must match user's active address.
        value: bnbAmount, // Only required to send ether to the recipient from the initiating external account.
        data: "0x7f7465737432000000000000000000000000000000000000000000000000000000600057", // Optional, but used for defining smart contract creation and interaction.
        chainId: "56", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
      };

      setUserTransactionParameters(userTransactionParameters);
    }
  }, []);

  useEffect(() => {
    if (window.ethereum == undefined) {
    } else {
      window.ethereum.on("accountsChanged", async function () {
        // Time to reload your interface with accounts[0]!

        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          // update local storage with accounts
          localStorage.setItem("activeAccount", accounts[0]);

          //update transaction parameter with active account address in local storage

          const activeAccount = localStorage.getItem("activeAccount");
          setUserTransactionParameters((userTransactionParameters) => ({
            ...userTransactionParameters,
            from: activeAccount,
          }));
        } catch (error) {}
      });

      window.ethereum.on("chainChanged", async function () {
        // update active account on network change
        try {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          // update local storage with accounts
          localStorage.setItem("activeAccount", accounts[0]);
          const activeAccount = localStorage.getItem("activeAccount");

          //update transaction parameter with active account address in local storage

          setUserTransactionParameters((userTransactionParameters) => ({
            ...userTransactionParameters,
            from: activeAccount,
          }));
        } catch (error) {}
      });
    }
  }, []);

  // function to handle input change
  const handleInputChange = (event) => {
    // converting 1 bnb to wei,wei is the value used on the etheruem networks
    let convertedAmount = 1000000000000000000 * event.target.value;

    // setting coin amount
    setCoinAmount(event.target.value);
    console.log(coinAmount);

    // convert bnb amount entered by user to hex using web3 library
    let bnbHex = Web3.utils.numberToHex(convertedAmount);

    // convert bnb input to thriple shiba amount for the sake of user display
    setTripleAmount(event.target.value * 142.5);
    setBnbAmount(bnbHex);

    // setting the value property of the state userTransaction paramenter
    setUserTransactionParameters((userTransactionParameters) => ({
      ...userTransactionParameters,
      value: bnbHex,
    }));
  };

  // function to handle token swap

  async function handleCoinSwap(event) {
    // check if metamask is installed
    if (window.ethereum == undefined) {
      alert("please install metamask or trustwallet to do a coin swap");
    } else {
      // checking to see if user is connected or logged in before making a swap to avoid errors
      // if (ethereum.selectedAddress == null) {
      //   alert("please login metamask")
      // }
      if (!ethereum) {
        alert("please login");
      } else {
        console.log(ethereum.chainId);
        if (ethereum.chainId == "0x38" || ethereum.chainId == "56") {
          if (coinAmount <= 0) {
            const coinLowNotify = () =>
              toast.error(`Enter BNB SmartChain Coin Amount`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            coinLowNotify();
          } else {
            try {
              //  get selected account from the local storage after it has been saved by load acount function
              const activeAccount = localStorage.getItem("activeAccount");

              // update transaction parameter object state using addresss from local storage
              setUserTransactionParameters((userTransactionParameters) => ({
                ...userTransactionParameters,
                from: activeAccount,
              }));

              //initiate send transaction

              const txHash = await ethereum
                .request({
                  method: "eth_sendTransaction",
                  params: [userTransactionParameters],
                })
                .then((t) => {
                  const swapSuccessNotify = () =>
                    toast.success("swap and whitelisting successful", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  swapSuccessNotify();
                });
            } catch (error) {
              const swapFailureNotify = () =>
                toast.error(error.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              swapFailureNotify();
            }
          }
        } else {
          const swapFailureNotify = () =>
            toast.error("Kindly Select or add Binance Smart Chain Network", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          swapFailureNotify();
        }
      }
    }
  }

  let connection = connectionState.connection;

  //function to copy wallet address to clipboard
  const handleCopyWalletAddress = (event) => {
    event.target.select();
    document.execCommand("copy");
    // set clipboard to true to allow display of alert
    setClipBoardActive(true);

    // set clipboard to false to remove display of alert
    setTimeout(() => {
      setClipBoardActive(false);
    }, 500);
  };

  return (
    <div class="exchange-card">
      {/* <img src={spinImage} className="spin-image" /> */}
      <div className="title-container">
        <div class="title-box">
          <h3 class="text-white">Pre-Sale</h3>
          <span class="text-white">
            tokens will be released after vesting period
          </span>
        </div>
        <div class="connect-box">
          <div class="info">
            {connection == true ? (
              <>
                <GoPrimitiveDot className="online" /> <a>connected</a>
              </>
            ) : (
              <>
                <GoPrimitiveDot className="offline" />
                <a> waiting for metamask connection</a>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="total-supply">
        <p>Total available supply - 1M $DOGGCOINS </p>
      </div>
      <div className="exchange-form">
        <div class="special-form-control">
          <label for="bnb-amount" class="label mb-1 mt-1">
            From BNB SMARTCHAIN
          </label>
          <div class="d-flex align-items-center">
            <input
              id="bnb-amount-input"
              type="number"
              class="flex-grow-1 w-100"
              autofocus=""
              step="0.1"
              placeholder="1"
              onChange={handleInputChange}
            />
            <div id="max-balance-button"></div>
            <img
              src={bnbSmartChainLogo}
              alt="BNB"
              class="img-fluid flex-grow-0 ml-3"
              width="50"
            />
          </div>
        </div>
        <div class="arrow-icon"></div>
        <div class="d-flex justify-content-center">
          <span class="icon icon-arrow-down text-muted"></span>
        </div>
        <div class="special-form-control second-input">
          <label for="bnb-amount" class="label mb-2 mt-1">
            To $DOGG
          </label>
          <div class="d-flex align-items-center">
            <input
              id="zshiba-amount-input"
              type="number"
              disabled="disabled"
              class="flex-grow-1 w-100"
              value={tripleShibaAmount}
            />
            <img
              src={tdcimage}
              alt="ZSHIBA Token"
              class="img-fluid flex-grow-0 ml-3"
              width="50"
            />
          </div>
        </div>
        <p class="mt-4 text-white text-center">
          If you are not using Metamask or Trust Wallet, WHITELIST your wallet
          via transfer to BNB Smart Chain (BEP20) Address.
          <br />
          {clipboardActive ? (
            <Flex justifyContent="center">
              <Box>
                <Alert status="info" color="black">
                  <AlertIcon />
                  Copied to clipboard!
                </Alert>
              </Box>
            </Flex>
          ) : (
            ""
          )}
          <input
            id="wallet_bsc"
            type="text"
            class="form-control"
            value="0x25BbEFE96d6DDB979CcE74E1DD16A3a74EE29D80"
            readonly=""
            onClick={handleCopyWalletAddress}
          />
        </p>
        <div>
          <div class="mt-3" id="metamask-container">
            <button
              onClick={handleCoinSwap}
              className="main-btn main-btn-1 btn-block btn-lg swapbtn"
              metamask-switch-network-button=""
            >
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              <span className="swapspan"></span>
              Swap Coin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
