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
            <TableRow key={index} className="hover:opacity-80">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm opacity-75">
                {employee.date}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm  flex items-center">
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/100395127?s=100&v=4"
                    alt="avatar"
                  />
                  <AvatarFallback>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </AvatarFallback>
                </Avatar>
                <span className="ml-2">{employee.employee}</span>
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm opacity-75">
                {employee.customerId}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm opacity-75">
                {employee.customerStatus}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm opacity-75">
                {employee.status}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm opacity-75">
                {employee.clockIn}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm opacity-75">
                {employee.clockOut}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm opacity-75">
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
