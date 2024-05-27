"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"



export default function Lifestyle({ form }: { form: any }) {

  return (
    <section className="w-full md:w-[75%] lg:w-[50%] mx-auto">
      <section className="w-full space-y-3">
        <div className="underline text-lg text-center my-5">LifeStyle</div>

        <FormField
          control={form.control}
          name="sleep_patterns"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sleep Patterns</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="sleep patterns"
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