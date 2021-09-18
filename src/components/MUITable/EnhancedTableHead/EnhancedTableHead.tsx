import { TableCell, TableHead, TableRow } from "@mui/material";
import { THeadCell } from "../MUITableTypes";

interface IEnhancedTableHeadProps {
  headCells: THeadCell[];
}

export default function EnhancedTasksTableHead(props: IEnhancedTableHeadProps) {
  const { headCells } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
