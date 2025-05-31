import React from "react";
import {
  Card,

} from "../ui/card";
import { Button } from "../ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";

const Home = () => {
  const [category, setCategory] = React.useState("all");

  const categoryClickHandler = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="flex flex-row justify-center h-[calc(100vh-6.1rem)] gap-2 p-2 overflow-auto">
      <Card className="w-[50%] p-4">
        <div className="flex items-center gap-4">
          <Button
            variant={category == "all" ? "default" : "outline"}
            className="rounded-full"
            onClick={() => categoryClickHandler("all")}
          >
            All
          </Button>
          <Button
            variant={category == "top-50" ? "default" : "outline"}
            className="rounded-full"
            onClick={() => categoryClickHandler("top-50")}
          >
            Top 50
          </Button>
          <Button
            variant={category == "top-gainers" ? "default" : "outline"}
            className="rounded-full"
            onClick={() => categoryClickHandler("top-gainers")}
          >
            Top Gainers
          </Button>
          <Button
            variant={category == "top-losers" ? "default" : "outline"}
            className="rounded-full"
            onClick={() => categoryClickHandler("top-losers")}
          >
            Top Losers
          </Button>
        </div>

        <AssetTable />
      </Card>
      <Card className="w-[50%]">
        <StockChart />
      </Card>
    </div>
  );
};

export default Home;
