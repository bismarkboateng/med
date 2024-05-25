import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const PersonalInFoInitialValues = {

  // personal history
  fullName: "",
  dob: new Date(),
  gender: "",
  phoneNumber: "",
  address: "",
  email: "",
  emergency_contact_fullName: "",
  emergency_contact_email: "",
  emergency_contact_phoneNumber: "",

  // medical history
  past_medical_conditions: "",
  current_medications: "",
  allergies: "",
  family_medical_history: "",
  immunization_records: "",

  // patient problem
  primary_complaint: "",
  duration_of_symptoms: "",
  nature_of_symptoms: "",
  previous_consultations: "",

  // lifestyle
  diet_and_nutrition: "",
  physical_activity: "",
  sleep_patterns: "",
  substance_use: "",

  // Social and occupational history
  occupation_and_work_environment: "",
  living_situation: "",
  social_support: "",
  travel_history: "",

  // Insurance and financial information
  insurance_provider_details: "",
  financial_concerns: "",
}