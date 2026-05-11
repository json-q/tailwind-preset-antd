interface CardProps {
  title?: string;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
}
export default function Card(props: CardProps) {
  return (
    <div
      style={props.style}
      className="text-fontSize text-colorTextHeading border-colorBorderSecondary rounded-borderRadiusLG flex flex-col justify-center border border-solid"
    >
      {/* header */}
      <div className="px-marginLG border-colorBorderSecondary flex h-14 items-center border-b font-semibold">
        <div className="flex w-full items-center">
          <div className="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            {props.title}
          </div>
          <div className="text-fontSize font-normal">{props.extra}</div>
        </div>
      </div>
      {/* content */}
      <div className="p-marginLG">{props.children}</div>
    </div>
  );
}
