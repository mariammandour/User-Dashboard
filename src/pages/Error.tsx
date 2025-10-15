import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Error = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                textAlign: "center",
                p: 3,
            }}
        >
            <ErrorOutlineIcon
                sx={{
                    fontSize: 80,
                    color: "error.main",
                    mb: 2,
                }}
            />
            <Typography variant="h2" fontWeight="bold">
                404
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Oops! Page Not Found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                The page you are looking for doesn’t exist or has been moved.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                replace
                sx={{
                    textTransform: "none",
                    fontSize: 16,
                    px: 4,
                    py: 1.2,
                    borderRadius: 2,
                }}
            >
                Go Back Home
            </Button>
        </Box>
    );
};

export default Error;
