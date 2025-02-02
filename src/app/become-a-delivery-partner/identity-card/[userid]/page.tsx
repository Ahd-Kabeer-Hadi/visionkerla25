"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getDriverById } from "@/app/actions/driverActions";
import DriverDetailsCard from "@/components/DriverDetailsCard";
import { XCircleIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { DriverServer } from "@/lib/validation/driverServer";
import { motion } from "framer-motion";

const IdentityPage: React.FC = () => {
  const { userid } = useParams();
  const [driver, setDriver] = useState<DriverServer | null>(null);
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
          setError(response.error || "Could not retrieve ID details.");
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
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="shadow-xl rounded-2xl p-8 max-w-3xl w-full bg-white border"
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Loader2 className="h-12 w-12 text-gray-600 animate-spin" />
              <p className="text-center text-lg font-medium text-gray-600 mt-4">
                Loading your ID...
              </p>
            </div>
          ) : error ? (
            <div className="text-center space-y-4">
              <XCircleIcon className="h-16 w-16 text-red-500 mx-auto" />
              <h1 className="text-xl font-semibold text-red-600">
                Unable to Load ID
              </h1>
              <p className="text-gray-700 text-sm">{error}</p>
              <p className="text-sm text-gray-500">
                Please refresh the page or contact support if the issue persists.
              </p>
              <Link
                href="tel:+919447772868"
                className="text-blue-500 font-semibold hover:underline"
              >
                Contact Support
              </Link>
            </div>
          ) : driver ? (
            <div className=" space-y-6">
              <h1 className="text-2xl w-full text-center font-bold text-gray-800">Delivery Partner ID Card</h1>
              <p className="text-gray-600 text-sm  w-full text-center">Official Identification of Mission Kerala 2025</p>
              <DriverDetailsCard driver={driver} />
              <p className="text-sm text-gray-500">
                Need help? {" "}
                <Link
                  href="tel:+919447772868"
                  className="hover:underline text-blue-500 font-semibold"
                >
                  Contact Support
                </Link>
                .
              </p>
            </div>
          ) : (
            <p className="text-center text-lg font-medium text-gray-600">
              Unable to display your ID. Please try again later.
            </p>
          )}
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default IdentityPage;
