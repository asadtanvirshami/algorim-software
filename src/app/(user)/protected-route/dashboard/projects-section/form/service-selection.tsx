import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the list of available services
const services = [
  { id: "1", name: "Web Development" },
  { id: "2", name: "Mobile App Development" },
  { id: "3", name: "Blockchain Development" },
  { id: "4", name: "Smart Contract Development" },
  { id: "5", name: "Smart Agentic AI App Development" },
  { id: "6", name: "Application Security Testing" },
  { id: "7", name: "Software Development" },
  { id: "8", name: "DevOps" },
  { id: "9", name: "SEO Services" },
  { id: "10", name: "UI/UX Design" },
  { id: "11", name: "Digital Marketing" },
];

const ServiceSelection = ({ selectedServices, setSelectedServices }: any) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      // Filter services based on the search term
      setFilteredServices(
        services.filter((service) =>
          service.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setFilteredServices(services);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchTerm) {
      const service = services.find(
        (s) => s.name.toLowerCase() === searchTerm.toLowerCase()
      );
      if (service && !selectedServices.includes(service.id)) {
        setSelectedServices((prevSelected) => [...prevSelected, service.id]);
        setSearchTerm(""); // Clear the search term after adding
      }
    }
  };

  // Add or remove services from the selected list on click
  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(serviceId)
        ? prevSelected.filter((id) => id !== serviceId)
        : [...prevSelected, serviceId]
    );
    setSearchTerm("");
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="text-sm font-semibold mb-2">Select Services</h2>

      <div className="relative">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          className="w-full py-2 px-4 border border-gray-300 rounded-lg bg-card  focus:ring-2 focus:ring-blue-500"
          placeholder="Search services..."
        />

        {searchTerm && filteredServices.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-card border mt-2 rounded-lg shadow-lg z-10">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cursor-pointer px-4 py-2 hover:bg-orange-400"
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle
                    className={`w-4 h-4 text-blue-500 ${
                      selectedServices.includes(service.id) ? "block" : "hidden"
                    }`}
                  />
                  <span>{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto">
          {selectedServices.map((serviceId) => {
            const service = services.find((s) => s.id === serviceId);
            return service ? (
              <span
                key={serviceId}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full flex items-center"
              >
                {service.name}
                <button
                  onClick={() => handleServiceToggle(serviceId)}
                  className="ml-2 text-white hover:text-gray-300"
                >
                  &times;
                </button>
              </span>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
