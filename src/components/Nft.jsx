import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const Nft = (nft) => {
  let navigate = useNavigate();

  const handleNftDetails = () => {
    navigate(`/nft/${nft?.nft.id}`, {
      state: {
        asset_contract_address: nft?.nft.asset_contract.address,
        token_id: nft?.nft.token_id,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={nft?.nft.image_thumbnail_url}
        alt={nft?.nft.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nft?.nft.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleNftDetails} size="small">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};

export default Nft;
