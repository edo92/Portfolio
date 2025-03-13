export const Button: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};
