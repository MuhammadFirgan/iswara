
import { getRole } from "@/lib/action/role.action"
import AddUserForm from "./AddUserForm"
import { auth } from "@clerk/nextjs/server"

export default async function CreateUserForm() {

  const { sessionClaims } = auth()
  const roles = await getRole()  
  const role = sessionClaims?.metadata?.role 

  return (
    <div className="flex justify-end mb-10">
      <AddUserForm roles={roles?.data}/>

    </div>
  )
}
