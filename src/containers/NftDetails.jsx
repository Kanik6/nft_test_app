import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNftAction } from "../store/actions/NftActions";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const NftDetails = () => {
  const dispatch = useDispatch();
  const { nft, nftDetailsLoading } = useSelector((state) => state);
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    dispatch(
      fetchNftAction(
        location.state.asset_contract_address,
        location.state.token_id
      )
    );
  }, []);

  const handleBack = () => {
    navigate(`/`);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="340"
        image={nft?.image_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {nft?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {nft?.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Asset_contract_type: {nft?.asset_contract?.asset_contract_type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created_date: {nft?.asset_contract?.created_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {nft?.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleBack} size="small">
          Назад
        </Button>
      </CardActions>
    </Card>
  );
};

export default NftDetails;
