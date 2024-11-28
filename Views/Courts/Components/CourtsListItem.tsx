import Court from "@/types/Court";
import { useEffect, useState } from "react";

interface CourtsListItemProps {
  court: Court;
  selectionValue: boolean;
  onSelectionChange: (val: boolean) => void;
}

export default function CourtsListItem({
  court,
  selectionValue,
  onSelectionChange,
}: CourtsListItemProps) {
  return (
    <tr key={court.id}>
      <td>
        <input
          type="checkbox"
          checked={Boolean(selectionValue)}
          onChange={(e) => {
            onSelectionChange(e.target.checked);
          }}
        />
      </td>
      <td>{court.name}</td>
      <td>
        <button className="view-btn">VIEW</button>
      </td>
      {/* <td>
        <button className="edit-btn"> EDIT </button>
      </td> */}
      {/* <td>
        <label className="switch">
          <span className="slider round"></span>
        </label>
      </td> */}
    </tr>
  );
}
