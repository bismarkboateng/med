"use client"

import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"


 

export default function Lifestyle({ form }: { form: any }) {

  return (
    <section className="w-[40%] mx-auto">
      <section className="w-full space-y-3">
        <div className="underline text-lg text-center my-5">LifeStyle</div>
        <FormField
          control={form.control}
          name="diet_and_nutrition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Diet and Nutrition</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="patient's diet and nutrition"
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
          name="physical_activity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Physical Activity</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="patient physical activity"
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
        <FormField
          control={form.control}
          name="substance_use"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Substance Use</FormLabel>
              <FormControl>
                <Textarea
                 placeholder="substance use"
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