import { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Nosotros() {
const [aboutData, setAboutData] = useState("");

useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/", {
    headers: {
        Authorization: "Bearer ipss.get",
    },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("About Us data:", data);
        if (data.data) {
        setAboutData(data.data);  // Aquí uso data.data porque es el texto
        } else {
        setAboutData("Sin descripción disponible.");
        }
    })
    .catch((err) => {
        console.error("Error cargando About Us:", err);
        setAboutData("Sin descripción disponible.");
    });
}, []);

return (
    <Box id="nosotros" sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
    <Container maxWidth="lg">
        <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700, mb: 4 }}
        >
        Nosotros
        </Typography>
        <Typography
        variant="body1"
        align="justify"
        sx={{
            fontSize: { xs: "1rem", md: "25px" }, // tamaño responsive
            color: "text.secondary",                  // color grisito
            lineHeight: 1.8,                          // más espacio entre líneas
            // fontFamily: "'Courier New', Courier, monospace", // tipo de letra
            fontStyle: "italic",                      // en cursiva, por ejemplo
            fontWeight: "700"
        }}
        >
        {aboutData}
        </Typography>
    </Container>
    </Box>
);
}
