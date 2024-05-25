"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { MdEmail } from "react-icons/md";
import { MdKey } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Loader from "@/components/shared/Loader";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { setCookie } from "@/lib/actions";



export default function ConsultantLoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [loginState, setLoginState] = useState("")
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event:  ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser({...user, [name]: value})
    setError("")
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setLoginState("Logging in...")
      const { user: { uid }} = await signInWithEmailAndPassword(auth, user.email, user.password)
      setLoginState("done")
      if (uid) {
        setCookie(uid)
        router.push("/consultant")
      }
    } catch (error) {
      if(error) {
        setError("Invalid Credentials")
        setLoginState("")
      }
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <section>
       <div className="text-2xl text-black font-bold">Login</div>
      </section>
      <section className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <section>
            <label htmlFor="email" className="mb-1 text-lg font-normal text-gray-600">Email</label>
            <div className="flex border border-[#ccc] rounded-md py-1 pr-8 gap-1">
             <MdEmail fontSize={22} className="text-gray-500 ml-1" />
             <input
              type="text"
              name="email"
              id="email"
              required
              placeholder="Email address"
              className="outline-none border-none focus:outline-none focus:border-none"
              onChange={handleChange}
             />
            </div>
          </section>
          <section>
            <label htmlFor="password" className="mb-1 text-lg font-normal text-gray-600">Password</label>
            <div className="flex border border-[#ccc] rounded-md py-1 pr-8 gap-1">
             <MdKey fontSize={22} className="text-gray-500 ml-1" />
             <input
              type="password"
              name="password"
              id="password"
              required
              className="outline-none border-none focus:outline-none focus:border-none"
              onChange={handleChange}
             />
            </div>
          </section>
          <div className="flex flex-col">
          <button
           type="submit"
           className="text-white text-lg font-medium bg-[#000000] px-4 py-2 rounded-md cursor-pointer
           hover:bg-[#000000]/80"
           >
            {loginState === "Logging in..."
             ? <Loader isLoading={true} />
             : loginState === "done"
             ? <div className="flex items-center justify-center"><IoCheckmarkCircleSharp color="white" fontSize={20} /></div>
             : "Login" }
          </button>
          <p className="text-sm text-gray-400">Don&apos;t have login credentials? reach out to the <span className="underline">IT team</span></p>
          </div>
        </form>
      </section>
      {error && <p className="text-red-500">{error}</p>}
    </section>
  )
}
