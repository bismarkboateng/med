"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"


 

export default function MedicalHistory({ form }: { form: any }) {

  return (
    <section className="w-[40%] mx-auto">
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
        <FormField
          control={form.control}
          name="family_medical_history"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Family Medical History</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="Patient's family medical history"
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
          name="immunization_records"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Immunization Records</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="Immunization records"
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