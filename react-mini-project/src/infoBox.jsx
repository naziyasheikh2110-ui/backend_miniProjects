import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  let INIT_IMG =
    "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1000";

  let HOT_IMG =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_IMG =
    "https://images.unsplash.com/photo-1431036101494-66a36de47def?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAINY_IMG =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card   sx={{
    width: 350,
    margin: "20px auto",
    padding: 2,
    borderRadius: "20px",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    color: "black"
  }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_IMG
                : info.temp > 15
                  ? HOT_IMG
                  : COLD_IMG
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{info.city}</b>
             &nbsp; &nbsp; &nbsp; &nbsp; <span>
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </span>
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <p> <b>Temprature = {info.temp}&deg;C</b></p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp= {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
