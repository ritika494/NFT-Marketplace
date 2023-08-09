import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import "./Header.css";
import { ethers } from "ethers";
import axios from "../Axios";

function Header() {
  var accountNumber = "";

  async function connectMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []).then(async (res) => {
      console.log("res", res);
      accountNumber = res[0];
      console.log(typeof accountNumber);
      console.log("broo", accountNumber);
    });
  }

  async function getBalance(accountNumber) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage(accountNumber);
    console.log("account is", accountNumber);
    const res = await axios.get("/signedInUserBalance", {
      params: { accountN: accountNumber, sign: signature },
    });
    console.log(res);
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src="bobble.png" height={50} width={140} alt="logo" />
        </div>
      </Link>
      <div>
        <div className="search">
          <input placeholder="Search items, collections, and accounts" />
          <div>
            <AiOutlineSearch className="searchicon" size={25} />
          </div>
        </div>
      </div>
      <div>
        <div className="header-elements">
          <div className="header-element">
            {true ? (
              <MdOutlineAccountBalanceWallet
                size={30}
                onClick={() => {
                  connectMetamask();
                }}
              />
            ) : (
              <button>Connected</button>
            )}
          </div>
          <div className="header-element">
            <CgProfile
              size={30}
              onClick={() => {
                getBalance(accountNumber);
              }}
            />
          </div>
          <Link to="/create" className="header-element">
            <div> Create </div>
          </Link>
          <Link to="/collections" className="header-element">
            <div> Collections </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
