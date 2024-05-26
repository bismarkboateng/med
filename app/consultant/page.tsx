"use client"

import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { deleteCookie } from "@/lib/actions";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import axios from "axios"
import Loader from "@/components/shared/Loader";
import Consultations from "@/components/shared/Consultations";
import SearchFields from "@/components/shared/SearchFields";
import { formatToQuery } from "@/lib/utils";

const GET_ALL_CONSULTATIONS_ENDPOINT = `${process.env.NEXT_PUBLIC_ENDPOINT_BASE_URI}/all`
const SEARCH_CONSULTATIONS = `${process.env.NEXT_PUBLIC_ENDPOINT_BASE_URI}/search`

export default function Consultant() {
  const [consultations, setConsultations] = useState<ConsultationsFromDB[] | null>(null)
  const [consultationsState, setConsultationsState] = useState("")
  const [searched, setSearched] = useState<ConsultationsFromDB[] | null>(null)
  const [searchState, setSearchState] = useState("")
  const [filters, setFilters] = useState({
    date: "",
    patientName: "",
    healthcare_provider: "",
    consultation_type: "",
    medical_condition: "",
  })
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



  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFilters(prevFilters => ({...prevFilters, [name]: value }))
  }

  const handleSearch = async () => {
    const url = formatToQuery(filters)
    setSearchState("loading")
    const { data } = await axios.get(url)
    setSearchState("done")
    setSearched(data)
    console.log(data)
  }

  return (
    <section className="w-[90%] mt-14 mx-auto lg:w-[80%] border p-3 rounded-md">
     <section className="flex flex-row items-center justify-between">
      <section>
        <Button variant="outline" onClick={handleLogout}
         className="py-1 px-8 text-lg text-gray-500 font-light shadow-md ml-4">
         Logout
        </Button>
      </section>

      <section className="flex flex-row items-end justify-end">
          <Link href="/consultant/book" className="text-white bg-[#000000] rounded-md font-medium text-base py-2 px-9
          hover:bg-[#000000]/80 shadow-md">
            Book
          </Link>
      </section>
     </section>

     <section className="mt-20">
      <section className="ml-4">
        <SearchFields
         filters={filters}
         onChange={handleChange}
         handleSearch={handleSearch}
         setSearched={setSearched}
         searchState={searchState}
        />
      </section>

      <section className="mt-10">
        <h4 className="text-lg text-gray-500 mb-5 ml-4">All Consultations</h4>
        <div>
          {!consultations &&  <Loader isLoading={true} color="black" />}
          {consultationsState === "loading..." && <Loader isLoading={true} />}
          {consultations && (
            <section>
              <Consultations consultations={ searched ? searched : consultations} />
            </section>
          )}
        </div>
      </section>
     </section>
    </section>
  )
}
