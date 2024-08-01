import { Button } from '@client/components/Button';
import { Input, Label, TextArea } from '@client/components/Input';
import { Heading, Paragraph } from '@client/components/Typography';
import { SubmitContactFormAction } from '../actions';

export const Contact: React.FC = () => (
   <section className="flex w-full flex-col items-center justify-center gap-9">
      <div className="mt-3 max-md:max-w-full">
         <Heading variant="h2" font="medium" size="3xl" className="tracking-tighter">
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
               className="border-light-400/80 focus:border-primary-200 border shadow-md outline-none ring-0 transition-all focus:outline-none focus:ring-0"
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
               className="border-light-400/80 focus:border-primary-200 border shadow-md outline-none ring-0 transition-all focus:outline-none focus:ring-0"
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
               className="border-light-400/80 focus:border-primary-200 border shadow-md outline-none ring-0 transition-all focus:outline-none focus:ring-0"
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
