import * as React from "react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const baseClasses =
      "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground";

    const variantClasses = {
      default: "bg-background text-foreground",
      destructive:
        "border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600",
    };

    const combinedClasses =
      `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

    return (
      <div ref={ref} role="alert" className={combinedClasses} {...props} />
    );
  }
);
Alert.displayName = "Alert";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => {
  const combinedClasses = `text-sm [&_p]:leading-relaxed ${className}`.trim();
  return <div ref={ref} className={combinedClasses} {...props} />;
});
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };
