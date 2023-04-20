import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import './Displaydreams.js'

export default function Displaydreams(props) {
  const {title, description, date, feeling, lucidity, is_nightmare, is_recurrent} = props
  return (
    <div className="root">
      <Card style={{ width: 300, height: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ressenti : {feeling}
        </Typography>
        <Typography variant="body2">
          {description}
          <br />
          Cauchemar : {is_nightmare}
          <br/>
          Récurrent : {is_recurrent}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Afficher détails</Button>
      </CardActions> */}
    </Card>
    </div>
  );
}
