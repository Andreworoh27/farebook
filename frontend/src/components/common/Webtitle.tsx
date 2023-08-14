import "./WebtitleStyle.css";

interface WebtitleProps {
  className?: string;
}

export default function Webtitle({ className }: WebtitleProps) {
  const combinedClassName = `webtitle text-[#1877f2] font-bold text-5xl ${className || ""}`;

  return (
    <div>
      <h1 className={combinedClassName}>facebook</h1>
    </div>
  );
}
