import Admin from "@/types/Admin";
import Image from "next/image";

interface AdminListItemProps {
  admin: Admin;
  selectionValue: boolean;
  onEdit: () => void;
  onSelectionChange: (val: boolean) => void;
  onDeleteChange: () => void;
}

export default function AdminListItem({
  admin,
  selectionValue,
  onEdit,
  onSelectionChange,
  onDeleteChange,
}: AdminListItemProps) {
  return (
    <tr key={admin.email}>
      <td>
        <input
          type="checkbox"
          checked={Boolean(selectionValue)}
          onChange={(e) => {
            onSelectionChange(e.target.checked);
          }}
        />
      </td>
      <td>{`${admin.firstName} ${admin.lastName}`}</td>
      <td>{admin.email}</td>
      <td>
        <button 
          className="edit-btn"
          onClick={() => {
            onEdit();
          }}
        >
          <Image src="/edit.svg" alt="edit" width={30} height={30} />
        </button>
        <button className="delete-btn" onClick={onDeleteChange}>
          <Image src="/delete.svg" alt="delete" width={30} height={30} />
        </button>
      </td>
    </tr>
  );
}
