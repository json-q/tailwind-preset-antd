import { Divider } from "antd";

const colorPalettes = [
  "red",
  "volcano",
  "orange",
  "lime",
  "gold",
  "yellow",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
  "magenta",
];

const getColorClass = (color: string, index: number) => {
  const classes = {
    red: [
      "bg-red-1",
      "bg-red-2",
      "bg-red-3",
      "bg-red-4",
      "bg-red-5",
      "bg-red-6",
      "bg-red-7",
      "bg-red-8",
      "bg-red-9",
      "bg-red-10",
    ],
    volcano: [
      "bg-volcano-1",
      "bg-volcano-2",
      "bg-volcano-3",
      "bg-volcano-4",
      "bg-volcano-5",
      "bg-volcano-6",
      "bg-volcano-7",
      "bg-volcano-8",
      "bg-volcano-9",
      "bg-volcano-10",
    ],
    orange: [
      "bg-orange-1",
      "bg-orange-2",
      "bg-orange-3",
      "bg-orange-4",
      "bg-orange-5",
      "bg-orange-6",
      "bg-orange-7",
      "bg-orange-8",
      "bg-orange-9",
      "bg-orange-10",
    ],
    lime: [
      "bg-lime-1",
      "bg-lime-2",
      "bg-lime-3",
      "bg-lime-4",
      "bg-lime-5",
      "bg-lime-6",
      "bg-lime-7",
      "bg-lime-8",
      "bg-lime-9",
      "bg-lime-10",
    ],
    gold: [
      "bg-gold-1",
      "bg-gold-2",
      "bg-gold-3",
      "bg-gold-4",
      "bg-gold-5",
      "bg-gold-6",
      "bg-gold-7",
      "bg-gold-8",
      "bg-gold-9",
      "bg-gold-10",
    ],
    yellow: [
      "bg-yellow-1",
      "bg-yellow-2",
      "bg-yellow-3",
      "bg-yellow-4",
      "bg-yellow-5",
      "bg-yellow-6",
      "bg-yellow-7",
      "bg-yellow-8",
      "bg-yellow-9",
      "bg-yellow-10",
    ],
    green: [
      "bg-green-1",
      "bg-green-2",
      "bg-green-3",
      "bg-green-4",
      "bg-green-5",
      "bg-green-6",
      "bg-green-7",
      "bg-green-8",
      "bg-green-9",
      "bg-green-10",
    ],
    cyan: [
      "bg-cyan-1",
      "bg-cyan-2",
      "bg-cyan-3",
      "bg-cyan-4",
      "bg-cyan-5",
      "bg-cyan-6",
      "bg-cyan-7",
      "bg-cyan-8",
      "bg-cyan-9",
      "bg-cyan-10",
    ],
    blue: [
      "bg-blue-1",
      "bg-blue-2",
      "bg-blue-3",
      "bg-blue-4",
      "bg-blue-5",
      "bg-blue-6",
      "bg-blue-7",
      "bg-blue-8",
      "bg-blue-9",
      "bg-blue-10",
    ],
    geekblue: [
      "bg-geekblue-1",
      "bg-geekblue-2",
      "bg-geekblue-3",
      "bg-geekblue-4",
      "bg-geekblue-5",
      "bg-geekblue-6",
      "bg-geekblue-7",
      "bg-geekblue-8",
      "bg-geekblue-9",
      "bg-geekblue-10",
    ],
    purple: [
      "bg-purple-1",
      "bg-purple-2",
      "bg-purple-3",
      "bg-purple-4",
      "bg-purple-5",
      "bg-purple-6",
      "bg-purple-7",
      "bg-purple-8",
      "bg-purple-9",
      "bg-purple-10",
    ],
    magenta: [
      "bg-magenta-1",
      "bg-magenta-2",
      "bg-magenta-3",
      "bg-magenta-4",
      "bg-magenta-5",
      "bg-magenta-6",
      "bg-magenta-7",
      "bg-magenta-8",
      "bg-magenta-9",
      "bg-magenta-10",
    ],
  };
  return classes[color as keyof typeof classes][index];
};

export default function App() {
  return (
    <div className="text-fontSize p-8">
      <Divider>Tailwindcss color palettes for antd</Divider>
      <div className="flex flex-col items-center gap-4 p-4">
        {colorPalettes.map((color) => (
          <div key={color} className="flex gap-1">
            <div className="w-16 text-sm font-bold">{color}</div>
            <div className="flex gap-1">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className={`${getColorClass(color, i)} text-colorTextLightSolid flex h-8 w-8 items-center justify-center rounded text-xs`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider>Rewrite antd component use plugin</Divider>
      <div className="flex justify-center gap-6">
        {/* Card */}
        <div
          style={{ width: 300 }}
          className="text-colorTextHeading border-colorBorderSecondary rounded-borderRadiusLG flex flex-col justify-center border border-solid"
        >
          {/* header */}
          <div className="px-marginLG border-colorBorderSecondary flex h-14 items-center border-b border-solid font-semibold">
            <div className="flex w-full items-center">
              <div className="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                Default size card
              </div>
              <div className="text-fontSize font-normal">
                <a className="text-colorPrimary cursor-pointer">More</a>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="p-marginLG">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </div>
        </div>

        {/* Button */}
        <button
          type="button"
          className="px-margin rounded-borderRadius bg-colorPrimary text-colorTextLightSolid hover:bg-colorPrimaryHover active:bg-colorPrimaryActive h-8 cursor-pointer transition-colors"
        >
          Primary Button
        </button>
      </div>
    </div>
  );
}
