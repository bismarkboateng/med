"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { deleteCookie } from "@/lib/actions";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import axios from "axios"
import Loader from "@/components/shared/Loader";
import Consultations from "@/components/shared/Consultations";

const GET_ALL_CONSULTATIONS_ENDPOINT = `${process.env.NEXT_PUBLIC_ENDPOINT_BASE_URI}/all`
export default function Consultant() {
  const [consultations, setConsultations] = useState< ConsultationsFromDB[] | null>(null)
  const [consultationsState, setConsultationsState] = useState("")
  const [error, setError] = useState("")

  const handleLogout = async () => {
    try {
       await signOut(auth)
       deleteCookie()
     } catch (error) {
       console.log(error)
    }
  }

  useEffect(() => {
    const getAllConsultations = async () => {
      try {
        setConsultationsState("loading...")
        const { data } = await axios.get(GET_ALL_CONSULTATIONS_ENDPOINT)
        setConsultationsState("done")
        setConsultations(data)
      } catch (error) {
        setConsultationsState("")
        setError("Something went wrong, Try again")
      }
    }

    getAllConsultations()

  }, [])

  return (
    <section className="w-[90%] mt-14 mx-auto lg:w-[80%] border border-red-500">
     <section className="flex flex-row items-center justify-between">
      <section>
        <Button variant="outline" onClick={handleLogout}
        className="py-1 px-8 text-lg text-gray-500 font-light shadow-md">
         Logout
        </Button>
      </section>

      <section className="flex flex-row items-end justify-end">
          <Link href="/consultant/book" className="text-white bg-[#000000] rounded-md font-medium text-lg py-1 px-8
          hover:bg-[#000000]/80 shadow-md">
            Book
          </Link>
      </section>
     </section>

     <section className="mt-20">
      <section className="ml-4">
        search fields
      </section>

      <section className="mt-10">
        <h4 className="text-lg text-gray-500 mb-5 ml-4">All Consultations</h4>
        <div>
          {!consultations &&  <Loader isLoading={true} color="black" />}
          {consultationsState === "loading..." && <Loader isLoading={true} />}
          {consultations && (
            <section>
              <Consultations consultations={consultations} />
            </section>
          )}
        </div>
      </section>
     </section>
    </section>
  )
}
