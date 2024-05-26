import { z } from "zod"
 
export const PersonalInFoSchema = z.object({
  date: z.date(),
  consultation_type: z.string(),
  healthcare_provider: z.string(),

  fullName: z.string().min(2, "Name must be at least 2 characters").max(400, "Name must be less than 400 characters"),
  gender: z.string(),
  dob: z.date(),
  phoneNumber: z.string(),
  address: z.string(),
  email: z.string().email().optional(),

  past_medical_conditions: z.string().optional(),
  current_medications: z.string().optional(),
  allergies: z.string().optional(),

  medical_condition: z.string().optional(),
  duration_of_symptoms: z.string(),
  nature_of_symptoms: z.string(),


  sleep_patterns: z.string(),  
})
