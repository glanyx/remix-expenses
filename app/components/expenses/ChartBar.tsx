const ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="h-[10rem] flex flex-col justify-end">
        <div
          className="rounded-sm bg-primary-200"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="mt-2">{label}</div>
    </div>
  );
};

export default ChartBar;
