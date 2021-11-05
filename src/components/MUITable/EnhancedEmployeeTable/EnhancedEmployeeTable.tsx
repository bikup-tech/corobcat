import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  StyledLoadingWrapper,
  StyledTablePageContainer,
  StyledTableWrapper,
} from "../SCMuiTable";

import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";
import React from "react";
import { THeadCell } from "../MUITableTypes";
import { TTaskResponse } from "../../../types/taskTypes";
import TaskStatus from "../../TaskStatus/TaskStatus";
import formatDate from "../../../utils/formatDate";
import { maxTableHeight_small } from "../../../styles/styleConstants";
import { setTableRowBackgroundColorByPriority } from "../setTableRowBackgroundColorByPriority";

interface IEnhnacedEmployeeTasksTableProps {
  tasks: TTaskResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  headCells: THeadCell[];
}

export default function EnhnacedEmployeeTasksTable(
  props: IEnhnacedEmployeeTasksTableProps
) {
  const { tasks, headCells, isLoading, isError } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <StyledTablePageContainer className="EnhancedTaskTable">
      <StyledTableWrapper className="EnhancedTaskTable__container">
        <Box sx={{ width: "100%" }}>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: maxTableHeight_small }}
          >
            <Table
              sx={{ minWidth: 750, maxHeight: 250 }}
              aria-labelledby="tableTitle"
              size="medium"
              stickyHeader
            >
              <EnhancedTableHead headCells={headCells} />
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={999}>
                      <StyledLoadingWrapper>
                        <CircularProgress />
                        Cargando Datos...
                      </StyledLoadingWrapper>
                    </TableCell>
                  </TableRow>
                ) : isError ? (
                  <></>
                ) : (
                  tasks &&
                  tasks.map((task, index) => {
                    return (
                      <TableRow
                        key={task._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        style={setTableRowBackgroundColorByPriority(
                          task.priority
                        )}
                      >
                        <TableCell align="center">
                          <TaskStatus status={task.status} />
                        </TableCell>
                        <TableCell align="center">{task.material}</TableCell>
                        <TableCell align="center">{task.thickness}</TableCell>
                        <TableCell align="center">
                          {task.programNumber}
                        </TableCell>
                        <TableCell align="center">
                          {task.machine.name}
                        </TableCell>
                        <TableCell align="center">
                          {task.duration} min
                        </TableCell>
                        <TableCell align="center">
                          {formatDate(task.end || task.start)}
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {!isLoading && tasks && (
            <TablePagination
              rowsPerPageOptions={[25, 50, 75, 100]}
              component="div"
              count={tasks.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Box>
      </StyledTableWrapper>
    </StyledTablePageContainer>
  );
}
