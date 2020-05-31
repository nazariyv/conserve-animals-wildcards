import axios from "axios";
import FormData from "form-data";

export const pinToIPFS = async ({ file }) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  try {
    let data = new FormData();
    data.append("file", file);
    const metadata = JSON.stringify({
      name: "randomName",
      keyvalues: {
        wildcards: "art",
        user: "naz", // todo: need a context for 3Box user so that I can pull it here and add it to the pin
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
    console.log("captured pinata error", error); // todo: remove for production
  }

  return null;
};
