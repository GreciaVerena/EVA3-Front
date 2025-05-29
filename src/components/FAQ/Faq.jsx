import { useState } from "react";
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

// Datos de ejemplo para el FAQ
const faqData = [
{
    id: 1,
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
    "Aceptamos tarjetas de crédito/débito (Visa, MasterCard, American Express), PayPal, transferencias bancarias y pagos móviles como Apple Pay y Google Pay.",
},
{
    id: 2,
    question: "¿Cuánto tiempo tarda el envío?",
    answer:
    "El tiempo de envío depende de tu ubicación. Generalmente, los envíos nacionales tardan de 3 a 5 días hábiles, mientras que los envíos internacionales pueden tardar de 7 a 14 días hábiles.",
},
{
    id: 3,
    question: "¿Puedo devolver un producto?",
    answer:
    "Sí, ofrecemos una política de devolución de 30 días. Si no estás satisfecho con tu compra, puedes devolverla en su estado original dentro de los 30 días posteriores a la recepción para obtener un reembolso completo o un cambio.",
},
{
    id: 4,
    question: "¿Cómo puedo contactar al servicio al cliente?",
    answer:
    "Puedes contactar a nuestro equipo de servicio al cliente por correo electrónico a soporte@ejemplo.com, por teléfono al (123) 456-7890, o a través del chat en vivo disponible en nuestra página web de lunes a viernes de 9:00 AM a 6:00 PM.",
},
];

export default function FAQ() {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
};

return (
    <Box sx={{ backgroundColor: 'white', py: 8}}> 
        <Container maxWidth="md" sx={{ py: 2 }}>
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 6
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
            {faqData.map((item) => (
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
                    {item.question}
                </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{py: 2, px: 3 }}>
                <Typography
                    variant="body1"
                    sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                >
                    {item.answer}
                </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
        </Box>
        </Container>
    </Box>
);
}
