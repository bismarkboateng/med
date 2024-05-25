"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"


 

export default function Financial({ form }: { form: any }) {

  return (
    <section className="w-[40%] mx-auto">
      <section className="w-full space-y-3">
        <div className="underline text-lg text-center my-5">Financial Information</div>
        <FormField
          control={form.control}
          name="insurance_provider_details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Insurance Provider Details</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="insurance provider details"
                 className="input-field"
                 rows={4}
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
          name="financial_concerns"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Financial Concerns</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="financial concerns of patient"
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