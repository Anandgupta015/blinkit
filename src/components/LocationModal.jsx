import { useEffect, useState } from "react";

const STORAGE_KEY = "blinkit_location";

function LocationModal({ open, onClose, onSave }) {
  const [area, setArea] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (open) {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setArea(parsed.area || "");
          setPincode(parsed.pincode || "");
        }
      } catch {
        // ignore
      }
    }
  }, [open]);

  if (!open) return null;

  const handleSave = () => {
    if (!area.trim() || pincode.trim().length < 6) return;
    const data = { area: area.trim(), pincode: pincode.trim() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Choose your delivery location</h2>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <p className="mb-3 text-xs text-gray-500">
          Enter your area and pincode to see accurate product availability and delivery time.
        </p>

        <div className="mb-3">
          <label className="mb-1 block text-xs font-medium text-gray-700">
            Area / Locality
          </label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500"
            placeholder="e.g. Indira Nagar, Sector 18"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-xs font-medium text-gray-700">
            Pincode
          </label>
          <input
            type="tel"
            maxLength={6}
            value={pincode}
            onChange={(e) =>
              setPincode(e.target.value.replace(/\D/g, ""))
            }
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500"
            placeholder="Enter 6-digit pincode"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={!area.trim() || pincode.length < 6}
          className="mt-1 w-full rounded-lg bg-green-500 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Save location
        </button>
      </div>
    </div>
  );
}

export default LocationModal;
