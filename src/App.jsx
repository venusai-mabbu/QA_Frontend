import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Typography, Button, Stack } from "@mui/material";
import Home from "./pages/Home";
import JavaFAQ from "./pages/JavaFAQ";
import DBMSFAQ from "./pages/DBMSFAQ";
import OSFAQ from "./pages/OSFAQ";
import ComputerNetworksFAQ from "./pages/ComputerNetworksFAQ";
import JSTypescriptFAQ from "./pages/JSTypescriptFAQ";
import ReactFAQ from "./pages/ReactFAQ";
import APIFAQ from "./pages/APIFAQ";
import AWSCloudFAQ from "./pages/AWSCloudFAQ";
import DockerFAQ from "./pages/DockerFAQ";
import POSTFAQ from "./pages/POSTFAQ"

const App = () => {
  return (
    <Router>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: 3 }}>
          FAQ Sections
        </Typography>

        {/* Navigation */}
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ marginBottom: 3 }}>
          <Button variant="contained" color="primary" component={Link} to="/">
            Home
          </Button>
          <Button variant="contained" color="success" component={Link} to="/java">
            JAVA
          </Button>
          <Button variant="contained" color="success" component={Link} to="/dbms">
            DBMS
          </Button>
          <Button variant="contained" color="success" component={Link} to="/os">
            OS
          </Button>
          <Button variant="contained" color="success" component={Link} to="/cn">
            CN
          </Button>
          <Button variant="contained" color="success" component={Link} to="/js">
            JS
          </Button>
          <Button variant="contained" color="success" component={Link} to="/react">
            REACT
          </Button>
          <Button variant="contained" color="success" component={Link} to="/api">
            API
          </Button>
          <Button variant="contained" color="success" component={Link} to="/aws">
            AWS
          </Button>
          <Button variant="contained" color="success" component={Link} to="/docker">
            DOCKER
          </Button>
          <Button variant="contained" color="error" component={Link} to="/post">
            POST
          </Button>
        </Stack>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/java" element={<JavaFAQ />} />
          <Route path="/dbms" element={<DBMSFAQ />} />
          <Route path="/os" element={<OSFAQ />} />
          <Route path="/cn" element={<ComputerNetworksFAQ />} />
          <Route path="/js" element={<JSTypescriptFAQ />} />
          <Route path="/react" element={<ReactFAQ />} />
          <Route path="/api" element={<APIFAQ />} />
          <Route path="/aws" element={<AWSCloudFAQ />} />
          <Route path="/docker" element={<DockerFAQ />} />
          <Route path="/post" element={<POSTFAQ />} />

        </Routes>
      </Container>
    </Router>
  );
};

export default App;
