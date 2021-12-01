import "./chart.css";

interface Props {
  dataKey: string;
  labelKey?: string;
  customColors?: boolean;
  data: { [key: string]: string | number }[];
}

const getDataPercentages = (
  data: { [key: string]: string | number }[],
  dataKey: string,
  customColors: boolean
): { [key: string]: string | number }[] => {
  let totalCount = 0;
  data?.map((record) => {
    totalCount +=
      typeof record[dataKey] !== "number"
        ? Number.parseInt(record[dataKey] as string, 10)
        : (record[dataKey] as number);
  });

  return data?.map((record) => ({
    ...record,
    color: customColors
      ? record?.color
      : `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    percentage: (
      (typeof record[dataKey] !== "number"
        ? Number.parseInt(record[dataKey] as string, 10)
        : (record[dataKey] as number) / totalCount) * 100
    ).toFixed(1),
  }));
};

const HumanChart = ({
  data,
  dataKey,
  labelKey = "name",
  customColors = false,
}: Props) => {
  const preparedData = getDataPercentages(data, dataKey, customColors);
  return (
    <div className="chartContainer">
      <div>
        {preparedData?.map((record) => (
          <div key={record[labelKey]} className="labelWithValueContainer">
            <div className="labelContainer">
              <div style={{ background: record?.color }} />
              <div>{record[labelKey]}</div>
            </div>
            {`${record?.percentage}%`}
          </div>
        ))}
      </div>
      <div className="humanContainer">
        {preparedData?.map((record) => (
          <div
            key={record[labelKey]}
            style={{
              height: `${record?.percentage}%`,
              background: record?.color,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HumanChart;
