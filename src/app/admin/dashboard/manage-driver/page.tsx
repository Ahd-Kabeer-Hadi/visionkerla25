/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { getDriverById, updateDriver } from "@/app/actions/driverActions";
import DriverDetailsCard from "@/components/DriverDetailsCard";
import { XCircleIcon, Loader2Icon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { DriverServer } from "@/lib/validation/driverServer";

export default function ManageDriver() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InnerManageDriver />
    </Suspense>
  );
}
function InnerManageDriver() {
  const searchParams = useSearchParams();
  const driverId = searchParams.get("driverId");
  const [driver, setDriver] = useState<DriverServer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [updating, setUpdating] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedStatus, setSelectedStatus] = useState<
    "REVIEWING" | "ACCEPTED" | "REJECTED"
  >("REVIEWING");
  const Router = useRouter();
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

  const handleStatusUpdate = async (
    status: "REVIEWING" | "ACCEPTED" | "REJECTED"
  ) => {
    if (!driver || !driver.id) return;

    setUpdating(true);
    try {
      const response = await updateDriver(driver.id, {
        ...driver,
        status,
      });

      if (response.success) {
        setDriver((prev) => (prev ? { ...prev, status } : prev));
        toast("Success", {
          description: `Driver status updated to ${status}.`,
        });
      } else {
        // @ts-ignore
        console.error("Failed to update driver status:", response.errors);
        toast("Error", {
          // @ts-ignore
          description: response.errors? response.errors
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((error: { message: any }) => error.message)
                .join(", ")
            : "Failed to update driver status.",
        });
      }
    } catch {
      toast("Error", { description: "Something went wrong. Try again later." });
    } finally {
      setUpdating(false);
      setOpenDialog(false);
    }
  };

  const handleEditDriver = (driverId: DriverServer["id"]) => {
    // Correctly types driverId
    if (driverId) {
      Router.push(`/admin/dashboard/manage-driver/edit?driverId=${driverId}`);
    } else {
      console.error("Driver ID is missing!");
    }
  };
  return (
    <main className="flex w-full mx-auto min-h-screen flex-col items-center rounded-xl bg-muted/50 ">
      <div className=" shadow-lg rounded-lg p-6 mx-auto w-full ">
        {loading ? (
          <div className="flex flex-col items-center">
            <Loader2Icon className="h-12 w-12 text-gray-500 animate-spin" />
            <p className="mt-4 text-center text-lg font-medium text-gray-600">
              Loading Delivery Partner details...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center">
            <XCircleIcon className="h-12 w-12 text-red-500" />
            <h1 className="text-xl font-semibold text-red-600 mt-4">
              Something went wrong
            </h1>
            <p className="mt-2 text-center">{error}</p>
            <p className="mt-4 text-sm text-gray-500 text-center">
              If the issue persists, please contact our support team.
            </p>
          </div>
        ) : driver ? (
          <div className="w-full">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-semibold ">
                Delivery Partner Details
              </h1>
              <div>
                <Button
                  variant={"outline"}
                  className="border-blue-700 border-2 text-balance text-blue-700"
                  onClick={() => handleEditDriver(driver.id)}
                >
                  Edit Delivery Partner Details
                </Button>
              </div>
            </div>
            {/* <ScrollArea className="h-[50vh]"> */}
            <DriverDetailsCard driver={driver} />
            {/* </ScrollArea> */}
            <div className="mt-4 gap-4 flex items-center flex-wrap justify-end">
              <Button
                className="bg-yellow-600"
                disabled={updating || driver.status === "REVIEWING"}
                onClick={() => {
                  setSelectedStatus("REVIEWING");
                  setOpenDialog(true);
                }}
              >
                Mark as Reviewing
              </Button>
              <Button
                variant="default"
                className="bg-green-600 text-white"
                disabled={updating || driver.status === "ACCEPTED"}
                onClick={() => {
                  setSelectedStatus("ACCEPTED");
                  setOpenDialog(true);
                }}
              >
                Accept
              </Button>
              <Button
                variant="destructive"
                disabled={updating || driver.status === "REJECTED"}
                onClick={() => {
                  setSelectedStatus("REJECTED");
                  setOpenDialog(true);
                }}
              >
                Reject
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-center text-lg font-medium text-gray-600">
              Unable to load Delivery Partner details. Please refresh the page
              or try again later.
            </p>
          </div>
        )}
      </div>

      {/* Status Change Confirmation Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Status Update</DialogTitle>
          </DialogHeader>
          <p className="text-sm">
            Are you sure you want to change the driver status to{" "}
            <b>{selectedStatus}</b>?
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => handleStatusUpdate(selectedStatus)}
              disabled={updating}
            >
              {updating ? "Updating..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
