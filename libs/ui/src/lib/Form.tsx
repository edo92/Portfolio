'use client';

import * as React from 'react';
import {
  Path,
  Controller,
  FieldValues,
  FormProvider,
  UseFormReturn,
  ControllerRenderProps,
} from 'react-hook-form';
import { Paragraph } from './Typography';

interface FormProps<T extends FieldValues> extends UseFormReturn<T> {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyValue = any;

export function Form<T extends FieldValues>({
  children,
  ...form
}: FormProps<T>) {
  return (
    <FormProvider {...(form as UseFormReturn<T>)}>{children}</FormProvider>
  );
}

export function FormControl({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="mt-1" {...props}>
      {children}
    </div>
  );
}

export function FormItem({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="space-y-1" {...props}>
      {children}
    </div>
  );
}

export function FormLabel({
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="block text-sm font-medium text-gray-700" {...props}>
      {children}
    </label>
  );
}

interface FormFieldProps<T extends FieldValues> {
  control: UseFormReturn<T>['control'];
  name: string;
  render: (args: {
    field: ControllerRenderProps<T, AnyValue>;
  }) => React.ReactNode;
}

interface FieldContextValue {
  error?: { message?: string };
}

const FormFieldContext = React.createContext<FieldContextValue | null>(null);

export function FormField<T extends FieldValues>({
  control,
  name,
  render,
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field, fieldState }) => (
        <FormFieldContext.Provider value={{ error: fieldState.error }}>
          {render({ field: field as ControllerRenderProps<T> })}
        </FormFieldContext.Provider>
      )}
    />
  );
}

export function useFormFieldContext() {
  const context = React.useContext(FormFieldContext);
  if (!context) {
    throw new Error('useFormFieldContext must be used within a FormField');
  }
  return context;
}

export function FormMessage({
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  const { error } = useFormFieldContext();
  if (!error) return null;
  return (
    <Paragraph
      as="p"
      size="xs"
      weight="medium"
      className="text-destructive"
      {...props}
    >
      {error.message}
    </Paragraph>
  );
}
