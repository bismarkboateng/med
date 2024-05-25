"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"


 

export default function Social({ form }: { form: any }) {

  return (
    <section className="w-[40%] mx-auto">
      <section className="w-full space-y-3">
        <div className="underline text-lg text-center my-5">Social and Occupational History</div>
        <FormField
          control={form.control}
          name="occupation_and_work_environment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Occupation and work environment</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="occupation and work environment"
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
          name="living_situation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Living Situation</FormLabel>
              <FormControl>
                <Input
                 placeholder="Living situation"
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
          name="social_support"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social Support</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="social support of patient"
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
          name="travel_history"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Travel History</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="patient travel history"
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