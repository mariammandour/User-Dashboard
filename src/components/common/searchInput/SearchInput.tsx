import { Autocomplete, TextField, Stack } from "@mui/material";

interface UserSearchProps {
    data: string[];
    onSearch: (value: string) => void;
    placeholder?: string;
    searchValue: string;
}

const SearchInput = ({ data, onSearch, placeholder, searchValue }: UserSearchProps) => {
    return (
        <Stack spacing={2} sx={{ width: 300, mx: "auto", my: 3 }}>
            <Autocomplete
                freeSolo
                disableClearable
                options={data}
                inputValue={searchValue}
                onInputChange={(_, newValue) => onSearch(newValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={placeholder || "Search"}
                        type="search"
                        variant="outlined"
                        size="small"
                    />
                )}
            />
        </Stack>
    );
}
export default SearchInput
