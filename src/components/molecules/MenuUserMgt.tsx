import type { MenuUserMgtProps } from "../../interface"

const MenuUserMgt = ({onEdit, onDeactivate, onDelete, onClose}: MenuUserMgtProps) => {
  return (
      <ol className="absolute p-1.5 rounded-lg top-0 bg-white z-50" onMouseLeave={onClose}>
         <li className="userMgtLi" onClick={onEdit}>Edit</li>
         <li className="userMgtLi" onClick={onDeactivate}>Deactivate</li>
         <li className="userMgtLi-delete" onClick={onDelete}>Delete</li>
       </ol>
  )
}

export default MenuUserMgt