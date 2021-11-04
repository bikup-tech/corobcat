import { Button } from "@mui/material";

interface IFinishTaskButtonProps {
  taskId: string;
  programNumber: string;
  openFinishedTaskDialog: (programNumber: string) => void;
}

function FinishTaskButton(props: IFinishTaskButtonProps) {
  const { taskId, openFinishedTaskDialog } = props;

  function handleClick() {
    openFinishedTaskDialog(taskId);
  }

  return (
    <>
      <Button variant="contained" disableElevation onClick={handleClick}>
        Finalizar
      </Button>
    </>
  );
}

export default FinishTaskButton;
