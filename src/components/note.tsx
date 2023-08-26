import cn from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Note({ children, className }: Props) {
  return (
    <p
      className={cn(
        className,
        "p-4 inline-block rounded-sm text-yellow-600 bg-yellow-100"
      )}
    >
      {children}
    </p>
  );
}
