import { useState, useEffect } from "react";
import {
Accordion,
AccordionDetails,
AccordionSummary,
Box,
Container,
Typography,
useMediaQuery,
useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export default function FAQ() {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
const [expanded, setExpanded] = useState(false);
const [faqData, setFaqData] = useState([]);

useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/", {
    headers: {
        Authorization: "Bearer ipss.get",
    },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("FAQ data:", data);
        if (Array.isArray(data)) {
        setFaqData(data);
        } else if (Array.isArray(data.faq)) {
        setFaqData(data.faq);
        } else if (Array.isArray(data.data)) {
        setFaqData(data.data);
        } else {
        setFaqData([]);
        console.warn("La data FAQ no es un arreglo");
        }
    })
    .catch((err) => console.error("Error cargando FAQ:", err));
}, []);
const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
};

return (
    <Box sx={{ backgroundColor: "white", py: 8 }}>
    <Container maxWidth="md" sx={{ py: 2 }}>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 6,
        }}
        >
        <QuestionAnswerIcon
            sx={{
            fontSize: 48,
            color: "primary.main",
            mb: 2,
            }}
        />
        <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            }}
        >
            Preguntas Frecuentes
        </Typography>
        </Box>

        <Box>
        {Array.isArray(faqData) && faqData.length > 0 ? (
            faqData.map((item) => (
            <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{
                mb: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderRadius: "8px !important",
                "&:before": {
                    display: "none",
                },
                "&.Mui-expanded": {
                    margin: "0 0 16px 0",
                },
                }}
            >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
                sx={{
                    borderRadius: "8px",
                    backgroundColor:
                    expanded === item.id ? "rgba(0, 0, 0, 0.03)" : "transparent",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    },
                }}
                >
                <Typography
                    sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    color: expanded === item.id ? "primary.main" : "text.primary",
                    }}
                >
                    {item.titulo}
                </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ py: 2, px: 3 }}>
                <Typography
                    variant="body1"
                    sx={{
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                >
                    {item.respuesta}
                </Typography>
                </AccordionDetails>
            </Accordion>
            ))
        ) : (
            <Typography align="center" color="text.secondary">
            No hay preguntas frecuentes para mostrar.
            </Typography>
        )}
        </Box>
    </Container>
    </Box>
);
}
