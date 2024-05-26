import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
import { PersonalInFoSchema } from "./validators"
import moment from "moment"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const PersonalInFoInitialValues = {
  date: new Date(),
  consultation_type: "",
  healthcare_provider: "",
  
  // personal history
  fullName: "",
  dob: new Date(),
  gender: "",
  phoneNumber: "",
  address: "",
  email: "",

  // medical history
  past_medical_conditions: "",
  current_medications: "",
  allergies: "",


  // patient problem
  primary_complaint: "",
  duration_of_symptoms: "",
  nature_of_symptoms: "",

  // lifestyle
  sleep_patterns: "",

}


export const formatValues = (values: z.infer<typeof PersonalInFoSchema>) => {
 
  const formattedDate = moment(values.date).format("YYYY-MM-DD")
  const formatteDOB = moment(values.dob).format("YYYY-MM-DD")

 const data = {
  personal_information: {
    fullName: values.fullName,
    gender: values.gender,
    dob: formatteDOB,
    phoneNumber: values.phoneNumber,
    address: values.address,
    email: values.email,
  },
  date: formattedDate,
  consultation_type: values.consultation_type,
  healthcare_provider: values.healthcare_provider,
  medical_history: {
    past_medical_conditions: values.past_medical_conditions,
    current_medications: values.current_medications,
    allergies: values.allergies,
  },
  patient_problem: {
    medical_condition: values.medical_condition,
    duration_of_symptoms: values.duration_of_symptoms,
    nature_of_symptoms: values.nature_of_symptoms
  },
  lifestyle: {
    sleep_patterns: values.sleep_patterns,
  }
 }

 return data
}

export const formatToQuery = (filters: filters) => {
  return `
   ${process.env.NEXT_PUBLIC_ENDPOINT_BASE_URI}/search?date=${filters.date}&patientName=${filters.patientName}&healthcare_provider=${filters.healthcare_provider}&consultation_type=${filters.consultation_type}&medical_condition=${filters.medical_condition}
  `
}

export const formatPatientQuery = (patientName: string) => {
  return `
   ${process.env.NEXT_PUBLIC_ENDPOINT_BASE_URI}/patient/search?patientName=${patientName}
  `
}