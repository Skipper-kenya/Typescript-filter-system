import {
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { data } from "./assets/data";
import React, { FC, useState } from "react";

const App: FC = () => {
  const [search, setSearch] = useState<string>("");

  const tableHeadArr: string[] = ["first_name", "last_name", "email", "gender"];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <Stack
          direction="column"
          spacing={2}
          sx={{ display: "flex", alignItems: "center", paddingTop: "1rem" }}
        >
          <Typography variant="h5" color="primary">
            Student's record Filter By First_name
          </Typography>
          <TextField
            fullWidth
            label="Filter by First_name..."
            onChange={handleSearchChange}
          />
        </Stack>
        <Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "650px" }}>
              <TableHead>
                <TableRow>
                  {tableHeadArr?.map((head, idx) => (
                    <TableCell key={idx}>
                      {head[0].toUpperCase() + head.substring(1)}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  ?.filter((dat) => {
                    return search === ""
                      ? data
                      : dat.first_name.toLowerCase().includes(search);
                  })
                  .map((dat, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{dat.first_name}</TableCell>
                      <TableCell>{dat.last_name}</TableCell>
                      <TableCell>{dat.email}</TableCell>
                      <TableCell>{dat.gender}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
