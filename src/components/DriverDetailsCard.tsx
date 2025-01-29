import React from "react";
import { Driver } from "@/lib/validation/driver";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface DriverDetailsCardProps {
  driver: Driver;
}
const DriverDetailsCard: React.FC<DriverDetailsCardProps> = ({ driver }) => {
  return (
    <Card className="w-full shadow-none rounded-lg border border-gray-200 mt-6 dark:border-gray-700">
      <CardContent className="space-y-6 p-8">
        <div className="flex items-center gap-8">
          <span className="font-medium dark:text-gray-300">Status:</span>
          <Badge
            variant={"outline"}
            className={`px-4 py-2 rounded-full max-w-28 text-center 
            ${driver.status === "REVIEWING" && "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"} 
            ${driver.status === "ACCEPTED" && "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"} 
            ${driver.status === "REJECTED" && "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"} 
            font-semibold`}
          >
            {driver.status}
          </Badge>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Full Name:</span>
            <span className="font-medium dark:text-gray-100">{driver.name}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Email:</span>
            <span className="font-medium dark:text-gray-100">{driver.email}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Phone Number:</span>
            <span className="font-medium dark:text-gray-100">{driver.phoneNumber}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Emergency Contact:</span>
            <span className="font-medium dark:text-gray-100">
              {driver.emergencyContactName} - PH:{" "}
              <Link href={`tel:${driver.emergencyContact}`} className="hover:underline">
                {driver.emergencyContact}
              </Link>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Address:</span>
            <span className="font-medium text-justify dark:text-gray-100">{driver.address}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">District:</span>
            <span className="font-medium dark:text-gray-100">{driver.district}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Panchayat:</span>
            <span className="font-medium dark:text-gray-100">{driver.panchayat}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Aadhaar Card Number:</span>
            <span className="font-medium dark:text-gray-100">{driver.aadhaarCardNumber}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Driver&apos;s License:</span>
            <span className="font-medium dark:text-gray-100">{driver.driversLicenseNumber}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium dark:text-gray-300">Vehicle RC:</span>
            <span className="font-medium dark:text-gray-100">{driver.rcNumber}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverDetailsCard;
