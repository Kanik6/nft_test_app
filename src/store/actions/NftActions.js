import axios from "axios";


export const FETCH_NFTS_REQUEST = "FETCH_NFTS_REQUEST";
export const FETCH_NFTS_SUCCESS = "FETCH_NFTS_SUCCESS";
export const FETCH_NFTS_ERROR = "FETCH_NFTS_ERROR";



export const fetchNftsRequest = () => ({
  type: FETCH_NFTS_REQUEST
});
export const fetchNftsSuccess = (payload) => ({
  type: FETCH_NFTS_SUCCESS,
  payload,
});
export const fetchNftsError = (payload) => ({
	type: FETCH_NFTS_ERROR,
	payload,
 });



export const fetchNftsAction = () => {
  return async (dispatch) => {
	
    try {
      dispatch(fetchNftsRequest);
      const nfts = await axios.get(
        "https://api.opensea.io/api/v1/assets?format=json"
      );
      dispatch(fetchNftsSuccess(nfts.data.assets));
    } catch (e) {
		dispatch(fetchNftsError('error'));
	 }
  };
};


////////////////////////////////////////////////////////

export const FETCH_NFT_REQUEST = "FETCH_NFT_REQUEST";
export const FETCH_NFT_SUCCESS = "FETCH_NFT_SUCCESS";
export const FETCH_NFT_ERROR = "FETCH_NFT_ERROR";



export const fetchNftRequest = () => ({
  type: FETCH_NFT_REQUEST
});
export const fetchNftSuccess = (payload) => ({
  type: FETCH_NFT_SUCCESS,
  payload,
});
export const fetchNftError = (payload) => ({
	type: FETCH_NFT_ERROR,
	payload,
 });

 export const fetchNftAction = (contract_address, token_id) => {
	return async (dispatch) => {
	 
	  try {
		 dispatch(fetchNftRequest);
		 const nft = await axios.get(
			`https://api.opensea.io/api/v1/asset/${contract_address}/${token_id}/`
		 );
		
		 dispatch(fetchNftSuccess(nft.data));
	  } catch (e) {
		 dispatch(fetchNftError('error'));
	  }
	};
 };