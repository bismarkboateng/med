"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


 

export default function PatientProblem({ form }: { form: any }) {

  return (
    <section className="w-full md:w-[75%] lg:w-[50%] mx-auto">
      <section className="w-full space-y-3">
        <div className="underline text-lg text-center my-5">Patient Problem</div>
        <FormField
          control={form.control}
          name="primary_complaint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Medical Condition</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="Medical condition"
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
          name="duration_of_symptoms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration of Symptoms</FormLabel>
              <FormControl>
                <Input
                 placeholder="Duration of symptoms"
                 className="input-field"
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
          name="nature_of_symptoms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Severity and Nature of Symptoms</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="Severity and nature of symptoms"
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