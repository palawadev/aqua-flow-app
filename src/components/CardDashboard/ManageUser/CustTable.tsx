import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const employees = [
  {
    date: "13/1",
    employee: "Reza Aditria",
    customerId: "1101201282",
    customerStatus: "Permanent",
    status: "Present",
    clockIn: "09:00 AM",
    clockOut: "10:00 PM",
    overtime: "0h",
  },
  // Add more data as needed
];

export function CustTable() {
  return (
    <div className="p-6 shadow-md border rounded-xl   w-full mx-auto mt-8">
      <div className="flex items-center mb-4">
        <div className="relative w-full md:w-1/3 ">
          <input
            type="text"
            placeholder="Search by name, ID"
            className="p-2 pl-10 border rounded-3xl w-full"
          />
          <span className="absolute left-2 top-2.5 text-gray-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14A6 6 0 108 2a6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <button className="ml-2 p-2 bg-blue-500 text-white flex items-center rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Filter
        </button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Date
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Employee
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Customer ID
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Customer Status
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Status
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Clock In
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Clock Out
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider bg-blue-500">
              Overtime
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" divide-y divide-gray-200">
          {employees.map((employee, index) => (
            <TableRow key={index} className="hover:bg-gray-100">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.date}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="ml-2">{employee.employee}</span>
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.customerId}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.customerStatus}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.status}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.clockIn}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.clockOut}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {employee.overtime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CustTable;
