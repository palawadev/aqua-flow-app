import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TransaksiTerbaru: React.FC = () => {
  return (
    <div className="p-4 border-2 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">Transaksi Terbaru</h3>
      <p className="text-sm opacity-75 mb-4">You made 265 sales this month.</p>

      <div className="space-y-10 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
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
            <div>
              <h4 className="font-semibold">Olivia Martin</h4>
              <p className="text-sm opacity-75">olivia.martin@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$1,999.00</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
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
            <div>
              <h4 className="font-semibold">Jackson Lee</h4>
              <p className="text-sm opacity-75">jackson.lee@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$39.00</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
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
            <div>
              <h4 className="font-semibold">Isabella Nguyen</h4>
              <p className="text-sm opacity-75">isabella.nguyen@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$299.00</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
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
            <div>
              <h4 className="font-semibold">William Kim</h4>
              <p className="text-sm opacity-75">will@email.com</p>
            </div>
          </div>
          <p className="text-green-500 font-semibold">+$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default TransaksiTerbaru;
