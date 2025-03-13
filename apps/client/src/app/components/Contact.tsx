'use client';

import * as z from 'zod';
import { useState, useCallback, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Heading,
  Icons,
  Input,
  Paragraph,
  Section,
  Textarea,
  ToastProvider,
  useToast,
} from '@/ui';

interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

const useContactSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = useCallback(
    async (values: ContactFormData) => {
      setIsSubmitting(true);
      try {
        // Replace with actual API call
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        toast({
          type: 'success',
          title: 'Message sent',
          message: "We'll get back to you as soon as possible.",
        });
      } catch {
        toast({
          type: 'error',
          title: 'Error',
          message: 'Failed to send message. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [toast]
  );

  return { isSubmitting, submitForm };
};

export const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  const { isSubmitting, submitForm } = useContactSubmit();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = useCallback(
    async (values: ContactFormData) => {
      await submitForm(values);
      form.reset();
    },
    [submitForm, form]
  );

  return (
    <motion.div
      ref={formRef}
      className="mt-8 max-w-lg overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="rounded-2xl border border-border/70 bg-card/40 p-8 shadow-lg dark:bg-card/40">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Paragraph
                        as="span"
                        variant="label-sm"
                        className="text-body/80"
                      >
                        Name
                      </Paragraph>
                    </FormLabel>
                    <FormControl>
                      <Input size="lg" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Paragraph
                        as="span"
                        variant="label-sm"
                        className="text-body/80"
                      >
                        Email
                      </Paragraph>
                    </FormLabel>
                    <FormControl>
                      <Input
                        size="lg"
                        placeholder="john@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Paragraph
                      as="span"
                      variant="label-sm"
                      className="text-body/80"
                    >
                      Subject
                    </Paragraph>
                  </FormLabel>
                  <FormControl>
                    <Input size="lg" placeholder="Project Inquiry" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Paragraph
                      as="span"
                      variant="label-sm"
                      className="text-body/80"
                    >
                      Message
                    </Paragraph>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project or inquiry..."
                      className="min-h-[150px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-2">
              <Button
                type="submit"
                className="group w-full py-3"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                <Paragraph
                  as="span"
                  variant="button-lg"
                  className="text-primary-foreground"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Paragraph>
                <Icons.Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <ToastProvider>
      <Section ref={containerRef} background="secondary">
        <div className="relative mx-auto max-w-xl">
          <motion.div
            className="flex flex-col items-center justify-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h2" variant="h2">
              Contact Me
            </Heading>
            <Paragraph as="p" variant="body-md" className="text-body/80">
              I&apos;m always looking for new opportunities to collaborate.
            </Paragraph>
          </motion.div>

          <ContactForm />
        </div>
      </Section>
    </ToastProvider>
  );
};
