import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { DriverServer } from "@/lib/validation/driverServer";
import Image from "next/image";
import { Separator } from "./ui/separator";
import sanitizeImageUrl from "@/lib/imageSanitizer";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Avatar } from "./ui/avatar";
import { DialogTitle } from "@radix-ui/react-dialog";

interface DriverDetailsCardProps {
  driver: DriverServer;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const DriverDetailsCard: React.FC<DriverDetailsCardProps> = ({ driver }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="w-full"
    >
      <Card className="w-full shadow-sm rounded-xl border-border">
        <CardContent className="p-4 md:p-6">
          {/* Profile Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6 items-start mb-6"
          >
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-primary">
              <Image
                src={sanitizeImageUrl(driver.photourl)}
                alt="Driver Image"
                width={128}
                height={128}
                className="object-cover"
              />
            </Avatar>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">
                {driver.name}
              </h2>
              <p className="text-muted-foreground">{driver.address}</p>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={`text-sm font-medium px-2 py-1 rounded-md ${
                    driver.status === "REVIEWING"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
                      : driver.status === "ACCEPTED"
                      ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
                      : driver.status === "REJECTED"
                      ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300"
                  }`}
                >
                  {driver.status}
                </Badge>
              </div>
            </div>
          </motion.div>

          <Separator className="mb-6" />

          {/* Details Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            <DetailItem label="Email" value={driver.email} />
            <DetailItem label="Phone" value={driver.phoneNumber} />
            <DetailItem
              label="Emergency Contact"
              value={`${driver.emergencyContactName} - `}
            >
              <Link
                href={`tel:${driver.emergencyContact}`}
                className="hover:underline text-primary"
              >
                {driver.emergencyContact}
              </Link>
            </DetailItem>
            <DetailItem label="District" value={driver.district} />
            <DetailItem label="Panchayat" value={driver.panchayat} />
            <DetailItem
              label="Aadhaar Number"
              value={driver.aadhaarCardNumber}
            />
            <DetailItem
              label="License Number"
              value={driver.driversLicenseNumber}
            />
            <DetailItem label="Vehicle RC" value={driver.rcNumber} />
          </motion.div>

          <Separator className="mb-6" />

          {/* Documents Grid */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Identity Documents</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <DocumentPreview
                label="Aadhaar Card"
                url={driver.aadharCardUrl}
              />
              <DocumentPreview
                label="Driver's License"
                url={driver.driverLicenseUrl}
              />
              <DocumentPreview label="Vehicle RC" url={driver.rcUrl} />
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const DetailItem: React.FC<{
  label: string;
  value?: string;
  children?: React.ReactNode;
}> = ({ label, value, children }) => (
  <div className="space-y-1">
    <p className="text-sm text-muted-foreground">{label}</p>
    {value && <p className="font-medium">{value}</p>}
    {children}
  </div>
);

const DocumentPreview: React.FC<{ label: string; url: string }> = ({
  label,
  url,
}) => (
  <Dialog>
    <DialogTrigger>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="aspect-video relative rounded-lg overflow-hidden border cursor-pointer"
      >
        <Image
          src={sanitizeImageUrl(url)}
          alt={label}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-white text-sm font-medium">{label}</span>
        </div>
      </motion.div>
    </DialogTrigger>
    <DialogContent className="max-w-4xl p-4">
      <DialogTitle className="text-sm p-0">{label}</DialogTitle>

      <Image
        src={sanitizeImageUrl(url)}
        alt={label}
        width={1200}
        height={800}
        className="object-contain max-h-[80vh] rounded-md"
      />
    </DialogContent>
  </Dialog>
);

export default DriverDetailsCard;
