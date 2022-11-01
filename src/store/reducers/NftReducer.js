import {
  FETCH_NFTS_REQUEST,
  FETCH_NFTS_SUCCESS,
  FETCH_NFTS_ERROR,
} from "../actions/NftActions";
import {
	FETCH_NFT_REQUEST,
	FETCH_NFT_SUCCESS,
	FETCH_NFT_ERROR,
 } from "../actions/NftActions";
const initialState = {
  nfts: [],
  isLoading: false,
  error: "",

  nft: {},
  nftDetailsLoading: false,
  nftError: "",
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NFTS_REQUEST:
      return { ...state, isLoading: true, error: "" };
    case FETCH_NFTS_SUCCESS:
      return { ...state, isLoading: false, nfts: action.payload, error: "" };
    case FETCH_NFTS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    /////////////////////////////
    case FETCH_NFT_REQUEST:
      return { ...state, nftDetailsLoading: true, nft: {}, nftError: "" };
    case FETCH_NFT_SUCCESS:
      return { ...state, nftDetailsLoading: false, nft: action.payload, nftError: "" };
    case FETCH_NFT_ERROR:
      return { ...state, nftError: action.payload, nftDetailsLoading: false };
    default:
      return state;
  }
};

export default contactReducer;
