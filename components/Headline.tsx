interface HeadlineProps {
  Text: string | React.ReactNode;
}

export default function Headline({ Text }: HeadlineProps) {
  return (
    <div className="mb-6 text-center">
      <p className="text-3xl text-black dark:text-white font-monserrat">
       {Text}
      </p>
      <div className="w-14 mx-auto h-1.5 mt-2 bg-secondary border-0"></div>
    </div>
  );
}
