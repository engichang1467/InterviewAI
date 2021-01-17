import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import lightbulb from '../assets/img/lightbulb.svg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Divider from '@material-ui/core/Divider';
// import { Line } from 'react-chartjs-2';




const state = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
        {
            label: 'Energy',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#324F5D',
            borderColor: 'white',
            borderWidth: 2,
            data: [35, 21, 18, 37, 26]
    
        }
    ],
    height: '100px'
};

function Dashboard() {
	return (
        <div>
           <h1>34</h1>
           <h6>34</h6>
           <h1>Congrats! You are now done!</h1>
            <Grid container spacing={1} style={{ height: '100%' }}>
				<Grid item xs={3} style={{marginLeft:"50px"}}>
                    <Box style={{height: "370px", width: "370px", borderRadius: "50%", backgroundColor: "#1B372D", marginTop:"-25px"}}/>
                    <Box style={{height: "285px", width: "285px", borderRadius: "50%", backgroundColor: "#3C7C64", marginTop: "-326px", marginLeft: "44px"}}/>
                    <Box style={{height: "230px", width: "230px", borderRadius: "50%", backgroundColor: "#52AA8A", marginTop: "-259px", marginLeft:"71px"}}/>
                    <Typography varaint="h3" style={{color: "white", fontSize: "70px", fontFamily: "Montserrat", marginTop: "-170px", marginLeft: "114px"}}><strong>87%</strong></Typography>
				</Grid>
                <Grid item xs={3}>
                    <Typography varaint="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginTop: "85px", marginLeft: "99px"}}>
                        Excellent speaking! From our analysis, the tone of your speech was 87% positive, which matches your initial selection.
                    </Typography>
				</Grid>
                <Grid item xs={2}>
                    <Box style={{border: "9px solid #F4A261", height: "145px", width: "155px", borderRadius: "80%", marginTop: "100px", marginLeft: "15px"}}/>
                    <Typography varaint="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginTop: "10px", marginLeft: "26px"}}><strong>Words per Minute</strong></Typography>
                    <Typography varaint="h3" style={{color: "white", fontSize: "45px", fontFamily: "Montserrat", marginTop: "-182px", marginLeft: "1px"}}><strong>100</strong></Typography>
				</Grid>
             
                <Grid item xs={1}>
                    <Box style={{border: "9px solid #E76F51", height: "145px", width: "145px", borderRadius: "50%", marginTop:"100px", marginLeft: "45px"}}/>
                    <Typography varaint="h3" style={{color: "white", fontSize: "20px", fontFamily: "Montserrat", marginTop: "-172px", marginLeft: "81px", marginTop: "10px"}}><strong>Filler Words</strong></Typography>
                    <Typography varaint="h3" style={{color: "white", fontSize: "45px", fontFamily: "Montserrat", marginTop: "-181px", marginLeft: "94px"}}><strong>12</strong></Typography>
				</Grid>
			</Grid>

           
            
            <Grid container spacing={6}>
                <Grid item md={6}>
                    <Button style={{backgroundColor: "#1A2930", height: "50px", width: "200px", border: "2px solid #F2C407", color: "white", borderRadius: "15px", marginLeft: "220px", marginTop: "120px"}}>
                        <Typography variant="h3" style={{fontFamily: "Montserrat", fontSize: "18px"}}>Transcript</Typography>
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <Button style={{backgroundColor: "#1A2930", height: "50px", width: "200px", border: "2px solid #F2C407", color: "white", borderRadius: "15px", marginLeft: "200px", marginTop: "120px"}}>
                        <Typography variant="h3" style={{fontFamily: "Montserrat", fontSize: "18px"}}>One more time!</Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
		
	);
}



export default Dashboard;
