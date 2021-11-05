import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FC } from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import styled from "styled-components";

const StyledTaskStatusContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  width: fit-content;
  margin: auto;
`;

const StyledTaskText = styled.span`
  line-height: normal;
`;

interface ITaskStatusProps {
  status: number;
}

const statusText: any = {
  0: "En curso",
  1: "Finalizada",
};

const statusTextColor: any = {
  0: "#014361",
  1: "#1e4620",
};

const iconColor: any = {
  0: "#03a9f4",
  1: "#4caf50",
};

const statusBgColor: any = {
  0: "#E5F5FD",
  1: "#EDF7ED",
};

const TaskStatus: FC<ITaskStatusProps> = ({ status }) => {
  return (
    <StyledTaskStatusContainer
      className="TaskStatusContainer"
      style={{
        background: statusBgColor[status],
        color: statusTextColor[status],
      }}
    >
      {status === 0 ? (
        <WatchLaterIcon
          style={{ color: iconColor[status], marginRight: "0.25rem" }}
        />
      ) : (
        <CheckCircleIcon
          style={{ color: iconColor[status], marginRight: "0.25rem" }}
        />
      )}
      <StyledTaskText>{statusText[status]}</StyledTaskText>
    </StyledTaskStatusContainer>
  );
};

export default TaskStatus;
