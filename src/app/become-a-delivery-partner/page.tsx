import { DriverForm } from "@/components/DriverForm";
import { Footer } from "@/components/footer";

export default function BecomeADeliveryPartner() {
  return (
    <>
      <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="text-center row-start-1">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Become a Delivery Partner
          </h1>
          <p className="text-sm text-gray-600 mt-2 sm:text-base">
            Empower your community by joining our distribution network. Deliver
            products, earn more, and make a difference.
          </p>
        </header>
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-xl">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Partner With Us
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Fill out the form below to get started. Join a network of local
              auto drivers committed to reliable last-mile delivery.
            </p>
          </section>
          <DriverForm mode="CREATE" />
        </div>
      </main>
      <Footer />
    </>
  );
}
