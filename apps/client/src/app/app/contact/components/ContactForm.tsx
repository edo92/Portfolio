import { Button } from '@client/components/Button';
import { Input, Label, TextArea } from '@client/components/Input';
import { Heading, Paragraph } from '@client/components/Typography';
import { SubmitContactFormAction } from '../actions';

export const Contact: React.FC = () => (
   <section className="flex w-full flex-col items-center justify-center gap-9">
      <div className="mt-5 max-md:max-w-full">
         <Heading variant="h2" font="medium" size="4xl" className="tracking-tighter">
            Get in Touch
         </Heading>
      </div>

      <form
         action={SubmitContactFormAction}
         className="flex w-full flex-col items-center justify-center gap-5 px-12 md:min-w-[42rem] md:max-w-2xl md:px-3"
      >
         <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="fullName">
               <Paragraph variant="small" size="sm" className="ml-1">
                  Full Name
               </Paragraph>
            </Label>
            <Input
               id="fullName"
               name="fullName"
               placeholder="Full name"
               className="border-dark-300 dark:border-light-100 border transition-all"
            />
         </div>

         <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="email">
               <Paragraph variant="small" size="sm" className="ml-1">
                  Email Address
               </Paragraph>
            </Label>
            <Input
               id="email"
               name="email"
               placeholder="Email address"
               className="border-dark-300 dark:border-light-100 border transition-all"
            />
         </div>

         <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="message">
               <Paragraph variant="small" size="sm" className="ml-1">
                  Message
               </Paragraph>
            </Label>
            <TextArea
               id="message"
               name="message"
               placeholder="Leave me a message"
               className="border-dark-300 dark:border-light-100 border transition-all"
            />
         </div>

         <div className="flex w-full justify-end">
            <Button type="submit" variant="primary" className="px-9 py-1">
               <Paragraph variant="span" size="base" font="regular">
                  Submit
               </Paragraph>
            </Button>
         </div>
      </form>
   </section>
);
