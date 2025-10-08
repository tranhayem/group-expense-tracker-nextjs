import * as React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FabBox from "~/components/Add-in/FabBox";
import ClickBox from "~/components/Add-in/ClickBox";
/*import Popper from "~/components/Add-in/Popper";*/

export default function Home() {
  return (
    <Container maxWidth={false} sx={{ width: '100%', mx: "auto"}}>
      <Box>
        <Typography variant="h4" component="h1" sx={{ my: 3, mx: 3, fontWeight: 600 }}>
          Home
        </Typography>
      </Box>

      <FabBox />
      
      <ClickBox>
        
      </ClickBox>

    </Container>
  );
}
