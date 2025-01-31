/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DriverSchema } from "@/lib/validation/driver";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  getDriverById,
  submitDriver,
  updateDriver,
} from "@/app/actions/driverActions";
import { Districts } from "@/lib/keralaDistricts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
import { redirect, useRouter } from "next/navigation";
import TermsAndConditions from "./tnc";

interface DriverFormProps {
  mode: "CREATE" | "UPDATE";
  userId?: string;
}

// Ensure correct typings for districts and panchayats
type DistrictMap = Record<string, string[]>;

export function DriverForm({ mode = "CREATE", userId }: DriverFormProps) {
  if (mode === "UPDATE" && !userId) {
    toast("Missing User ID", {
      description:
        "User ID is required to update the driver details. Please try again. If this issue persists, please contact support.",
    });
  }
  const form = useForm<z.infer<typeof DriverSchema>>({
    resolver: zodResolver(DriverSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      emergencyContact: "",
      emergencyContactName: "",
      address: "",
      district: "",
      panchayat: "",
      aadhaarCardNumber: "",
      driversLicenseNumber: "",
      rcNumber: "",
      status: "REVIEWING",
    },
  });

  // Fetch driver data when in UPDATE mode
  useEffect(() => {
    if (mode === "UPDATE" && userId) {
      const fetchDriver = async () => {
        try {
          const response = await getDriverById(userId);
          if (!response.success) {
            toast("Error", {
              description: response.error || "Failed to fetch driver details.",
            });
          } else {
            form.reset(response.driver); // Update form with fetched data
          }
        } catch (error) {
          toast("Oops! Something went wrong", {
            description: "Couldn't retrieve user details.",
          });
        }
      };
      fetchDriver();
    }
  }, [mode, userId, form]);

  const router = useRouter();
  const [panchayatOptions, setPanchayatOptions] = useState<string[]>([]);
  const [showTermsDialog, setShowTermsDialog] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Dynamically update panchayat options based on selected district
  useEffect(() => {
    const selectedDistrict = form.watch("district");

    if (selectedDistrict) {
      // Find the district data based on the selected district
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const districtData = (Districts as DistrictMap).find((districtObj) =>
        Object.keys(districtObj).includes(selectedDistrict)
      );

      if (districtData) {
        setPanchayatOptions(districtData[selectedDistrict] || []);
      } else {
        setPanchayatOptions([]);
      }
    } else {
      setPanchayatOptions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("district")]);

  const onSubmit = async (data: z.infer<typeof DriverSchema>) => {
    try {
      if (mode === "UPDATE") {
        if (!userId) {
          toast("Missing User ID", {
            description:
              "User ID is required to update the driver details. Please try again.",
          });
          return;
        }

        const result = await updateDriver(userId, data);
        result;

        if (result.success) {
          toast("Update Successful", {
            description: "Driver details have been updated successfully.",
          });
        } else {
          toast("Update Failed", {
            description:
              "Unable to update driver details. Please check the information and try again.",
          });
        }
        return;
      }

      if (!acceptedTerms) {
        toast("Terms and Conditions Not Accepted", {
          description:
            "Please accept the terms and conditions before submitting the form.",
        });
        return;
      }

      // Handle "CREATE" mode
      const result = await submitDriver(data);

      if (result.success) {
        toast("Submission Successful", {
          description:
            "Your application has been submitted successfully. We will review it shortly.",
        });
        form.reset();
        if (result.success && "driver" in result && result.driver) {
          router.push(
            `/become-a-delivery-partner/thank-you/${result.driver.id}`
          );
        }
      } else {
        toast("Submission Failed", {
          description:
            "An error occurred while submitting your application. Please try again.",
        });
      }
    } catch (error) {
      toast("Unexpected Error", {
        description:
          "An unexpected error occurred. Please try again later or contact support if the issue persists.",
      });
      console.error("Error in onSubmit:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Change Status</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Change the status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"ACCEPTED"}>Accept</SelectItem>
                  <SelectItem value={"REJECTED"}>Reject</SelectItem>
                  <SelectItem value={"REVIEWING"}>Keep in Review</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter full name"
                  {...field}
                  value={mode === "UPDATE" ? form.getValues("name") : ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter a valid email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Emergency Contact Number */}
        <FormField
          control={form.control}
          name="emergencyContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Contact </FormLabel>
              <FormDescription className="text-xs">
                Please provide a 10-digit contact number of someone who is
                responsible and can be reached in emergencies. This should not
                be the same as the primary contact number.
              </FormDescription>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter a responsive and responsible person's contact number"
                  maxLength={10}
                  pattern="\d{10}" // Ensures only valid 10-digit phone numbers
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emergencyContactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Contact Name</FormLabel>
              <FormDescription className="text-xs">
                Provide a the person&apos;s name and relation for in the
                format:&quot;John Doe - Father&quot;..
              </FormDescription>
              <FormControl>
                <Input placeholder="Enter Emergency Contact Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your complete residential address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* District */}
        <FormField
          control={form.control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <FormLabel>District</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your district" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Districts.map((districtObj) => {
                    const districtName = Object.keys(districtObj)[0];
                    return (
                      <SelectItem key={districtName} value={districtName}>
                        {districtName}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Panchayat */}
        <FormField
          control={form.control}
          name="panchayat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Panchayat</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value || ""}
                disabled={!panchayatOptions.length}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your panchayat" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {panchayatOptions.map((panchayat) => (
                    <SelectItem key={panchayat} value={panchayat}>
                      {panchayat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aadhaarCardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Aadhaar Card Number</FormLabel>
              <FormDescription className="text-xs">
                Please enter a valid 12-digit Aadhaar card number.
              </FormDescription>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your 12-digit Aadhaar number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="driversLicenseNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Driver&apos;s License Number</FormLabel>
              <FormDescription className="text-xs">
                Format: XX-XXXXXXXXXXXXX (e.g., KL-1234567890123)
              </FormDescription>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your driver's license number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rcNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle RC Number</FormLabel>
              <FormDescription className="text-xs">
                Format: XX00XX0000 (e.g., KA01AB1234)
              </FormDescription>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your vehicle's RC number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Terms and Conditions */}
        {mode === "CREATE" && (
          <FormField
            control={form.control}
            name="tncAccepted"
            render={({ field }) => {
              const { value, ...fieldWithoutValue } = field; // Destructure to exclude 'value'
              return (
                <FormItem onClick={() => setShowTermsDialog(true)}>
                  <FormLabel>
                    <div className="flex items-center gap-2">
                      {/* Checkbox */}
                      <Checkbox
                        {...fieldWithoutValue} // Spread remaining field props
                        checked={value} // Use 'value' for controlled state
                        onCheckedChange={(checked) => {
                          field.onChange(checked); // Update form field
                          if (!checked) setShowTermsDialog(true); // Show dialog when unchecked
                        }}
                      />
                      I agree to the Terms and Conditions
                    </div>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )}

        {/* Terms Dialog */}
        <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms and Conditions</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Please read and accept the terms and conditions.
            </DialogDescription>
            <TermsAndConditions showCommitment={true} />
            <DialogFooter>
              <Button
                onClick={() => {
                  setAcceptedTerms(true);
                  setShowTermsDialog(false);
                }}
              >
                I&apos;ve read and accept the terms
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          {mode === "CREATE"
            ? "Submit Registration"
            : "Update Delivery Partner Details"}
        </Button>
      </form>
    </Form>
  );
}

export default DriverForm;
