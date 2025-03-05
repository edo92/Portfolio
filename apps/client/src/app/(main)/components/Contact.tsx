'use client';

import * as z from 'zod';
import { useState, useCallback, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Input,
  Button,
  Heading,
  Paragraph,
  Icons,
  Form,
  Textarea,
  ToastProvider,
  useToast,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '@libs/ui';
import { Section } from '../../components/Section';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      setIsSubmitting(true);
      try {
        // Simulate API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(values);
        toast({
          type: 'success',
          title: 'Message sent',
          message: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, toast]
  );

  return (
    <motion.div
      ref={formRef}
      className="mt-8 overflow-hidden rounded-lg"
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
                        size="xs"
                        weight="medium"
                        className="text-muted-foreground"
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
                        size="xs"
                        weight="medium"
                        className="text-muted-foreground"
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
                      size="xs"
                      weight="medium"
                      className="text-muted-foreground"
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
                      size="xs"
                      weight="medium"
                      className="text-muted-foreground"
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
                className="group w-full"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                <Paragraph
                  as="span"
                  size="base"
                  weight="medium"
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
      <Section secondary ref={containerRef}>
        <div className="relative mx-auto max-w-xl">
          <motion.div
            className="flex flex-col items-center justify-center text-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h2" variant="title">
              Contact Me
            </Heading>
            <Paragraph as="p" variant="subtle">
              I&apos;m always looking for new opportunities to collaborate.
            </Paragraph>
          </motion.div>

          <ContactForm />
        </div>
      </Section>
    </ToastProvider>
  );
};
