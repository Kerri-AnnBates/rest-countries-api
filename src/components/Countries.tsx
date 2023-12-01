import CountryCard from "./CountryCard";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Countries() {
    return (
        <>
            <Grid container spacing={{ xs: 4, md: 10 }} columns={{ xs: 1, sm: 4, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={1} sm={2} md={3} key={index}>
                        <CountryCard />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Countries;