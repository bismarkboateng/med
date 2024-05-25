"use client"

import { deleteCookie } from "@/lib/actions";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";

// import { deleteCookie } from "@/lib/actions"
// import { signOut } from "firebase/auth"
// import { auth } from "@/lib/firebase"
// export default function Consultant() {

//   const handleLogout = async () => {
//     try {
//       await signOut(auth)
//       deleteCookie()
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <section>
//      <button onClick={handleLogout}>
//       logout
//      </button>
//     </section>
//   )
// }



export default function Consultant() {

const handleLogout = async () => {
   try {
       await signOut(auth)
       deleteCookie()
     } catch (error) {
       console.log(error)
     }
 }
  return (
    <section className="w-[90%] mt-14 mx-auto lg:w-[80%] border border-red-500">
     <section>
      <button onClick={handleLogout}>
       logout
      </button>
     </section>
      <div className="flex flex-row items-end justify-end">
        <Link href="/consultant/book" className="text-white bg-[#000000] rounded-md font-medium text-lg py-1 px-8
        hover:bg-[#000000]/80 shadow-md">
          Book
        </Link>
      </div>
      <div>
        Search fields
      </div>
      <div>
        all consultations
      </div>
    </section>
  )
}
