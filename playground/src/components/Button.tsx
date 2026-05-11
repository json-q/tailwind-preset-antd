interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`px-margin rounded-borderRadius bg-colorPrimary text-colorTextLightSolid hover:bg-colorPrimaryHover active:bg-colorPrimaryActive text-fontSize h-8 cursor-pointer transition-colors ${props.className || ""}`}
    />
  );
}
