import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

function Profile() {
   const { currentUser, signOut } = useContext(AuthContext)

   return (
      <div className="flex flex-col space-y-4 w-full min-h-screen p-24">
         <h3 className="font-bold text-2xl">Welcome! {currentUser?.email}</h3>
         <p>Sign in status: {currentUser && 'active'}</p>
         <button className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-slate-50" onClick={signOut}>Sign Out</button>
      </div>
   )
}

export default Profile;