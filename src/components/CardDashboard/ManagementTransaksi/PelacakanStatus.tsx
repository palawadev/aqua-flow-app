import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PelacakanStatus: React.FC = () => {
  return (
    <div className="p-4 border-2 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Pelacakan Status</h3>
      <p className="text-sm text-gray-500 mb-4">
        You made 265 sales this month.
      </p>

      <div className="space-y-10 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">Olivia Martin</h4>
              <p className="text-sm text-gray-500">olivia.martin@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$1,999.00</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">Jackson Lee</h4>
              <p className="text-sm text-gray-500">jackson.lee@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$39.00</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">Isabella Nguyen</h4>
              <p className="text-sm text-gray-500">isabella.nguyen@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$299.00</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold">William Kim</h4>
              <p className="text-sm text-gray-500">will@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default PelacakanStatus;
