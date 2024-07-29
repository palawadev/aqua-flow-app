"use client"
import React, { useEffect, useState } from "react";
import { Linechart } from "../../Charts/Linechart";

const UserAktif: React.FC = () => {

  return (
    <div className="text-black p-8  space-y-4 shadow-md border-2 rounded-xl">
      <Linechart />
    </div>
  );
};

export default UserAktif;
