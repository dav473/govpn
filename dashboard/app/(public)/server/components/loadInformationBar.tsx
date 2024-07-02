interface Props {
  value: number[];
}

export default function LoadInformationBar({ value }: Props) {
  return (
    <div className="flex flex-row">
      {value.map((item, index) => {
        return (
          <div key={index} className="basis-1/3 flex flex-col">
            <p className="text-center">{item}</p>
          </div>
        );
      })}
    </div>
  );
}
