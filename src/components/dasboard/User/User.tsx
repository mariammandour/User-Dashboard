import type { TUser } from "src/types/user";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState } from "react";
import UserModal from "./UserModal";

interface IUserProps {
    user: TUser;
}

const User = ({ user }: IUserProps) => {
    const [selectedUser, setSelectedUser] = useState<TUser | null>(null);

    return (
        <>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} onClick={() => setSelectedUser(user)}>
                <Card
                    sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                    }}
                >
                    <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h6" fontWeight="bold">
                            {user.name.first} {user.name.last}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.location.country}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setSelectedUser(user)}
                            sx={{
                                textTransform: "none",
                                fontSize: 14,
                                px: 2,
                                py: 1,
                                mt: 2,
                                borderRadius: 2,
                            }}
                        >
                            Show Details
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <UserModal selectedUser={selectedUser} setSelectedUser={
                setSelectedUser
            } />
        </>
    );
};

export default User;