import styled from "styled-components";
import getColorByPriority from "../../../../utils/getColorByPriority";

const StyledPriorityBadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledPriorityBadge = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const StyledPriorityText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

function formatTextByPriority(priority: number) {
  let text = "";

  if (priority > 0 && priority <= 2) {
    text = "Normal";
  }
  if (priority > 2 && priority <= 4) {
    text = "Normal";
  }
  if (priority > 4 && priority <= 8) {
    text = "Urgencia 48h";
  }
  if (priority > 8 && priority <= 10) {
    text = "Urgencia 24h";
  }

  return text;
}

interface IPriorityBadge {
  priority: number;
}
function PriorityBadge(props: IPriorityBadge) {
  const { priority } = props;
  return (
    <StyledPriorityBadgeWrapper>
      <StyledPriorityBadge
        style={{
          background: getColorByPriority(priority),
        }}
      />
      <StyledPriorityText>{formatTextByPriority(priority)}</StyledPriorityText>
    </StyledPriorityBadgeWrapper>
  );
}

export default PriorityBadge;
