import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import moment from "moment"
import Loader from "./Loader"

type SearchFieldsProps = {
    filters: filters;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    setSearched:  Dispatch<SetStateAction<ConsultationsFromDB[] | null>>;
    searchState: string;
}

export default function SearchFields({ filters, onChange, handleSearch, setSearched, searchState }: SearchFieldsProps ) {
  const formattedDate = filters.date ? moment(filters.date as string).format("YYYY-MM-DD") : '';
  
  return (
    <section className="flex flex-row items-center justify-between">
     <section className="w-[75%] flex flex-row items-center">
      <div className="flex flex-row gap-4">
       <Input
        type="date"
        placeholder="date"
        className="input-field"
        name="date"
        value={formattedDate}
        onChange={onChange}
       />
       <Input
        type="text"
        placeholder="patient name"
        className="input-field"
        name="patientName"
        value={filters.patientName}
        onChange={onChange}
       />
       <Input
        type="text"
        placeholder="health care provider"
        className="input-field"
        name="healthcare_provider"
        value={filters.healthcare_provider}
        onChange={onChange}
       />
       <Input
        type="text"
        placeholder="consultation type"
        className="input-field"
        name="consultation_type"
        value={filters.consultation_type}
        onChange={onChange}
       />
       <Input
        type="text"
        placeholder="medical condition"
        className="mr-auto input-field"
        name="medical_condition"
        value={filters.medical_condition}
        onChange={onChange}
       />
      </div>
     </section>
     <div className="flex flex-row items-center gap-2">
      <div
       className="bg-black text-white py-[7px] px-3 rounded-md text-center font-medium
       cursor-pointer shadow-md"
       onClick={() => setSearched(null)}>
        <p>All</p>
      </div>
      <Button
       className="ml-auto shadow-md py-1 px-8 font-medium text-base bg-black"
       onClick={handleSearch}
      >
       {searchState === "loading"
       ? <Loader isLoading={true} color="white" />
       : "Apply"
       }
      </Button>
     </div>
    </section>
  )
}
