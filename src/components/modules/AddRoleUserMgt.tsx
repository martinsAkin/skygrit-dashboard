import type { ModulesProps } from "../../interface";
import ModulesBtnSet from "../molecules/ModulesBtnSet";
import { useState } from "react";
import { createRole } from "../../api/adminService";
import { allModules } from "../../permissionConfig";

const AddRoleUserMgt = ({ onCancel, onSuccess }: ModulesProps) => {
 const [roleName, setRoleName] = useState("");
 const [permissions, setPermissions] = useState<{ [key: string]: string[] }>(
  {},
 );
 const [superAdmin, setSuperAdmin] = useState(false);

 const handleCheckboxChange = (module: string, permission: string) => {
  setPermissions((prev) => {
   const current = prev[module] || [];
   const updated = current.includes(permission)
    ? current.filter((p) => p !== permission)
    : [...current, permission];
   return { ...prev, [module]: updated };
  });
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!roleName.trim()) {
   alert("Role name is required.");
   return;
  }

  const authorities = Object.entries(permissions).flatMap(([module, perms]) =>
   perms.map((perm) => ({
    authority: `${perm}_${module.replace(/\s+/g, "_").toLowerCase()}`,
    authorityFriendlyName: perm,
    module,
   })),
  );

  const payload = {
   roleName,
   authorities,
  };

  try {
   await createRole(payload); // from adminService.ts
   alert("Role created successfully!");
   onCancel();
   onSuccess();
  } catch (error) {
   console.error("Error creating role:", error);
   alert("Failed to create role.");
  }
 };

 return (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
   <div className="bg-white rounded-lg py-2.5 px-5">
    <div className="mb-2">
     <h1 className="text-[25px]">Add Role</h1>
     <span className="text-[13px]">
      Provide required information to create a new wole
     </span>
    </div>
    <form onSubmit={handleSubmit}>
     <div className="addUserForm-div">
      <label htmlFor="role_name" className="addUserForm-label">
       Enter Role Name: *
      </label>
      <input
       type="text"
       name="role_name"
       placeholder="Enter Role name"
       className="addUserForm-input"
       value={roleName}
       onChange={(e) => setRoleName(e.target.value)}
      />
     </div>

     <section className="mt-2.5">
      <h1 className="inline-block mb-1.5">Role Permission</h1>
      <div className="flex flex-col gap-1.5">
       <div className="addUserForm-div">
        <h4 className="addUserForm-label">Super Admin</h4>
        <div className="flex gap-2">
         <input
          type="checkbox"
          name="super_admin"
          id="check_all"
          checked={superAdmin}
          onChange={(e) => {
           const checked = e.target.checked;
           setSuperAdmin(checked);
           if (checked) {
            setPermissions(allModules);
           } else {
            setPermissions({});
           }
          }}
         />

         <label htmlFor="super_admin">Super Admin</label>
        </div>
       </div>
       <div className="addUserForm-div">
        <h4 className="addUserForm-label">User Management</h4>
        <div className="flex gap-2">
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="create_user"
           id="create_user"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("User Management", "create")}
          />
          <label htmlFor="create_user">Create</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="view_user"
           id="view_user"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("User Management", "view")}
          />
          <label htmlFor="view_user">View</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="edit_user"
           id="edit_user"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("User Management", "edit")}
          />
          <label htmlFor="edit_user">Edit</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="delete_user"
           id="delete_user"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("User Management", "delete")}
          />
          <label htmlFor="delete_user">Delete</label>
         </div>
        </div>
       </div>
       <div className="addUserForm-div">
        <h4 className="addUserForm-label">Waiver Request</h4>
        <div className="flex gap-2">
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="review_waiver"
           id="review_waiver"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Waiver Request", "review")}
          />
          <label htmlFor="review_waiver">Review</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="approve_waiver"
           id="approve_waiver"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Waiver Request", "approve")}
          />
          <label htmlFor="approve_waiver">Approve</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="decline_waiver"
           id="decline_waiver"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Waiver Request", "decline")}
          />
          <label htmlFor="decline_waiver">Decline</label>
         </div>
        </div>
       </div>
       <div className="addUserForm-div">
        <h4 className="addUserForm-label">Policy</h4>
        <div className="flex gap-2">
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="create_policy"
           id="create_policy"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Policy", "create")}
          />
          <label htmlFor="create_policy">Create</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="view_policy"
           id="view_policy"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Policy", "view")}
          />
          <label htmlFor="view_policy">View</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="edit_policy"
           id="edit_policy"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Policy", "edit")}
          />
          <label htmlFor="edit_policy">Edit</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="delete_policy"
           id="delete_policy"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Policy", "delete")}
          />
          <label htmlFor="delete_policy">Delete</label>
         </div>
        </div>
       </div>
       <div className="addUserForm-div">
        <h4 className="addUserForm-label">Audit Rail</h4>
        <div className="flex gap-2">
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="view_audit"
           id="view_audit"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("AuditRail", "view")}
          />
          <label htmlFor="view_audit">View</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="download_audit"
           id="download_audit"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("AuditRail", "download")}
          />
          <label htmlFor="download_audit">Download</label>
         </div>
        </div>
       </div>
       <div className="addUserForm-div">
        <h4 className="addUserForm-label">Reports</h4>
        <div className="flex gap-2">
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="view_reports"
           id="view_reports"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Reports", "view")}
          />
          <label htmlFor="view_reports">View</label>
         </div>
         <div className="flex gap-1.5">
          <input
           type="checkbox"
           name="download_reports"
           id="download_reports"
           disabled={superAdmin}
           onChange={() => handleCheckboxChange("Reports", "download")}
          />
          <label htmlFor="download_reports">Download</label>
         </div>
        </div>
       </div>
      </div>
     </section>
     <ModulesBtnSet text2="Add Role" onCancel={onCancel} />
    </form>
   </div>
  </div>
 );
};

export default AddRoleUserMgt;
