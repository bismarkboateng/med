import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
import { PersonalInFoSchema } from "./validators"


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
 const data = {
  personal_information: {
    fullName: values.fullName,
    gender: values.gender,
    dob: values.dob,
    phoneNumber: values.phoneNumber,
    address: values.address,
    email: values.email,
  },
  date: values.date,
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