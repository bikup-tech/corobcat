import { FC } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

const StyledDeletableItemCardContainer = styled.li`
  width: 100%;
  padding: 0.25rem 1rem;
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const StyledText = styled(Typography)`
  flex: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface IDeletableItemCardProps {
  handleDelete: Function;
  itemName: string;
}

const DeletableItemCard: FC<IDeletableItemCardProps> = ({
  handleDelete,
  itemName,
}) => {
  return (
    <StyledDeletableItemCardContainer>
      <StyledText>{itemName}</StyledText>
      <DeleteIcon
        sx={{
          cursor: "pointer",
          ":hover": { color: "#1876D1" },
        }}
      />
    </StyledDeletableItemCardContainer>
  );
};

export default DeletableItemCard;
