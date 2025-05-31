import { useTheme } from "@/hooks/useTheme";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {
  const { theme } = useTheme();
  const series = [
    {
      data: [
        [1745334292197, 90772.1244224165],
        [1745338178900, 90907.4586254824],
        [1745341540803, 90772.4620809672],
        [1745345348855, 91486.1373443324],
        [1745348689028, 91502.6279856657],
        [1745352587284, 91443.5723215565],
        [1745355638567, 91181.3170632573],
        [1745359495837, 92780.0330136966],
        [1745363376120, 92890.8207303919],
        [1745366679568, 93518.2613018309],
        [1745370314054, 92980.7766034119],
        [1745374101982, 92765.4019619508],
        [1745377759281, 92861.5655982768],
        [1745381357111, 93191.4633609915],
        [1745384687950, 93539.1658970315],
        [1745388068330, 93533.657115197],
        [1745391878108, 93680.6348780186],
        [1745395769580, 93966.3329099382],
        [1745399044276, 94294.9645143883],
        [1745402817683, 93845.5985464239],
        [1745406492769, 93715.6025584307],
        [1745409885244, 93491.0653455512],
        [1745413493536, 93772.9576858404],
        [1745417099472, 93257.5117747974],
        [1745420430700, 93028.6430888882],
        [1745424266279, 93025.3263416501],
        [1745427899304, 93660.6706395645],
        [1745431495546, 93871.6013775498],
        [1745435084865, 93702.969477483],
        [1745438673892, 93534.4162915868],
        [1745442282310, 93720.3247254361],
        [1745445959898, 93457.7821861316],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area" as const,
      height: 350,
      width: "100%",
      zoom: {
        enabled: false,
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime" as const,
      tickAmount: 6,
    },
    markers: {
      colors: ["#fff"],
      strokeColors: ["#fff"],
      strokeWidth: 2,
      style: "hollow",
      size: 0,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      theme: theme === "dark" ? "dark" : "light",
    },
    fill: {
      colors: ["hsl(262.1 83.3% 57.8%)"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 5,
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
  return (
    <div id="chart-datetime">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
        width="100%"
      ></ReactApexChart>
    </div>
  );
};

export default StockChart;
