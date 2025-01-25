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
    <Card className="w-full max-w-3xl shdadow-none rounded-lg border border-gray-200 mt-6">
      {/* <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center py-4 rounded-t-lg">
        <CardTitle className="text-2xl font-extrabold">Driver Details</CardTitle>
      </CardHeader> */}
      <CardContent className="space-y-6 p-8">
        <div className="flex items-center gap-8">
          <span className="font-medium text-gray-600">Status:</span>
          <Badge variant={"outline"}
            className={`px-4 py-2 rounded-full max-w-28 text-center 
            ${driver.status === "REVIEWING" && "bg-blue-100 text-blue-700"} 
            ${driver.status === "ACCEPTED" && "bg-green-100 text-green-700"} 
            ${driver.status === "REJECTED" && "bg-red-100 text-red-700"} 
            font-semibold`}
          >
            {driver.status}
          </Badge>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">Full Name:</span>
            <span className="text-gray-800 font-medium">{driver.name}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="text-gray-800 font-medium">{driver.email}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">Phone Number:</span>
            <span className="text-gray-800 font-medium">
              {driver.phoneNumber}
            </span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">
              Emergency Contact:
            </span>
            <span className="text-gray-800 font-medium">
              {driver.emergencyContactName} - PH:{" "}
              <span>
                {" "}
                <Link href={`tel:${driver.emergencyContact}`} className="hover:underline">
                  {driver.emergencyContact}
                </Link>
              </span>{" "}
            </span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">Address:</span>
            <span className="text-gray-800 font-medium text-justify">{driver.address}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">District:</span>
            <span className="text-gray-800 font-medium">{driver.district}</span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">Panchayat:</span>
            <span className="text-gray-800 font-medium">
              {driver.panchayat}
            </span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">
              Aadhaar Card Number:
            </span>
            <span className="text-gray-800 font-medium">
              {driver.aadhaarCardNumber}
            </span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">Driver&apos;s License:</span>
            <span className="text-gray-800 font-medium">
              {driver.driversLicenseNumber}
            </span>
          </div>
          <div className="flex gap-8">
            <span className="font-medium text-gray-600">Vehicle RC:</span>
            <span className="text-gray-800 font-medium">{driver.rcNumber}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DriverDetailsCard;
