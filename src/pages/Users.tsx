import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getUsers, setCurrentPage, setSearchInputText } from "@store/Users/UsersSlices";
import type { TUser } from "src/types/user";
import Box from '@mui/material/Box';
import {
    Grid,
    Typography,
    CircularProgress,
    Pagination,
    Button,
} from "@mui/material";
import User from "@components/dasboard/User/User";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchInput from "@components/common/searchInput/SearchInput";

export const Users = () => {
    const dispatch = useAppDispatch();
    const { loading, error, userRecords, CurrentPage, SearchInputText } = useAppSelector((state) => state.Users);

    const [filteredUser, setFilteredUser] = useState(userRecords);
    const [paginatedUsers, setPaginatedUsers] = useState<TUser[]>(userRecords);

    const handleSearch = (value: string) => {
        const searchValue = value.toLowerCase();
        const filteredList = userRecords.filter((u) =>
            u.name.first.toLowerCase().includes(searchValue)
        );
        setFilteredUser(filteredList);
        dispatch(setSearchInputText(value));
    };

    const handleRetry = () => {
        dispatch(getUsers());
    };

    useEffect(() => {
        handleRetry();
    }, [dispatch]);

    useEffect(() => {
        if (userRecords.length > 0) {
            setFilteredUser(userRecords);
        }
    }, [userRecords]);

    useEffect(() => {
        const startIndex = (CurrentPage - 1) * 10;
        setPaginatedUsers(filteredUser.slice(startIndex, startIndex + 10));
    }, [CurrentPage, filteredUser]);

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <Box sx={{ p: 4, px: { xs: 2, md: 10 } }}>
            <Typography variant="h4" mb={3} fontWeight="bold">
                👥 User Dashboard
            </Typography>

            <SearchInput
                data={filteredUser.map((user) => user.name.first)}
                onSearch={(value) => handleSearch(value)}
                searchValue={SearchInputText || ""}
                placeholder="Search users..."
            />

            {loading === "failed" && error && (
                <Box
                    textAlign="center"
                    my={5}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography color="error" variant="h6" gutterBottom>
                        Error: {error}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<RefreshIcon />}
                        onClick={handleRetry}
                    >
                        Try Again
                    </Button>
                </Box>
            )}

            {loading === "pending" && (
                <Box display="flex" justifyContent="center" my={5}>
                    <CircularProgress />
                </Box>
            )}

            {loading === "succeeded" && userRecords.length > 0 && (
                <Box sx={{ flexGrow: 1, mt: 2 }}>
                    <Grid container spacing={2}>
                        {paginatedUsers.map((user: TUser) => (
                            <User user={user} key={user.login.uuid} />
                        ))}
                    </Grid>
                </Box>
            )}

            {loading === "succeeded" && userRecords.length === 0 && (
                <Typography align="center" mt={4}>
                    No users found.
                </Typography>
            )}


            <Box display="flex" justifyContent="center" mt={4}>
                <Pagination
                    count={filteredUser.length ? Math.ceil(filteredUser.length / 10) : 0}
                    page={CurrentPage}
                    onChange={(_, value) => handlePageChange(value)}
                    color="primary"
                    shape="rounded"
                    size="large"
                />
            </Box>

            <Button
                variant="contained"
                color="primary"
                startIcon={<RefreshIcon />}
                onClick={handleRetry}
                sx={{
                    textTransform: "none",
                    fontSize: 14,
                    px: 2,
                    py: 1,
                    mt: 3,
                    borderRadius: 2,
                }}
            >
                Refresh Users
            </Button>
        </Box>
    );
};
export default Users