import axios from "axios";
import FormData from "form-data";

import { IN_REVIEW } from "./types";

export const pinToIPFS = async ({ file, profile, artMeta }) => {
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  try {
    let data = new FormData();
    data.append("file", file);
    const metadata = JSON.stringify({
      name: "randomName",
      keyvalues: {
        isReviewed: "false",
        wildcards: "art",
        userName: `${profile.name}`,
        proofDid: `${profile.proof_did}`,
        artName: `${artMeta.artName}`,
        authorComment: `${artMeta.authorComment}`,
        fileName: `${file.name}`,
        status: IN_REVIEW,
      },
    });
    data.append("pinataMetadata", metadata);
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
      customPinPolicy: {
        regions: [
          {
            id: "FRA1",
            desiredReplicationCount: 2,
          },
          {
            id: "NYC1",
            desiredReplicationCount: 2,
          },
        ],
      },
    });
    data.append("pinataOptions", pinataOptions);
    const headers = {
      pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
      pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY,
    };
    const resp = await axios.post(url, data, { headers });
    return resp;
  } catch (error) {
    console.log("captured pinning to IPFS with Pinata error", error); // todo: remove for production
  }
  return null;
};

export const getUserSubmissions = async ({ proofDid }) => {
  // ? security issue. i.e. other users can see the submissions
  const url = `https://api.pinata.cloud/data/pinList?status=pinned&metadata[proofDid]=${encodeURIComponent(
    proofDid
  )}`;
  try {
    const headers = {
      pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
      pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY,
    };
    const resp = await axios.get(url, { headers });
    return resp;
  } catch (error) {
    console.log("captured getting user submissions with Pinata error", error);
  }
};
