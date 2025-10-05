import { useState } from "react"

const MenuUserMgt = () => {
   const [ isVisible, setIsVisible ] = useState(false)
  return (
      <ol className="absolute p-1.5 rounded-lg top-0 bg-white">
         <li className="userMgtLi">Edit</li>
         <li className="userMgtLi">Deactivate</li>
         <li className="userMgtLi">Delete</li>
       </ol>
  )
}

export default MenuUserMgt