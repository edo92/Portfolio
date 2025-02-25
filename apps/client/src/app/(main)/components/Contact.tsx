'use client';

import * as z from 'zod';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Textarea, ToastProvider, useToast } from '@libs/ui';
import { Input, Button, Heading, Paragraph } from '@libs/ui';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from '@libs/ui';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        type: 'success',
        title: 'Message sent',
        message: "We'll get back to you as soon as possible.",
      });
      form.reset();
    }, 2000);
  }

  return (
    <section className="relative overflow-hidden bg-background-secondary px-4 py-24 sm:px-6 lg:px-8">
      <div className="container relative mx-auto max-w-lg">
        <motion.div
          className="mb-12 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" weight="bold" className="text-3xl sm:text-4xl">
            Contact Me
          </Heading>
          <Paragraph variant="p" weight="regular" size="md" className="mt-4">
            I&apos;m always looking for new opportunities to collaborate.
          </Paragraph>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-border/70 bg-card/40 p-8 dark:bg-card/40">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <Paragraph
                          size="xs"
                          variant="span"
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
                          size="xs"
                          variant="span"
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
                    <FormItem>
                      <FormLabel>
                        <Paragraph
                          size="xs"
                          variant="span"
                          weight="medium"
                          className="text-muted-foreground"
                        >
                          Message
                        </Paragraph>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                >
                  <Paragraph
                    size="base"
                    variant="span"
                    weight="medium"
                    className="text-primary-foreground"
                  >
                    Send
                  </Paragraph>
                  <Send className="ml-2 size-4" />
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => (
  <ToastProvider>
    <ContactForm />
  </ToastProvider>
);
