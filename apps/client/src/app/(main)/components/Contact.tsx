'use client';

import * as z from 'zod';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Input,
  Button,
  Heading,
  Paragraph,
  Icons,
  Textarea,
  ToastProvider,
  useToast,
  Form,
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
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
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
    <Section secondary>
      <div className="relative mx-auto max-w-xl">
        <motion.div
          className="flex flex-col items-center justify-center text-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" variant="title">
            Contact Me
          </Heading>
          <Paragraph as="p" variant="subtle">
            I&apos;m always looking for new opportunities to collaborate.
          </Paragraph>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-12 overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-8 md:p-10 dark:bg-card/40">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 md:space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
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
                    <FormItem className="space-y-3">
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
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
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
                          placeholder="Tell me about your project..."
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary px-2 py-3"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  <Paragraph
                    as="span"
                    size="sm"
                    weight="medium"
                    className="text-primary-foreground"
                  >
                    Send Message
                  </Paragraph>
                  <Icons.Send className="ml-2 size-4" />
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export const Contact = () => (
  <ToastProvider>
    <ContactForm />
  </ToastProvider>
);
