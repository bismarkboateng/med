"use client"

import { Input } from "@/components/ui/input"
import { formatPatientQuery } from "@/lib/utils"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import Consultations from "@/components/shared/Consultations";
import { Button } from "@/components/ui/button"
import Loader from "@/components/shared/Loader"



export default function PatientSearchPage() {
  const [searchState, setSearchState] = useState("")
  const [searched, setSearched] = useState<ConsultationsFromDB[] | null>(null)
  const [patientName, setPatientName] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPatientName(event.target.value)
  }

  const handleSearch = async () => {
    const url = formatPatientQuery(patientName)
    setSearchState("loading")
    const { data } = await axios.get(url)
    setSearchState("done")
    setSearched(data)
  }

  return (
    <section className="w-[90%] mt-14 mx-auto lg:w-[80%] border p-3 rounded-md">
      <h1 className="text-lg text-center">Search for your consultation</h1>

      <section className="mt-10 flex flex-row items-center justify-between">
       <Input
        type="text"
        placeholder="type your name"
        className="input-field w-[20%]"
        name="patientName"
        value={patientName}
        onChange={handleChange}
       />
       <Button
        className="ml-auto shadow-md py-1 px-8 font-medium text-base bg-black"
        onClick={handleSearch}
       >
        {searchState === "loading"
       ? <Loader isLoading={true} color="white" />
       : "Search"
       }
       </Button>
      </section>

      <section className="mt-10">
       {!searched && <p className="text-center text-gray-500">No Results Found!</p>}
       {searched && (
        <section>
          <Consultations consultations={searched} />
        </section>
       )}
      </section>
    </section>
  )
}