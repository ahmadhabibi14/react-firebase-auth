import { ChangeEvent, FormEvent, useState } from "react";
import { SignInUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
   email: "",
   password: "",
}

function Home() {
   const [formField, setFormFields] = useState(defaultFormFields)
   const { email, password } = formField
   const navigate = useNavigate()

   const resetFormFields = () => {
      return (
         setFormFields(defaultFormFields)
      );
   }

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
         // send the email and password to Firebase
         const userCredential = await SignInUser(email, password)
         if (userCredential) {
            resetFormFields()
            navigate("profile")
         }
      } catch (error: any) {
         console.log("User sign in failed", error.message);
      }
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target
      setFormFields({...formField, [name]: value})
   }

   return (
      <div className="flex min-h-screen">
         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
      </div>
   )
}

export default Home;