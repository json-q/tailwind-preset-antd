import { useEffect, useMemo, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { ConfigProvider, type MappingAlgorithm, theme as antTheme } from "antd";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const themes = useMemo(() => {
    const algorithm: MappingAlgorithm[] = [];
    if (isDark) algorithm.push(antTheme.darkAlgorithm);
    return {
      algorithm,
    };
  }, [isDark]);

  return (
    <ConfigProvider theme={themes}>
      <nav className="bg-colorBgContainer border-b-colorBorderSecondary px-marginXL sticky top-0 z-100 flex h-14 items-center justify-between border-b">
        <h1 className="font-semibold">Tailwind-preset-antd</h1>
        <div>
          <div className="[&>button]:p-marginXS [&>button]:hover:bg-colorBgTextHover [&>button]:rounded-borderRadius [&>button]:text-fontSizeLG flex [&>button]:transition-colors">
            <button type="button" onClick={() => setIsDark(false)}>
              <SunIcon />
            </button>
            <button type="button" onClick={() => setIsDark(true)}>
              <MoonIcon />
            </button>
          </div>
        </div>
      </nav>
      <main className="flex flex-col items-center p-8">{children}</main>
    </ConfigProvider>
  );
}
