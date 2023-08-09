import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";

function CreateNFT() {
  const contractAddress =
    "0x6a785ab693f97fcedc3fb69566fdbf252992fbaa93d3a918e5a6b42b771ee95a";
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  async function uploadToIPFS() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      console.log("url", url);
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <form>
          <input
            placeholder="Asset Name"
            className="mt-8 border rounded p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
          />
          <textarea
            placeholder="Asset Description"
            className="mt-2 border rounded p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, description: e.target.value })
            }
          />
          <input
            placeholder="Asset Price in Eth"
            className="mt-2 border rounded p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, price: e.target.value })
            }
          />
          <input
            type="file"
            name="Asset"
            className="my-4"
            onChange={uploadToIPFS}
          />
          {fileUrl && (
            <img
              className="rounded mt-4"
              width="350"
              src={fileUrl}
              alt="imag"
            />
          )}
          <button className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
            Create NFT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNFT;
