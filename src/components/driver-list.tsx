"use client";

import { useEffect, useState } from "react";
import { listAllDrivers } from "@/app/actions/driverActions";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Driver } from "@/lib/validation/driver";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";

export function DriverList() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const pageSize = 20;
  const Router = useRouter();

  useEffect(() => {
    const fetchDrivers = async () => {
      setLoading(true);
      try {
        const response = await listAllDrivers(page, pageSize);
        if (response.success) {
          setDrivers(response.drivers);
          console.log(response.drivers);
          setTotal(response.total);
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        console.error("Failed to fetch drivers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, [page]);

  const handleViewDriver = (driverId: Driver["id"]) => {
    // Correctly types driverId
    if (driverId) {
      Router.push(`/admin/dashboard/manage-driver?driverId=${driverId}`);
    } else {
      console.error("Driver ID is missing!");
    }
  };

  return (
    <div className="p-6 min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
      <h2 className="text-xl font-semibold mb-4">
        Recent Delivery Partner Onboardings
      </h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableCaption>List of registered Delivery Partners</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Panchayat</TableHead>
              <TableHead>District</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={6}>
                      <Skeleton className="h-6 w-full" />
                    </TableCell>
                  </TableRow>
                ))
              : drivers.map((driver) => (
                  <TableRow key={driver.phoneNumber}>
                    <TableCell className="font-medium">{driver.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={"outline"}
                        className={`px-4 py-2 rounded-full max-w-28 text-center 
                                  ${
                                    driver.status === "REVIEWING" &&
                                    "bg-blue-100 text-blue-700"
                                  } 
                                  ${
                                    driver.status === "ACCEPTED" &&
                                    "bg-green-100 text-green-700"
                                  } 
                                  ${
                                    driver.status === "REJECTED" &&
                                    "bg-red-100 text-red-700"
                                  } 
                                  font-semibold`}
                      >
                        {driver.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{driver.phoneNumber}</TableCell>
                    <TableCell>{driver.panchayat}</TableCell>
                    <TableCell>{driver.district}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-medium text-ellipsis rounded-lg outline-sidebar-primary shadow-sm"
                        onClick={() => handleViewDriver(driver.id)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-4 w-full flex justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page === 1}
              />
            </PaginationItem>
            {Array.from({ length: Math.ceil(total / pageSize) }).map(
              (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => setPage(index + 1)}
                    isActive={page === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  setPage((prev) => (prev * pageSize < total ? prev + 1 : prev))
                }
                aria-disabled={page * pageSize >= total}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
