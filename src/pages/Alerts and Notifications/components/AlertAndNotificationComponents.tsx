import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import editIcon from "/assets/Icons/edit-outline.svg";
import viewIcon from "/assets/Icons/icons-view.svg";
import addIcon from "/assets/Icons/material-symbols_add-rounded.svg";
import copyIcon from "/assets/Icons/copy.svg";
import deleteIcon from "/assets/Icons/delete.svg";
import messageIcon from "/assets/Icons/messageIcon.svg";
import chatIcon from "/assets/Icons/chatIcon.svg";
import phoneIcon from "/assets/Icons/phoneIcon.svg";
import FilterAndSearchh from "../../../components/molecules/FilterAndSearchh";
import type { NotificationTemplate } from "../../../interface";
import { fetchNotificationTemplates } from "../../../api/notificationService";
// import TemplateDetails from "./TemplateDetails";


const AlertAndNotificationComponents = () => {
  const navigate = useNavigate();
  const [templateData, setTemplateData] = useState<NotificationTemplate[]>([])

   useEffect(() => {
    fetchNotificationTemplates()
     .then(setTemplateData)
     .catch((error) => console.error("Error fetching Templates:", error));
   }, []);

   const handleCardClick = (template: NotificationTemplate) => {
    navigate(`/templates/${template.id}`, {
    state: { template },
    });
  };

  const handleDelete = (index: number) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${templateData[index].name}"?`
      )
    ) {
      setTemplateData(templateData.filter((_, i) => i !== index));
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/templates/edit/${id}`);
  };

  const handleView = (id: string) => {
    navigate(`/templates/view/${id}`);
  };

  const handleCopy = (template: NotificationTemplate) => {
  const newTemplate: NotificationTemplate = {
    ...template,
    id: Date.now().toString(), 
    name: `${template.name} (Copy)`,
    status: "DRAFT", // ✅ match union type casing
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  setTemplateData([...templateData, newTemplate]);
  alert(`Template "${template.name}" copied successfully!`);
};


  // const handleCardClick = (id: string) => {
  //   navigate(`/templates/${id}`);
  // };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <FilterAndSearchh />
        <NavLink to="/create-template">
          <button className="flex gap-1.5 flex-row items-center justify-center px-4 py-2.5 bg-[#0D47A1] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#1565C0] transition">
            <img src={addIcon} alt="add" />
            <p>New Template</p>
          </button>
        </NavLink>
      </div>

      <div className="flex flex-col">
        {templateData.map((template, index) => (
          <div
            key={template.id}
            className="p-6 border border-[#DCDEE6] rounded-lg mb-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleCardClick(template)}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-row items-center gap-9 flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {template.name}
                  </h3>
                </div>
                <div>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      template.status === "PUBLISHED"
                        ? "bg-green-100 text-green-800"
                        : template.status === "DRAFT"
                        ? "bg-gray-300 text-gray-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {template.status}
                  </span>
                </div>
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <span className="flex flex-row items-center">
                  <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={editIcon}
                    alt="Edit"
                    onClick={() => handleEdit(template.id)}
                  />
                  <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={viewIcon}
                    alt="View"
                    onClick={() => handleView(template.id)}
                  />
                  <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={copyIcon}
                    alt="Copy"
                    onClick={() => handleCopy(template)}
                  />
                  <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={deleteIcon}
                    alt="Delete"
                    onClick={() => handleDelete(index)}
                  />
                </span>
              </div>
            </div>

            <div className="flex gap-7 items-center text-lg text-gray-600">
              <p>
                Updated: {new Date(template.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>

              <p>Sent: 342 times</p>

              <span className="flex flex-row items-center">
                <img className="mr-4" src={messageIcon} alt="message" />
                <img className="mr-4" src={chatIcon} alt="chat" />
                <img className="mr-4" src={phoneIcon} alt="phone" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlertAndNotificationComponents;
