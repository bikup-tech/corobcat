import { Button } from "@mui/material";
import { TTaskResponse } from "../../../types/taskTypes";
import autoTable from "jspdf-autotable";
import { calculateFinishedTasksGeneralValues } from "../../../utils/calculateFinishedTasksGeneralValues";
import { calculateTotalTime } from "../../../utils/calculateTotalTime";
import jsPDF from "jspdf";
import styled from "styled-components";

interface PDFDownloadButtonProps {
  filteredTasks: TTaskResponse[] | undefined;
}

const StyledPdfDownloadButton = styled(Button)`
  font-weight: 700;
`;

function PdfDownloadButton(props: PDFDownloadButtonProps) {
  const { filteredTasks } = props;

  const tasksData = calculateFinishedTasksGeneralValues(filteredTasks);
  const machine1Tasks = tasksData.machine1.tasks as number;
  const machine1Time = tasksData.machine1.time as number;
  const machine2Tasks = tasksData.machine2.tasks as number;
  const machine2Time = tasksData.machine2.time as number;
  const totalTasks = filteredTasks?.length as number;
  const totalTime = calculateTotalTime(filteredTasks);

  function downloadPDF() {
    if (filteredTasks) {
      const doc: jsPDF = new jsPDF();

      const body = buildTableBody(filteredTasks);

      if (body.length === 0) return;

      let cellColor: string = "white";
      /** Header Data */
      autoTable(doc, {
        head: [["Máquina", "Programas Terminados", "Tiempo"]],
        body: [
          ["Máquina 1", `${machine1Tasks}`, `${machine1Time} min`],
          ["Máquina 2", `${machine2Tasks}`, `${machine2Time} min`],
          ["Total", `${totalTasks}`, `${totalTime} min`],
        ],
        theme: "grid",
      });
      /** Tasks Data */
      autoTable(doc, {
        head: [
          [
            "Prioridad",
            "Máquina",
            "Material",
            "Espesor",
            "Nº Programa",
            "Técnico",
            "Tiempo",
            "Fecha",
          ],
        ],
        body: body,
        theme: "plain",
        didParseCell: (data) => {
          if (data.column.index === 0) {
            cellColor = getCellColor(data.cell.raw as string);
          }
          data.cell.styles.fillColor = cellColor;
        },
      });
      doc.save("table.pdf");
    }
  }

  /**
   *
   * Function to return cell colors based on
   * the task priority.
   *
   * @param priority Task priority
   * @returns
   */
  function getCellColor(priority: string): string {
    switch (priority) {
      case "1":
      case "2":
        return "#aed5fa";
      case "3":
      case "4":
        return "#80dd9f";
      case "5":
      case "6":
      case "7":
      case "8":
        return "#fdd187";
      case "9":
      case "10":
        return "#fbadad";
      default:
        return "white";
    }
  }

  /**
   * Function to build table body according to jsPDF's autotable specs.
   */
  function buildTableBody(filteredTasks: TTaskResponse[]): string[][] | [] {
    const expectedBody = [];
    for (let task of filteredTasks) {
      const taskRow: string[] = [];
      taskRow.push(task.priority.toString());
      taskRow.push(task.machine.name);
      taskRow.push(task.material);
      taskRow.push(`${task.thickness.toString()} mm`);
      taskRow.push(task.programNumber);
      taskRow.push(task.user?.employerCode ?? "-");
      taskRow.push(task.duration.toLocaleString());
      taskRow.push(task.end?.toString() || "");
      expectedBody.push(taskRow);
    }
    return expectedBody;
  }

  return (
    <StyledPdfDownloadButton variant="contained" onClick={downloadPDF}>
      Descargar PDF
    </StyledPdfDownloadButton>
  );
}

export default PdfDownloadButton;
