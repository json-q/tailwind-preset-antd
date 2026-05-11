import Button from "./components/Button";
import Card from "./components/Card";

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
      "bg-red1",
      "bg-red2",
      "bg-red3",
      "bg-red4",
      "bg-red5",
      "bg-red6",
      "bg-red7",
      "bg-red8",
      "bg-red9",
      "bg-red10",
    ],
    volcano: [
      "bg-volcano1",
      "bg-volcano2",
      "bg-volcano3",
      "bg-volcano4",
      "bg-volcano5",
      "bg-volcano6",
      "bg-volcano7",
      "bg-volcano8",
      "bg-volcano9",
      "bg-volcano10",
    ],
    orange: [
      "bg-orange1",
      "bg-orange2",
      "bg-orange3",
      "bg-orange4",
      "bg-orange5",
      "bg-orange6",
      "bg-orange7",
      "bg-orange8",
      "bg-orange9",
      "bg-orange10",
    ],
    lime: [
      "bg-lime1",
      "bg-lime2",
      "bg-lime3",
      "bg-lime4",
      "bg-lime5",
      "bg-lime6",
      "bg-lime7",
      "bg-lime8",
      "bg-lime9",
      "bg-lime10",
    ],
    gold: [
      "bg-gold1",
      "bg-gold2",
      "bg-gold3",
      "bg-gold4",
      "bg-gold5",
      "bg-gold6",
      "bg-gold7",
      "bg-gold8",
      "bg-gold9",
      "bg-gold10",
    ],
    yellow: [
      "bg-yellow1",
      "bg-yellow2",
      "bg-yellow3",
      "bg-yellow4",
      "bg-yellow5",
      "bg-yellow6",
      "bg-yellow7",
      "bg-yellow8",
      "bg-yellow9",
      "bg-yellow10",
    ],
    green: [
      "bg-green1",
      "bg-green2",
      "bg-green3",
      "bg-green4",
      "bg-green5",
      "bg-green6",
      "bg-green7",
      "bg-green8",
      "bg-green9",
      "bg-green10",
    ],
    cyan: [
      "bg-cyan1",
      "bg-cyan2",
      "bg-cyan3",
      "bg-cyan4",
      "bg-cyan5",
      "bg-cyan6",
      "bg-cyan7",
      "bg-cyan8",
      "bg-cyan9",
      "bg-cyan10",
    ],
    blue: [
      "bg-blue1",
      "bg-blue2",
      "bg-blue3",
      "bg-blue4",
      "bg-blue5",
      "bg-blue6",
      "bg-blue7",
      "bg-blue8",
      "bg-blue9",
      "bg-blue10",
    ],
    geekblue: [
      "bg-geekblue1",
      "bg-geekblue2",
      "bg-geekblue3",
      "bg-geekblue4",
      "bg-geekblue5",
      "bg-geekblue6",
      "bg-geekblue7",
      "bg-geekblue8",
      "bg-geekblue9",
      "bg-geekblue10",
    ],
    purple: [
      "bg-purple1",
      "bg-purple2",
      "bg-purple3",
      "bg-purple4",
      "bg-purple5",
      "bg-purple6",
      "bg-purple7",
      "bg-purple8",
      "bg-purple9",
      "bg-purple10",
    ],
    magenta: [
      "bg-magenta1",
      "bg-magenta2",
      "bg-magenta3",
      "bg-magenta4",
      "bg-magenta5",
      "bg-magenta6",
      "bg-magenta7",
      "bg-magenta8",
      "bg-magenta9",
      "bg-magenta10",
    ],
  };
  return classes[color as keyof typeof classes][index];
};

export default function App() {
  return (
    <>
      <p className="my-2 font-semibold">Current example use tailwindcss v4 & antd v6</p>
      <div className="flex gap-4">
        {/* <Divider>Tailwindcss color palettes for antd</Divider> */}
        <Card title="Tailwindcss color palettes for antd">
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
        </Card>
        {/* <Divider>Rewrite antd component use plugin</Divider> */}
        <Card title="Customized component use antd theme" style={{ height: "fit-content" }}>
          <div className="flex justify-center gap-6">
            <Card
              style={{ width: 300 }}
              title="Card title"
              extra={<a className="text-colorPrimary cursor-pointer">More</a>}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Button>Primary Button</Button>
          </div>
        </Card>
      </div>
    </>
  );
}
