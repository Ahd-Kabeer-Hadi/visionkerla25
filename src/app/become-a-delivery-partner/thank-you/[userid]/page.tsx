"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getDriverById } from "@/app/actions/driverActions";
import { Driver } from "@/lib/validation/driver";
import DriverDetailsCard from "@/components/DriverDetailsCard";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import Link from "next/link";

const ThankYouPage: React.FC = () => {
  const { userid } = useParams();
  const [driver, setDriver] = useState<Driver | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!userid || typeof userid !== "string") {
      setError("Invalid or missing driver ID.");
      setLoading(false);
      return;
    }

    const fetchDriver = async () => {
      try {
        const response = await getDriverById(userid);

        if (!response.success) {
          setError(response.error || "Failed to fetch driver details.");
        } else {
          setDriver(response.driver);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("An unexpected error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDriver();
  }, [userid]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        {loading ? (
          
          <p className="text-center text-lg font-medium text-gray-600">Loading your submission...</p>
        ) : error ? (
          <div className="text-center">
            <XCircleIcon className="h-12 w-12 text-red-500 mx-auto" />
            <h1 className="text-xl font-semibold text-red-600 mt-4">Something went wrong</h1>
            <p className="mt-2 text-gray-700">{error}</p>
            <p className="mt-4 text-sm text-gray-500">
              If the issue persists, please contact our support team.
            </p>
          </div>
        ) : driver ? (
          <div className="text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
            <h1 className="text-2xl font-bold text-gray-800 mt-4">Thank You for Your Submission!</h1>
            <p className="mt-2 text-gray-600 text-center max-w-xl mx-auto">
              Your application has been successfully submitted and will be reviewed by our team. You&apos;ll be notified via a phone call once your submission is approved.
            </p>
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-700">Your Submission Details</h2>
              <div className="mt-4">
                <DriverDetailsCard driver={driver} />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Need assistance? {" "}
                <Link href={`tel:+919447772868`} className="hover:underline text-blue-500 font-semibold">
                  Contact our support team
                </Link>
                .
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg font-medium text-gray-600">
            Unable to load driver details. Please refresh the page or try again later.
          </p>
        )}
      </div>
    </div>
  );
};

export default ThankYouPage;
