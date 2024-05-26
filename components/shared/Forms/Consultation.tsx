import { FormControl, FormField, FormItem,
  FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar, CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

 

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
               <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {field.value ? format(field.value, "PPP") : <span>Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    onSelect={field.onChange}
                    selected={field.value}
                    
                  />
                </PopoverContent>
               </Popover>
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