import { Grid } from "@mui/material";
import React from "react";
import Nft from "../components/Nft";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchNftsAction } from "../store/actions/NftActions";


const NftList = () => {
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nfts);

  useEffect(() => {
    dispatch(fetchNftsAction());
  }, []);

  return (
    <Grid container spacing={2}>
      {nfts?.map((nft) => {
        return (
          <Grid key={nft.id} item lg={3}>
            <Nft nft={nft} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NftList;
