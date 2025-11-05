import type { ModulesProps } from "../../interface";
import ModulesBtnSet from "../molecules/ModulesBtnSet";

const AddRoleUserMgt = ({ onCancel }: ModulesProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg py-2.5 px-5">
        <div className="mb-2">
          <h1 className="text-[25px]">Add Role</h1>
          <span className="text-[13px]">
            Provide required information to create a new wole
          </span>
        </div>
        <form action="" method="post">
          <div className="addUserForm-div">
            <label htmlFor="role_name" className="addUserForm-label">
              Enter Role Name: *
            </label>
            -
            <input
              type="text"
              placeholder="Enter Role name"
              className="addUserForm-input"
            />
          </div>

          <section className="mt-2.5">
            <h1 className="inline-block mb-1.5">Role Permission</h1>
            <div className="flex flex-col gap-1.5">
              <div className="addUserForm-div">
                <h4 className="addUserForm-label">Super Admin</h4>
                <div className="flex gap-2">
                  <input type="checkbox" name="super_admin" id="check_all" />
                  <label htmlFor="super_admin">Super Admin</label>
                </div>
              </div>
              <div className="addUserForm-div">
                <h4 className="addUserForm-label">User Management</h4>
                <div className="flex gap-2">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="create" id="create" />
                    <label htmlFor="create">Create</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="view" id="view" />
                    <label htmlFor="view">View</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="edit" id="edit" />
                    <label htmlFor="edit">Edit</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="delete" id="delete" />
                    <label htmlFor="Delete">Delete</label>
                  </div>
                </div>
              </div>
              <div className="addUserForm-div">
                <h4 className="addUserForm-label">Waiver Request</h4>
                <div className="flex gap-2">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="review" id="review" />
                    <label htmlFor="review">Review</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="approve" id="approve" />
                    <label htmlFor="approve">Approve</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="decline" id="decline" />
                    <label htmlFor="decline">Decline</label>
                  </div>
                </div>
              </div>
              <div className="addUserForm-div">
                <h4 className="addUserForm-label">Policy</h4>
                <div className="flex gap-2">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="create" id="create" />
                    <label htmlFor="create">Create</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="view" id="view" />
                    <label htmlFor="view">View</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="edit" id="edit" />
                    <label htmlFor="edit">Edit</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="delete" id="delete" />
                    <label htmlFor="Delete">Delete</label>
                  </div>
                </div>
              </div>
              <div className="addUserForm-div">
                <h4 className="addUserForm-label">Audit Rail</h4>
                <div className="flex gap-2">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="View" id="View" />
                    <label htmlFor="View">View</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="download" id="download" />
                    <label htmlFor="download">Download</label>
                  </div>
                </div>
              </div>
              <div className="addUserForm-div">
                <h4 className="addUserForm-label">Reports</h4>
                <div className="flex gap-2">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="View" id="View" />
                    <label htmlFor="View">View</label>
                  </div>
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="download" id="download" />
                    <label htmlFor="download">Download</label>
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
