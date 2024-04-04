export default function NavMenuItem({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="cursor-pointer hover-primary font-medium w-fit text-white"
      onClick={onClick && onClick}
    >
      {label}
    </div>
  );
}
