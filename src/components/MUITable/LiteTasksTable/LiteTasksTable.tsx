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
import React, { useState } from "react";
import { TTaskResponse } from "../../../types/taskTypes";
import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";
import { THeadCell } from "../MUITableTypes";

import FinishTaskButton from "../../../pages/MachinePage/components/FinishTaskButton/FinishTaskButton";
import useFinishTaskDialog from "../../../pages/MachinePage/hooks/useFinishTaskDialog";

import {
  StyledLoadingWrapper,
  StyledTableWrapper,
  StyledTablePageContainer,
} from "../SCMuiTable";

import { setTableRowBackgroundColorByPriority } from "../setTableRowBackgroundColorByPriority";
import { maxTableHeight } from "../../../styles/styleConstants";

interface IEnhancedTableProps {
  tasks: TTaskResponse[] | undefined;

  headCells: THeadCell[];
}

export default function EnhancedTaksTable(props: IEnhancedTableProps) {
  const { tasks, headCells } = props;

  const {
    FinishTaskDialog,
    handleFinishTaskDialogOpen,
    handleFinishTaskDialogClose,
  } = useFinishTaskDialog();

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
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          width={100}
                        >
                          {task.taskNumber}
                        </TableCell>
                        <TableCell align="center">
                          {task.programNumber}
                        </TableCell>
                        <TableCell align="center">
                          {task.duration} min
                        </TableCell>
                        <TableCell align="center">
                          <FinishTaskButton
                            taskId={task._id}
                            programNumber={task.programNumber}
                            openFinishedTaskDialog={handleFinishTaskDialogOpen}
                          />
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
