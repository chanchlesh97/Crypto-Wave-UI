
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';

const AssetTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="text-center">
          <TableRow>
            <TableHead className="text-center w-[150px]">Coin</TableHead>
            <TableHead className="text-center">Symbol</TableHead>
            <TableHead className="text-center">Volume</TableHead>
            <TableHead className="text-center">Market Cap</TableHead>
            <TableHead className="text-center">24h</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    className="h-10 w-10"
                    src="https://cdn-icons-png.flaticon.com/128/6557/6557081.png"
                    alt="Coin icon"
                  />
                </Avatar>
                <span>Bitcoin</span>
              </div>
            </TableCell>
            <TableCell>Bitcoin</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>12/12/2023</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default AssetTable
