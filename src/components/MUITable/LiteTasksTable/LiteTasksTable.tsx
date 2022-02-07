import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { StyledTablePageContainer, StyledTableWrapper } from "../SCMuiTable";

import { ADMIN_NUMBER } from "../../../constants/rolesByNumber";
import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";
import FinishTaskButton from "../../../pages/MachinePage/components/FinishTaskButton/FinishTaskButton";
import { THeadCell } from "../MUITableTypes";
import { TInitialState } from "../../../redux/store/initialState";
import { TTaskResponse } from "../../../types/taskTypes";
import { maxTableHeight } from "../../../styles/styleConstants";
import { setTableRowBackgroundColorByPriority } from "../setTableRowBackgroundColorByPriority";
import useFinishTaskDialog from "../../../pages/MachinePage/hooks/useFinishTaskDialog";
import { useSelector } from "react-redux";

interface IEnhancedTableProps {
  tasks: TTaskResponse[] | undefined;

  headCells: THeadCell[];
}

export default function EnhancedTaksTable(props: IEnhancedTableProps) {
  const { user } = useSelector((state: TInitialState) => state.authReducer);
  const { tasks, headCells } = props;

  const { FinishTaskDialog, handleFinishTaskDialogOpen } =
    useFinishTaskDialog();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

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
          <TableContainer component={Paper} sx={{ maxHeight: maxTableHeight }}>
            <Table aria-labelledby="tableTitle" size="medium" stickyHeader>
              <EnhancedTableHead headCells={headCells} />
              <TableBody>
                {tasks &&
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
                          {task.programNumber}
                        </TableCell>
                        <TableCell align="center">
                          {task.duration} min
                        </TableCell>
                        <TableCell align="center">{task.material}</TableCell>
                        <TableCell align="center">
                          {task.thickness} mm
                        </TableCell>
                        <TableCell align="center">
                          {user?.role === ADMIN_NUMBER ? (
                            <FinishTaskButton
                              taskId={task._id}
                              programNumber={task.programNumber}
                              openFinishedTaskDialog={
                                handleFinishTaskDialogOpen
                              }
                            />
                          ) : (
                            task.user.employerCode === user?.employerCode && (
                              <FinishTaskButton
                                taskId={task._id}
                                programNumber={task.programNumber}
                                openFinishedTaskDialog={
                                  handleFinishTaskDialogOpen
                                }
                              />
                            )
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {tasks && (
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
      {FinishTaskDialog}
    </StyledTablePageContainer>
  );
}
