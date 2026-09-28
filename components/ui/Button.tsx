import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'dark';

// Editorial square buttons — no rounding, no shadow, hairline/solid borders only.
const base =
  'group/btn inline-flex items-center justify-center px-5 py-3 text-[15px] font-bold uppercase tracking-[0.05em] font-sans rounded-none transition-colors duration-200 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2';

const variants: Record<Variant, string> = {
  // Square black CTA — the brand default.
  primary: 'text-white bg-black border border-black hover:bg-accent hover:border-accent',
  // White outline CTA.
  secondary: 'text-black bg-white border border-black hover:bg-black hover:text-white',
  // Accent-filled variant for occasional emphasis.
  dark: 'text-white bg-accent border border-accent hover:bg-black hover:border-black',
};

interface CommonProps {
  variant?: Variant;
  children: React.ReactNode;
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
  className?: string;
}

type ButtonProps = CommonProps &
  (
    | ({ to: string } & Omit<React.ComponentProps<typeof Link>, 'to' | 'className'>)
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>)
    | ({ to?: undefined; href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
  );

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  arrow = false,
  className = '',
  ...rest
}) => {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
      )}
    </>
  );

  if ('to' in rest && rest.to != null) {
    return (
      <Link className={cls} {...(rest as React.ComponentProps<typeof Link>)}>
        {inner}
      </Link>
    );
  }
  if ('href' in rest && rest.href != null) {
    return (
      <a className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
};

export default Button;
