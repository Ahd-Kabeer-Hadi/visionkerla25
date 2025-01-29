"use client";

import { getDriverById } from "@/app/actions/driverActions";
import { Driver } from "@/lib/validation/driver";
import { XCircleIcon, Loader2Icon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// import { ScrollArea } from "@/components/ui/scroll-area";

import DriverForm from "@/components/DriverForm";

export default function EditDriver() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerEditDriver />
    </Suspense>
  );
}

 function InnerEditDriver() {
  const searchParams = useSearchParams();
  const driverId = searchParams.get("driverId");

  const [driver, setDriver] = useState<Driver | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!driverId || typeof driverId !== "string") {
      setError("Invalid or missing Delivery Partner ID.");
      setLoading(false);
      return;
    }

    const fetchDriver = async () => {
      try {
        const response = await getDriverById(driverId);
        if (!response.success) {
          setError(
            response.error || "Failed to fetch Delivery Partner details."
          );
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
  }, [driverId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex w-full mx-auto min-h-screen flex-col items-centerbg-gray-50 py-8">
        <div className=" shadow-lg rounded-lg p-6 mx-auto w-full">
          {loading ? (
            <div className="flex flex-col items-center">
              <Loader2Icon className="h-12 w-12 animate-spin" />
              <p className="mt-4 text-center text-lg font-medium ">
                Loading Delivery Partner details...
              </p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center">
              <XCircleIcon className="h-12 w-12 text-red-500" />
              <h1 className="text-xl font-semibold text-red-600 mt-4">
                Something went wrong
              </h1>
              <p className="mt-2 text-gray-700 text-center">{error}</p>
              <p className="mt-4 text-sm text-center">
                If the issue persists, please contact our support team.
              </p>
            </div>
          ) : driver ? (
            <div className="w-full">
              <div className="mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-semibold ">
                  Delivery Partner Details
                </h1>
              </div>
              {/* <ScrollArea className="h-[50vh]"> */}
              <DriverForm mode="UPDATE" userId={driver.id} />
              {/* </ScrollArea> */}
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-center text-lg font-medium ">
                Unable to load Delivery Partner details. Please refresh the page
                or try again later.
              </p>
            </div>
          )}
        </div>
      </main>
    </Suspense>
  );
}
