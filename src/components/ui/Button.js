import { clsx } from 'clsx';

const Button = ({ children, isLink, className, ...props }) => {
  const Component = isLink ? 'a' : 'button';

  return (
    <Component className={clsx(['btn btn--primary', className])} {...(isLink ? { href: props.href } : {})} {...props}>
      {children}
    </Component>
  );
};

export default Button;
