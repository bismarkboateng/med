"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"


 

export default function MedicalHistory({ form }: { form: any }) {

  return (
    <section className="w-full md:w-[75%] lg:w-[50%] mx-auto">
      <section className="w-full space-y-3">
        <div className="underline text-lg text-center my-5">Medical History</div>
        <FormField
          control={form.control}
          name="past_medical_conditions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Past Medical Conditions</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="patient past medical conditions"
                 className="input-field"
                 rows={5}
                 onChange={field.onChange}
                 value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="current_medications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Medications</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="Current medications of patient"
                 className="input-field"
                 rows={5}
                 onChange={field.onChange}
                 value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allergies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allergies</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="Current medications of patient"
                 className="input-field"
                 rows={5}
                 onChange={field.onChange}
                 value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </section>
    </section>
  )
}