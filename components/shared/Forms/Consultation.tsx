import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import moment from "moment"

 

export default function Consultation({ form }: { form: any }) {

  return (
    <section className="w-[40%] mx-auto">
      <section className="w-full space-y-3">
        <div className="underline text-lg text-center my-5">Consultation</div>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel><br />
              <FormControl>
                <Input
                 value={moment(field.value).format("YYYY-MM-DD")}
                 onChange={field.onChange}
                 className="input-field"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
        <FormField
          control={form.control}
          name="consultation_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Consultation Type</FormLabel>
              <FormControl>
                <Input
                 placeholder="Consultation type"
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
          name="healthcare_provider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Health Care Provider</FormLabel>
              <FormControl>
                <Input
                 placeholder="Health care provider"
                 className="input-field"
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