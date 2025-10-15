import { Avatar, Box, Modal, Typography, IconButton } from "@mui/material";
import type { TUser } from "src/types/user";
import CloseIcon from "@mui/icons-material/Close";

interface IUserProps {
    selectedUser: TUser | null;
    setSelectedUser: (user: TUser | null) => void;
}
const modalStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};
const UserModal = ({ selectedUser, setSelectedUser }: IUserProps) => {
    return (
        <Modal open={!!selectedUser} onClose={() => setSelectedUser(null)}>
            <Box sx={modalStyle}>
                <IconButton
                    sx={{ position: "absolute", right: 8, top: 8 }}
                    onClick={() => setSelectedUser(null)}
                >
                    <CloseIcon />
                </IconButton>
                {selectedUser && (
                    <>
                        <Box textAlign="center" mb={2}>
                            <Avatar
                                src={selectedUser.picture.large}
                                sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                            />
                            <Typography variant="h6" fontWeight="bold">
                                {selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {selectedUser.email}
                            </Typography>
                        </Box>
                        <Typography variant="body2">
                            <strong>Phone:</strong> {selectedUser.phone}
                        </Typography>
                        <Typography variant="body2">
                            <strong>Location:</strong> {selectedUser.location.city},{" "}
                            {selectedUser.location.country}
                        </Typography>
                    </>
                )}
            </Box>
        </Modal>
    )
}

export default UserModal
