import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/utils';
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}
const buttonVariants = cva(
  'py-2 px-4 rounded-lg font-medium cursor-pointer hover:shadow-xl hover:shadow-primary-button/40 hover:-translate-y-1 hover:transition-all hover:ease-in hover:duration-300',
  {
    variants: {
      variant: {
        default: 'bg-primary-button',
        outline: 'bg-white text-primary-button',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
const Button = ({ children, className, variant, ...props }: Props) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
