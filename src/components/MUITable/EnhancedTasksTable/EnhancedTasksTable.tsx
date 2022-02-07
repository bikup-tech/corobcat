import {
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import {
  StyledLoadingWrapper,
  StyledTablePageContainer,
  StyledTableWrapper,
} from "../SCMuiTable";

import { ADMIN_NUMBER } from "../../../constants/rolesByNumber";
import DeleteIcon from "@mui/icons-material/Delete";
import EnhancedTableHead from "../EnhancedTableHead/EnhancedTableHead";
import FinishTaskButton from "../../../pages/MachinePage/components/FinishTaskButton/FinishTaskButton";
import { THeadCell } from "../MUITableTypes";
import { TInitialState } from "../../../redux/store/initialState";
import { TTaskResponse } from "../../../types/taskTypes";
import { maxTableHeight } from "../../../styles/styleConstants";
import { setTableRowBackgroundColorByPriority } from "../setTableRowBackgroundColorByPriority";
import styled from "styled-components";
import useFinishTaskDialog from "../../../pages/MachinePage/hooks/useFinishTaskDialog";
import { useSelector } from "react-redux";

const StyledIconButton = styled(IconButton)`
  .MuiSvgIcon-root {
    color: #707070;

    &:hover {
      color: #1876d1;
    }
  }
`;

interface IEnhancedTableProps {
  tasks: TTaskResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  headCells: THeadCell[];
  handleDeleteTask: (taskId: string) => void;
}

export default function EnhancedTaksTable(props: IEnhancedTableProps) {
  const { tasks, headCells, isLoading, isError, handleDeleteTask } = props;
  const { user } = useSelector((state: TInitialState) => state.authReducer);

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
            <Table
              sx={{ minWidth: 750 }}
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
                        <TableCell align="center">{task.material}</TableCell>
                        <TableCell align="center">
                          {task.thickness} mm
                        </TableCell>
                        <TableCell align="center">
                          {task.programNumber}
                        </TableCell>
                        <TableCell align="center">
                          {task.user.employerCode}
                        </TableCell>
                        <TableCell align="center">
                          {task.duration} min
                        </TableCell>
                        <TableCell align="right">
                          <FinishTaskButton
                            taskId={task._id}
                            programNumber={task.programNumber}
                            openFinishedTaskDialog={handleFinishTaskDialogOpen}
                          />

                          <StyledIconButton
                            color="secondary"
                            onClick={() => {
                              handleDeleteTask(task._id);
                            }}
                            sx={{ marginLeft: "0.5rem" }}
                          >
                            <DeleteIcon color="primary" />
                          </StyledIconButton>
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
      {FinishTaskDialog}
    </StyledTablePageContainer>
  );
}
