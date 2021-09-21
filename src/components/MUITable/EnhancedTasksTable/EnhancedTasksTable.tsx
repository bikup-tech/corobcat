import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { TTaskResponse } from "../../../types/taskTypes";
import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";
import { THeadCell } from "../MUITableTypes";

import styled from "styled-components";

import "./EnhancedTasksTable.scss";
import FinishTaskButton from "../../../pages/MachinePage/components/FinishTaskButton/FinishTaskButton";
import useFinishTaskDialog from "../../../pages/MachinePage/hooks/useFinishTaskDialog";

const StyledTablePageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledTableWrapper = styled.div`
  width: 100%;
  max-width: 1440px;

  .MuiTableHead-root {
    background-color: red;
  }

  .MuiTableRow-head {
    background: red;
  }

  .MuiTableCell-head {
    color: #002740;
    font-weight: 700;
    background-color: #f5f5f5;
    border-bottom: 2px solid rgba(150, 150, 150, 1);
    line-height: 1.25;
    font-size: 1.1rem;
  }

  .MuiTableCell-body {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    font-weight: 500;
    font-size: 1.1rem;
  }
`;

function setTableBackgroundColorByPriority(priority: number) {
  let bgColor = "";
  if (priority > 0 && priority <= 2) {
    bgColor = "rgba(246, 91, 92, 0.5)";
  }
  if (priority > 2 && priority <= 4) {
    bgColor = "rgba(255, 163, 15, 0.5)";
  }
  if (priority > 4 && priority <= 8) {
    bgColor = "rgba(1, 187, 63, 0.5)";
  }
  if (priority > 8 && priority <= 10) {
    bgColor = "rgba(93, 172, 245, 0.5)";
  }

  return {
    backgroundColor: bgColor,
  };
}

interface IEnhancedTableProps {
  tasks: TTaskResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  headCells: THeadCell[];
}

export default function EnhancedTaksTable(props: IEnhancedTableProps) {
  const { tasks, headCells, isLoading, isError } = props;

  useEffect(() => {
    return () => {};
  });

  const {
    FinishTaskDialog,
    handleFinishTaskDialogOpen,
    handleFinishTaskDialogClose,
  } = useFinishTaskDialog();

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
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <EnhancedTableHead headCells={headCells} />
              <TableBody>
                {isLoading ? (
                  <CircularProgress />
                ) : isError ? (
                  <></>
                ) : tasks ? (
                  tasks.map((task, index) => {
                    return (
                      <TableRow
                        key={task._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        style={setTableBackgroundColorByPriority(task.priority)}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          width={100}
                        >
                          {task.taskNumber}
                        </TableCell>
                        <TableCell align="center">{task._id}</TableCell>
                        <TableCell align="center">{task.material}</TableCell>
                        <TableCell align="center">{task.thickness}</TableCell>
                        <TableCell align="center">
                          {task.programNumber}
                        </TableCell>
                        <TableCell align="center">
                          {task.employerCode}
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
                  })
                ) : (
                  []
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
      {FinishTaskDialog}
    </StyledTablePageContainer>
  );
}
