import DateTimeFilter from "./DateTimeFilter";
import PdfDownloadButton from "./PdfDownloadButton";
import { StyledTableHeaderWrapper } from "../../../StyledComponents/StyledTableHeader";
import styled from "styled-components";
import { StyledTableHeaderName } from "./FinishedTasksInfoHeader";
import { Moment } from "moment";
import { TTaskResponse } from "../../../types/taskTypes";

interface FinishedTasksFilterHeaderProps {
  dates: {
    startDate: Moment | null;
    endDate: Moment | null;
  };
  setDates: any;
  filteredTasks: TTaskResponse[] | undefined;
}

const StyledFlexGrow = styled.div`
  flex: 1;
`;

const StyledMargin = styled.div`
  margin-right: 5rem;
`;

function FinishedTasksFilterHeader(props: FinishedTasksFilterHeaderProps) {
  const { filteredTasks, dates, setDates } = props;

  return (
    <StyledTableHeaderWrapper>
      <StyledTableHeaderName>Filtro por fechas</StyledTableHeaderName>
      <StyledFlexGrow />
      <DateTimeFilter dates={dates} setDates={setDates} />
      <StyledMargin />
      <PdfDownloadButton filteredTasks={filteredTasks} />
    </StyledTableHeaderWrapper>
  );
}

export default FinishedTasksFilterHeader;
