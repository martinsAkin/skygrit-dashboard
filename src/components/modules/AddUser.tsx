import type { ModulesProps } from "../../interface";
import ModulesBtnSet from "../molecules/ModulesBtnSet";

const AddUser = ({ onCancel }: ModulesProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg px-7 py-6">
        <div className="mb-4">
          <h1 className="text-[25px] text-[#374151]">Add User</h1>
          <span className="text-[12px] text-[#374151]">
            Provide required information to create a user
          </span>
        </div>

        <form action="" method="post">
          <div className="addUserForm-div">
            <label htmlFor="fullName" className="addUserForm-label">
              Full Name: *
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="addUserForm-input"
            />
          </div>
          <div className="addUserForm-div">
            <label htmlFor="email" className="addUserForm-label">
              Email Address: *
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="addUserForm-input"
              required
            />
          </div>
          <div className="addUserForm-div">
            <label htmlFor="role" className="addUserForm-label">
              Assign Role: *
            </label>
            <select name="role" id="user_role" className="addUserForm-input">
              <option value="-">Select Role</option>
              <option value="superadmin">Super Admin</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <ModulesBtnSet text2="Add User" onCancel={onCancel} />
        </form>
      </div>
    </div>
  );
};

export default AddUser;
